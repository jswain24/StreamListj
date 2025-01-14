import React from "react";
import Navbar from "./components/Navbar";
import StreamList from "./components/StreamList";
import Movies from "./components/Movies";
import Cart from "./components/Cart";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <StreamList />
      <Movies />
      <Cart />
      <About />
    </div>
  );
};

export default App;
