import FocalPoint from "./focalPoint.type"

type ImageCrop = {
    alias: string,
    width: number,
    height: number,
    coordinates: FocalPoint
}

export default ImageCrop;