
import Image from 'next/image'
import styles from './photosGallery.module.scss'
import Logo from "../../public/img/caldeirada.jpg";

const PhotosGallery = () => {
    return (
        <div className={styles.photosGallery}>
            <section className='gallery'>
                <Image
                    className="photo"
                    src={Logo}
                    alt=""
                />
                <Image
                    className="photo"
                    src={Logo}
                    alt=""
                />
                <Image
                    className="photo"
                    src={Logo}
                    alt=""
                />
                <Image
                    className="photo"
                    src={Logo}
                    alt=""
                />
                <Image
                    className="photo"
                    src={Logo}
                    alt=""
                />
                <Image
                    className="photo"
                    src={Logo}
                    alt=""
                />
                <Image
                    className="photo"
                    src={Logo}
                    alt=""
                />
                <Image
                    className="photo"
                    src={Logo}
                    alt=""
                />
                <Image
                    className="photo"
                    src={Logo}
                    alt=""
                />
                <Image
                    className="photo"
                    src={Logo}
                    alt=""
                />
            </section>
        </div>
    )
}
export default PhotosGallery;