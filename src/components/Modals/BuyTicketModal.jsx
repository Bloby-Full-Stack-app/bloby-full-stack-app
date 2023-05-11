import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const BuyTicketModal = (props) => {
    return (
        <>
            <div className="mfp-bg my-mfp-zoom-in mfp-ready"></div>
            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready">
                <div className="mfp-container mfp-inline-holder">
                    <div className="mfp-content">
                        <div>
                            <div className="modal">
                                <div className="modal__content">
                                    <button className="modal__close" onClick={props.onCloseModal} type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" /></svg></button>

                                    <h4 className="sign__title">To buy tickets</h4>

                                    <div className="sign__group sign__group--row">
                                        <label className="sign__label" for="value">Choose ticket:</label>
                                        <select className="sign__select" name="value" id="value">
                                            <option value="50">Regular - TND 49</option>
                                            <option value="100">VIP Light - TND 99</option>
                                            <option value="200">VIP - TND 169</option>
                                        </select>

                                        <span className="sign__text sign__text--small">You can spend money from your account on the renewal of the connected packages, or on the purchase of goods on our website.</span>
                                    </div>
                                    <StripeCheckout
                                        stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
                                        //token={handleToken}
                                        name=""
                                        panelLabel={`Pay your Event Here`}
                                        currency="USD"
                                        amount={100}
                                    >
                                    <button className="sign__btn" type="button">Buy</button>
                                    </StripeCheckout>

                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuyTicketModal;