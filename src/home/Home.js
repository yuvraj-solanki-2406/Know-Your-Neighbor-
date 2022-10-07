import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import login_background from '../img/login_background.jpg';
import shopping from '../img/shopping.jpg';
import mobile from '../img/mobile.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <img src={login_background} id='login_background' />
                <div className='text-center' style={{ color: '#007bff', fontSize: '18px', position: 'inherit' }}>
                    <h1 style={{ color: 'smokewhite' }}>KNOW YOUR NEIGHBOUR</h1>
                    <span className='text-center text-muted'>Use the Shops located at your nearing places and
                        save time and energy of going out. <br />
                        <b>Happy Shoping!!</b>
                    </span>
                </div>

                <div className='container'>
                    <div className='col-md-6 m-5'>
                        <p className='text-justify' style={{ color: 'white', fontSize: '16px', fontWeight: 'bold', width: '400px' }}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>

                        <img src={shopping} style={{ width: "450px", marginRight: "-479px", marginTop: "-372px" }} className="float-right col-md-12" />
                    </div>
                </div>
                <div className='container'>
                    <div className='col-md-3' style={{ float: 'left', display: 'inline-block' }}>
                        <div class="card" style={{ width: '18rem' }}>
                            <img class="card-img-top" src={mobile} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Mobiles</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>
                                    The superior solutions at one! Smarter, Safer, Smoother
                                    Now shop the smart way!<br />
                                    Widest Choice and Best Offers Guaranteed
                                    Here to inspire</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3' style={{ display: 'inline-block' }}>
                        <div class="card" style={{ width: '18rem', display: 'inline-block' }}>
                            <img class="card-img-top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnV-9EI9JYAtxkt-Pewf9FzC64-IBw2aOqrtWP2zA48g&s' alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">City Marekt</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>
                                    A complete place for the complete shopping Convenient products in lower quality. Shopping becomes simple here<br />
                                    Get the best quality products at the lowest prices
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3' style={{ float: 'right', display: 'inline-block' }}>
                        <div class="card" style={{ width: '18rem', display: 'inline-block' }}>
                            <img class="card-img-top" src='https://trafft.com/wp-content/uploads/2021/02/slogan1.jpg' alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Royal Gym</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>
                                    Exercise your mind and body. The healthy way of life company.
                                    Your body hears everything that your mind says.
                                    Push harder than yesterday if you want a different tomorrow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer id="footer" class="footer m-3 mx-0" style={{backgroundColor:"rgb(228, 228, 228)"}}>
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

export default Home;