import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import {BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(6 34 56)";
      showAlert(" Dark Mode has been Enabled", "success");
      // document.title = "TextUtils -Dark Mode Enable";
      // setTimeout(() => {
      //   document.title = "TextUtils is amazing";
      // }, 1000);
      // setTimeout(() => {
      //   document.title = "Install the TextUtils";
      // }, 2000);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been Enabled", "success");
      // document.title = "TextUtils -Light Mode Enable";
    }
  };

  return (
    <>
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        Home="Home"
        Link=" About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
     <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={
          <Textform heading='TextUtils - Word Counter | Character Counter'
          summary='Summary'
          preview='Preview'
          showAlert={showAlert}
          mode={mode}/>}>
        </Route>
         <Route path="/about" element={<About mode={mode}/>} />
      </Routes>
  </BrowserRouter>
      

      
    </>

    
  );
}

export default App;
