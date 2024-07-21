"use client";

import styles from './photosGallery.scss'
import { useEffect, useState } from 'react';

const PhotosGallery = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('/gallery.json')
            .then(response => response.json())
            .then(data => setPhotos(data));
    }, []);

    return (
        <div className={`${styles.photosGallery} gallery`}>
            {photos.map(photo => (
                <div key={photo.id} className={styles.photo}>
                    <img className='photo' src={photo.url} alt={photo.title} />
                </div>
            ))}
        </div>
    );
};
export default PhotosGallery;