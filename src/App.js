import React, { useState } from "react";
import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { MotorcycleList } from "./components/MotorcycleList/MotorcycleList";
import { Login } from "./components/Login/Login";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./components/Cart/CartContext";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/bikes",
    element: <MotorcycleList />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <CartProvider>
      <AppContainer>
        {isAuthenticated ? (
          <>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </AppContainer>
    </CartProvider>
  );
}

export default App;
