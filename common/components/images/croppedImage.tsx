import { ImageModel } from "@lib/umbraco/types/imageModel.type";
import { getAbsoluteMediaUrl, getCropUrl, getMediaDimensions } from "@lib/umbraco/util/helpers";
import Image, { ImageLoaderProps } from "next/image";
import styles from './croppedImage.module.scss';

export type CroppedImageModel = {
    className?: string,
    image: ImageModel,
    crop?: string,
    height?: number,
    width?: number
}
export default function CroppedImage({className, image, crop, height, width}: CroppedImageModel) {
    const dimensions = getMediaDimensions(image, crop, width, height);
    const ratio = dimensions!.height * 100 / dimensions!.width;
    var url = getCropUrl(image, crop, width, height);
    const scaleImage = (src: string,scale: number) => {
        const widthCheck = /(?<=width=)\d+/;
        const heightCheck = /(?<=height=)\d+/;
        const widthMatch = src.match(widthCheck);
        if (widthMatch) {
            src = src.replace(widthCheck, parseFloat(widthMatch[0]) * scale + '');
        }
        const heightMatch = src.match(heightCheck);
        if (heightMatch) {
            src = src.replace(heightCheck, parseFloat(heightMatch[0]) * scale + '');
        }
        return src + ' ' + scale + 'x';
    }
    const srcSet = url + ', ' + scaleImage(url, 1.5) + ', ' + scaleImage(url, 2);
    return (
        <span className={styles.croppedImage + (className ? ' ' + className : '')} style={{width: dimensions!.width + 'px'}}>
            <span className={styles.spacer} style={{paddingTop: ratio + '%'}}></span>
            <img srcSet={srcSet} alt={image.name} />
        </span>
    )
}