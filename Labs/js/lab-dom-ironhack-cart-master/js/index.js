// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  //Step 1 //Step 2
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
 //Step 3
  const subTotal = parseInt(price) * quantity;
  //Step 4
  const subTotalId = product.querySelector(".subtotal span");
  //Step 5
  subTotalId.innerText = subTotal;

  //

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  */
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProduct = document.querySelector(".product");

  let total = 0;

  allProduct.forEach(item => total += updateSubtotal(item));

  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector("#total-value span");

  totalPrice.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll(".btn-remove");

  removeButtons.forEach(button => button.addEventListener("click", removeProduct),
  )
});
