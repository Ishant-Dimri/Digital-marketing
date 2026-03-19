let cart = [];

function addToCart(productName) {
  cart.push(productName);
  alert(productName + " added to cart!");
  console.log(cart);
}

function goToShop() {
  window.location.href = "shop.html";
}

function submitForm(event) {
  event.preventDefault();
  alert("Message sent successfully!");
}