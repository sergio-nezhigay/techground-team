import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Login from "./pages/Login";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </main>
    </div>
  );
};

export default App;
