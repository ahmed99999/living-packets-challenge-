import React from 'react';
import Slide from '../Slide';
import { SlideInterface } from '../Slide';

export interface NavigationSliesProps {
    slides: SlideInterface[];
}

const NavigationSlies: React.FC<NavigationSliesProps> = ({ slides }) => {
    return (
        <div>
            {slides.map(slide => (
                <Slide key={slide.id} slide={slide} />
            ))}
        </div>
    );
}

export default NavigationSlies;