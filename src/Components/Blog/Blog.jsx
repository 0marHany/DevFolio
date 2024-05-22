import React from 'react'
import img1 from '../../image/post-1.jpg'
import img2 from '../../image/post-2.jpg'
import img3 from '../../image/images task04.jpg'
import profile from "../../image/images task03.jpg";
import style from './style.module.css'

export default function Blog() {
    const arrayImage = [{img:img1,titel:"Travel"}, {img:img2,titel:"Web design"}, {img:img3,titel:"Web developer"}]
    return (<>
        <div className="container my-5 " id="Blog">
            <div className="text-center mb-5 ">
                <h2 className=" fw-bold fa-3x  ">BLOG</h2>
                <p className='textLine pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="row">
                {arrayImage.map((e,index) => (<div className="col-md-4" key={index}>
                    <div className='position-relative '>
                        <img src={e.img} className={style.imgCard} alt="" />
                        <div className='bg-primary text-white position-absolute translate-middle start-50 px-3 py-1 rounded '>{e.titel}</div>
                    </div>
                    <div className='bg-white py-3 '>
                        <h4 className=''>See more ideas about Travel</h4>
                        <p className='m-0'>Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center p-2 border  border-1 m-0 '>
                        <div className=''>
                            <img src={profile} className={`${style.prodileImg} rounded-circle me-2 `} alt="" />
                            <span className={style.name}>Morgan Freeman</span>
                        </div>
                        <div>
                            <i className='far fa-clock me-2'></i>
                            <span className=''>10 min</span>
                        </div>

                    </div>
                </div>))}

            </div>
        </div>
    </>
    )
}
