import React from "react";
import "../Styles/Ctechnew.css";
import linkedin from '../Images/linkedin.png'
import facebook from '../Images/facebook.png'
import twitter from '../Images/twitter.png'
import Instagram from '../Images/Instagram.png'
import copyright from '../Images/copyright.png'
import arosymbol from '../Images/arosymbol.png'

function Ctechfooter() {
    return (
        <div className="footer-container">
            <div className="canara-tech">CanaraTechLabs </div>
            <div className="footer">
                <div className="footer-column1">
                    <div className="folow">Folow us on</div>
                    <div className="socialmedia">
                        <div className="linkin">
                            <img src={linkedin} alt="linkin" />
                        </div>
                        <div className="facebook">
                            <img src={facebook} alt="facebook" />
                        </div>
                        <div className="twitter">
                            <img src={twitter} alt="twitter" />
                        </div>
                        <div className="Insta">
                            <img src={Instagram} alt="Instagram" />
                        </div>
                    </div>
                </div>

                <div className="footer-column-2">
                    <div className="address">Address</div>
                    <div className="address-1">#79 Bargi,Kumta,U.K(581440)</div>
                </div>

                <div className="footer-column-3">
                    <div className="contact-detail">Contact details</div>
                    <div className="number">+91 9980594085</div>
                    <div className="link">www.canaratechlabs.com</div>
                    <div className="mail">ganeshhosamani@gmail.com</div>
                </div>

                <div className="footer-column-4">
                    <div className="privacy">Privacy policy</div>
                    <div className="cookie">Cookie policy</div>
                    <div className="terms">Terms and condition</div>
                </div>
            </div>
            <div className="foot"><img src={copyright} alt="ctpl" />2022 CTPL,All right reserve
            </div>
            <div className="Aro-icon">
                <img src={arosymbol} alt="Aro-icon" />
            </div>
        </div>
    );
}
export default Ctechfooter;