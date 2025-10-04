// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const authNav = document.getElementById('auth-nav');
    const mainContent = document.querySelector('.main-content');
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const navbarCollapse = document.getElementById('navbar-collapse');
    
    // --- Hamburger Menu Toggle ---
    if (hamburgerBtn && navbarCollapse) {
        hamburgerBtn.addEventListener('click', () => {
            navbarCollapse.classList.toggle('active');
        });
    }

    // Function to update the navigation bar based on login state
    const updateNav = () => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        const user = JSON.parse(localStorage.getItem('kodeinUser'));

        let navHTML = '';
        if (isLoggedIn && user) {
            navHTML = `
                <span class="welcome-user">Hi, ${user.name}!</span>
                <a href="#" id="logout-btn" class="auth-button">Logout</a>
            `;
        } else {
             navHTML = `
                <a href="login.html" class="auth-link">Log in</a>
                <a href="signup.html" class="auth-button">Sign up</a>
            `;
        }

        if (authNav) {
            authNav.innerHTML = navHTML;
             // Re-add logout event listener if it exists
            const logoutBtn = document.getElementById('logout-btn');
            if(logoutBtn) {
                logoutBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    sessionStorage.removeItem('isLoggedIn');
                    window.location.href = 'login.html';
                });
            }
        }
    };

    // Show a message on the page
    const showMessage = (form, message, type = 'error') => {
        let messageElement = form.querySelector('.message');
        if (!messageElement) {
            messageElement = document.createElement('div');
            messageElement.className = 'message';
            form.prepend(messageElement);
        }
        messageElement.textContent = message;
        messageElement.style.color = type === 'error' ? '#d9534f' : '#5cb85c';
    };


    // --- Signup Page Logic ---
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!name || !email || !password) {
                showMessage(signupForm, 'Please fill in all fields.');
                return;
            }

            if (localStorage.getItem('kodeinUser')) {
                 const existingUser = JSON.parse(localStorage.getItem('kodeinUser'));
                 if (existingUser.email === email) {
                    showMessage(signupForm, 'A user with this email already exists.');
                    return;
                 }
            }

            const userData = { name, email, password };
            localStorage.setItem('kodeinUser', JSON.stringify(userData));
            
            showMessage(signupForm, 'Signup successful! Redirecting to login...', 'success');

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        });
    }

    // --- Login Page Logic ---
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const storedUser = JSON.parse(localStorage.getItem('kodeinUser'));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                sessionStorage.setItem('isLoggedIn', 'true');
                showMessage(loginForm, 'Login successful! Redirecting...', 'success');
                 setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } else {
                showMessage(loginForm, 'Invalid email or password.');
            }
        });
    }

    // --- Protected Pages Logic (Home, Illustrations) ---
    if (mainContent) {
        if (!sessionStorage.getItem('isLoggedIn')) {
            // If not logged in, show default nav and prepare for redirection
            updateNav();
            // Uncomment the line below to force login
            // window.location.href = 'login.html';
        } else {
            // If logged in, update the navigation to show logout
            updateNav();
        }
    } else {
        // For auth pages, still update nav in case it's ever added
        updateNav();
    }
});

