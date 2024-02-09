import { FlexibleLinkModel } from "./flexibleLinkModel.type"

export type LinkWithChildren = {
    link: FlexibleLinkModel,
    children: FlexibleLinkModel[]
}