
import React, { useState } from 'react';
import './App.css';

function App() {

  const shoes = [
    {
      id: 1,
      name: 'White Casual Sneaker',
      price: 70,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'
    },
    {
      id: 2,
      name: "MACTREE Men's Mid Top Ankle Boots",
      price: 90,
      image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500'
    },
    {
      id: 3,
      name: "Campus Men's OG-03 Sneakers",
      price: 50,
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500'
    },
    {
      id: 4,
      name: "Campus Men's Sneakers",
      price: 50,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500'
    },
    {
      id: 5,
      name: "ASIAN Men's Sports Shoes",
      price: 65,
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500'
    },
    {
      id: 6,
      name: "P.A. Polo Men's Running Shoes",
      price: 99,
      image: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=500'
    }
  ];

  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === shoe.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === shoe.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...shoe, quantity: 1 }];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // Calculate total
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">

        <div className="logo">👟</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#about">About Us</a>
        </div>

      </nav>

      {/* Main Content */}
      <main className="main-container" id="home">

        {/* Left Side - Products */}
        <section className="products-section" id="categories">

          <div className="shoe-grid">

            {shoes.map((shoe) => (

              <div className="shoe-card" key={shoe.id}>

                <div className="shoe-image">
                  <img src={shoe.image} alt={shoe.name} />
                </div>

                <div className="shoe-details">

                  <h3>{shoe.name}</h3>

                  <p>${shoe.price}</p>

                  <button onClick={() => addToCart(shoe)}>
                    Add to Cart
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Right Side - Cart */}
        <aside className="cart-section">

          <h3>Cart</h3>

          {cart.map((item) => (

            <div className="cart-item" key={item.id}>

              <img src={item.image} alt={item.name} />

              <div className="cart-details">

                <h4>{item.name}</h4>

                <p>${item.price}</p>

                <div className="cart-controls">

                  <button onClick={() => decreaseQuantity(item.id)}>
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    title="Remove item"
                  >
                    ×
                  </button>

                </div>

              </div>

            </div>

          ))}

          {/* Total */}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>

        </aside>

      </main>

      <footer id="about"></footer>

    </div>
  );
}

export default App;
