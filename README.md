# shoe_store--react-app

# 👟 React Shoe Store

A simple and responsive shoe shopping application built using **React.js**. Users can browse a collection of shoes, add products to their shopping cart, manage quantities, and view the total price dynamically.

## 🚀 Features

- **Product Listing:** Displays a collection of shoes with images, names, and prices.
- **Add to Cart:** Add shoes to the shopping cart.
- **Quantity Management:** Increase or decrease the quantity of cart items.
- **Remove Items:** Remove products from the cart.
- **Dynamic Cart Total:** Automatically calculates the total price based on selected items and quantities.
- **Responsive Design:** Layout adapts to different screen sizes.
- **Navigation Bar:** Includes Home, Categories, and About Us sections.

## 🛠️ Technologies Used

- **React.js** – Building the user interface.
- **JavaScript (ES6+)** – Application logic and functionality.
- **CSS3** – Styling and responsive layout.
- **Vite** – Development server and build tool.

## 📂 Project Structure

```text
shoe-store-react/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project directory

```bash
cd shoe-store-react
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## 🛒 How It Works

The application uses React's `useState` hook to manage the shopping cart.

- When a user clicks **Add to Cart**, the selected shoe is added to the cart.
- If the same shoe is added again, its quantity increases.
- The `+` and `−` buttons update item quantities.
- The remove button deletes an item from the cart.
- The total price updates automatically whenever the cart changes.

## 📌 Future Improvements

- Add product categories and filtering.
- Implement product search functionality.
- Add user authentication.
- Integrate a payment gateway.
- Store cart information using local storage.

## 👨‍💻 Author

**Roumak Maity**

---

*Built with React.js as a learning project to understand components, state management, event handling, and dynamic rendering.*
