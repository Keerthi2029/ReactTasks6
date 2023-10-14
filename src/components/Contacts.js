import "./style.css";

function Contact() {


    return (
        <div>
            <div class="section contact" id="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="contact-form-card">
                                <h4 class="contact-title">Send a message</h4>
                                <form >
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="Name *" required />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" type="email" placeholder="Email *" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" id="message" placeholder="Message" required></textarea>
                                    </div>

                                    <div class="form-group ">
                                        <button type="submit" class="form-control btn btn-primary" >Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="contact-info-card">
                                <h4 class="contact-title">Get in touch</h4>
                                <div class="row mb-2">
                                    <div class="col-1 pt-1 mr-1">
                                        <i class="ti-mobile icon-md"></i>
                                    </div>
                                    <div class="col-10 ">
                                        <h6 class="d-inline">Phone : <br /> <span class="text-muted">+ (91) 6309532527</span></h6>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-1 pt-1 mr-1">
                                        <i class="ti-map-alt icon-md"></i>
                                    </div>
                                    <div class="col-10">
                                        <h6 class="d-inline">Address :<br /> <span class="text-muted">Flat 201,Sai Brindavanam Apartments Modugula Constructions, Vidya Nagar,PONNUR, Guntur 522124.</span></h6>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-1 pt-1 mr-1">
                                        <i class="ti-envelope icon-md"></i>
                                    </div>
                                    <div class="col-10">
                                        <h6 class="d-inline">Email :<br /> <span class="text-muted">godavarthi.keerthisree2003@gmail.com</span></h6>
                                    </div>
                                </div>
                                <ul class="social-icons pt-4">
                                    <li class="social-item"><a class="social-link text-dark" href="https://www.linkedin.com/in/godavarthi-keerthi-sree-1a2997242/"><i class="ti-linkedin" aria-hidden="true"></i></a></li>
                                    <li class="social-item"><a class="social-link text-dark" href="https://www.instagram.com/keerthisree_2029/"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                                    <li class="social-item"><a class="social-link text-dark" href="https://github.com/Keerthi2029"><i class="ti-github" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default Contact;