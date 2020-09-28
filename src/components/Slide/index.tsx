import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import classes from './index.module.scss';

export interface SlideInterface {
    id: number;
    url: string;
}

export interface SlideProps {
    slide: SlideInterface
}

const Slide: React.FC<SlideProps> = ({ slide }) => {

    const [toggel, setToggel] = useState(true);
    const nodeRef = useRef(null);

    useEffect(() => {
        setToggel(!toggel);
        return () => setToggel(!toggel);
    }, [slide])

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={toggel}
            timeout={1000}
            classNames={{
                enterActive: `${classes["slide-enter-active"]} animate__animated animate__backInLeft`,
                exitActive: classes["slide-exit-active"],
                enter: `${classes["slide-enter"]} animate__animated animate__backInLeft`,
                exit: classes["slide-exit"]
            }}
        >
            <div ref={nodeRef}>
                <div className={`${classes.slide}`}>
                    <img className={classes.slide__img} src={slide?.url} alt="" />
                </div>
            </div>
        </CSSTransition>
    );
}


export default Slide;