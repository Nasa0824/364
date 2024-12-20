
// 商品詳情頁：

//  // 解析 URL 的查詢字串
//         const urlParams = new URLSearchParams(window.location.search);
//         const product = Object.fromEntries(urlParams.entries());
//         const productTitle = urlParams.get('title');

// 商品卡片頁：
// （*取得<a>標籤那四行）

// products.forEach((item) => {
//     const clone = productTemplate.content.cloneNode(true);

//     clone.querySelector('#productImg').src = item.img;
//     clone.querySelector('#productTitle').textContent = item.title;
//     clone.querySelector('#productPrice').textContent = item.price;
//     clone.querySelector('#productBrief').textContent = item.brief;

//     // 取得 <a> 標籤，並設置 href 屬性
//     const link = clone.querySelector('a');
//     const url = `product-detail.html?title=${encodeURIComponent(item.title)}`;
//     const queryParams = new URLSearchParams(item).toString(); // 將商品資料轉換為查詢字串
//     link.href = url + '?' + queryParams; // 將商品詳情頁的 URL 設為 <a> 標籤的 href


//     productContainer.appendChild(clone);

// })





document.addEventListener('DOMContentLoaded', () => {
  // 商品資料
  const productGroups = [
    [
      {
        img: 'img/異世界2000作品/作品一/作品一.JPG',
        title: 'N a v a j o 綠松石十字星戒',
        price: 3980,
        brief: 'T u r q u o i s e - R i n g',
        wearImg1: './img/異世界2000作品/作品一/作品一實戴1.JPG',
        wearImg2: './img/異世界2000作品/作品一/作品一實戴2.JPG',
        wearImg3: './img/異世界2000作品/作品一/作品一實戴3.JPG',

      },
      {
        img: './img/異世界2000作品/作品二/作品二.JPG',
        title: 'N a v a j o 蛋白石鋼印戒',
        price: 3580,
        brief: '555',
        wearImg1: './img/異世界2000作品/作品二/作品二實戴1.JPG',
        wearImg2: './img/異世界2000作品/作品二/作品二實戴2.JPG',
        wearImg3: './img/異世界2000作品/作品二/作品二實戴3.JPG',

      },
      {
        img: './img/異世界2000作品/作品三/作品三.JPG',
        title: 'O p a l 蛋白石臘雕純銀戒',
        price: 3300,
        brief: '666',
        wearImg1: './img/異世界2000作品/作品三/作品三實戴1.JPG',
        wearImg2: './img/異世界2000作品/作品三/作品三實戴2.JPG',
        wearImg3: './img/異世界2000作品/作品三/作品三實戴3.JPG',

      }
    ],
    [
      {
        img: './img/異世界2000作品/作品四/作品4.jpg',
        title: '水晶晶戒',
        price: 1490,
        brief: '777',
        wearImg1: './img/異世界2000作品/作品四/作品4實戴1.jpg',
        wearImg2: './img/異世界2000作品/作品四/作品4實戴2.jpg',
        wearImg3: './img/異世界2000作品/作品四/作品4實戴3.jpg',
      },
      {
        img: './img/異世界2000作品/作品五/作品五.jpg',
        title: '綠 松 石 戒 指',
        price: 3980,
        brief: '999',
        wearImg1: './img/異世界2000作品/作品五/作品五實戴1.jpg',
        wearImg2: './img/異世界2000作品/作品五/作品五實戴2.jpg',
      },
      {
        img: './img/異世界2000作品/作品六/作品六.jpg',
        title: '綠 松 石 戒 指',
        price: 3980,
        brief: '100',
        wearImg1: './img/異世界2000作品/作品六/作品六實戴1.jpg',
        wearImg2: './img/異世界2000作品/作品六/作品六實戴2.jpg',
        wearImg3: './img/異世界2000作品/作品六/作品六實戴3.jpg',
      },
    ],
    [
      {
        img: './img/異世界2000作品/作品七/作品七.jpg',
        title: '客製化飾品',
        price: 3580,
        brief: '8787',
        wearImg1: './img/異世界2000作品/作品七/作品七實戴1.jpg',
        wearImg2: './img/異世界2000作品/作品七/作品七實戴2.jpg',
      },
      {
        img: './img/異世界2000作品/作品八/作品八.JPG',
        title: '綠 松 石 戒 指',
        price: 3980,
        brief: '857857',
        wearImg1: './img/異世界2000作品/作品八/作品八實戴1.jpg',
        wearImg2: './img/異世界2000作品/作品八/作品八實戴2.jpg',
      },
      {
        img: './img/異世界2000作品/作品四/作品4.JPG',
        title: '客製化飾品',
        price: 3580,
        brief: '888',
      },
    ]
  ];




  // 確認 template 和 container 是否存在
  const template = document.getElementById('product-template');
  const container = document.getElementById(`product-container${i}`);
  
    for (let i = 0; i < 3; i++) { };


  

  // 簡單生成商品卡片的函數
  productGroups.forEach((group) => {
    group.forEach(product => {
      const clone = template.content.cloneNode(true);
      const imgElement = clone.querySelector('.card-img-top');
      // 設置商品資料
      imgElement.onload = () => {
        console.log('圖片加載成功:', product.img);
      };


      clone.querySelector('.card-img-top').src = product.img;
      clone.querySelector('.card-title').textContent = product.title;
      clone.querySelector('.card-text').textContent = `$${product.price}`;
      clone.querySelector('.add-to-cart').dataset.name = product.title;
      clone.querySelector('.add-to-cart').dataset.price = product.price;
      clone.querySelector('.add-to-cart').dataset.img = product.img;
      clone.querySelector('.add-to-cart').textContent = '加入購物車';
      const link = clone.querySelector('.stretched-link');
      const queryParams = new URLSearchParams(product).toString(); // 將商品資料轉換為查詢字串
      link.href = `測試.html?${queryParams}`; // 將商品詳情頁的 URL 設為 <a> 標籤的 href

      container.appendChild(clone);
    });

  });
});
// 遍歷商品資料並生成卡片
// productGroups.forEach((group, index) => {
//   mycards(group, `product-container${index}`);
// });


// 0000000000000000000000000 購物車的 000000000000000000000000000000000000


document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  const cartCount = document.getElementById('cart-count');
  let cart = [];

  // 加入購物車邏輯
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));
      const img = button.getAttribute('data-img');
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
});
