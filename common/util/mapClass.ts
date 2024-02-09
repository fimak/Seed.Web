export default function mapClass(styles: { readonly [key: string]: string } , className : string | undefined) {
    return className ? (className.split(' ').map(cl => styles[cl] ? styles[cl] : cl).join(' ') || '') : '';
}