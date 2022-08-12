import React from 'react'

function About() {
  return (
    // <!-- start page-wrapper -->
    <div className="page-wrapper">
        {/* <!-- start preloader --> */}
        {/* <div className="preloader">
            <div className="vertical-centered-box">
                <div className="content">
                    <div className="loader-circle"></div>
                    <div className="loader-line-mask">
                        <div className="loader-line"></div>
                    </div>
                    <img src="assets/images/favicon.png" />
                </div>
            </div>
        </div> */}
        {/* <!-- end preloader --> */}

         {/* <!-- start wpo-page-title -->  */}
        {/* <section className="wpo-page-title"> */}
            {/* <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>About</h2>
                            <ol className="wpo-breadcumb-wrap">
                                <li><a href="index.html">Home</a></li>
                                <li>About</li>
                            </ol>
                        </div>
                    </div>
                </div>
                 <!-- end row -->
            </div> */}
             {/* <!-- end container --> */}
        {/* </section> */}
        {/* <!-- end page-title --> */}
        {/* <!-- start of wpo-about-section --> */}
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-item">
                                <div className="wpo-about-img">
                                    <img src="assets/images/about/2.jpg" />
                                </div>
                            </div>
                            <div className="ab-shape">
                                <img src="assets/images/about/shape.png" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-icon">
                                <div className="icon">
                                    <img src="assets/images/about/thumb.png" />
                                </div>
                            </div>
                            <div className="wpo-about-icon-content">
                                <h2>Planner of Your Perfect Wedding</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal distribution of letters, as opposed to using
                                </p>
                                <p>
                                    Content here, content here', making it look like readable English. Many desktop
                                    publishing packages and web page editors now use Lorem Ipsum as their default
                                    model text.</p>
                                <ul>
                                    <li>Going through the cites of the word in classNameical.</li>
                                    <li>There are many variations of passages.</li>
                                    <li>Making it look like readable and spoken English.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end of wpo-about-section --> */}
        {/* <!-- start wpo-service-section --> */}
        <section className="wpo-service-section pb-0">
            <h2 className="hidden">service</h2>
            <div className="container">
                <div className="wpo-service-active owl-carousel">
                    <div className="wpo-service-item">
                        <div className="wpo-service-img">
                            <img src="%PUBLIC_URL%/assets/images/service/img-1.jpg" />

                            <div className="wpo-service-text">
                                <div className="s-icon">
                                    <i className="fi flaticon-gallery"></i>
                                </div>
                                <a href="service-single.html">Photography</a>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-service-item">
                        <div className="wpo-service-img">
                            <img src="assets/images/service/img-2.jpg" />

                            <div className="wpo-service-text">
                                <div className="s-icon">
                                    <i className="fi flaticon-serving-dish"></i>
                                </div>
                                <a href="service-single.html">Fine Dining</a>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-service-item">
                        <div className="wpo-service-img">
                            <img src="assets/images/service/img-3.jpg" />

                            <div className="wpo-service-text">
                                <div className="s-icon">
                                    <i className="fi flaticon-edit"></i>
                                </div>
                                <a href="service-single.html">Wedding Registry</a>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-service-item">
                        <div className="wpo-service-img">
                            <img src="assets/images/service/img-4.jpg" />

                            <div className="wpo-service-text">
                                <div className="s-icon">
                                    <i className="fi flaticon-wedding"></i>
                                </div>
                                <a href="service-single.html">Guest List</a>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-service-item">
                        <div className="wpo-service-img">
                            <img src="assets/images/service/img-5.jpg" />

                            <div className="wpo-service-text">
                                <div className="s-icon">
                                    <i className="fi flaticon-cake"></i>
                                </div>
                                <a href="service-single.html">Perfect Cake</a>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-service-item">
                        <div className="wpo-service-img">
                            <img src="assets/images/service/img-6.jpg" />

                            <div className="wpo-service-text">
                                <div className="s-icon">
                                    <i className="fi flaticon-wedding-rings"></i>
                                </div>
                                <a href="service-single.html">Wedding Ceremony</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* <!-- end container --> */}
        </section>
        {/* <!-- end wpo-service-section--> */}
        {/* <!-- start wpo-fun-fact-section --> */}
        <section className="wpo-fun-fact-section-s2 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            <div className="grid">
                                <div className="info">
                                    <h3><span className="odometer" data-count="1200">100</span></h3>
                                    <p>Happy Couples</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span className="odometer" data-count="1545">45</span>+</h3>
                                    <p>Weddings</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span className="odometer" data-count="750">30</span>+</h3>
                                    <p>Decoration</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span className="odometer" data-count="265">20</span>+</h3>
                                    <p>Locations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end wpo-fun-fact-section --> */}
    

        {/* <!-- start wpo-pricing-section --> */}
        {/* <section className="wpo-pricing-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="wpo-section-title">
                        <span>Pricing</span>
                        <h2>Wedding Packages</h2>
                        <div className="section-title-img">
                            <img src="assets/images/section-title.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="wpo-pricing-img">
                                        <img src="assets/images/pricing/22.jpg" alt=""/>
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
                                        <img src="assets/images/pricing/3.jpg" alt=""/>
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
                                        <img src="assets/images/pricing/4.jpg" alt=""/>
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
        </section> */}
        {/* <!-- start wpo-pricing-section -->
        <!-- start wpo-team-section --> */}
        {/* <section className="wpo-team-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="wpo-section-title">
                        <span>Our Team</span>
                        <h2>Meet Our Planners</h2>
                        <div className="section-title-img">
                            <img src="assets/images/section-title.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="wpo-team-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="wpo-team-item">
                                <div className="wpo-team-img">
                                    <img src="assets/images/team/img-1.jpg" alt=""/>
                                </div>
                                <div className="wpo-team-text">
                                    <h3><a href="team-single.html">Maria D’Soza</a></h3>
                                    <span>Planner</span>
                                    <ul>
                                        <li><a href="#"> <i className="ti-facebook"></i></a></li>
                                        <li><a href="#"> <i className="ti-twitter-alt"></i></a></li>
                                        <li><a href="#"> <i className="ti-linkedin"></i></a></li>
                                        <li><a href="#"> <i className="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="wpo-team-item">
                                <div className="wpo-team-img">
                                    <img src="assets/images/team/img-2.jpg" alt=""/>
                                </div>
                                <div className="wpo-team-text">
                                    <h3><a href="team-single.html">John Abraham</a></h3>
                                    <span>Makeup Artist</span>
                                    <ul>
                                        <li><a href="#"> <i className="ti-facebook"></i></a></li>
                                        <li><a href="#"> <i className="ti-twitter-alt"></i></a></li>
                                        <li><a href="#"> <i className="ti-linkedin"></i></a></li>
                                        <li><a href="#"> <i className="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="wpo-team-item">
                                <div className="wpo-team-img">
                                    <img src="assets/images/team/img-3.jpg" alt=""/>
                                </div>
                                <div className="wpo-team-text">
                                    <h3><a href="team-single.html">Elizabeth Anny</a></h3>
                                    <span>Planner</span>
                                    <ul>
                                        <li><a href="#"> <i className="ti-facebook"></i></a></li>
                                        <li><a href="#"> <i className="ti-twitter-alt"></i></a></li>
                                        <li><a href="#"> <i className="ti-linkedin"></i></a></li>
                                        <li><a href="#"> <i className="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="wpo-team-item">
                                <div className="wpo-team-img">
                                    <img src="assets/images/team/img-4.jpg" alt=""/>
                                </div>
                                <div className="wpo-team-text">
                                    <h3><a href="team-single.html">Robert Willy</a></h3>
                                    <span>Photographer</span>
                                    <ul>
                                        <li><a href="#"> <i className="ti-facebook"></i></a></li>
                                        <li><a href="#"> <i className="ti-twitter-alt"></i></a></li>
                                        <li><a href="#"> <i className="ti-linkedin"></i></a></li>
                                        <li><a href="#"> <i className="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
           <!-- end container -->
        </section
        <!-- end wpo-team-section --> */}
       

    </div>
    
    //  <!-- end of page-wrapper --> 
  )
}

export default About
