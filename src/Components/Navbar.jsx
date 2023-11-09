import "./Navbar.css"
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';

class Navbar extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <div className="navbarItems">
                <h1 className="logo">
                    VaeKon
                </h1>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-links active" : "nav-links"}>
                    <li><a className="link" href="#">Shop</a></li>
                    <li><a className="link" href="#">Newstand</a></li>
                    <li><a className="link" href="#">Who we are</a></li>
                    <li><a className="link" href="#">My profile</a></li>

                    <Button className="btn" variant="secondary">Basket (3)</Button>
                </ul>
            </div>
        )
    }
}

export default Navbar;

