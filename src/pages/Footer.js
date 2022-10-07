import React from "react";

class Footer extends React.Component {

    render() {
        return (
            <div className="">
                <footer id="footer" class="footer mx-0" style={{ backgroundColor: "rgb(228, 228, 228)" }}>
                    <div class="container p-5 text-center">
                        <div class="row gy-3">
                            <div class="col-lg-3 col-md-6 d-flex">
                                <i class="bi bi-geo-alt icon"></i>
                                <div>
                                    <h4>Address</h4>
                                    <p>
                                        108, Maharana Pratap Street <br />
                                        New Delhi, 465022 - INDIA<br />
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-links d-flex">
                                <i class="bi bi-telephone icon"></i>
                                <div>
                                    <h4>Reservations</h4>
                                    <p>
                                        <strong>Phone:</strong> +91 95894 55488<br />
                                        <strong>Email:</strong> info@example.com<br />
                                    </p>
                                </div>

                                <div class="col-lg-3 col-md-6 footer-links d-flex ml-5">
                                    <i class="bi bi-clock icon"></i>
                                    <div>
                                        <h4>Opening Hours</h4>
                                        <p>
                                            <strong>Mon-Sat: 11AM</strong> - 23PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-5 mb-5" />
                        <div class="container mt-5">
                            <div class="footer2">
                                <div class="container-fluid">
                                    <div class="row" >
                                        <div class="col-lg-12 col-md-12 col-sm-12 text-center mb-5">
                                            <h5 id="foot3">&copy; Copyright till 2030
                                                All rights reserved.
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }

}

export default Footer;