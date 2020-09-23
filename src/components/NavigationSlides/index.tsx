import React from 'react';
import Slide from '../Slide';
import { SlideInterface } from '../Slide';
import classes from './index.module.scss';

export interface NavigationSliesProps {
    slides: SlideInterface[];
}

const NavigationSlies: React.FC<NavigationSliesProps> = ({ slides }) => {
    return (
        <div className={classes.navigationSlides}>
            {slides.map(slide => (
                <Slide key={slide.id} slide={slide} />
            ))}
        </div>
    );
}

export default NavigationSlies;