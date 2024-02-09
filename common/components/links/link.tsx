import { getAbsoluteMediaUrl } from "@lib/umbraco/util/helpers";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

export type ScrollLinkProps = LinkProps & {
    children?: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function ScrollLink(props: ScrollLinkProps) {
    const { locale } = useRouter()
    const scroll = props.href !== undefined && typeof(props.href) === 'string' && props.href.indexOf('#') > -1;
    if (props.href && props.href.indexOf('/media/') > -1) {
        var newProps = {...props};
        newProps.href = getAbsoluteMediaUrl(props.href);
        return <a {...newProps} />
    }
    return <Link scroll={scroll} locale={locale} {...props} />
}