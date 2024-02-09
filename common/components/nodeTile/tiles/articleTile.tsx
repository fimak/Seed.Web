import { UmbracoNode } from "@lib/umbraco/types/umbracoNode.type";
import styles from "./articleTile.module.scss";

export default function ArticleTile(model: UmbracoNode) {
    return (
        <div className={styles.articleTile}>
            <h5>{model.name}</h5>
            <p>{model.properties.summary}</p>
        </div>
    )
}