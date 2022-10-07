import '../pages/AboutUs.css'
import logo from '../img/kyn logo.png';
import man_1 from '../img/man_1.jpg';
import man_2 from '../img/man_2.jpg';
import man_3 from '../img/man_3.jpg';
import Footer from './Footer';

const AboutUs = () => {
    return (

        <div class="background">
            <div class="about-section">
                <img src={logo} alt="Logo" style={{borderRadius:'200px'}} />
                <h1>About Us</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <h2 style={{ textAlign: "center" }}>Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src={man_1} alt="Jane" style={{ width: "100%", height:"230px" }} />
                        <div class="container">
                            <h2>Jane Doe</h2>
                            <p class="title">CEO and Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane123@gmail.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={man_2} alt="Mike" style={{ width: "100%", height:"230px"}} />
                        <div class="container">
                            <h2>Mike Ross</h2>
                            <p class="title">Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>mike46@gmail.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={man_3} alt="John" style={{ width: "100%", height:"230px" }} />
                        <div class="container">
                            <h2>John Cena</h2>
                            <p class="title">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john000@gmail.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    )

}

export default AboutUs;