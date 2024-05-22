import React from 'react'
import img1 from '../../image/images task05.jpg'
import img2 from '../../image/images task06.jpg'
import img3 from '../../image/images task07.jpg'
import img4 from '../../image/images task08.jpg'
import img5 from '../../image/images task09.jpg'
import img6 from '../../image/images task10.jpg'

import style from './style.module.css'
export default function Portfolio() {
    const imageArray = [
        { image: img1, title: "Lorem impsum dolor." },
        { image: img2, title: "Loreda Cuno Nere." },
        { image: img3, title: "Mavrito Lana Dere." },
        { image: img4, title: "Bindo Laro Cado." },
        { image: img5, title: "Studio Lena Mado." },
        { image: img6, title: "Studio Big Bang." },
    ]
    return (<>
        <div className="container my-5 " id="Work">
            <div className="text-center mb-5 ">
                <h2 className=" fw-bold fa-3x  ">PORTFOLIO</h2>
                <p className='textLine pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="row g-5">
                {imageArray.map((e,index)=>(<div key={index} className="col-md-4">
                    <div className={`${style.content} shadow `}>
                        <div className={style.contetnImg}>
                            <img src={e.image} className={`${style.image} w-100 image`} alt="" />
                        </div>
                        <div className={`${style.indexs} p-3 bg-white d-flex justify-content-between`}>
                            <div>
                                <p className='fs-5 fw-bold '>{e.title}</p>
                                <p><span className='text-primary'>Web Design</span> / 18 Sep. 2018</p>
                            </div>
                            <div className={style.rounderDev}>
                                <i className='fas fa-plus text-primary fa-2xl fw-bold '></i>
                            </div>
                        </div>
                    </div>
                </div>))}
                
            </div>
        </div>
    </>
    )
}
