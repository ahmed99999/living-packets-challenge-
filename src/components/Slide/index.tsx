import React, { useEffect, useState } from 'react';
import classes from './index.module.scss';

export interface SlideInterface {
    id: number;
    url: string;
}

export interface SlideProps {
    slide: SlideInterface | undefined
}

const Slide: React.FC<SlideProps> = ({ slide }) => {

    // const [fade, setFade] = useState(false);

    // useEffect(() => {
    //     return () => {
    //         setFade(true);
    //         // console.log(slide?.id);
    //     }
    // });

    // const slideImageClass = (fade) ? classes.slide__img : classes.slide__img__hide;
    return (
        <div className={classes.slide}>
            <img className={classes.slide__img} src={slide?.url} alt="" />
        </div>
    );
}

export default Slide;