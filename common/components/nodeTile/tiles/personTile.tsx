import { UmbracoNode } from "@lib/umbraco/types/umbracoNode.type";
import Link from "next/link";
import styles from './personTile.module.scss';
export default function PersonTile(model: UmbracoNode) {
    return (
        <div className={styles.personTile}>
            <p className="noMargin">{model.properties.role}</p>
            <Link href={model.url}><a>{model.name}</a></Link>
        </div>
    )
}