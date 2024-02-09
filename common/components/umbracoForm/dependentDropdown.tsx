import { SelectHTMLAttributes } from "react";

export type Prevalue = {
    value: string,
    caption: string
}

export type PrevalueSet = {
    value: string,
    prevalues: Prevalue[]
}

export type DependentDropdownModel = SelectHTMLAttributes<HTMLSelectElement> & {
    inputvalue: string,
    placeholder?: string,
    options: PrevalueSet[];
}

export default function DependentDropdown(model: DependentDropdownModel) {

    var prevalues : Prevalue[] = [];
    for (var i=0; i<model.options.length; i++) {
        const option = model.options[i];
        if (option.value === model.inputvalue) {
            prevalues = option.prevalues;
            break;
        }
    }
    return (
        <select {...model}>
            {!!model.placeholder &&
                <option disabled value="">{model.placeholder}</option>
            }
            {prevalues.map(preValue =>
                <option key={preValue.value} value={preValue.value}>{preValue.caption}</option>
            )}
        </select>
    )
}