import { useCommonDataContext } from '@components/layout/layout'
import styles from './languageSelector.module.scss'
import { useState } from 'react'

export type CultureOption = {
    culture: string,
    label: string
}

export type LanguageSelectorModel = {
    className?: string,
    cultures: CultureOption[],
    onChange: (culture: string) => void
}

export default function LanguageSelector({className, cultures, onChange} : LanguageSelectorModel) {
    const {culture} = useCommonDataContext();
    const [open, setOpen] = useState(false);
    const [activeCulture, setActiveCulture] = useState(cultures.find(x => culture === x.culture ));
    const toggle = function() {
        setOpen(!open);
    }

    const changeCulture = function(option: CultureOption) {
        if (option.culture !== activeCulture?.culture) {
            setActiveCulture(option);
            onChange(option.culture);
        }
        setOpen(false);
    }

    return (
        <div className={styles.languageSelector + (className ? ' ' + className : '')}>
            <a className={styles.current} onClick={toggle} onBlur={() => setOpen(false)}><i className="bmg-icon bmg-icon-globe"></i>{activeCulture?.label}</a>
            {open && 
                <ul className={styles.dropdown}>
                    {cultures.map(item => (
                        <li key={item.culture}>
                            <a onClick={() => changeCulture(item)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}