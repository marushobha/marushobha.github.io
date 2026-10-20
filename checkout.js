
import { auth, db } from "./firebase-config.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const form = document.getElementById("checkoutForm");
const message = document.getElementById("orderMessage");

const productNames = {
  "thar-ki-phoolwari": "Thar Ki Phoolwari",
  "lotus-cuff-shirt": "Lotus Cuff Shirt",
  "mustard-muse-shirt": "Mustard Muse Shirt",
  "bow-palazzo-pants": "Bow Palazzo Pants",
  "chashni-set": "Chashni Set",
  "dune-belle-corset": "Dune Belle Corset"
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const user = auth.currentUser;

  if (!user) {
    message.textContent = "Please sign in before ordering.";
    return;
  }

  const productId = document.getElementById("product").value;
  const quantity = Number(document.getElementById("quantity").value);
  const pincode = document.getElementById("pincode").value.trim();

  if (!productNames[productId] ||
      !Number.isInteger(quantity) ||
      quantity < 1 || quantity > 5 ||
      !/^\d{6}$/.test(pincode)) {
    message.textContent = "Please check your order details.";
    return;
  }

  const order = {
    userId: user.uid,
    productId,
    productName: productNames[productId],
    size: document.getElementById("size").value,
    quantity,
    customer: {
      name: document.getElementById("name").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      address: document.getElementById("address").value.trim(),
      city: document.getElementById("city").value.trim(),
      state: document.getElementById("state").value.trim(),
      pincode
    },
    paymentStatus: "not_integrated",
    orderStatus: "pending_confirmation",
    shippingStatus: "not_created",
    createdAt: serverTimestamp()
  };

  try {
    message.textContent = "Submitting your order...";

    const orderRef = await addDoc(
      collection(db, "orders"),
      order
    );

    message.textContent =
      `Order request received. Reference: ${orderRef.id}`;
    form.reset();
  } catch (error) {
    console.error("Order submission failed:", error);
    message.textContent =
      "Unable to submit your order. Please try again.";
  }
});
