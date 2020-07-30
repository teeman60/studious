import React from 'react'
import '../src/Cards/card-style.css'
import styled from 'styled-components'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


function Footer() {
    const FooterContainer = styled.footer`
    background: #344;
    height: 13rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

`
    return (

        <FooterContainer className="main-footer">
            <div style={{width: '100%', color: 'white'}}>
                <div className="row" style={{marginTop: '2rem'}}>
                    <div className="col " style={{marginLeft: '2rem'}}>
                        <h4>Menu</h4>
                        <ul className="list-unstyled">
                            <li>Make A Post</li>
                            <li>Book A Skill Appointment With Other Students</li>
                            <li>View All Discussions</li>
                            <li>Skills Hub</li>
                        </ul>
                    </div>

                    <div className="col" style={{}}>
                        <h4>About Us</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>                     
                        
                    </div>

                    <div className="col ">
                        <h4 >Check Out Our Social Media </h4>
                        <ul className="list-unstyled" style={{marginLeft: '5rem'}}>
                          

                            <li><i className="fab fa-facebook-f"></i></li><br></br>
                            <li><i class="fab fa-twitter"></i></li><br></br>
                            <li><i class="fab fa-slack-hash"></i></li>
                        </ul>
                    </div>

                </div>
                <div>
                    <div className="footer-bottom" style={{marginLeft: '2rem'}}>
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Student Community App - All Rights Reserved
                        </p>
                    </div>
                </div>

            </div>
            
        </FooterContainer>
        
    )
}

export default Footer;


