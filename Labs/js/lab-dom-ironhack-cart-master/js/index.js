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
  subTotal = subTotalId.innerText;

  return subTotal;
  
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
 
  const allProduct = document.querySelector(".product");

  let total = 0;

  allProduct.forEach(item => total += updateSubtotal(item));

  // ITERATION 3
 
  const totalPrice = document.querySelector("#total-value span");

  totalPrice.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
 
  // Usamos el parentNode para apuntar al ABUELO de row que contiene el evento especifico que estamos apuntando casualmente el abuelo de este evento es el elemento TR con la clase product.
  const row = target.parentNode.parentNode;
  console.log(row);

  // Usamos el parentNode en la variable row para aprovechar los selectores de manipulacion del DOM para eliminar el hijo de parent.
  const parent = row.parentNode;
  console.log(parent);

  // llamamos a parent con el metodo removeChild y le pasamos la variable row dentro del metodo.
  parent.removeChild(row);

  // calculateAll() - vuelve a calcular los numeros para tener un resultado correcto una vez borremos el producto.
  calculateAll();


}

// ITERATION 5

function createProduct() {
  // Parte 1
  const createRow = document.querySelector('.create-product');
  let newProdNameInput = createRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  // Parte 2
  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
        <td class="name">
        <span>${newProdNameValue}</span>
      </td>
      <td class="price">$<span>${newProdPriceValue}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
  `;

  // Parte 3
  // Agarrr el padre de los rows mediante un poco de DOM
  const parent = document.querySelector('#cart tbody');

  // Adjuntar la variable newTableRow dentro de parent :)
  parent.appendChild(newTableRow);

  // Recibir logica de botones
  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  // Limpiar los inputs una vez el usaurio haya creado un producto
  newProdNameInput.value = '';
  newProdPriceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // DOM para borrar productos
  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }

  // DOM para crear productos
  const createBtn = document.querySelector('#create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
});