import FocalPoint from "./focalPoint.type"
import ImageCrop from "./imageCrop.type"

export type ImageCropModel = {
    src: string,
    focalPoint: FocalPoint,
    crops: ImageCrop[]
}