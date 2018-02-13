import React from "react";
import "./Header.css";
import Logo from "./BBlogo.png";


const Header = () => (
  <div class="container-fluid">
  <div class="row">
    <div class="col-md-2">
     <img id="logo" height="40" alt="BlueberryLogo" src= {Logo} />
    </div>
    <div class="col-md-2">
    </div>
    <div class="col-md-2">
    </div>
    <div class="col-md-2">
       
      <button type="button" class="btn btn-lg ">
        Login
      </button>
    </div>
    <div class="col-md-2">
       
      <button type="button" class="btn btn-lg ">
        Settings
      </button>
    </div>
    <div class="col-md-2">
    <span className="glyphicon glyphicon-cog " id ="gear" />
    </div>
  </div>
</div>
);

   export default Header;