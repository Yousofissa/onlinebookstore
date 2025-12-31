📚 Online Bookstore – Full Stack Web Application

This project is a full-stack online bookstore built with React.js, Node.js, Express, and MySQL.
It allows users to browse books, search by title, view details, manage a shopping cart, authenticate securely, and place orders that are saved in a database.

The project demonstrates modern frontend development, backend API design, JWT authentication, and database integration.

---

🚀 Features

🔐 Authentication

-User Signup & Login

-Gmail-only authentication (@gmail.com)

-Password hashing using bcrypt

-Secure JWT-based authentication

-Protected routes (orders require login)

📖 Bookstore Functionality

-Home page with hero section

-Books page with responsive grid layout

-Live search bar to filter books

-Book details page

-Add to cart / remove from cart

-Cart total calculation

-Place order (saved in database)

🛒 Orders

-Orders linked to logged-in users

-Orders stored in MySQL

-Order items saved per order

-Secure backend order creation

🎨 UI

-Clean, modern cart layout

-Styled buttons (Remove, Place Order, Logout)

-Responsive navbar and footer

-Simple and user-friendly design

---

🛠 Technologies Used

-Frontend

-React.js

-React Router

-JavaScript (ES6)

-HTML & CSS

Backend

-Node.js

-Express.js

-MySQL

-JWT (JSON Web Tokens)

-bcrypt.js

Tools

-npm

-Git & GitHub

-phpMyAdmin / MySQL Workbench

---

## Project Structure
online-bookstore
│
├── backend
│   ├── controllers
│   │   ├── authController.js
│   │   └── orderController.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── models
│   │   └── db.js
│   ├── routes
│   │   ├── auth.js
│   │   └── orders.js
│   └── server.js
│
├── src
│   ├── components
│   │   ├── About.js
│   │   ├── BookCard.js
│   │   ├── BookDetails.js
│   │   ├── Books.js
│   │   ├── Cart.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Home.js
│   │   ├── Navbar.js
│   │   └── SearchBar.js
│   ├── data
│   │   └── books.js
│   ├── images
│   │   ├── bookshop.jpg
│   │   ├── harrypotter.jpg
│   │   ├── home.jpg
│   │   ├── littlewomen.jpg
│   │   ├── mockingbird.jpg
│   │   └── the-great-gatsby.jpg
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── onlinebookstore.sql
└── README.md



##  Screenshots

###  Home Page
![Home Page](src/screenshots/home.png)

###  About Us
![About Us](src/screenshots/aboutus.png)

###  Books Page
![Books Page](src/screenshots/books.png)

###  Book Details
![Book Details](src/screenshots/bookdetails.png)

###  Cart
![Cart](src/screenshots/cart.png)

###  Contact Page
![Contact Page](src/screenshots/contact.png)


