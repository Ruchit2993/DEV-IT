 // Header fetch
        document.addEventListener("DOMContentLoaded", function () {
            fetch('header.html')
                .then(response => {
                    if (!response.ok) throw new Error(`Failed to fetch header.html: ${response.statusText}`);
                    return response.text();
                })
                .then(data => {
                    document.getElementById('header-placeholder').innerHTML = data;
                })
                .catch(error => console.error('Error fetching header:', error.message));
        });

        // Login fetch and attach login script
        document.addEventListener("DOMContentLoaded", function () {
            fetch('login.html')
                .then(response => {
                    if (!response.ok) throw new Error(`Failed to fetch login.html: ${response.statusText}`);
                    return response.text();
                })
                .then(data => {
                    document.getElementById('login-placeholder').innerHTML = data;
                    const myForm = document.querySelector('#login-placeholder form');
                    if (myForm) {
                        myForm.addEventListener('submit', function (e) {
                            e.preventDefault();

                            const username = document.getElementById('username').value.trim();
                            const password = document.getElementById('password').value.trim();

                            // Validate inputs
                            if (!username || !password) {
                                alert('Please enter both username and password.');
                                return;
                            }

                            // Log the request payload
                            console.log('Sending login request with:', { username, password });

                            // Step 1: Attempt to login using XMLHttpRequest
                            const loginXhr = new XMLHttpRequest();
                            loginXhr.open('POST', 'https://dummyjson.com/auth/login', true);
                            loginXhr.setRequestHeader('Content-Type', 'application/json');

                            loginXhr.onreadystatechange = function () {
                                if (loginXhr.readyState === XMLHttpRequest.DONE) {
                                    console.log('Login response status:', loginXhr.status);
                                    console.log('Login response text:', loginXhr.responseText);
                                    try {
                                        const data = JSON.parse(loginXhr.responseText);
                                        if (loginXhr.status === 200 && data.accessToken) {
                                            // Save credentials to localStorage
                                            localStorage.setItem('username', username);
                                            localStorage.setItem('password', password);
                                            localStorage.setItem('accessToken', data.accessToken);

                                            // Step 2: Fetch user profile using XMLHttpRequest
                                            const profileXhr = new XMLHttpRequest();
                                            profileXhr.open('GET', 'https://dummyjson.com/auth/me', true);
                                            profileXhr.setRequestHeader('Authorization', `Bearer ${data.accessToken}`);

                                            profileXhr.onreadystatechange = function () {
                                                if (profileXhr.readyState === XMLHttpRequest.DONE) {
                                                    console.log('Profile response status:', profileXhr.status);
                                                    console.log('Profile response text:', profileXhr.responseText);
                                                    try {
                                                        const profileData = JSON.parse(profileXhr.responseText);
                                                        if (profileXhr.status === 200) {
                                                            console.log('User Profile:', profileData);
                                                            alert('Logged in successfully! Check console for profile details.');
                                                            // Redirect to test-2.html
                                                            window.location.href = 'test-2.html';
                                                        } else {
                                                            throw new Error(profileData.message || 'Failed to fetch profile');
                                                        }
                                                    } catch (error) {
                                                        console.error('Profile fetch error:', error.message);
                                                        alert(`An error occurred: ${error.message}`);
                                                        console.log('Try alternative credentials: username: michaelw, password: michaelwpass');
                                                    }
                                                }
                                            };

                                            profileXhr.send();
                                        } else {
                                            throw new Error(data.message || 'Invalid response from server');
                                        }
                                    } catch (error) {
                                        console.error('Login error:', error.message);
                                        alert(`An error occurred: ${error.message}`);
                                        console.log('Try alternative credentials: username: michaelw, password: michaelwpass');
                                    }
                                }
                            };

                            loginXhr.send(JSON.stringify({
                                username: username,
                                password: password,
                                expiresInMins: 30
                            }));
                        });
                    } else {
                        console.error('Form not found in login.html');
                    }
                })
                .catch(error => console.error('Error fetching login:', error.message));
        });

        // Footer fetch
        document.addEventListener("DOMContentLoaded", function () {
            fetch('footer.html')
                .then(response => {
                    if (!response.ok) throw new Error(`Failed to fetch footer.html: ${response.statusText}`);
                    return response.text();
                })
                .then(data => {
                    document.getElementById('footer-placeholder').innerHTML = data;
                })
                .catch(error => console.error('Error fetching footer:', error.message));
        });