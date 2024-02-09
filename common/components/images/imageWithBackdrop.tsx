import { ImageModel } from '@lib/umbraco/types/imageModel.type';
import CroppedImage from './croppedImage';
import styles from './imageWithBackdrop.module.scss';

export type ImageWithBackdropModel = {
    image: ImageModel,
    crop?: string,
    className?: string
}

export default function ImageWithBackdrop({image, crop, className}: ImageWithBackdropModel) {
    return (
        <div className={styles.imageWithBackdrop + (className ? ' ' + className : '')}>
            <CroppedImage className={styles.image} image={image} crop={crop} />
        </div>
    )
}