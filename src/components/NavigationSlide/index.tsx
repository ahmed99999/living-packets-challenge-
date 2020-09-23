import React from 'react';
import { SlideInterface } from '../Slide';
import classes from './index.module.scss';

export interface NavigationSlideProps {
    slide: SlideInterface;
    currentSlide: SlideInterface
}

const NavigationSlide: React.FC<NavigationSlideProps> = ({ slide, currentSlide }) => {
    const slideClass = (slide.id === currentSlide.id) ? classes.active__img : classes.non__active__img;
    return (
        <img className={`${slideClass} ${classes.navigation__slide__img}`} src={slide?.url} alt="" />
    );
}

export default NavigationSlide;