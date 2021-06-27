import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import App from "./components/App";
import "./styles.css";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Nav />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <Footer />
  </StrictMode>,
  rootElement
);
