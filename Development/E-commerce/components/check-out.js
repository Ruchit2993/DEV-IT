// ================== HEADER & FOOTER ==================
document.addEventListener("DOMContentLoaded", function () {
    // Header fetch
    fetch("headerNew.html")
        .then((response) => {
            if (!response.ok)
                throw new Error(`Failed to fetch headerNew.html: ${response.statusText}`);
            return response.text();
        })
        .then((data) => {
            document.getElementById("headerNew-placeholder").innerHTML = data;
            updateBadges();
        })
        .catch((error) => console.error("Error fetching header:", error.message));

    // Footer fetch
    fetch("footer.html")
        .then((response) => {
            if (!response.ok)
                throw new Error(`Failed to fetch footer.html: ${response.statusText}`);
            return response.text();
        })
        .then((data) => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error fetching footer:", error.message));

    // Populate cart/order summary
    populateOrderSummary();
});

// Badges of the header
function updateBadges() {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Favorites badge
    const heartLink = document.querySelector(".nav-link .bi-heart").parentNode;
    let favoriteBadge = heartLink.querySelector(".badge");
    if (!favoriteBadge) {
        favoriteBadge = document.createElement("span");
        favoriteBadge.className =
            "badge bg-danger rounded-pill position-absolute";
        favoriteBadge.style = "top: -5px; right: -5px;";
        heartLink.appendChild(favoriteBadge);
    }
    favoriteBadge.innerText = favorites.length > 0 ? favorites.length : "";

    // Cart badge
    const cartLink = document.querySelector(".nav-link .bi-cart3").parentNode;
    let cartBadge = cartLink.querySelector(".badge");
    if (!cartBadge) {
        cartBadge = document.createElement("span");
        cartBadge.className = "badge bg-danger rounded-pill position-absolute";
        cartBadge.style = "top: -5px; right: -5px;";
        cartLink.appendChild(cartBadge);
    }
    cartBadge.innerText = cart.length > 0 ? cart.length : "";
}

// load produts form the cart
function loadProducts() {
    return new Promise((resolve, reject) => {
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
            resolve(JSON.parse(storedProducts));
        } else {
            fetch("products.json")
                .then((response) => {
                    if (!response.ok)
                        throw new Error(
                            `Failed to fetch products.json: ${response.statusText}`
                        );
                    return response.json();
                })
                .then((data) => {
                    localStorage.setItem("products", JSON.stringify(data));
                    resolve(data);
                })
                .catch((error) => reject(error));
        }
    });
}

// populate Order Summary for getting the cart total and other things
function populateOrderSummary() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "{}");
    loadProducts().then((products) => {
        const orderSummary = document.getElementById("order-summary");
        orderSummary.innerHTML = "";
        let subtotal = 0;

        cart.forEach((id) => {
            const product = products.find((p) => p.id === id);
            if (product) {
                const quantity = cartItems[id] || 1;
                const itemSubtotal = product.price * quantity;
                subtotal += itemSubtotal;
                const summaryItem = `
          <div class="d-flex align-items-center mb-2">
              <img src="${product.image}" alt="${product.name}" class="mr-2 img-fluid" style="width: 50px;">
              <span>${product.name}</span>
              <span class="ms-auto">$${itemSubtotal}</span>
          </div>
        `;
                orderSummary.innerHTML += summaryItem;
            }
        });

        const cartTotal = parseFloat(localStorage.getItem("cartTotal") || subtotal);
        const discountApplied = subtotal !== cartTotal;

        if (discountApplied) {
            const discount = subtotal - cartTotal;
            document.getElementById("discount-row").style.display = "flex";
            document.getElementById(
                "discount-amount"
            ).innerText = `$${discount.toFixed(0)}`;
            document.getElementById("subtotal").innerText = `$${subtotal}`;
            document.getElementById("total").innerText = `$${cartTotal}`;
            document.getElementById("coupon-section").style.display = "none";
        } else {
            document.getElementById("subtotal").innerText = `$${subtotal}`;
            document.getElementById("total").innerText = `$${subtotal}`;
            document.getElementById("discount-row").style.display = "none";
            document.getElementById("coupon-section").style.display = "block";
        }
    });
}

