import React from 'react';
import { Link, NavLink } from 'react-router-dom';
function Index() {
    return (
        <div>

            <div class="page-wrapper">


                <div class="wpo-box-style">



                    <section class="wpo-hero-slider">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="slide-inner slide-bg-image" style={{ backgroundImage: `url("slider/10.jpg")` }}>
                                        {/* <!-- <div class="gradient-overlay"></div> --> */}
                                        <div class="container-fluid">
                                            <div class="slide-content">
                                                <div data-swiper-parallax="300" class="slide-title">
                                                    <h2>Our DREAMY Love</h2>
                                                </div>
                                                <div data-swiper-parallax="400" class="slide-text">
                                                    <p>Welcome and open yourself to your truest love this year with us! With the
                                                        Release Process</p>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div data-swiper-parallax="500" class="slide-btns">
                                                    <a href="/about" class="theme-btn">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="slide-inner slide-bg-image" data-background="slider/slide-2.jpg">
                                        {/* <!-- <div class="gradient-overlay"></div> --> */}
                                        <div class="container-fluid">
                                            <div class="slide-content">
                                                <div data-swiper-parallax="300" class="slide-title">
                                                    <h2>Our DREAMY Love</h2>
                                                </div>
                                                <div data-swiper-parallax="400" class="slide-text">
                                                    <p>Welcome and open yourself to your truest love this year with us! With the
                                                        Release Process</p>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div data-swiper-parallax="500" class="slide-btns">
                                                    <a href="about.html" class="theme-btn">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="slide-inner slide-bg-image" data-background="slider/slide-3.jpg">
                                        {/* <!-- <div class="gradient-overlay"></div> --> */}
                                        <div class="container-fluid">
                                            <div class="slide-content">
                                                <div data-swiper-parallax="300" class="slide-title">
                                                    <h2>Our DREAMY Love</h2>
                                                </div>
                                                <div data-swiper-parallax="400" class="slide-text">
                                                    <p>Welcome and open yourself to your truest love this year with us! With the
                                                        Release Process</p>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div data-swiper-parallax="500" class="slide-btns">
                                                    <a href="about.html" class="theme-btn">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div> */}
                        </div>
                    </section>

                    <section class="wpo-partners-section">
                        <h2 class="hidden">Partners</h2>
                        <div class="container">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <div class="partner-grids partners-slider owl-carousel">
                                        <div class="grid">
                                            <img src="%PUBLIC_URL%/slider/slide-1.jpg" alt />
                                        </div>
                                        <div class="grid">
                                            <img src="%PUBLIC_URL%/slider/slide-1.jpg" alt />
                                        </div>
                                        <div class="grid">
                                            <img src="%PUBLIC_URL%/slider/slide-1.jpg" alt />
                                        </div>
                                        <div class="grid">
                                            <img src="%PUBLIC_URL%/slider/slide-1.jpg" alt />
                                        </div>
                                        <div class="grid">
                                            <img src="%PUBLIC_URL%/slider/slide-1.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="wpo-service-section">
                        <h2 class="hidden">some</h2>
                        <div class="container">
                            <div class="wpo-service-active owl-carousel">
                                <div class="wpo-service-item">
                                    <div class="wpo-service-img">
                                        <img src="assets/images/service/img-1.jpg" alt="" />

                                        <div class="wpo-service-text">
                                            <div class="s-icon">
                                                <i class="fi flaticon-gallery"></i>
                                            </div>
                                            <a href="service-single.html">Photography</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="wpo-service-item">
                                    <div class="wpo-service-img">
                                        <img src="assets/images/service/img-2.jpg" alt="" />

                                        <div class="wpo-service-text">
                                            <div class="s-icon">
                                                <i class="fi flaticon-serving-dish"></i>
                                            </div>
                                            <a href="service-single.html">Fine Dining</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="wpo-service-item">
                                    <div class="wpo-service-img">
                                        <img src="assets/images/service/img-3.jpg" alt="" />

                                        <div class="wpo-service-text">
                                            <div class="s-icon">
                                                <i class="fi flaticon-edit"></i>
                                            </div>
                                            <a href="service-single.html">Wedding Registry</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="wpo-service-item">
                                    <div class="wpo-service-img">
                                        <img src="assets/images/service/img-4.jpg" alt="" />

                                        <div class="wpo-service-text">
                                            <div class="s-icon">
                                                <i class="fi flaticon-wedding"></i>
                                            </div>
                                            <a href="service-single.html">Guest List</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="wpo-service-item">
                                    <div class="wpo-service-img">
                                        <img src="assets/images/service/img-5.jpg" alt="" />

                                        <div class="wpo-service-text">
                                            <div class="s-icon">
                                                <i class="fi flaticon-cake"></i>
                                            </div>
                                            <a href="service-single.html">Perfect Cake</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="wpo-service-item">
                                    <div class="wpo-service-img">
                                        <img src="assets/images/service/img-6.jpg" alt="" />

                                        <div class="wpo-service-text">
                                            <div class="s-icon">
                                                <i class="fi flaticon-wedding-rings"></i>
                                            </div>
                                            <a href="service-single.html">Wedding Ceremony</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="wpo-product-section section-padding" style={{ marginTop: " -200px" }}>
                        <div class="container">
                            <div class="row">
                                <div class="wpo-section-title">
                                    <span>Our Shop</span>
                                    <h2>SPECIAL PRODUCT For YOU</h2>
                                    <div class="section-title-img">
                                        <img src="assets/images/section-title.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="wpo-product-wrap">
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                        <div class="wpo-product-item">
                                            <div class="wpo-product-img">
                                                <img src="assets/images/portfolio/24.jpg" alt="" style={{ height: " 400px" }}/>

                                            </div>
                                            <div class="wpo-product-text">
                                                <h3>
                                                    <div class="submit-area" >
                                                        <br />



                                                        <button type="submit" name='like' class="theme-btn-s4" style={{ width: " 230px" }}>  <NavLink to={`/catogry/1`} style={{ textDecoration: " none", color: "white" }}>Crockery & Cutlery</NavLink> </button>
                                                    </div></h3>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                        <div class="wpo-product-item">
                                            <div class="wpo-product-img">
                                                <img src="assets/images/portfolio/333.jpg" alt="" style={{ height: " 400px" }} />

                                            </div>
                                            <div class="wpo-product-text">
                                                <h3>
                                                    <div class="submit-area" >
                                                        <br />

                                                        <button type="submit" name='like' class="theme-btn-s4"  style={{ width: " 230px" }}>  <NavLink to={`/catogry/2`} style={{ textDecoration: " none", color: "white" }}>Welcome Signs</NavLink> </button>

                                                    </div>
                                                </h3>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                        <div class="wpo-product-item">
                                            <div class="wpo-product-img">
                                                <img src="assets/images/portfolio/set.jpg" alt="" style={{ height: " 400px" }} />

                                            </div>
                                            <div class="wpo-product-text">
                                                <h3>
                                                    <div class="submit-area" >
                                                        <br />

                                                        <button type="submit" name='like' class="theme-btn-s4"  style={{ width: " 230px" }}>  <NavLink to={`/catogry/3`} style={{ textDecoration: " none", color: "white" }}>Rings Set</NavLink> </button>
                                                    </div>  </h3>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6 col-13">
                                        <div class="wpo-product-item">
                                            <div class="wpo-product-img">
                                                <img src="assets/images/portfolio/3333.jpg" alt="" style={{ height: " 400px" }}/>

                                            </div>
                                            <div class="wpo-product-text">
                                                <h3>
                                                    <div class="submit-area" >
                                                        <br />

                                                        <button type="submit" name='like' class="theme-btn-s4"  style={{ width: " 230px" }}>  <NavLink to={`/catogry/4`} style={{ textDecoration: " none", color: "white" }}>Themes</NavLink> </button>
                                                    </div> </h3>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                    <section class="wpo-portfolio-section section-padding">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="wpo-section-title">
                                    <span>Portfolio</span>
                                    <h2>Our Amazing Work</h2>
                                    <div class="section-title-img">
                                        <img src="assets/images/section-title.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="sortable-gallery">
                                <div class="gallery-filters"></div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="portfolio-grids gallery-container clearfix">
                                            <div class="grid">
                                                <div class="img-holder">
                                                    <img src="assets/images/portfolio/img-4.jpg" alt="" />
                                                    <div class="hover-content">
                                                        <h4><a href="/about">Maria & Rabea</a></h4>
                                                        <span>Irbid- Feb 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid">
                                                <div class="img-holder">
                                                    <img src="assets/images/portfolio/19.jpg" alt="" />
                                                    <div class="hover-content">
                                                        <h4><a href="/about">Renad & Hazem</a></h4>
                                                        <span>Irbid- Jan 2020</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="grid">
                                                <div class="img-holder">
                                                    <img src="assets/images/portfolio/3.jpg" alt="" />
                                                    <div class="hover-content">
                                                        <h4><a href="/about">Alia & Raad</a></h4>
                                                        <span>Irbid- Mar 2022</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid">
                                                <div class="img-holder">
                                                    <img src="assets/images/portfolio/4.jpg" alt="" />
                                                    <div class="hover-content">
                                                        <h4><a href="/about">Ali & Kenda</a></h4>
                                                        <span>Irbid- April 2020</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid">
                                                <div class="img-holder">
                                                    <img src="assets/images/portfolio/16.jpg" alt="" />
                                                    <div class="hover-content">
                                                        <h4><a href="/about">Mira & Mazen</a></h4>
                                                        <span>Irbid- May 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid">
                                                <div class="img-holder">
                                                    <img src="assets/images/portfolio/57.jpg" alt="" />
                                                    <div class="hover-content">
                                                        <h4><a href="/about">Maria & Noor</a></h4>
                                                        <span>Irbid- Jan 2022</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

    

                    <section className="wpo-pricing-section section-padding pt-5">
                        <div className="container">
                            <div className="row">
                                <div className="wpo-section-title">
                                    {/* <span>Pricing</span> */}
                                    <h2>Future services</h2>
                                    <div className="section-title-img">
                                        <img src="assets/images/section-title.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-pricing-wrap">
                                <div className="row">
                                    <div className="col col-lg-4 col-md-6 col-12">
                                        <div className="wpo-pricing-item">
                                            <div className="wpo-pricing-top">
                                                <div className="wpo-pricing-img">
                                                    <img src="assets/images/pricing/22.jpg" alt="" />
                                                </div>
                                                <div className="wpo-pricing-text">
                                                    <h4>Basic Package</h4>
                                                    <h2>JD150<span></span></h2>
                                                </div>
                                            </div>
                                            <div className="wpo-pricing-bottom">
                                                <div className="wpo-pricing-bottom-text">
                                                    <ul>
                                                        <li>Simple theme decoration.</li>
                                                        <li>Cutlery for 20 person</li>
                                                        <li>Desert added to the theme set</li>
                                                        <li>Welcome sign</li>
                                                        <li>Couple name sign</li>
                                                    </ul>
                                                    <a href="/book">Choose Package</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-lg-4 col-md-6 col-12">
                                        <div className="wpo-pricing-item">
                                            <div className="wpo-pricing-top">
                                                <div className="wpo-pricing-img">
                                                    <img src="assets/images/pricing/3.jpg" alt="" />
                                                </div>
                                                <div className="wpo-pricing-text">
                                                    <h4>Standard Package</h4>
                                                    <h2>JD350<span></span></h2>
                                                </div>
                                            </div>
                                            <div className="wpo-pricing-bottom">
                                                <div className="wpo-pricing-bottom-text">
                                                    <ul>
                                                        <li>Bigger bridal theme.</li>
                                                        <li>Cutlery for 60 person</li>
                                                        <li> Additional backyard decoration</li>
                                                        <li>Additional desserts</li>
                                                        <li>Welcoming sign & rings set</li>
                                                    </ul>
                                                    <a href="/book">Choose Package</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-lg-4 col-md-6 col-12">
                                        <div className="wpo-pricing-item">
                                            <div className="wpo-pricing-top">
                                                <div className="wpo-pricing-img">
                                                    <img src="assets/images/pricing/4.jpg" alt="" />
                                                </div>
                                                <div className="wpo-pricing-text">
                                                    <h4>Luxary Package</h4>
                                                    <h2>JD580<span></span></h2>
                                                </div>
                                            </div>
                                            <div className="wpo-pricing-bottom">
                                                <div className="wpo-pricing-bottom-text">
                                                    <ul>
                                                        <li>Decoration-wedding halls</li>
                                                        <li>Top Cutlery arrengement</li>
                                                        <li>Event planner & monitor</li>
                                                        <li>Invitation cards</li>
                                                        <li>Souvenir for guests</li>
                                                    </ul>
                                                    <a href="/book">Choose Package</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="wpo-cta-section">
                        <div class="conatiner-fluid">
                            <div class="wpo-cta-item">
                                <span><img src="assets/images/cta/1.png" alt="" /></span>
                                <h2>Lets Celebrate Your Love</h2>
                                <a class="theme-btn-s2" href="/contact">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    {/* <section class="wpo-blog-section section-padding">
                        <div class="container">
                            <div class="row">
                                <div class="wpo-section-title">
                                    <span>News</span>
                                    <h2>Messages From Our Brides</h2>
                                    <div class="section-title-img">
                                        <img src="assets/images/section-title.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="wpo-blog-items">
                                <div class="row">
                                    <div class="col col-lg-4 col-md-6 col-12">
                                        <div class="wpo-blog-item">
                                            <div class="wpo-blog-img">
                                                <img src="assets/images/contact/4.jpg" alt="" />
                                            </div>
                                            <div class="wpo-blog-content">
                                                <ul>
                                                    <li>By <a href="blog-single.html">Loura Sweety</a></li>
                                                    <li>25 Sep 2021</li>
                                                </ul>
                                                <h2><a href="blog.html">Best Engagement gift you may
                                                    recieve is to have a good planner for your party.</a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-lg-4 col-md-6 col-12">
                                        <div class="wpo-blog-item">
                                            <div class="wpo-blog-img">
                                                <img src="assets/images/contact/5.jpg" alt="" />
                                            </div>
                                            <div class="wpo-blog-content">
                                                <ul>
                                                    <li>By <a href="blog-single.html">David Luis</a></li>
                                                    <li>23 Sep 2021</li>
                                                </ul>
                                                <h2><a href="blog.html">Photography is the important part of wedding.</a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-lg-4 col-md-6 col-12">
                                        <div class="wpo-blog-item">
                                            <div class="wpo-blog-img">
                                                <img src="assets/images/contact/1.jpg" alt="" />
                                            </div>
                                            <div class="wpo-blog-content">
                                                <ul>
                                                    <li>By <a href="blog-single.html">Aliana de</a></li>
                                                    <li>21 Sep 2021</li>
                                                </ul>
                                                <h2><a href="blog.html">Best Cutlery arrangement you might recieve .</a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section> */}



                </div>



            </div>

        </div>
        
    );
}
export default Index 