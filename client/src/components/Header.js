import React from "react";
import Book from "../assets/images/book.png";

function Header() {
    return (
        <header className="jumbotron header" >
            {/* <img className="logo-image" style={{ textAlign: "center" }} src={Book} alt="Logo" /> */}
            <h1>Google Books Search</h1>
            <p>Search for and Save Books of Interest</p>
        </header>
    );
}

export default Header;
