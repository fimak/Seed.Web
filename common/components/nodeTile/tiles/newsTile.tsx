import Link from "next/link";
import styles from "./newsTile.module.scss";
import dayjs from "dayjs";
import { NodeTileModel } from "../nodeTile";

export default function NewsTile({content, viewDetailsPrompt}: NodeTileModel) {
    return (
        <div className={styles.newsTile}>
            <h4 className="noMargin"><Link href={content.url}>{content.name}</Link></h4>
            <p className="greenText">{dayjs(content.properties.postDate.replace('Z', '')).format('MMMM D, YYYY')}</p>
            <p>{content.properties.summary}</p>
            {!!viewDetailsPrompt &&
                <Link href={content.url}><a className="chevronLink">Read more</a></Link>
            }
        </div>
    )
}