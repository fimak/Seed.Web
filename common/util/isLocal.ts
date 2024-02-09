import { useLocaleContext } from "pages/[[...slug]]"
import isLocalExplicit from "./isLocaleExplicit";

export default function isLocal(url: string) {
    const locale = useLocaleContext();
    return isLocalExplicit(url, locale);
}