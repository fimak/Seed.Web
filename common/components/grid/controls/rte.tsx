import { CSSProperties, useState } from "react";
import parse, { HTMLReactParserOptions, Element, domToReact } from 'html-react-parser';
import Link from "@components/links/link";
import { getAbsoluteMediaUrl } from "@lib/umbraco/util/helpers";
import isLocal from "common/util/isLocal";
import UmbracoModal from "@components/dialogs/umbracoModal";
import { ImageModel } from "@lib/umbraco/types/imageModel.type";
import RawImage from "@components/images/rawImage";

export type RteModel = {
    text?: string,
    className?: string,
    style?: CSSProperties
}

export default function Rte({ text, className, style }: RteModel) {
    if (!text) {
        return null;
    }
    const [modalId, setModalId] = useState('');
    var copy = text as string;
    const options: HTMLReactParserOptions = {
        replace: domNode => {
            if (domNode instanceof Element) {
                switch (domNode.tagName) {
                    case "a":
                        var href = domNode.attribs['href'];
                        var target = domNode.attribs['target'];
                        var modal = domNode.attribs['modal'];
                        if (modal) {
                            return (
                                <a className={domNode.attribs['class']} onClick={() => setModalId(modal)}>{domToReact(domNode.children)}</a>
                            )
                        }
                        if (href && isLocal(href)) {
                            if (!target || target === '_self') {
                                return (
                                    <Link href={href.replace(/^.*\/\/[^\/]+/, '')} className={domNode.attribs['class']}>{domToReact(domNode.children)}</Link>
                                )
                            }
                            return null;
                        }
                        return domNode;
                    case "img":
                        var src = domNode.attribs.src;
                        if (src) {
                            const height = Number(domNode.attribs.height);
                            const width = Number(domNode.attribs.width)
                            const url = getAbsoluteMediaUrl(src);
                            const extension = url.match(/\.(\w+)/)![1];
                            var image : ImageModel = {
                                url: url,
                                id: 0,
                                name: domNode.attribs.alt,
                                extension: extension,
                                width: width,
                                height: height,
                                updateDate: new Date(),
                                crops: {
                                    src: src,
                                    focalPoint: {
                                        top:.5,
                                        left:.5
                                    },
                                    crops: []
                                }
                            }
                            if (domNode.attribs.class) {
                                return (
                                    <span className={domNode.attribs.class}>
                                        <RawImage image={image} />
                                    </span>
                                )
                            }
                            return (
                                <RawImage image={image} />
                            ) 
                        }
                        break;
                    case "table":
                        return (
                            <div className="tableContainer">
                                {domToReact([domNode])}
                            </div>
                        )
                }
            }
            return domNode;
        }
    }
    if (!copy) {
        return null;
    }
    return (
        <>
            <div className={className + " rte"} style={style}>
                {parse(copy, options)}
            </div>
            <UmbracoModal modalId={modalId} setter={setModalId} />
        </>
    )
}