import "./style.css";
import my from './img/124.jpg'; // Import the image
export function Home() {
    return (
        <div>
            <header class="header">
                <div class="container">
                    <ul class="social-icons pt-3">
                        <li class="social-item"><a class="social-link text-light" href="https://www.linkedin.com/in/godavarthi-keerthi-sree-1a2997242/"><i class="ti-linkedin" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link text-light" href="https://www.instagram.com/keerthisree_2029/"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link text-light" href="https://github.com/Keerthi2029"><i class="ti-github" aria-hidden="true"></i></a></li>
                    </ul>
                    <div class="header-content">
                        <h4 class="header-subtitle" >Hello, I am</h4>
                        <h1 class="header-title">Keerthi Sree</h1>
                        <h6 class="header-mono" >Developer</h6>

                    </div>
                </div>
            </header>
        </div>
    )
}

export function About() {
    return (
        <div>
            <section>
                <div class="container-fluid">
                    <div id="about" class="row about-section">
                        <div class="col-lg-4 about-card">
                            <h3 class="font-weight-light">Who am I ?</h3>
                            <span class="line mb-5"></span>
                            <h5 class="mb-3">A Developer Located In Our Lovely Earth</h5>
                            <p class="mt-20">I am a core student at VIT-AP University, passionate about using technology to
                                solve real-world problems. I am an excellent communicator and collaborator. I am committed to
                                excellence and staying up-to-date on the latest tech trends. I believe that collaboration is
                                essential for success, and I am eager to contribute to the tech industry in a meaningful
                                way.<br /> Let's explore tech together!</p>

                            <a href="https://drive.google.com/file/d/1x5QeeoHIwiqHp-mXg_eYynlNkgvEUn0l/view?usp=sharing"><button
                                class="btn btn-outline-danger"><i class="icon-down-circled2 "></i>Resume</button></a>
                        </div>
                        <div class="col-lg-4 about-card">
                            <h3 class="font-weight-light">Personal Info</h3>
                            <span class="line mb-5"></span>
                            <ul class="mt40 info list-unstyled">
                                <li><span>Birthdate</span> : 29/06/2003</li>
                                <li><span>Email</span> : godavarthi.keerthisree2003@gmail.com</li>
                                <li><span>Phone</span> : + 91 6309532527</li>
                                <li><span>Address</span> : Flat 201 Sai Brindavanam Apartments,Vidya Nagar,PONNUR, Guntur
                                    522124.</li>
                            </ul>
                            <ul class="social-icons pt-3">
                                <li class="social-item"><a class="social-link" href="https://www.linkedin.com/in/godavarthi-keerthi-sree-1a2997242/"><i class="ti-linkedin"
                                    aria-hidden="true"></i></a></li>
                                <li class="social-item"><a class="social-link" href="https://www.instagram.com/keerthisree_2029/"><i class="ti-instagram"
                                    aria-hidden="true"></i></a></li>
                                <li class="social-item"><a class="social-link" href="https://github.com/Keerthi2029"><i class="ti-github"
                                    aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 about-card">
                            <h3 class="font-weight-light">My Expertise</h3>
                            <span class="line mb-5"></span>
                            <div class="row">
                                <div class="col-1 text-danger pt-1"><i class="ti-widget icon-lg"></i></div>
                                <div class="col-10 ml-auto mr-3">
                                    <h6>Collaboration & Communication</h6>
                                    <p class="subtitle"> &nbsp;</p>
                                    <hr />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1 text-danger pt-1"><i class="ti-paint-bucket icon-lg"></i></div>
                                <div class="col-10 ml-auto mr-3">
                                    <h6>Problem Solving</h6>
                                    <p class="subtitle">&nbsp;</p>
                                    <hr />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1 text-danger pt-1"><i class="ti-stats-up icon-lg"></i></div>
                                <div class="col-10 ml-auto mr-3">
                                    <h6>Time & Project Management</h6>
                                    <p class="subtitle">&nbsp;</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export function Education() {
    return (
        <div>
            <section class="section" id="Education">
                <div class="container">
                    <h2 class="mb-5"><span class="text-danger">My</span> Education</h2>
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="card">
                                <div class="card-header">
                                    <div class="mt-2">
                                        <h4>Experience</h4>
                                        <span class="line"></span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h6 class="title text-danger">Photon Club</h6>
                                    <p>Designer-Co-Lead</p>
                                    <p>2021 - Present</p>
                                    <p class="subtitle">Nominated as Designer on numerous occasions and also been complimented by supervisor or co-workers.</p>
                                    <hr />
                                    <h6 class="title text-danger">Kalki Personality Development</h6>
                                    <p>External Department-Co-Lead</p>
                                    <p>2022 - Present</p>
                                    <p class="subtitle">Organised numerous events.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card">
                                <div class="card-header">
                                    <div class="mt-2">
                                        <h4>Education</h4>
                                        <span class="line"></span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h6 class="title text-danger">Bachelor of Technology</h6>
                                    <p>VELLORE INSTITUTE OF TECHNOLOGY</p>
                                    <p class="subtitle">2021 - Present</p>
                                    <p class="subtitle">GPA secured : 9.22</p>
                                    <hr />
                                    <h6 class="title text-danger">INTERMEDIATE</h6>
                                    <p>Sri Gayatri Educational Institutions</p>
                                    <p class="subtitle">2019 - 2021</p>
                                    <p class="subtitle">MARKS secured : 978</p>
                                    <hr />
                                    <h6 class="title text-danger">SECONDARY EDUCATION</h6>
                                    <p>Sri Chaitanya Techno School</p>
                                    <p class="subtitle">2018 - 2019</p>
                                    <p class="subtitle">GPA secured : 10.0</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-header">
                                    <div class="pull-left">
                                        <h4 class="mt-2">Skills</h4>
                                        <span class="line"></span>
                                    </div>
                                </div>
                                <div class="card-body pb-2">
                                    <h6>JAVA</h6>
                                    <div class="progress mb-3">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "80%", ariavaluenow: "25", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                                    </div>
                                    <h6>PYTHON</h6>
                                    <div class="progress mb-3">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "80%", ariavaluenow: "25", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                                    </div>
                                    <h6>MYSQL</h6>
                                    <div class="progress mb-3">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "65%", ariavaluenow: "50", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                                    </div>
                                    <h6>R-PROGRAMMING</h6>
                                    <div class="progress mb-3">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "60%", ariavaluenow: "75", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                                    </div>
                                    <h6>MATLAB</h6>
                                    <div class="progress mb-3">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "70%", ariavaluenow: "75", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                                    </div>
                                    <h6>HTML</h6>
                                    <div class="progress mb-3">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "100%", ariavaluenow: "75", ariavaluemin: "0", ariavaluema: "100" }}></div>
                                    </div>
                                    <h6>CSS</h6>
                                    <div class="progress mb-3">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "90%", ariavaluenow: "75", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                                    </div>
                                    <h6>JAVASCRIPT</h6>
                                    <div class="progress mb-3">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "75%", ariavaluenow: "75", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                                    </div>
                                    <h6>REACT</h6>
                                    <div class="progress mb-3">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "80%", ariavaluenow: "75", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                                    </div>
                                    <h6>SPRING BOOT</h6>
                                    <div class="progress mb-3">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "70%", ariavaluenow: "75", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export function Projects() {
    return (
        <div>
            <section class="section bg-custom-gray" id="portfolio">
                <div class="container">
                    <h1 class="mb-5"><span class="text-danger">My</span> Projects</h1>
                    <div class="portfolio">

                        <div class="portfolio-container">
                            <div class="row">
                                <div class="col-md-6 col-lg-4 web new">
                                    <div class="portfolio-item">
                                        <img src="https://i2.wp.com/files.123freevectors.com/wp-content/solidbackground/wild-watermelon-free-solidcolor-background.jpg?w=800&q=95" />
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/web-1.jpg"></a>
                                            <div class="text-holder">
                                                <h6 class="title">HOTSTAR CLONE</h6>
                                                <p class="subtitle">Cloning of HOTSTAR using HTML, CSS and JavaScript</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 web new">
                                    <div class="portfolio-item">
                                        <img src="https://getsetproject.com/uploads/1-1st%20Ss-1667120668.JPG" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/web-2.jpg"></a>
                                            <div class="text-holder">
                                                <h6 class="title">HOSPITAL <br /> MANAGEMENT<br />SYSTEM</h6>
                                                <p class="subtitle">Deployed in AWS Cloud</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 advertising new">
                                    <div class="portfolio-item">
                                        <img src="https://www.engineersgarage.com/wp-content/uploads/2019/07/Circuit-Diagram-Arduino-Based-Solar-Panel-Electrical-Parameters-Monitor.png" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/advertising-2.jpg"></a>
                                            <div class="text-holder">
                                                <h6 class="title">MONITORING <br />PV SOLAR CELL</h6>
                                                <p class="subtitle">Monitored PV SOLAR CELL using AURDINO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



