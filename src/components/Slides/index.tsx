import React, { useState, useEffect } from 'react';
import classes from './index.module.scss';
import SlideClass from '../../services/Slides_Service';
import { SlideInterface } from '../Slide';
import Slide from '../Slide';
import NavigationSlides from '../NavigationSlides';
import console from 'console';

export interface SlidesProps {

}

const Slides: React.FC<SlidesProps> = () => {

    const [slides, setSlides] = useState<SlideInterface[]>([]);
    const [currentSlide, setCurrentSlide] = useState<SlideInterface>({ id: 0, url: "" });
    const [loading, setLoading] = useState(false);
    const [Navslides, setNavSlides] = useState<SlideInterface[]>([]);


    const initializeComponent = async () => {
        const slides = await SlideClass.getSlides();
        setSlides(slides);
        setNavSlides(slides.slice(0, 5));
        if (slides.length > 0) setCurrentSlide(slides[0]);
        setLoading(true);
    }

    useEffect(() => {
        initializeComponent();
    }, []);

    const getCurrentSlide = (forward: boolean) => {
        const currentSlideIndex = slides.findIndex(slide => slide.id === currentSlide.id);

        if (forward) {
            if (!(currentSlideIndex + 1 >= slides.length)) setCurrentSlide(slides[currentSlideIndex + 1]);
        } else {
            if (!(currentSlideIndex - 1 < 0)) setCurrentSlide(slides[currentSlideIndex - 1]);
        }

        // setNavSlides(slides.slice(0, 5));    
    };

    return (
        <>
            {!loading && <div></div>}
            {loading && <div className={classes.slides}>
                <div className="row">
                    <i className="fa fa-chevron-left fa-2x col-1" onClick={() => getCurrentSlide(false)} aria-hidden="true"></i>
                    <div className="col-10">
                        <Slide slide={currentSlide} />
                    </div>
                    <i className="fa fa-chevron-right fa-2x col-1" onClick={() => getCurrentSlide(true)} aria-hidden="true"></i>
                </div>
                <NavigationSlides slides={Navslides} currentSlide={currentSlide} />
            </div>}
        </>
    );
}

export default Slides;