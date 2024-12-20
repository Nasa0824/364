document.addEventListener('DOMContentLoaded', () =>{
const params = new URLSearchParams(window.location.search);

// 取得商品資料
const productImg = params.get('img');
const productTitle = params.get('title');
const productPrice = params.get("price");
const productBrief = params.get('brief');
const wearImg1 = params.get('wearImg1');
const wearImg2 = params.get('wearImg2');
const wearImg3 = params.get('wearImg3');

// document.getElementById('goodspicture').src = productImg;
// document.getElementById('product-title').textContent = productTitle;
// document.getElementById('product-price').textContent = `NT$ ${productPrice}`;
// document.getElementById('product-subtitle').textContent = productBrief;
// document.getElementById('wear1') || '';
// document.getElementById('wear2') || '';
// document.getElementById('wear3') || '';
if (productImg) document.getElementById('goodspicture').src = productImg;
if (productTitle) document.getElementById('product-title').textContent = productTitle;
if (productPrice) document.getElementById('product-price').textContent = `NT$ ${productPrice}`;
if (productBrief) document.getElementById('product-subtitle').textContent = productBrief;
if (wearImg1) document.getElementById('wear1').src = wearImg1;
if (wearImg2) document.getElementById('wear2').src = wearImg2;
if (wearImg3) document.getElementById('wear3').src = wearImg3;
});