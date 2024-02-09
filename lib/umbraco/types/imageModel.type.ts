import { ImageCropModel } from "./imageCropModel.type"

export type ImageModel = {
    id: number,
    name: string,
    url: string,
    crops: ImageCropModel,
    extension: string,
    width: number,
    height: number
    updateDate: Date
}