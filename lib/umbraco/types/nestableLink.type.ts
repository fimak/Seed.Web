import { FlexibleLinkModel } from "./flexibleLinkModel.type";

type NestableLink = {
    link: FlexibleLinkModel,
    children: NestableLink[]
}

export default NestableLink;