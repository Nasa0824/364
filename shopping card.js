document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  const cartCount = document.getElementById('cart-count');
  const toastContainer = document.getElementById('toast-container');
  let cart = [];

  // 加入購物車邏輯
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));
      const img = button.getAttribute('data-img');

      //  檢查購物車有無該商品
      const existingItemm = cart.find(item => item.name === name);
      if (existingItemm) {
        showToast(`商品"${name}"已在購物車中，已達購買數量! `);
        return;
      }

      // 將商品加入購物車陣列
      cart.push({ name, price, img });
      updateCart();
    });
  });


  // 更新購物車畫面
  function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price;
      // 創建購物車項目(圖片/名稱/價格/刪除紐)
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
          <img src="${item.img}" alt="${item.name}" style="width:50px; height: 50px; object-fit: cover; margin-right: 10px;">            
          <span>${item.name} - $${item.price.toFixed(2)}</span>
          <button class="btn btn-sm btn-danger remove-item" data-index="${index}">&times;</button>
        `;
      cartItems.appendChild(li);
    });

    // 更新總金額
    totalPrice.textContent = `$${total.toFixed(2)}`;

    //更新購物車數量

    cartCount.textContent = cart.length;
    if (cart.length > 0) {
      cartCount.classList.remove('d-none');
    } else {
      cartCount.classList.add('d-none');
    }

    // 移除商品功能
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', () => {
        const index = parseInt(button.getAttribute('data-index'));
        cart.splice(index, 1);
        updateCart();
      });
    });
  }
  function showToast(message) {
    // 創建 Toast 元素
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white bg-warning border-0';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.innerHTML = `
         <div class="d-flex">
             <div class="toast-body">
                 <strong>提示:</strong> ${message}
             </div>
             <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
         </div>
     `;
    toastContainer.appendChild(toast);

    // 初始化 Toast
    const toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();

    setTimeout(() => {
      toastInstance.hide();
    }, 5000);
  }
});