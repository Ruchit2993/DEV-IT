
        // Ensure DOM is fully loaded before attaching event listeners
        document.addEventListener('DOMContentLoaded', function () {
            // Handle profile link click
            const profileLink = document.getElementById('profile-link');
            if (profileLink) {
                profileLink.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.location.href = '../components/account.html';
                });
            }

            // Handle logout link click
            const logoutLink = document.getElementById('logout-link');
            if (logoutLink) {
                logoutLink.addEventListener('click', function (e) {
                    e.preventDefault();
                    // Clear login-related data from localStorage
                    localStorage.removeItem('loginResponse');
                    localStorage.removeItem('cartTotal'); // Optional, if tied to login
                    localStorage.removeItem('cart'); // Optional, if tied to login
                    localStorage.removeItem('cartItems'); // Optional, if tied to login
                    // Redirect to home page
                    window.location.href = '/E-commerce/index.html';
                });
            }
        });