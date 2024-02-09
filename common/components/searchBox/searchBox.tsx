
import { useRouter } from 'next/router';
import { FormEvent, useRef } from 'react';
import styles from './searchBox.module.scss';
import { FocusEvent } from 'react';

export type SearchBoxModel = {
    className?: string,
    placeholder: string,
    targetPage: string,
    autoFocus?: boolean,
    onSubmit?: () => void
}

export default function SearchBox({className, placeholder, targetPage, autoFocus, onSubmit} : SearchBoxModel) {
    const input = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
        router.push(targetPage + '?q=' + input?.current?.value);
        if (onSubmit) {
            onSubmit();
        }
    }
    return (
        <form className={styles.searchBox + ' ' + className} onSubmit={handleSubmit}>
            <input autoFocus={autoFocus} type="text" placeholder={placeholder} name="q" ref={input} />
            <button type="submit">
                <i className="bmg-icon bmg-icon-search"></i>
            </button>
        </form>
    )
}