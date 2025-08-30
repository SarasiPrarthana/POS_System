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

function getCart() {
            return JSON.parse(localStorage.getItem("cart")) || {};
        }

        function saveCart(cart) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }

        function removeItem(id) {
            const cart = getCart();
            if (cart[id]) {
                delete cart[id];
                saveCart(cart);
                renderCart();
            }
        }

        function renderCart() {
            const cart = getCart();
            const cartContainer = document.getElementById("cart-container");
            const totalDisplay = document.getElementById("total-amount");
            cartContainer.innerHTML = "";
            let total = 0;

            const keys = Object.keys(cart);
            if (keys.length === 0) {
                cartContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
                totalDisplay.textContent = '0';
                return;
            }

            keys.forEach(id => {
                const item = cart[id];
                total += item.price * item.qty;

                const div = document.createElement("div");
                div.className = "cart-item";
                div.innerHTML = `
          <div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">Rs. ${item.price} × ${item.qty}</div>
          </div>
          <div>
            Rs. ${item.price * item.qty}
            <button class="remove-btn" data-id="${id}">Remove</button>
          </div>
        `;

                cartContainer.appendChild(div);

                // Add event listener for remove button
                div.querySelector(".remove-btn").addEventListener("click", () => {
                    removeItem(id);
                });
            });

            totalDisplay.textContent = total;
        }

        renderCart();