document.addEventListener('DOMContentLoaded', () =>{
const params = new URLSearchParams(window.location.search);

// 取得商品資料
const productImg = params.get('img');
const productTitle = params.get('title');
const productPrice = params.get("price");
const productBrief = params.get('brief');
const productmaterial = params.get('material'); 
const productsize = params.get('size'); 
const productgap = params.get('gap'); 
const productmade = params.get('made'); 
const productwait = params.get('wait'); 
const productmore = params.get('more'); 
const wearImg1 = params.get('wearImg1');
const wearImg2 = params.get('wearImg2');
const wearImg3 = params.get('wearImg3');

if (productImg) document.getElementById('goodspicture').src = productImg;
if (productTitle) document.getElementById('product-title').textContent = productTitle;
if (productPrice) document.getElementById('product-price').textContent = `NT$ ${productPrice}`;
if (productBrief) document.getElementById('product-subtitle').textContent = productBrief;
if (wearImg1) document.getElementById('wear1').src = wearImg1;
if (wearImg2) document.getElementById('wear2').src = wearImg2;
if (wearImg3) document.getElementById('wear3').src = wearImg3;
if (productmaterial) document.getElementById('product-material').textContent = productmaterial;
if (productsize) document.getElementById('product-size').textContent = productsize;
if (productgap) document.getElementById('product-gap').textContent = productgap;
if (productmade) document.getElementById('product-made').textContent = productmade;
if (productwait) document.getElementById('product-wait').textContent = productwait;
if (productmore) document.getElementById('product-more').textContent = productmore;
});