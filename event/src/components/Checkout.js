import React from 'react';

const CheckOut = () => {
    return (
        <>
            <section class="wpo-page-title">
                <div class="container">
                    <div class="row">
                        <div class="col col-xs-12">
                            <div class="wpo-breadcumb-wrap">
                                <h2>Checkout</h2>
                                <ol class="wpo-breadcumb-wrap">
                                    <li><a href="index.html">Home</a></li>
                                    <li>Checkout</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end page-title --> */}

            {/* <!-- wpo-checkout-area start--> */}
            <div class="wpo-checkout-area section-padding">
                <div class="container">
                    <form>
                        <div class="checkout-wrap">
                            <div class="row">
                                <div class="col-lg-8 col-12">

                                    <div class="caupon-wrap s2">
                                        <div class="biling-item">
                                            <div class="coupon coupon-3">
                                                <label id="toggle2">Billing Address</label>
                                            </div>
                                            <div class="billing-adress" id="open2">
                                                <div class="contact-form form-style">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-12">
                                                            <label for="fname1">First Name</label>
                                                            <input type="text" placeholder="" id="fname1" name="fname" />
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-12">
                                                            <label for="Country">Country</label>
                                                            <select name="address" id="Country" class="form-control">
                                                                <option >Amman</option>
                                                                <option>Irbid</option>
                                                                <option>Jerash</option>
                                                                <option>Ajloun</option>
                                                                <option>Mafraq</option>
                                                                <option>Balqa</option>
                                                                <option>Zarqa</option>
                                                                <option>Madaba</option>
                                                                <option>Karak</option>
                                                                <option>Tafilah</option>
                                                                <option>Ma'an</option>
                                                                <option>Aqaba</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-12">
                                                            <label for="Adress">Address</label>
                                                            <input type="text" placeholder="Amman ,8th circle" id="Adress" name="Adress" />
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-12">
                                                            <label for="City">Phone Number</label>
                                                            <input type="text" placeholder="077777777" id="City" name="City" />
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-12">
                                                            <label for="Post2">Secondary Phone Number</label>
                                                            <input type="text" placeholder="077777777" id="Post2" name="Post" />
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-12">
                                                            <label for="email4">Email Adress</label>
                                                            <input type="text" placeholder="" id="email4" name="email" />
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-12">
                                                            <div class="submit-btn-area text-center">
                                                                <button class="theme-btn-s4" type="submit">Place
                                                                    Order</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-4 col-12">
                                    <div class="cout-order-area">
                                        <div class="oreder-item ">
                                            <ul>
                                                <li class="o-header">Your Order<span>( 6 )</span></li>
                                                <li>Product 1 X 1<span>50</span></li>
                                                <li>Product 2 X 1<span>50</span></li>

                                                <li class="o-middle">Product 5 X 1<span>50</span></li>
                                                <li class="s-total">Sub Total<span>400</span></li>

                                                <li>( - ) Discount Price<span>100</span></li>
                                                <li class="o-bottom">Total price <span>500</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default CheckOut;