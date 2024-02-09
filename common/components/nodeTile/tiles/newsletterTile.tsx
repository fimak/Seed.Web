import { UmbracoNode } from '@lib/umbraco/types/umbracoNode.type';
import styles from './newsletterTile.module.scss';
import ImageWithBackdrop from '@components/images/imageWithBackdrop';
import { ImageModel } from '@lib/umbraco/types/imageModel.type';
import { FlexibleLinkModel } from '@lib/umbraco/types/flexibleLinkModel.type';
import FlexibleLink from '@components/links/flexibleLink';

export default function NewsletterTile(model: UmbracoNode) {
    const links = model.properties.links as FlexibleLinkModel[];
    return (
        <div className={styles.newsletterTile}>
            <h2>{model.name}</h2>
            <ImageWithBackdrop className={styles.image} image={model.properties.image as ImageModel} crop="thumbnail" />
            <ul className={styles.links + " largeText rte"}>
                {links.map(link => (
                    <li key={link.label}>
                        <FlexibleLink className='purpleText' link={link} />
                    </li>
                ))}
            </ul>
        </div>
    )
}