import { ImageModel } from "@lib/umbraco/types/imageModel.type";
import { getAbsoluteMediaUrl } from "@lib/umbraco/util/helpers";
import Image from "next/image";
import CroppedImage from "./croppedImage";

export type RawImageModel = {
    className?: string,
    image: ImageModel
}
export default function RawImage({className, image}: RawImageModel) {
    return (
        <CroppedImage className={className} image={image} width={image.width} height={image.height} />
    )
}