import { FlexibleLinkModel } from "@lib/umbraco/types/flexibleLinkModel.type";
import { useState } from "react";

export type DropdownSwitchModel = {
    icon?: string,
    initOption?: number,
    options: FlexibleLinkModel[]
}

export default function DropdownSwitch({icon, initOption} : DropdownSwitchModel) {
    const [active, setActive] = useState(initOption);
    return (
        <></>
    )
}