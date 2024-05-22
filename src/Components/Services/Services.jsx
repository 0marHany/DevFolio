import React from 'react'
import style from './style.module.css'


export default function Services() {
    const sercivesArray = [
        { icon: 'fas fa-briefcase', head: 'WEB DESIGN', },
        { icon: 'fas fa-tasks', head: 'WEB DEVELOPMENT', },
        { icon: 'far fa-chart-bar', head: 'PHOTOGRAPHY', },
        { icon: 'fas fa-binoculars', head: 'RESPONSIVE DESIGN', },
        { icon: 'fas fa-sun', head: 'GRAPHIC DESIGN', },
        { icon: 'far fa-calendar-alt', head: 'MARKETING SERVICES', }]
    return (<>

        <div className="container pt-3" id="SERVICES">
            <div className="text-center ">
                <h2 className=" fw-bold fa-3x mt-5">SERVICES</h2>
                <p className='textLine pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="row g-3">
                {sercivesArray.map((e, index) => <div className="col-md-4" key={index}>
                    <div className={`${style.serv} text-center bg-white rounded-4 py-5 shadow `}>
                        <div className={`${style.rounderDev} m-auto`}>
                            <i className={`${e.icon} fa-3x`}></i>
                        </div>
                        <h3 className='pt-3'>{e.head}</h3>
                        <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                    </div>
                </div>
                )}
            </div>
        </div>
        <div className={`${style.bgWork} mt-5`}>
            <div className={`${style.bluelayer} d-flex justify-content-center  align-items-center `}>
                <div className="container  ">
                    <div className="row gy-5  text-center text-white   ">
                        <div className="col-md-3   ">
                            <div className={`${style.rounderDev}  border-white m-auto mb-3 `}>
                                <i className='fas fa-check fa-2x text-white ' ></i>
                            </div>
                            <h5>450</h5>
                            <p>WORKS COMPLETED</p>
                        </div>
                        <div className="col-md-3 ">
                            <div className={`${style.rounderDev}  border-white m-auto mb-3`}>
                                <i className='far fa-newspaper fa-2x text-white ' ></i>
                            </div>
                            <h5>25</h5>
                            <p>WORKS COMPLETED</p>
                        </div>
                        <div className="col-md-3  ">
                            <div className={`${style.rounderDev}  border-white m-auto mb-3 `}>
                                <i className='fas fa-user-friends fa-2x text-white ' ></i>
                            </div>
                            <h5>250</h5>
                            <p>TOTAL CLIENTS</p>
                        </div>
                        <div className="col-md-3 ">
                            <div className={`${style.rounderDev}  border-white  m-auto mb-3`}>
                                <i className='fas fa-award fa-2x text-white ' ></i>
                            </div>
                            <h5>48</h5>
                            <p>AWARD WON</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
