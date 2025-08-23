document.addEventListener('DOMContentLoaded', function () {
  // Load header and footer
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

  // update Badges logic on header
  function updateBadges() {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Favorites badge
    const heartLink = document.querySelector(".nav-link .bi-heart")?.parentNode;
    if (!heartLink) return;
    let favoriteBadge = heartLink.querySelector(".badge");
    if (!favoriteBadge) {
      favoriteBadge = document.createElement("span");
      favoriteBadge.className = "badge bg-danger rounded-pill position-absolute";
      favoriteBadge.style = "top: -5px; right: -5px;";
      heartLink.appendChild(favoriteBadge);
    }
    favoriteBadge.innerText = favorites.length > 0 ? favorites.length : "";

    // Cart badge
    const cartLink = document.querySelector(".nav-link .bi-cart3")?.parentNode;
    if (!cartLink) return;
    let cartBadge = cartLink.querySelector(".badge");
    if (!cartBadge) {
      cartBadge = document.createElement("span");
      cartBadge.className = "badge bg-danger rounded-pill position-absolute";
      cartBadge.style = "top: -5px; right: -5px;";
      cartLink.appendChild(cartBadge);
    }
    cartBadge.innerText = cart.length > 0 ? cart.length : "";
  }



  // Populate form with saved data from localStorage.loginResponse
  const loginResponse = JSON.parse(localStorage.getItem('loginResponse') || '{}');
  const profile = loginResponse.profile || {};
  if (profile) {
    document.getElementById('first-name').value = profile.firstName || '';
    document.getElementById('last-name').value = profile.lastName || '';
    document.getElementById('email').value = loginResponse.email || profile.email || '';
    document.getElementById('mobile-number').value = profile.phone || '';
    document.getElementById('address').value = profile.address?.address || '';
    document.getElementById('country').value = profile.address?.country || '';
    document.getElementById('state').value = profile.address?.state || '';
    document.getElementById('city').value = profile.address?.city || '';
    if (profile.gender) {
      const genderRadio = document.querySelector(`input[name="gender"][value="${profile.gender}"]`);
      if (genderRadio) genderRadio.checked = true;
    }
    // If you want to populate interest checkboxes, add similar logic here
  }

  const form = document.getElementById('profile-form');
  const saveBtn = document.getElementById('save-btn');
  const cancelBtn = document.getElementById('cancel-btn');

  const requiredFields = [
    document.getElementById('first-name'),
    document.getElementById('last-name'),
    document.getElementById('email'),
    document.getElementById('mobile-number'),
    document.getElementById('address'),
    document.getElementById('country'),
    document.getElementById('state'),
    document.getElementById('city')
  ];

  const genderGroup = form.querySelectorAll('input[name="gender"]');
  const interestGroup = form.querySelectorAll('input[name="interest"]');

  // Validation function: only use .is-invalid
  function validateInput(input, regex = null, message = "This field is required") {
    const errorEl = input.nextElementSibling;
    if (!input.value.trim()) {
      input.classList.add('is-invalid');
      if (errorEl) {
        errorEl.style.display = 'block';
        errorEl.innerText = message;
      }
      return false;
    }
    if (regex && !regex.test(input.value.trim())) {
      input.classList.add('is-invalid');
      if (errorEl) {
        errorEl.style.display = 'block';
        errorEl.innerText = message;
      }
      return false;
    }
    input.classList.remove('is-invalid');
    if (errorEl) errorEl.style.display = 'none';
    return true;
  }

  // Validation for radio groups (gender and interest)
  function validateRadioGroup(group) {
    const checked = Array.from(group).some(input => input.checked);
    if (!checked) {
      group.forEach(input => input.classList.add('is-invalid'));
      return false;
    }
    group.forEach(input => input.classList.remove('is-invalid'));
    return true;
  }

  // Validation for select inputs
  function validateSelect(select, message = "Please make a selection") {
    const errorEl = select.nextElementSibling;
    if (!select.value) {
      select.classList.add('is-invalid');
      if (errorEl) {
        errorEl.style.display = 'block';
        errorEl.innerText = message;
      }
      return false;
    }
    select.classList.remove('is-invalid');
    if (errorEl) errorEl.style.display = 'none';
    return true;
  }

  saveBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let isValid = true;
    const inputsToValidate = [
      { el: document.getElementById('first-name'), regex: null, msg: "Please enter your first name" },
      { el: document.getElementById('last-name'), regex: null, msg: "Please enter your last name" },
      { el: document.getElementById('email'), regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg: "Please enter a valid email" },
      { el: document.getElementById('mobile-number'), regex: /^\d{10,}$/, msg: "Please enter a valid mobile number (at least 10 digits)" },
      { el: document.getElementById('address'), regex: null, msg: "Please enter your address" },
      { el: document.getElementById('country'), select: true, msg: "Please select a country" },
      { el: document.getElementById('state'), select: true, msg: "Please select a state" },
      { el: document.getElementById('city'), select: true, msg: "Please select a city" }
    ];

    // Validate and toggle borders
    inputsToValidate.forEach(({ el, regex, msg, select }) => {
      const errorEl = el.nextElementSibling;
      let valid;
      if (select) {
        valid = el.value.trim() !== "";
      } else {
        valid = el.value.trim() !== "" && (!regex || regex.test(el.value.trim()));
      }

      if (valid) {
        el.classList.remove('border-danger');
        el.classList.add('border-success');
        if (errorEl) errorEl.style.display = 'none';
      } else {
        isValid = false;
        el.classList.remove('border-success');
        el.classList.add('border-danger');
        if (errorEl) {
          errorEl.style.display = 'block';
          errorEl.innerText = msg;
        }
      }
    });

    // Gender validation
    const genderChecked = Array.from(genderGroup).some(input => input.checked);
    if (genderChecked) {
      genderGroup.forEach(input => input.classList.remove('border-danger'));
    } else {
      isValid = false;
      genderGroup.forEach(input => input.classList.add('border-danger'));
    }

    // Interest validation
    const interestChecked = Array.from(interestGroup).some(input => input.checked);
    if (interestChecked) {
      interestGroup.forEach(input => input.classList.remove('border-danger'));
    } else {
      isValid = false;
      interestGroup.forEach(input => input.classList.add('border-danger'));
    }

    // Password validation if applicable
    const newPassword = document.getElementById('new-password');
    const confirmPassword = document.getElementById('confirm-password');
    if (newPassword.value || confirmPassword.value) {
      if (newPassword.value.length < 8) {
        isValid = false;
        newPassword.classList.add('border-danger');
        newPassword.classList.remove('border-success');
      } else {
        newPassword.classList.remove('border-danger');
        newPassword.classList.add('border-success');
      }
      if (newPassword.value !== confirmPassword.value) {
        isValid = false;
        confirmPassword.classList.add('border-danger');
        confirmPassword.classList.remove('border-success');
      } else {
        confirmPassword.classList.remove('border-danger');
        confirmPassword.classList.add('border-success');
      }
    } else {
      newPassword.classList.remove('border-danger', 'border-success');
      confirmPassword.classList.remove('border-danger', 'border-success');
    }
  });


  cancelBtn.addEventListener('click', function () {
    window.location.href = '../components/test-2.html';
  });

  // Real-time validation: remove red error on input change
  form.addEventListener('input', function (e) {
    const input = e.target;
    if (['first-name', 'last-name', 'address', 'country', 'state', 'city'].includes(input.id) && input.value.trim()) {
      input.classList.remove('is-invalid');
    }
    if (input.id === 'mobile-number' && /^\d{10,}$/.test(input.value)) {
      input.classList.remove('is-invalid');
    }
    if (input.id === 'email' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      input.classList.remove('is-invalid');
    }
  });

  // Real-time gender removal of error
  genderGroup.forEach(input => {
    input.addEventListener('change', () => {
      if (form.querySelector('input[name="gender"]:checked')) {
        genderGroup.forEach(i => i.classList.remove('is-invalid'));
      }
    });
  });

  // Real-time interest removal of error
  interestGroup.forEach(input => {
    input.addEventListener('change', () => {
      if (form.querySelector('input[name="interest"]:checked')) {
        interestGroup.forEach(i => i.classList.remove('is-invalid'));
      }
    });
  });

  // Password fields real-time error removal
  ['new-password', 'confirm-password'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      const newPass = document.getElementById('new-password').value;
      const confirmPass = document.getElementById('confirm-password').value;
      if (newPass.length >= 8) {
        document.getElementById('new-password').classList.remove('is-invalid');
      }
      if (newPass === confirmPass) {
        document.getElementById('confirm-password').classList.remove('is-invalid');
      }
    });
  });
});
function logoutHandler() {
  window.location.href = '../index.html';
  console.log("first")
  localStorage.clear();
}

function handleProfile() {
  window.location.href = '../components/account.html';
}   