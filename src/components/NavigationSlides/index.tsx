import React from 'react';
import NavigationSlide from '../NavigationSlide';
import { SlideInterface } from '../Slide';
import classes from './index.module.scss';

export interface NavigationSlidesProps {
    slides: SlideInterface[];
    currentSlide: SlideInterface
}

const NavigationSlides: React.FC<NavigationSlidesProps> = ({ slides, currentSlide }) => {
    return (
        <div className={classes.navigationSlides}>
            {slides.map(slide => (
                <NavigationSlide key={slide.id} slide={slide} currentSlide={currentSlide} />
            ))}
        </div>
    );
}

export default NavigationSlides;