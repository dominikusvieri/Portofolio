import React from 'react';
import logo from "../logo.png";
import './Navbar'


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#"><img class="logo" src={logo}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link active" href='#'>Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href='#'>Link</a>
            </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar