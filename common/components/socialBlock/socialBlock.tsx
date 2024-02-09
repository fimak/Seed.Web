import { useCurrentPageContext } from '@components/layout/layout';
import { useRouter } from 'next/router';
import { EmailShareButton, FacebookShareButton, LinkedinShareButton } from 'react-share';
import styles from './socialBlock.module.scss';

export type SocialBlockModel = {
    label: string
}

export default function SocialBlock({label} : SocialBlockModel) {
    const page = useCurrentPageContext();
    const router = useRouter();
    const url = process.env.HOST + router.asPath;
    return (
        <div className={styles.socialBlock}>
            <h5>{label}</h5>
            <ul className="a2a_kit a2a_default_style no-bullet">
                <li>
                    <FacebookShareButton url={url}>
                        <a><span className="bmg-icon bmg-icon-facebook"></span></a>
                    </FacebookShareButton>
                </li>
                <li>
                    <LinkedinShareButton url={url}>
                        <a><span className="bmg-icon bmg-icon-twitter"></span></a>
                    </LinkedinShareButton>
                </li>
                <li>
                    <EmailShareButton url={url}>
                        <a className={styles.email + " a2a_button_email"}><span className="bmg-icon bmg-icon-email"></span></a>
                    </EmailShareButton>
                </li>
            </ul>
        </div>
    )
}