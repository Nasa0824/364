
// 商品詳情頁：

document.addEventListener('DOMContentLoaded', () => {
  // 商品資料
  const productGroups = [
    [
      {
        img: 'img/異世界2000作品/作品一/作品一.JPG',
        title: 'N a v a j o 綠松石十字星戒',
        price: 5980,
        brief: 'T u r q u o i s e - R i n g',
        material: '·Material | 925 silver | natural turquoise',
        size: '·size | Metric circumference No.10 (公制圍10號)',
        gap: '·---',
        made: '·飾品皆手工製作，誤差值 ±0.5公分皆為正常範圍',
        wait: '·預購商品出貨約21工作天(不含假日)，建議與現貨商品分開下單*',
        more: '了解更多',
        wearImg1: './img/異世界2000作品/作品一/作品一實戴1.JPG',
        wearImg2: './img/異世界2000作品/作品一/作品一實戴2.JPG',
        wearImg3: './img/異世界2000作品/作品一/作品一實戴3.JPG',
        max:1
      },
      {
        img: './img/異世界2000作品/作品二/作品二.JPG',
        title: 'N a v a j o 蛋白石鋼印戒',
        price: 4590,
        brief: 'N a v a j o - R i n g',
        material: '·Material | 925 silver | natural opal',
        size: '·size | Metric circumference No.10 (公制圍10號)',
        gap: '·---',
        made: '·飾品皆手工製作，誤差值 ±0.5公分皆為正常範圍',
        wait: '·預購商品出貨約21工作天(不含假日)，建議與現貨商品分開下單*',
        more: '了解更多',
        wearImg1: './img/異世界2000作品/作品二/作品二實戴1.JPG',
        wearImg2: './img/異世界2000作品/作品二/作品二實戴2.JPG',
        wearImg3: './img/異世界2000作品/作品二/作品二實戴3.JPG',
        max:1
      },
      {
        img: './img/異世界2000作品/作品三/作品三.JPG',
        title: 'O p a l 蛋白石臘雕純銀戒',
        price: 4350,
        brief: 'O p al - R i n g',
        material: '·Material | 925 silver | natural opal',
        size: '·size | Metric circumference No.10 (公制圍10號)',
        gap: '·---',
        made: '·飾品皆手工製作，誤差值 ±0.5公分皆為正常範圍',
        wait: '·預購商品出貨約21工作天(不含假日)，建議與現貨商品分開下單*',
        more: '了解更多',
        wearImg1: './img/異世界2000作品/作品三/作品三實戴1.JPG',
        wearImg2: './img/異世界2000作品/作品三/作品三實戴2.JPG',
        wearImg3: './img/異世界2000作品/作品三/作品三實戴3.JPG',
        max:1
      }
    ],
    [
      {
        img: './img/異世界2000作品/作品四/作品4.jpg',
        title: '水 晶 晶 戒 指 - ',
        price: 1590,
        brief: '555',
        material: '·Material | 淡水珍珠 | 日本玻璃珠 | 日本米珠',
        size: '·size | Free',
        gap: '·---',
        made: '·飾品皆手工製作，誤差值 ±0.5公分皆為正常範圍',
        wait: '·預購商品出貨約21工作天(不含假日)，建議與現貨商品分開下單*',
        more: '了解更多',
        wearImg1: './img/異世界2000作品/作品四/作品4實戴1.jpg',
        wearImg2: './img/異世界2000作品/作品四/作品4實戴2.jpg',
        wearImg3: './img/異世界2000作品/作品四/作品4實戴3.jpg',
        max:3
      },
      {
        img: './img/異世界2000作品/作品五/作品五.jpg',
        title: '水 晶 晶 戒 指',
        price: 1490,
        brief: '999',
        material: '·Material | 淡水珍珠 | 日本玻璃珠 | 日本米珠',
        size: '·size | Free',
        gap: '·---',
        made: '·飾品皆手工製作，誤差值 ±0.5公分皆為正常範圍',
        wait: '·預購商品出貨約21工作天(不含假日)，建議與現貨商品分開下單*',
        more: '了解更多',
        wearImg1: './img/異世界2000作品/作品五/作品五.jpg',
        wearImg2: './img/異世界2000作品/作品五/作品五實戴1.jpg',
        wearImg3: './img/異世界2000作品/作品五/作品五實戴2.jpg',
        max:3
      },
      {
        img: './img/異世界2000作品/作品六/作品六.jpg',
        title: '泡 泡 系 列-耳針款',
        price: 1290,
        brief: '100',
        material: '·Material | 925 silver | natural turquoise',
        size: '·size | Free',
        gap: '·---',
        made: '·飾品皆手工製作，誤差值 ±0.5公分皆為正常範圍',
        wait: '·預購商品出貨約21工作天(不含假日)，建議與現貨商品分開下單*',
        more: '了解更多',
        wearImg1: './img/異世界2000作品/作品六/作品六實戴1.jpg',
        wearImg2: './img/異世界2000作品/作品六/作品六實戴2.jpg',
        wearImg3: './img/異世界2000作品/作品六/作品六實戴3.jpg',
        max:1
      },
    ],
    [
      {
        img: './img/異世界2000作品/作品七/作品七.jpg',
        title: '水 晶 晶 戒 指',
        price: 1490,
        brief: '8787',
        material: '·Material | 淡水珍珠 | 日本玻璃珠 | 日本米珠',
        size: '·size | Free',
        gap: '·---',
        made: '·飾品皆手工製作，誤差值 ±0.5公分皆為正常範圍',
        wait: '·預購商品出貨約21工作天(不含假日)，建議與現貨商品分開下單*',
        more: '了解更多',
        wearImg1: './img/異世界2000作品/作品七/作品七.jpg',
        wearImg2: './img/異世界2000作品/作品七/作品七實戴1.jpg',
        wearImg3: './img/異世界2000作品/作品七/作品七實戴2.jpg',
        max:3
      },
      {
        img: './img/異世界2000作品/作品八/作品八.JPG',
        title: '水 晶 晶 戒 指',
        price: 1490,
        brief: '857857',
        material: '·Material | 淡水珍珠 | 日本玻璃珠 | 日本米珠',
        size: '·size | Free',
        gap: '·---',
        made: '·飾品皆手工製作，誤差值 ±0.5公分皆為正常範圍',
        wait: '·預購商品出貨約21工作天(不含假日)，建議與現貨商品分開下單*',
        more: '了解更多',
        wearImg1: './img/異世界2000作品/作品八/作品八.JPG',
        wearImg2: './img/異世界2000作品/作品八/作品八實戴1.jpg',
        wearImg3: './img/異世界2000作品/作品八/作品八實戴2.jpg',
      },
      {
        img: './img/異世界2000作品/作品九/作品九.JPG',
        title: '水 晶 晶 耳 環 - 耳針式',
        price: 1590,
        brief: '888',
        material: '·Material | 淡水珍珠 | 日本玻璃珠 | 日本米珠',
        size: '·size | Free',
        gap: '·---',
        made: '·飾品皆手工製作，誤差值 ±0.5公分皆為正常範圍',
        wait: '·預購商品出貨約21工作天(不含假日)，建議與現貨商品分開下單*',
        more: '了解更多',
        wearImg1: './img/異世界2000作品/作品九/作品九.jpg',
        wearImg2: './img/異世界2000作品/作品九/作品九實戴1.jpg',
        wearImg3: './img/異世界2000作品/作品九/作品九實戴2.jpg',
        max:3
      },
    ]
  ];




  // 確認 template 和 container 是否存在
  const template = document.getElementById('product-template');


  for (let i = 0; i < 3; i++) {
    const container = document.getElementById(`product-container${i}`);
    if (!container) continue;

    // 簡單生成商品卡片的函數

    productGroups[i].slice(0, 3).forEach(product => {
      const clone = template.content.cloneNode(true);


      clone.querySelector('.card-img-top').src = product.img;
      clone.querySelector('.card-title').textContent = product.title;
      clone.querySelector('.card-text').textContent = `$${product.price}`;
      clone.querySelector('.add-to-cart').dataset.name = product.title;
      clone.querySelector('.add-to-cart').dataset.price = product.price;
      clone.querySelector('.add-to-cart').dataset.img = product.img;
      clone.querySelector('.add-to-cart').dataset.max = product.max;
      clone.querySelector('.add-to-cart').textContent = '加入購物車';

      
      const link = clone.querySelector('.stretched-link');
      const queryParams = new URLSearchParams(product).toString(); // 將商品資料轉換為查詢字串
      link.href = `goodspage.html?${queryParams}`; // 將商品詳情頁的 URL 設為 <a> 標籤的 href

      container.appendChild(clone);
    });
  }
});