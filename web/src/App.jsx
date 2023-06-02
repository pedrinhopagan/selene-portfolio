import React from "react";

import { About, Activities, Footer, Gallery, Method } from "./container";
import { Navbar } from "./components";

import './App.scss'
import Header from "./container/Header/Header";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Method />
      <Activities />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
