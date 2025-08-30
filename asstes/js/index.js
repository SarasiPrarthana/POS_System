function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || {};
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function orderNow(btn) {
  const card = btn.closest('.product-card');
  const id = card.dataset.id;
  const name = card.dataset.name;
  const price = parseInt(card.dataset.price);

  const cart = getCart();
  if (cart[id]) {
    cart[id].qty += 1;
  } else {
    cart[id] = { name, price, qty: 1 };
  }

  saveCart(cart);
  alert(`${name} added to cart!`);
}
