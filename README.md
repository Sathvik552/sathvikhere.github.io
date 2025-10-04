# 🌐 KodeinKGP Web Task — My First Responsive Website Project

Hello! 👋  
Welcome to the README for **my first major web development project** — a fully responsive, multi-page website with galleries and a complete login/signup system!

This project was part of my **KodeinKGP Web Task**, and it was a massive learning experience. I started from basic HTML & CSS and gradually added JavaScript to make it interactive and functional.

---

## 🚀 What I Built

This website includes several key features:

- 🖼️ **Two gallery pages** — one for *Photos* and another for *Illustrations*  
- 🔐 **User Signup & Login System** — built entirely using client-side JavaScript  
- 📱 **Responsive Design** — works beautifully on both desktop and mobile  
- 🍔 **Hamburger Menu** — sidebar navigation on desktop transforms into a mobile-friendly toggle menu

---

## 🧠 My Learning Journey & Key Concepts

Here are the main web development concepts I explored and implemented while building this project.

---

### 1. 📏 Responsive Design — Making It Look Good Everywhere!

**Responsive Design** ensures a website adapts to different screen sizes — from large desktop monitors to small mobile screens.

I achieved this using **CSS Media Queries**, which act like "if" conditions for styles:

```css
/* --- Responsive Design --- */
@media (max-width: 768px) {
  /* Styles inside here ONLY apply if the screen width is 768px or less */
  .sidebar {
    display: none; /* Hide the sidebar on small screens */
  }
}
````

---

### 2. 🍔 The Hamburger Menu

On desktop, I have a left sidebar for navigation. On mobile, this sidebar turns into a **Hamburger Menu** — the familiar icon with three horizontal lines.

**How it works:**

* **HTML:** Added a `<button>` with three `<span>` lines for the icon.
* **CSS:** Media queries hide the sidebar and show the hamburger button on smaller screens.
* **JavaScript:** On click, it toggles a CSS class (e.g., `.active`) that shows or hides the mobile menu.

```js
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});
```

---

### 3. 🧱 Flexbox for Layouts

**Flexbox** is a game-changer for building layouts. It made positioning and alignment super easy.

I used Flexbox to:

* Arrange the sidebar and main content
* Align user info and the logout button neatly in the navigation bar

Example:

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

### 4. ⚙️ JavaScript and the DOM

This project helped me understand **DOM Manipulation** — how JavaScript interacts with the structure of a web page.

Some key concepts:

* `document.getElementById('id')`: Selects elements to work with
* `addEventListener('click', ...)`: Makes the page respond to user actions
* Using `classList.add()` / `.remove()` / `.toggle()` to show or hide elements dynamically

---

### 5. 🔑 Building a Simple Login System (Client-Side)

This was the most challenging and rewarding part — creating a **client-side login/signup system** using the browser’s built-in storage.

**Storage Types:**

* `localStorage` → Data stays even after the browser is closed (used for saving user details)
* `sessionStorage` → Data disappears when the tab is closed (used for tracking login state)

Example logic:

```js
// Save user info
localStorage.setItem('username', signupName);

// Track login status
sessionStorage.setItem('isLoggedIn', true);
```

---

## 🗂️ File Structure

```
📁 KodeinKGP-WebTask/
├── index.html        # Main homepage (Photos gallery)
├── work.html         # Illustrations gallery page
├── login.html        # Login page
├── signup.html       # Signup page
├── style.css         # Central stylesheet (includes responsive design)
├── auth.js           # Handles interactivity: menu, login, signup, logout
└── pic/              # Folder containing images
```

---

## ▶️ How to Run This Project

1. Download or clone the repository.
2. Make sure all files are in the same folder.
3. Ensure your images are in a sub-folder named `pic/`.
4. Open `signup.html` in your browser to create an account.
5. Log in and explore the galleries!

---

## 💡 What I Learned

This project taught me:

* The power of **HTML structure** and **semantic tags**
* How **CSS media queries** and **Flexbox** make responsive design easier
* Real-world **DOM manipulation** using **JavaScript**
* Implementing **client-side authentication logic**
* The importance of **file organization** and **project structure**

---

## 🎯 Next Steps

* Add backend authentication using Node.js or Firebase
* Use a real database instead of localStorage
* Improve UI with animations and transitions
* Add dark mode 🌙

---

## 👨‍💻 Author

**Sathvik K.L.V**
*KodeinKGP Web Task — Responsive Website Project*
Built with ❤️ using **HTML**, **CSS (Flexbox & Media Queries)**, and **Vanilla JavaScript**

---
