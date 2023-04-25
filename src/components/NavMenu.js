import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavMenu.css';
import 'react-router-bootstrap';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';



const NavMenu = () => {

    const navigate = useNavigate();

    const navigateToCases = () => {
        navigate("/cases");
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div onClick={navigateToCases}>
                    <Navbar.Brand>Sherlock Clues App</Navbar.Brand>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavMenu;