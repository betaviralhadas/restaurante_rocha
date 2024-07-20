"use client"; 

import React, { useState } from 'react';
import styles from './collapse.scss'

export default function Collapse({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.Collapse}>
            <div style={{ height: isOpen ? '9em' : '2em' }} className="collapse">
                <div style={{ marginTop: isOpen ? '41px' : '-14px' }} className="collapse-header" onClick={toggleCollapse}>
                    <span>{title}</span>
                    <span style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(180deg)' }} className={` ${isOpen ? 'open' : 'closed'}`}><i className="fa-solid fa-chevron-up"></i></span>
                </div>
                {isOpen && <div className="collapse-content">{description}</div>}
            </div>
        </div>
    );
};