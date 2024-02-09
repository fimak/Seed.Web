import { LinkWithChildren } from "./linkWithChildren.type"

export type LinkWithChildrenPlusToggle = LinkWithChildren & {
    noTopLink?: boolean
}