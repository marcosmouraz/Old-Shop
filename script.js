function changeImage(newImage) {
  const mainImage = document.querySelector(".main-image");
  mainImage.src = newImage;
}


let cartCount = 0;


function updateCartCount() {
  cartCount=Number(document.getElementById("quantity").value) + cartCount;
  document.getElementById("cartCount").textContent = cartCount;

  alert("Produto adicionado com sucesso ao carrinho!");
}


document
  .getElementById("addToCartBtn")
  .addEventListener("click", updateCartCount);
