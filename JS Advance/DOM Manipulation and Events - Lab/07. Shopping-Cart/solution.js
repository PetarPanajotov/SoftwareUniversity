function solve() {
   let priceCounter = 0;
   let products = Array.from(document.getElementsByClassName('product'))
   let productObj = {}
   let textarea = document.getElementsByTagName('textarea')[0];
   for (let product of products) {
      let button = product.querySelector('.add-product')
      button.addEventListener('click', function(event) {
         let productName = product.querySelector('.product-details .product-title').textContent;
         let price = Number(product.querySelector('.product-line-price').textContent)
         productObj[productName] = price;
         priceCounter += price;
         textarea.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`
      })
   }
   let checkout = document.querySelector('.checkout')
   checkout.addEventListener('click', function() {
      let products = Object.keys(productObj)
      text = `You bought ${products.join(", ")} for ${priceCounter.toFixed(2)}.`
      textarea.value += text
      let buttons = Array.from(document.getElementsByTagName('button'))
      for(let button of buttons) {
         button.disabled = true;
      }
   })
}