import React, { useState, useEffect } from 'react';
import classes from './index.module.scss';
import SlideClass from '../../services/Slides_Service';
import { SlideInterface } from '../Slide';
import Slide from '../Slide';
import NavigationSlies from '../NavigationSlides';

export interface SlidesProps {

}

const Slides: React.FC<SlidesProps> = () => {

    const [slides, setSlides] = useState<SlideInterface[]>([]);
    const [currentSlide, setCurrentSlide] = useState<SlideInterface>({ id: 0, url: "" });
    const [loading, setLoading] = useState(false);
    const [Navslides, setNavSlides] = useState<SlideInterface[]>([]);


    const getSlides = async () => {
        const slides = await SlideClass.getSlides();
        setSlides(slides);
        setNavSlides(slides.slice(0, 5));
        if (slides.length > 0) setCurrentSlide(slides[0]);
    }

    useEffect(() => {
        getSlides();
    }, []);

    const getCurrentSlide = (bool: boolean) => {
        const currentSlideIndex = slides.findIndex(slide => slide.id === currentSlide.id);
        if (bool) {
            if (currentSlideIndex + 1 >= slides.length) return slides[currentSlideIndex];
            else return slides[currentSlideIndex + 1];
        } else {
            if (currentSlideIndex - 1 < 0) return slides[currentSlideIndex];
            else return slides[currentSlideIndex - 1];
        }
    };

    return (
        <>
            {loading && <div></div>}
            {!loading && <div className={classes.slides}>
                <div className="row">
                    <i className="fa fa-chevron-left fa-2x col-1" onClick={() => setCurrentSlide(getCurrentSlide(false))} aria-hidden="true"></i>
                    <div className="col-10">
                        <Slide slide={currentSlide} />
                    </div>
                    <i className="fa fa-chevron-right fa-2x col-1" onClick={() => setCurrentSlide(getCurrentSlide(true))} aria-hidden="true"></i>
                </div>
                <div className={`row ${classes.navSlides}`}>
                    <NavigationSlies slides={Navslides} />
                </div>
            </div>}
        </>
    );
}

export default Slides;