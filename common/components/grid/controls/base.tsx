import dynamic from "next/dynamic"
import RawImage from "@components/images/rawImage"
import UmbracoFormModel from "@lib/umbraco/types/umbracoFormModel.type"
const UmbracoForm = dynamic(() => import("../../umbracoForm/umbracoForm"))
import Rte from "./rte"
import Widget from "./widget"

export type BaseModel = {
    anchor?: string,
    alias: string,
    content: any
}

export default function Base({ anchor, alias, content }: BaseModel) {
    const renderElement = () => {
        switch (alias) {
            case "widget":
                return <Widget {...content} />
            case "rte":
                return <Rte text={content} />
            case "umbraco_form_picker":
                return <UmbracoForm form={content as UmbracoFormModel} />
            case "media":
                return <RawImage image={content} />
            default:
                return null;
        }
    }
    if (anchor) {
        return <div id={anchor}>
            {renderElement()}
        </div>
    }
    else {
        return renderElement();
    }
}