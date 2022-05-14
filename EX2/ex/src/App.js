import React from "react";
import { useEffect,useState } from "react";
import  NavBar from  "./Components/Navbar";
import  Jokes from  "./Components/Jokes";
import  AddJoke from  "./Components/AddJoke";
import {Route,Link,Routes} from "react-router-dom";
function App()
{
  
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
        <Route path="/index" exact element={<Jokes />}></Route>
        <Route   path="/addJoke" exact element={<AddJoke />}></Route>
      </Routes>
    </div>
  );
}
export default App;