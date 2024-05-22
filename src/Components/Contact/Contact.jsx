import React from 'react'
import style from './style.module.css'
export default function Contact() {
    const submit = (e) => {
        e.preventDefault()
    }
    return (<>
        <div className={style.contactUs} id="Contact">
            <div className="container">
                <form onSubmit={submit}>
                    <div className="row">
                        <div className="col-md-6 mb-3 ">
                            <h3 className='headerText'>Send Message Us</h3>
                            <input type="text" className='form-control my-3' placeholder='Your Name' />
                            <input type="email" className='form-control my-3' placeholder='Your Email' />
                            <input type="text" className='form-control my-3' placeholder='Subject' />
                            <textarea name="" id=""  cols="80" rows="7" className='form-control my-3' placeholder='Message'></textarea>
                            <div className='d-flex  justify-content-center mt-4'>
                                <button className='btn btn-primary px-3 py-2 rounded-top-5 rounded-end-5 rounded-bottom-5 fs-4 mt-3    '>Send Message</button>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <h3 className='headerText'>Get in Touch</h3>
                            <p className='lead text-muted '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>
                            <div className="socialIcon">
                                <div className="d-flex">
                                    <i className='fas fa-map-marker-alt fa-fw pt-1'></i>
                                    <p>329 WASHINGTON ST BOSTON, MA 02108</p>
                                </div>
                                <div className="d-flex">
                                    <i className='fas fa-mobile-alt fa-fw pt-1'></i>
                                    <p>(617) 557-0089</p>
                                </div>
                                <div className="d-flex">
                                    <i className='far fa-envelope fa-fw pt-1'></i>
                                    <p>contact@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex mt-3">
                                <div className={`${style.roundedIcon}`}>
                                    <i className='fab fa-facebook text-primary fs-4 '></i>
                                </div>
                                <div className={`${style.roundedIcon}`}>
                                    <i className='fab fa-twitter text-primary fs-4 '></i>
                                </div>
                                <div className={`${style.roundedIcon}`}>
                                    <i className='fab fa-linkedin text-primary fs-4 '></i>
                                </div>
                                <div className={`${style.roundedIcon}`}>
                                    <i className='fab fa-instagram text-primary fs-4 '></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div >
    </>
    )
}
