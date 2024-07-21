"use client"; 

import data from '../../public/Slider.json'
import { useState, useEffect, useRef } from 'react';
import styles from './homeSlider.scss'

const HomeSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        const startInterval = () => {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            }, 3000); // 3000ms = 3 segundos
        };

        const stopInterval = () => {
            clearInterval(intervalRef.current);
        };

        startInterval();

        return () => {
            stopInterval();
        };
    }, []);

    return (
        <div className={styles.homeslider}>
            <div className="slider_wrapper">
                {data.map((item, index) => (
                    <div
                        className={`slider_content ${index === currentIndex ? 'active' : ''}`}
                        key={item.id}
                    >
                        <img className="img" src={item.image} alt={item.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default HomeSlider;