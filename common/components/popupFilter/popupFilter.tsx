import { useState } from 'react';
import styles from './popupFilter.module.scss';
import { number } from 'yup';
import InlineList from '@components/inline-list/inline-list';

export type PopupFilterModel = {
    options: string[],
    lowerLimit: number,
    upperLimit?: number,
    openPrompt: string,
    selectPrompt: string,
    onSelect: (selection: number[]) => void
}

export default function PopupFilter({options, lowerLimit, upperLimit, openPrompt, selectPrompt, onSelect}: PopupFilterModel) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState<number[]>([]);

    const isValid = (result : number[]) => result.length >= lowerLimit && (!upperLimit || result.length <= upperLimit);
    const [valid, setValid] = useState(isValid(selection));
    const updateSelection = (index: number) => {
        const pos = selection.indexOf(index);
        var result : number[] = [];
        if (pos > -1) {
            result = selection.filter((val, selectionIndex) => selectionIndex !== pos);
        }
        else {
            result = selection.concat([index]);
            if (upperLimit && result.length > upperLimit) {
                result.splice(0, 1);
            }
        }
        setSelection(result);
        setValid(isValid(result));
    }

    const applyFilters = () => {
        if (valid) {
            var result = selection.concat([]);
            result.sort();
            onSelect(result);
            reset();
        }
    }

    const reset = () => {
        setOpen(false);
        setSelection([]);
        setValid(isValid([]));
    }

    return (
        <div className={styles.popupFilter}>
            <a className={styles.openButton} onClick={() => setOpen(true)}>{openPrompt}<i className={styles.icon + ' bmg-icon bmg-icon-chevron-down'}></i></a>
            {open &&
                <div className={styles.panel}>
                    <div className={styles.overlay} onClick={() => reset()}></div>
                    <a className={styles.close} onClick={() => reset()}><i className="bmg-icon bmg-icon-times"></i></a>
                    <div className={styles.filters}>
                        <InlineList className={styles.options} gutterSize={2} items={options.map((option, index) => (
                            <a className={styles.option + (selection.indexOf(index) > -1 ? ' ' + styles.active : '')} onClick={() => updateSelection(index)}>{option}</a>
                        ))} />
                        <div className={styles.buttonContainer}>
                            <button className={"button margin-top"} disabled={!valid} onClick={() => applyFilters()}>{selectPrompt}</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}