import React, { useState, useEffect } from 'react';
function Shop() {
   
    //  end Add books




    return (
        <div className="page-wrapper">
            {/* // <!-- start of breadcumb-section --> */}
            <div className="wpo-breadcumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-breadcumb-wrap">
                                <ul>
                                    <li><a href="index.html">Home </a></li>
                                    <li><span>Product Page</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // <!-- end of wpo-breadcumb-section--> */}

            {/* // <!-- start wpo-shop-single-section --> */}
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div class="col col-lg-6 col-12">
                            <div class="shop-single-slider">
                                <div class="row">
                                    <div class="col-lg-3 col-3">
                                        <div class="slider-nav">
                                            <div><img src="assets/images/shop/shop-single/thumb/img-1.jpg" alt /></div>
                                            <div><img src="assets/images/shop/shop-single/thumb/img-2.jpg" alt /></div>
                                            <div><img src="assets/images/shop/shop-single/thumb/img-3.jpg" alt /></div>
                                            <div><img src="assets/images/shop/shop-single/thumb/img-4.jpg" alt /></div>
                                        </div>
                                    </div>
                                    {/* <div class="col-lg-9 col col-9">
                                    <div class="slider-for">
                                        <div><img src="assets/images/shop/shop-single/1.jpg" alt/></div>
                                        <div><img src="assets/images/shop/shop-single/2.jpg" alt/></div>
                                        <div><img src="assets/images/shop/shop-single/3.jpg" alt/></div>
                                        <div><img src="assets/images/shop/shop-single/4.jpg" alt/></div>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-6 col-12">
                            <div className="product-details">
                                <h2>Wedding Ornaments</h2>
                                <div className="product-rt">
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <span>(25 customer reviews)</span>
                                </div>
                                <div className="price">
                                    <span className="old">$230.00</span>
                                    <span className="current">$220.00</span>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum and available, but the majority have suffered alteration in somey form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                <ul>
                                    <li>Going through the cites of the word in classNameical.</li>
                                    <li>There are many variations of passages.</li>
                                    <li>Making it look like readable and spoken English.</li>
                                </ul>
                                <div className="product-option">
                                    <form className="form">
                                        <div className="product-row">
                                            <div>
                                                <input id="product-count" type="text" value="1" name="product-count" />
                                            </div>
                                            <div>
                                                <button type="submit" className="theme-btn">Add to cart</button>
                                            </div>
                                            <div>
                                                <button className="theme-btn heart-btn"><i className="ti-heart"></i></button>
                                                <span></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* <!-- end option --> */}
                                <div className="tg-btm">
                                    <p><span>Categories:</span> Book</p>
                                    <p><span>Tags:</span> Jewellery, events, wedding</p>
                                </div>
                            </div>
                            {/* <!-- end product details --> */}
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- start of wpo-contact-section --> */}

    

                    {/* <!-- end row --> */}

                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="product-info">
                                {/* <!-- Nav tabs --> */}
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description"
                                            role="tab" aria-controls="Description" aria-selected="true">Description</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="Review-tab" data-bs-toggle="tab" href="#Review" role="tab"
                                            aria-controls="Review" aria-selected="false">Review</a>
                                    </li>
                                </ul>

                                {/* <!-- Tab panes --> */}
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="Description">
                                        <p>Samsa woke from troubled dreams, he found himself transformed in his bed into a
                                            horrible vermin. He lay on his armour-like back, and if he lifted his head a
                                            little he could see his brown belly, slightly domed and divided by arches into
                                            stiff sections. The bedding was hardly able to cover it and seemed ready to
                                            slide off any moment. His many legs, pitifully thin compared with the size of
                                            the rest of him.</p>
                                        <p>The bedding was hardly able to cover it and seemed ready to slide off any moment.
                                            His many legs, pitifully thin compared with the size of the rest of himSamsa
                                            woke from troubled dreams, he found himself transformed in his bed into a
                                            horrible vermin.</p>
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="Review">
                                        <div className="row">
                                            <div className="col col-lg-10 col-12">
                                                <div className="client-rv">
                                                    <div className="client-pic">
                                                        <img src="assets/images/shop/shop-single/review/img-1.jpg" />
                                                    </div>
                                                    <div className="details">
                                                        <div className="name-rating-time">
                                                            <div className="name-rating">
                                                                <div>
                                                                    <h4>Jenefar Willium</h4>
                                                                </div>
                                                                <div className="product-rt">
                                                                    <span>25 Sep 2021</span>
                                                                    <div className="rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star-o"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="review-body">
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="client-rv">
                                                    <div className="client-pic">
                                                        <img src="assets/images/shop/shop-single/review/img-2.jpg" />
                                                    </div>
                                                    <div className="details">
                                                        <div className="name-rating-time">
                                                            <div className="name-rating">
                                                                <div>
                                                                    <h4>Maria Bannet</h4>
                                                                </div>
                                                                <div className="product-rt">
                                                                    <span>28 Sep 2021</span>
                                                                    <div className="rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star-o"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="review-body">
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col --> */}

                                            <div className="col col-lg-12 col-12 review-form-wrapper">
                                                <div className="review-form">
                                                    <h4>Add a review</h4>
                                                    <p>Your email address will not be published. Required fields are marked *</p>
                                                    <form>
                                                        <div className="give-rat-sec">
                                                            <p>Your rating *</p>
                                                            <div className="give-rating">
                                                                <label>
                                                                    <input type="radio" name="stars" value="1" />
                                                                    <span className="icon">★</span>
                                                                </label>
                                                                <label>
                                                                    <input type="radio" name="stars" value="2" />
                                                                    <span className="icon">★</span>
                                                                    <span className="icon">★</span>
                                                                </label>
                                                                <label>
                                                                    <input type="radio" name="stars" value="3" />
                                                                    <span className="icon">★</span>
                                                                    <span className="icon">★</span>
                                                                    <span className="icon">★</span>
                                                                </label>
                                                                <label>
                                                                    <input type="radio" name="stars" value="4" />
                                                                    <span className="icon">★</span>
                                                                    <span className="icon">★</span>
                                                                    <span className="icon">★</span>
                                                                    <span className="icon">★</span>
                                                                </label>
                                                                <label>
                                                                    <input type="radio" name="stars" value="5" />
                                                                    <span className="icon">★</span>
                                                                    <span className="icon">★</span>
                                                                    <span className="icon">★</span>
                                                                    <span className="icon">★</span>
                                                                    <span className="icon">★</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <input type="text" className="form-control" placeholder="Name *"
                                                                required />
                                                        </div>
                                                        <div>
                                                            <input type="email" className="form-control" placeholder="Email *"
                                                                required />
                                                        </div>
                                                        <div>
                                                            <textarea className="form-control"
                                                                placeholder="Review *"></textarea>
                                                        </div>
                                                        <div className="rating-wrapper">
                                                            <div className="submit">
                                                                <button type="submit" className="theme-btn-s2">Post
                                                                    review</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end of container --> */}
            </section>
            {/* <!-- end of wpo-shop-single-section --> */}
        </div>

    )
}

export default Shop
