import React, { useContext, useEffect, useRef } from 'react'
import profile from "../../image/images task03.jpg";
import styles from './styles.module.css'
import { AboutContext } from '../Context/Context';

export default function About() {
    const { setAboutOffset } = useContext(AboutContext);
    const aboutRef=useRef(null)
    
    useEffect(() => {
        if (aboutRef.current) {
            setAboutOffset(aboutRef.current.offsetTop);
            console.log("aboutRef.current.offsetTop:", aboutRef.current.offsetTop);
        }
    }, [setAboutOffset]);
    // setAboutOffset(aboutRef.current.offsetTop)
    return (<div ref={aboutRef} className="container pt-5" id='About'>
        <div className="bg-white mt-3 shadow rounded-3 p-5 ">
            <div className="row">
                <div className="col-md-6">
                    <div className='row p-0 m-0 gx-0 '>
                        <div className="col-md-4 ">
                            <img src={profile} className='w-100 rounded-3' alt="" />
                        </div>
                        <div className="col-md-8 mb-4 ">
                            <ul >
                                <li className='p-0 m-0'><p className='pt-1'><span className='fw-bold '>Name</span>: Morgan Freeman</p></li>
                                <li className='p-0 m-0'><p className='pt-1'><span className='fw-bold '>Profile</span>: full stack developer</p></li>
                                <li className='p-0 m-0'><p className='pt-1'><span className='fw-bold '>Email</span>: contact@example.com</p></li>
                                <li className='p-0 m-0'><p className='pt-1'><span className='fw-bold '>Phone</span>: (617) 557-0089</p></li>
                            </ul>
                        </div>
                        <div>
                            <h5>skils</h5>
                            <div style={{ width: "90%" }} className="mt-3 d-flex justify-content-between">
                                <h3 className='h6'>HTML</h3>
                                <p>90%</p>
                            </div>

                            <div className="progress mb-2 " role="progress-bar-animated " aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar " style={{ width: "90%" }}></div>
                            </div>

                            <div style={{ width: "80%" }} className="d-flex justify-content-between">
                                <h3 className='h6'>CSS</h3>
                                <p>80%</p>
                            </div>
                            <div className="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar  " style={{ width: "80%" }}></div>
                            </div>

                            <div style={{ width: "55%" }} className="d-flex justify-content-between">
                                <h3 className='h6'>JAVASCRIPT</h3>
                                <p>55%</p>
                            </div>
                            <div className="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar  " style={{ width: "55%" }}></div>
                            </div>

                            <div style={{ width: "95%" }} className="d-flex justify-content-between">
                                <h3 className='h6'>php</h3>
                                <p>95%</p>
                            </div>
                            <div className="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar  " style={{ width: "95%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className='headerText'>  About me</h3>
                    <p className='fs-5 lead' >Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.

                        <br /><br />Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.

                        <br /><br />Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                </div>
            </div>
        </div>
    </div >

    )
}
