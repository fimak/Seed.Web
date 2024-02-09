import { BasicLink } from "@components/header/header"

export type IconLink = {
    icon: string,
    url: string
}

export type ImageLink = {
    image: string,
    url: string
}

export type InnerLinkColumn = {
    links: BasicLink[]
}

export type LinkColumn = {
    label?: string,
    innerColumns: InnerLinkColumn[]
}

export type FooterModel = {
    columns: LinkColumn[]
    socialMedia: IconLink[],
    dealerLoginLink: BasicLink,
    subscribeLink: BasicLink,
    copyright: string,
    baseLinks: BasicLink[],
    baseLogos: ImageLink[]
}

export default function Footer(model: FooterModel) {
    return (
        <footer>
            <p>Implement the footer.</p>
        </footer>
    )
}