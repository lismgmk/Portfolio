import React from "react";
import slide1 from "../../assets/images/slide1me.jpg";
import slide2 from "../../assets/images/slide2progects.jpg";
import slide3 from "../../assets/images/slide3skils.png";
import {CustomSlide} from "./CustomSlide";
import elseStyle from "../../Styles/Styles.module.scss";
import style from "./slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SliderMain() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    }

    const slideInfo = [
        {
            backgroundImage: {backgroundImage: `url(${slide1})`},
            text: "About me",
            description: "Hello, I am a person who has a strong passion for programming.",
            buttonName: "know me better",
            nameId: 'main'
        },
        {
            backgroundImage: {backgroundImage: `url(${slide2})`},
            text: "My progect",
            description: "My freelance projects",
            buttonName: "view my work",
            nameId: 'progects'
        },
        {
            backgroundImage: {backgroundImage: `url(${slide3})`},
            text: "My skills",
            description: "I am improving my skills in this direction and expanding them with new technologies.",
            buttonName: "what i do",
            nameId: 'skils'
        }
    ]

    const getObj =
        slideInfo.map((i, index)=>{
            console.log(i.text)
            return<>
                <CustomSlide
                    styleBg={i.backgroundImage}
                    text={i.text}
                    description={i.description}
                    buttonName={i.buttonName}
                    index={index+1}
                    nameId={i.nameId}
                />
            </>
        })

    return (
        <div className={` ${style.sliderMain} `}>
            <div className={`${elseStyle.container}`}>
                <Slider {...settings}>
                    {getObj}
                </Slider>
            </div>
        </div>
    )
}