// apply coupon logic
document.getElementById("apply-coupon").addEventListener("click", function () {
    const couponCodeInput = document.getElementById("coupon-code").value;
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse") || "{}");
    const firstName = loginResponse.profile
        ? loginResponse.profile.firstName.slice(0, 4).toUpperCase()
        : "";

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    const financialYear =
        currentMonth >= 4
            ? `${currentYear.toString().slice(-2)}${(currentYear + 1)
                .toString()
                .slice(-2)}`
            : `${(currentYear - 1).toString().slice(-2)}${currentYear
                .toString()
                .slice(-2)}`;
    const monthAbbr = now.toLocaleString("default", { month: "short" }).toUpperCase();

    const generatedCoupon = `${firstName}DEVIT${financialYear}${monthAbbr}`;

    if (couponCodeInput === generatedCoupon) {
        const subtotal = parseFloat(
            document.getElementById("subtotal").innerText.replace("$", "")
        );
        const discount = subtotal * 0.3;
        const total = subtotal - discount;

        document.getElementById("discount-row").style.display = "flex";
        document.getElementById("discount-amount").innerText = `$${discount.toFixed(0)}`;
        document.getElementById("total").innerText = `$${total.toFixed(0)}`;
        localStorage.setItem("cartTotal", total.toFixed(0));
        document.getElementById("coupon-section").style.display = "none";
        document.getElementById("coupon-code").style.border = "2px solid green";
    } else {
        document.getElementById("coupon-code").style.border = "2px solid red";
    }
});

// input validation
function validateInput(input, regex = null, message = "This field is required", applyValid = false) {
    const errorEl = input.nextElementSibling; // next .error-message
    if (!input.value.trim()) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        if (errorEl) {
            errorEl.style.display = "block";
            errorEl.innerText = message;
        }
        return false;
    }
    if (regex && !regex.test(input.value.trim())) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        if (errorEl) {
            errorEl.style.display = "block";
            errorEl.innerText = message;
        }
        return false;
    }
    // Only apply green border if applyValid === true (on submit)
    if (applyValid) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    } else {
        input.classList.remove("is-valid");
        input.classList.remove("is-invalid");
    }
    if (errorEl) errorEl.style.display = "none";
    return true;
}

// Live validation for email and phone Number
document.getElementById("billing-form").addEventListener("input", function (e) {
    const input = e.target;
    if (input.id === "phone-number") {
        validateInput(input, /^\d{10,}$/, "Enter valid phone (10+ digits)");
    } else if (input.id === "email-address") {
        validateInput(input, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email");
    } else {
        validateInput(input);
    }
});

// Place order click Event for validation 
document.getElementById("place-order").addEventListener("click", function () {
    const firstName = document.getElementById("first-name");
    const company = document.getElementById("company-name");
    const street = document.getElementById("street-address");
    const apartment = document.getElementById("apartment");
    const town = document.getElementById("town-city");
    const phone = document.getElementById("phone-number");
    const email = document.getElementById("email-address");

    const validations = [
        validateInput(firstName, null, "First name is required", true),
        validateInput(company, null, "Company name is required", true),
        validateInput(street, null, "Street is required", true),
        validateInput(apartment, null, "Apartment is required", true),
        validateInput(town, null, "Town/City is required", true),
        validateInput(phone, /^\d{10,}$/, "Enter valid phone (10+ digits)", true),
        validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email", true),
    ];

    const isFormValid = validations.every(Boolean);

    if (isFormValid) {
        const billingDetails = {
            firstName: firstName.value.trim(),
            companyName: company.value.trim(),
            streetAddress: street.value.trim(),
            apartment: apartment.value.trim(),
            townCity: town.value.trim(),
            phoneNumber: phone.value.trim(),
            emailAddress: email.value.trim(),
            saveInfo: document.getElementById("saveInfo").checked,
        };
        localStorage.setItem("billingDetails", JSON.stringify(billingDetails));
    }
});

function logoutHandler() {
  window.location.href = '../index.html';
  console.log("first")
  localStorage.clear();
}

function handleProfile() {
  window.location.href = '../components/account.html';
}   