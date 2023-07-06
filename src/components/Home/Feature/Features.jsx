import React from 'react';
import styles from './styling/style.module.css';
import gift from '../../../assests/icons/Gift.svg';
import wallet from '../../../assests/icons/wallet _remove.svg'
import phone from '../../../assests/icons/mobile.svg'
import van from '../../../assests/icons/Group 8954.svg'
const Feature = () => {
    const features = [
        {
            id: 1,
            title: 'عروض حصريه',
            desc: 'خصومات كبيرة علي منتجاتنا',
            src: gift,
        },
        {
            id: 2,
            title: 'إسترجاع الاموال',
            desc: 'استرداد امن لأموالك او الاسترداد',
            src: wallet,
        },
        {
            id: 3,
            title: 'دعم فني',
            desc: 'دعم علي مدار الساعه',
            src: phone,
        },
        {
            id: 4,
            title: 'توصيل مجاني',
            desc: 'للطلبات اعلي من 200جنية',
            src: van,
        },
    ];

    return (
        <section className={styles.section}>
            {features.map((item) => (
                <div className={styles.feature} key={item.id}>
                    <div className={styles.textContainer}>
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                    </div>
                    <div className={styles.image}>
                        <img src={item.src} alt=""  />
                    </div>
                    
                </div>
            ))}
        </section>
    );
};

export default Feature;