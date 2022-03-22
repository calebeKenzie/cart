let cart = [];

function putElementInPage(arrProducts) {
  const container = document.querySelector(".container");

  for (let i = 0; i < arrProducts.length; i++) {
    const currentProduct = arrProducts[i];

    const card = document.createElement("div");
    card.innerHTML = `
      <img src=${currentProduct.imgSrc}/>
      <p>Nome: ${currentProduct.nome} </p>
      <p>Filtro: ${currentProduct.filtro} </p>
      <p>Preço: ${currentProduct.preco} </p>
      <button onclick="addProductIntoCart(${currentProduct.id})">Adicionar no carrinho</button>
    `;

    container.appendChild(card);
  }
}

putElementInPage(dados);

function addProductIntoCart(product_id) {
  // let isProductInCart = undefined;
  // for (let i = 0; i < cart.length; i++) {
  //   if (cart[i].id === product_id) {
  //     productInCart = cart[i];
  //   }
  // }
  const isProductInCart = cart.find(function(productCart){
    return productCart.id === product_id;
  })

  
  if (isProductInCart) {
    isProductInCart["quantity"] += 1;
    
  } else {
    const product = dados.find(function(prodc) {
      return prodc.id === product_id
    });
    product["quantity"] = 1;
    cart.push(product);
  }

  putElementInCart(cart);
}

function putElementInCart(arrProducts){
  const container = document.querySelector("#cart");
  container.innerHTML = ""

  for (let i = 0; i < arrProducts.length; i++){
    const currentProduct = arrProducts[i];

    const card = document.createElement("div");
    card.innerHTML = `
      <img src=${currentProduct.imgSrc}/>
      <p>Nome: ${currentProduct.nome} </p>
      <p>Filtro: ${currentProduct.filtro} </p>
      <p>Preço: ${currentProduct.preco} </p>
      <input type="number" value=${currentProduct.quantity}> </input>
      <button onclick="removeProductIntoCart(${currentProduct.id})">Remover do carrinho</button>
    `

    container.appendChild(card);
  }
}