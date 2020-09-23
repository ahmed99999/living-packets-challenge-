import React, { useState, useEffect } from 'react';
import classes from './index.module.scss';
import SlideClass from '../../services/Slides_Service';
import Slide from '../Slide';

export interface SlidesProps {

}

export interface SlideInterface {
    id: number;
    url: string;
}

const Slides: React.FC<SlidesProps> = () => {

    const [slides, setSlides] = useState<SlideInterface[]>([]);
    const [currentSlide, setCurrentSlide] = useState<SlideInterface>();

    useEffect(() => {
        const getSlides = async () => {
            const slides = await SlideClass.getSlides();
            setSlides(slides);
            if (slides.length > 0) setCurrentSlide(slides[0]);
        }
        getSlides();
    }, []);

    return (
        <div className={classes.slides}>
            <Slide slide={currentSlide} />
        </div>
    );
}

export default Slides;