import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Blog from "./components/Blogs/Blog";
import Auth from "./components/Auth/Auth";
import Form from "./components/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/create" element={<Form />} />
        {/* <Route path="/posts" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
