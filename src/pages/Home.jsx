import React from 'react';

function Home() {
  return (
    <>
      {/* Hero Start */}
        <div className="container-fluid hero-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="hero-header-inner animated zoomIn">
                            <p className="fs-4 text-dark">Selamat Datang di Masjid Al-Barokah</p>
                            <h1 className="display-1 mb-5 text-dark">Purity Comes From Faith</h1>
                            <a href="" className="btn btn-primary py-3 px-5">Selengkapnya</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Hero End */}


        {/* About Satrt */}
        <div className="container-fluid about py-5">
            <div className="container py-5">
                <div className="row g-5 mb-5">
                    <div className="col-xl-6">
                        <div className="row g-4">
                            <div className="col-6">
                                <img src="img/about-1.jpg" className="img-fluid h-100 wow zoomIn" data-wow-delay="0.1s" alt="" />
                            </div>
                            <div className="col-6">
                                <img src="img/about-2.jpg" className="img-fluid pb-3 wow zoomIn" data-wow-delay="0.1s" alt="" />
                                <img src="img/about-3.jpg" className="img-fluid pt-3 wow zoomIn" data-wow-delay="0.1s" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeIn" data-wow-delay="0.5s">
                        <p className="fs-5 text-uppercase text-primary">About THEMosque</p>
                        <h1 className="display-5 pb-4 m-0">Allah Help Those Who Help Themselves</h1>
                        <p className="pb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam. Etiam quis mauris justo. Vivamus purus nulla, rutrum ac risus in.</p>
                        <div className="row g-4 mb-4">
                            <div className="col-md-6">
                                <div className="ps-3 d-flex align-items-center justify-content-start">
                                    <span className="bg-primary btn-md-square rounded-circle mt-4 me-2"><i className="fa fa-eye text-dark fa-4x mb-5 pb-2"></i></span>
                                    <div className="ms-4">
                                        <h5>Our Vision</h5>
                                        <p>Lorem ipsum dolor sit amet tetur nod elit sed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ps-3 d-flex align-items-center justify-content-start">
                                    <span className="bg-primary btn-md-square rounded-circle mt-4 me-2"><i className="fa fa-flag text-dark fa-4x mb-5 pb-2"></i></span>
                                    <div className="ms-4">
                                        <h5>Our Mission</h5>
                                        <p>Lorem ipsum dolor sit amet tetur nod elit sed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light p-3 mb-4">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-3">
                                    <img src="img/about-child.jpg" className="img-fluid rounded-circle" alt="" />
                                </div>
                                <div className="col-6">
                                    <p className="mb-0">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam. Etiam quis mauris justo.</p>
                                </div>
                                <div className="col-3">
                                        <h2 className="mb-0 text-primary text-center">$20,46</h2>
                                        <h5 className="mb-0 text-center">Raised</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row g-2">
                            <div className="col-md-6">
                                <p className="mb-2"><i className="fa fa-check text-primary me-3"></i>Charity & Donation</p>
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>Parent Education</p>
                            </div>
                            <div className="col-md-6">
                                <p className="mb-2"><i className="fa fa-check text-primary me-3"></i>Hadith & Sunnah</p>
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>Mosque Development</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center bg-primary py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-2">
                            <i className="fa fa-mosque fa-5x text-white"></i>
                        </div>
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 className="mb-0">Every Muslim Needs To Realise The Importance Of The "Pillar" Of Islam</h1>
                        </div>
                        <div className="col-lg-3">
                            <a href="" className="btn btn-light py-2 px-4">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}


        {/* Activities Start */}
        <div className="container-fluid activities py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5 wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '700px'}}>
                    <p className="fs-5 text-uppercase text-primary">Activities</p>
                    <h1 className="display-3">Here Are Our Activities</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 col-xl-4">
                        <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.1s">
                            <i className="fa fa-mosque fa-4x text-dark"></i>
                            <div className="ms-4">
                                <h4>Mosque Development</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.</p>
                                <a href="" className="btn btn-primary px-3">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.3s">
                            <i className="fa fa-donate fa-4x text-dark"></i>
                            <div className="ms-4">
                                <h4>Charity & Donation</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.</p>
                                <a href="" className="btn btn-primary px-3">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-quran fa-4x text-dark"></i>
                            <div className="ms-4">
                                <h4>Quran Learning</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.</p>
                                <a href="" className="btn btn-primary px-3">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.1s">
                            <i className="fa fa-book fa-4x text-dark"></i>
                            <div className="ms-4">
                                <h4>Hadith & Sunnah</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.</p>
                                <a href="" className="btn btn-primary px-3">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.3s">
                            <i className="fa fa-book-open fa-4x text-dark"></i>
                            <div className="ms-4">
                                <h4>Parent Education</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.</p>
                                <a href="" className="btn btn-primary px-3">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-hands fa-4x text-dark"></i>
                            <div className="ms-4">
                                <h4>Help Orphans</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.</p>
                                <a href="" className="btn btn-primary px-3">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Activities Start */}


        {/* Events Start */}
        <div className="container-fluid event py-5">
            <div className="container py-5">
                <h1 className="display-3 mb-5 wow fadeIn" data-wow-delay="0.1s">Upcoming <span className="text-primary">Events</span></h1>
                <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.1s">
                    <div className="col-3 col-lg-2 pe-0">
                        <div className="text-center border-bottom border-dark py-3 px-2">
                            <h6>01 Jan 2045</h6>
                            <p className="mb-0">Fri 06:55</p>
                        </div>
                    </div>
                    <div className="col-9 col-lg-6 border-start border-dark pb-5">
                        <div className="ms-3">
                            <h4 className="mb-3">Milad Un Nabi</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                            <a href="#" className="btn btn-primary px-3">Join Now</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="overflow-hidden mb-5">
                            <img src="img/events-1.jpg" className="img-fluid w-100" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.3s">
                    <div className="col-3 col-lg-2 pe-0">
                        <div className="text-center border-bottom border-dark py-3 px-2">
                            <h6>01 Jan 2045</h6>
                            <p className="mb-0">Wed 11:30</p>
                        </div>
                    </div>
                    <div className="col-9 col-lg-6 border-start border-dark pb-5">
                        <div className="ms-3">
                            <h4 className="mb-3">Eid Ul Fitr</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                            <a href="#" className="btn btn-primary px-3">Join Now</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="overflow-hidden mb-5">
                            <img src="img/events-2.jpg" className="img-fluid w-100" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.5s">
                    <div className="col-3 col-lg-2 pe-0">
                        <div className="text-center border-bottom border-dark py-3 px-2">
                            <h6>01 Jan 2045</h6>
                            <p className="mb-0">Thu 11:30</p>
                        </div>
                    </div>
                    <div className="col-9 col-lg-6 border-start border-dark pb-5">
                        <div className="ms-3">
                            <h4 className="mb-3">Eud Ul Azha</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                            <a href="#" className="btn btn-primary px-3">Join Now</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="overflow-hidden mb-5">
                            <img src="img/events-3.jpg" className="img-fluid w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Events End */}


        {/* Sermon Start */}
        <div className="container-fluid sermon py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '700px'}}>
                    <p className="fs-5 text-uppercase text-primary">Sermons</p>
                    <h1 className="display-3">Join The Islamic Community</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-6 col-xl-4">
                        <div className="sermon-item wow fadeIn" data-wow-delay="0.1s">
                            <div className="overflow-hidden p-4 pb-0">
                                <img src="img/sermon-1.jpg" className="img-fluid w-100" alt="" />
                            </div>
                            <div className="p-4">
                                <div className="sermon-meta d-flex justify-content-between pb-2">
                                    <div className="">
                                        <small><i className="fa fa-calendar me-2 text-muted"></i><a href="" className="text-muted me-2">13 Nov 2023</a></small>
                                        <small><i className="fas fa-user me-2 text-muted"></i><a href="" className="text-muted">Admin</a></small>
                                    </div>
                                    <div className="">
                                        <a href="" className="me-1"><i className="fas fa-video text-muted"></i></a>
                                        <a href="" className="me-1"><i className="fas fa-headphones text-muted"></i></a>
                                        <a href="" className="me-1"><i className="fas fa-file-alt text-muted"></i></a>
                                        <a href="" className=""><i className="fas fa-image text-muted"></i></a>
                                    </div>
                                </div>
                                <a href="" className="d-inline-block h4 lh-sm mb-3">How to get closer to Allah</a>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                   <div className="col-lg-6 col-xl-4">
                        <div className="sermon-item wow fadeIn" data-wow-delay="0.3s">
                            <div className="overflow-hidden p-4 pb-0">
                                <img src="img/sermon-2.jpg" className="img-fluid w-100" alt="" />
                            </div>
                            <div className="p-4">
                                <div className="sermon-meta d-flex justify-content-between pb-2">
                                    <div className="">
                                        <small><i className="fa fa-calendar me-2 text-muted"></i><a href="" className="text-muted me-2">13 Nov 2023</a></small>
                                        <small><i className="fas fa-user me-2 text-muted"></i><a href="" className="text-muted">Admin</a></small>
                                    </div>
                                    <div className="">
                                        <a href="" className="me-1"><i className="fas fa-video text-muted"></i></a>
                                        <a href="" className="me-1"><i className="fas fa-headphones text-muted"></i></a>
                                        <a href="" className="me-1"><i className="fas fa-file-alt text-muted"></i></a>
                                        <a href="" className=""><i className="fas fa-image text-muted"></i></a>
                                    </div>
                                </div>
                                <a href="" className="d-inline-block h4 lh-sm mb-3">Importance of Hajj in Islam</a>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                   <div className="col-lg-6 col-xl-4">
                        <div className="sermon-item wow fadeIn" data-wow-delay="0.5s">
                            <div className="overflow-hidden p-4 pb-0">
                                <img src="img/sermon-3.jpg" className="img-fluid w-100" alt="" />
                            </div>
                            <div className="p-4">
                                <div className="sermon-meta d-flex justify-content-between pb-2">
                                    <div className="">
                                        <small><i className="fa fa-calendar me-2 text-muted"></i><a href="" className="text-muted me-2">13 Nov 2023</a></small>
                                        <small><i className="fas fa-user me-2 text-muted"></i><a href="" className="text-muted">Admin</a></small>
                                    </div>
                                    <div className="">
                                        <a href="" className="me-1"><i className="fas fa-video text-muted"></i></a>
                                        <a href="" className="me-1"><i className="fas fa-headphones text-muted"></i></a>
                                        <a href="" className="me-1"><i className="fas fa-file-alt text-muted"></i></a>
                                        <a href="" className=""><i className="fas fa-image text-muted"></i></a>
                                    </div>
                                </div>
                                <a href="" className="d-inline-block h4 lh-sm mb-3">Importance of “Piller” of Islam</a>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Sermon End */}


        {/* Blog Start */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <h1 className="display-3 mb-5 wow fadeIn" data-wow-delay="0.1s">Latest From <span className="text-primary">Our Blog</span></h1>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-6 col-xl-4">
                        <div className="blog-item wow fadeIn" data-wow-delay="0.1s">
                            <div className="blog-img position-relative overflow-hidden">
                                <img src="img/blog-1.jpg" className="img-fluid w-100" alt="" />
                                <div className="bg-primary d-inline px-3 py-2 text-center text-white position-absolute top-0 end-0">01 Jan 2045</div>
                            </div>
                            <div className="p-4">
                                <div className="blog-meta d-flex justify-content-between pb-2">
                                    <div className="">
                                        <small><i className="fas fa-user me-2 text-muted"></i><a href="" className="text-muted me-2">By Admin</a></small>
                                        <small><i className="fa fa-comment-alt me-2 text-muted"></i><a href="" className="text-muted me-2">12 Comments</a></small>
                                    </div>
                                    <div className="">
                                        <a href=""><i className="fas fa-bookmark text-muted"></i></a>
                                    </div>
                                </div>
                                <a href="" className="d-inline-block h4 lh-sm mb-3">Importance of “Piller” of Islam</a>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                aliquip ex ea commodo consequat.</p>
                                <a href="#" className="btn btn-primary px-3">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="blog-item wow fadeIn" data-wow-delay="0.3s">
                            <div className="blog-img position-relative overflow-hidden">
                                <img src="img/blog-2.jpg" className="img-fluid w-100" alt="" />
                                <div className="bg-primary d-inline px-3 py-2 text-center text-white position-absolute top-0 end-0">01 Jan 2045</div>
                            </div>
                            <div className="p-4">
                                <div className="blog-meta d-flex justify-content-between pb-2">
                                    <div className="">
                                        <small><i className="fas fa-user me-2 text-muted"></i><a href="" className="text-muted me-2">By Admin</a></small>
                                        <small><i className="fa fa-comment-alt me-2 text-muted"></i><a href="" className="text-muted me-2">12 Comments</a></small>
                                    </div>
                                    <div className="">
                                        <a href=""><i className="fas fa-bookmark text-muted"></i></a>
                                    </div>
                                </div>
                                <a href="" className="d-inline-block h4 lh-sm mb-3">How to get closer to Allah</a>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                aliquip ex ea commodo consequat.</p>
                                <a href="#" className="btn btn-primary px-3">More Details</a>
                            </div>
                        </div>
                    </div>
                   <div className="col-lg-6 col-xl-4">
                        <div className="blog-item wow fadeIn" data-wow-delay="0.5s">
                            <div className="blog-img position-relative overflow-hidden">
                                <img src="img/blog-3.jpg" className="img-fluid w-100" alt="" />
                                <div className="bg-primary d-inline px-3 py-2 text-center text-white position-absolute top-0 end-0">01 Jan 2045</div>
                            </div>
                            <div className="p-4">
                                <div className="blog-meta d-flex justify-content-between pb-2">
                                    <div className="">
                                        <small><i className="fas fa-user me-2 text-muted"></i><a href="" className="text-muted me-2">By Admin</a></small>
                                        <small><i className="fa fa-comment-alt me-2 text-muted"></i><a href="" className="text-muted me-2">12 Comments</a></small>
                                    </div>
                                    <div className="">
                                        <a href=""><i className="fas fa-bookmark text-muted"></i></a>
                                    </div>
                                </div>
                                <a href="" className="d-inline-block h4 lh-sm mb-3">Importance of Hajj in Islam</a>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                aliquip ex ea commodo consequat.</p>
                                <a href="#" className="btn btn-primary px-3">More Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Blog End */}


        {/* Team Start */}
        <div className="container-fluid team py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '700px'}}>
                    <p className="fs-5 text-uppercase text-primary">Our Team</p>
                    <h1 className="display-3">Meet Our Organizer</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-xl-5">
                        <div className="team-img wow zoomIn" data-wow-delay="0.1s">
                            <img src="img/team-1.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-xl-7">
                        <div className="team-item wow fadeIn" data-wow-delay="0.1s">
                            <h1>Anamul Hasan</h1>
                            <h5 className="fw-normal fst-italic text-primary mb-4">President</h5>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. aliquip ex ea commodo consequat.</p>
                            <div className="team-icon d-flex pb-4 mb-4 border-bottom border-primary">
                                <a className="btn btn-primary btn-lg-square me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-primary btn-lg-square me-2" href=""><i className="fab fa-twitter"></i></a>
                                <a href="#" className="btn btn-primary btn-lg-square me-2"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="btn btn-primary btn-lg-square"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="team-item wow zoomIn" data-wow-delay="0.2s">
                                    <img src="img/team-2.jpg" className="img-fluid w-100" alt="" />
                                    <div className="team-content text-dark text-center py-3">
                                        <div className="team-content-inner">
                                            <h5 className="mb-0">Mustafa Kamal</h5>
                                            <p className="text-dark">Imam</p>
                                            <div className="team-icon d-flex align-items-center justify-content-center">
                                                <a className="btn btn-primary btn-sm-square me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-primary btn-sm-square me-2" href=""><i className="fab fa-twitter"></i></a>
                                                <a href="#" className="btn btn-primary btn-sm-square me-2"><i className="fab fa-instagram"></i></a>
                                                <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="team-item wow zoomIn" data-wow-delay="0.4s">
                                    <img src="img/team-3.jpg" className="img-fluid w-100" alt="" />
                                    <div className="team-content text-dark text-center py-3">
                                        <div className="team-content-inner">
                                            <h5 className="mb-0">Nahiyan Momen</h5>
                                            <p className="text-dark">Teacher</p>
                                            <div className="team-icon d-flex align-items-center justify-content-center">
                                                <a className="btn btn-primary btn-sm-square me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-primary btn-sm-square me-2" href=""><i className="fab fa-twitter"></i></a>
                                                <a href="#" className="btn btn-primary btn-sm-square me-2"><i className="fab fa-instagram"></i></a>
                                                <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="team-item wow zoomIn" data-wow-delay="0.6s">
                                    <img src="img/team-4.jpg" className="img-fluid w-100" alt="" />
                                    <div className="team-content text-dark text-center py-3">
                                        <div className="team-content-inner">
                                            <h5 className="mb-0">Asfaque Ali</h5>
                                            <p className="text-dark">Volunteer</p>
                                            <div className="team-icon d-flex align-items-center justify-content-center">
                                                <a className="btn btn-primary btn-sm-square me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-primary btn-sm-square me-2" href=""><i className="fab fa-twitter"></i></a>
                                                <a href="#" className="btn btn-primary btn-sm-square me-2"><i className="fab fa-instagram"></i></a>
                                                <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Team End */}


        {/* Testiminial Start */}
        <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '700px'}}>
                    <p className="fs-5 text-uppercase text-primary">Testimonial</p>
                    <h1 className="display-3">What People Say About Islam</h1>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.1s">
                    <div className="testimonial-item">
                        <div className="d-flex mb-3">
                            <div className="position-relative">
                                <img src="img/testimonial-1.jpg" className="img-fluid" alt="" />
                                <div className="btn-md-square bg-primary rounded-circle position-absolute" style={{top: '25px', left: '-25px'}}>
                                    <i className="fa fa-quote-left text-dark"></i>
                                </div>
                            </div>
                            <div className="ps-3 my-auto ">
                                <h5 className="mb-0">Full Name</h5>
                                <p className="m-0">Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="d-flex">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                            <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do tempor ut labore et dolore magna aliqua. Ut enim ad minim quis.</p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="d-flex mb-3">
                            <div className="position-relative">
                                <img src="img/testimonial-2.jpg" className="img-fluid" alt="" />
                                <div className="btn-md-square bg-primary rounded-circle position-absolute" style={{top: '25px', left: '-25px'}}>
                                    <i className="fa fa-quote-left text-dark"></i>
                                </div>
                            </div>
                            <div className="ps-3 my-auto ">
                                <h5 className="mb-0">Full Name</h5>
                                <p className="m-0">Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="d-flex">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                            <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do tempor ut labore et dolore magna aliqua. Ut enim ad minim quis.</p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="d-flex mb-3">
                            <div className="position-relative">
                                <img src="img/testimonial-3.jpg" className="img-fluid" alt="" />
                                <div className="btn-md-square bg-primary rounded-circle position-absolute" style={{top: '25px', left: '-25px'}}>
                                    <i className="fa fa-quote-left text-dark"></i>
                                </div>
                            </div>
                            <div className="ps-3 my-auto ">
                                <h5 className="mb-0">Full Name</h5>
                                <p className="m-0">Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="d-flex">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                            <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do tempor ut labore et dolore magna aliqua. Ut enim ad minim quis.</p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="d-flex mb-3">
                            <div className="position-relative">
                                <img src="img/testimonial-4.jpg" className="img-fluid" alt="" />
                                <div className="btn-md-square bg-primary rounded-circle position-absolute" style={{top: '25px', left: '-25px'}}>
                                    <i className="fa fa-quote-left text-dark"></i>
                                </div>
                            </div>
                            <div className="ps-3 my-auto ">
                                <h5 className="mb-0">Full Name</h5>
                                <p className="m-0">Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="d-flex">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                            <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do tempor ut labore et dolore magna aliqua. Ut enim ad minim quis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Testiminial End */}


        
    </>
  );
}

export default Home;
