import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import "bootstrap-icons/font/bootstrap-icons.css";





const Address = {
    street: "1,Surya senpally",
    locality: "Haridevpur",
    city: "Kolkata",
    state: "West Bengal",
    Pin: 700082,
    contactNumber: 9073500882,
    mailId: "saahilaliofficial@gmail.com"
};


function Footer() {

    return <footer>
        <p className="footerMotiv">"If you want to go fast, go alone. If you want to go far, go together."</p>
        <hr className="hr" />
        <div>
            <h5 className="getInTouch">Get in touch with us</h5>
        </div>

        <div className='container '>
            <div className='row'>
                <div className='col-lg-6'>
                    <h5>Our Office Address</h5>
                    <div className="address">
                        Address :{Address.street},{Address.locality}
                        <br />{Address.city}-{Address.Pin} <br />
                        <hr className="footeraddresshr" />
                        Contact Number : {Address.contactNumber}<br />
                        Mail Id : {Address.mailId}</div>
                </div>
                <div className='col-lg-6'>
                    <h5>Our Social Handles</h5>
                    <div className="icons">

                        <a href="">
                            <i className="bi bi-facebook" />
                        </a>
                        <a href="">
                            <i class="bi bi-instagram" />
                        </a>
                        <a href="">
                            <i class="bi bi-twitter" />
                        </a>
                        <a href="">
                            <i class="bi bi-youtube"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>

    </footer >
}

export default Footer;