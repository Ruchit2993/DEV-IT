if (!localStorage.getItem('isLoggedIn')) {
    window.location.href = '../index.html';
} else {
   console.log("User is logged in");
}

