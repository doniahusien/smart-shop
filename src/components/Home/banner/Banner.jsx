import React from 'react'
import remov2 from '../../../assests/imgs/product/2-removebg-preview (1) 1.svg'
import remov1 from '../../../assests/imgs/product/1-removebg-preview (1) 1.svg'
import { Container, Col, Row } from 'react-bootstrap';
import style from './styles/style.module.css'
const Banner = () => {
    return (
        <>
            <section className={`${style.row}`}>
                <div className={`${style.content}`} style={{ 'backgroundColor': "#FFDBDF" }}>
                    <div className={style.texts}>
                        <h4>خصم كبير </h4>
                        <h2>فساتين بناتي</h2>
                        <h6>تسوق الان</h6>
                    </div>
                    <div className={style.image}>
                        <img src={remov2} alt="" />
                    </div>
                </div>

                <div className={style.content} style={{ 'backgroundColor': "#D6F7FE" }}>
                    <div className={style.texts}>
                        <h2>ملابس اطفال </h2>
                        <h4>خصم 50%</h4>
                        <h6>تسوق الان</h6>
                    </div>
                    <div className={style.image}>
                        <img src={remov1} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner