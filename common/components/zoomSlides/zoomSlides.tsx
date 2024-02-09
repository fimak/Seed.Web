import { MutableRefObject, useContext, useEffect, useRef } from 'react';
import { gsap } from '../../../lib/greensock/all';
import styles from './zoomSlides.module.scss';
import { ZoomSlidesContext, ZoomSlidesProvider } from './zoomSlidesProvider';

export type ZoomSlidesModel = {
	left: React.ReactNode[],
	right: React.ReactNode[]
}

export default function ZoomSlides({ left, right }: ZoomSlidesModel) {
	return (
		<ZoomSlidesProvider limit={right.length - 1}>
			<ZoomSlidesContent left={left} right={right} />
		</ZoomSlidesProvider>
	)
}

function ZoomSlidesContent({ left, right }: ZoomSlidesModel) {
    const { state } = useContext(ZoomSlidesContext);
    const leftSideActive = useRef(null);
    const leftSideTarget = useRef(null);
    const rightSideActive = useRef(null);
    const rightSideTarget = useRef(null);
    useEffect(() => {
        if (leftSideActive.current && leftSideTarget.current && rightSideActive.current && rightSideTarget.current) {
            if (window.innerWidth > 1199) {
                gsap.timeline()
                .set([leftSideTarget.current, rightSideTarget.current], { display: 'block', zIndex: 2 })
                .set([leftSideActive.current, rightSideActive.current], { zIndex: 1 })
                .addLabel('start')
                .to(leftSideActive.current, { x: -400, duration: .7 })
                .to(rightSideActive.current, { x: 400, duration: .7 }, 'start')
                .addLabel('clear', '-=.4')
                .to(leftSideActive.current, { autoAlpha: 0, duration: .4 }, 'clear')
                .to(rightSideActive.current, { autoAlpha: 0, duration: .4 }, 'clear')
                .addLabel('reveal', '-=.5')
                .fromTo(leftSideTarget.current, { scale: .1, autoAlpha: 0, x: 200 }, { scale: 1, autoAlpha: 1, x: 0, duration: 1 }, 'reveal')
                .fromTo(rightSideTarget.current, { scale: .1, autoAlpha: 0, x: -200 }, { scale: 1, autoAlpha: 1, x: 0, duration: 1 }, 'reveal')
            }
            else {
                gsap.timeline()
                    .set([leftSideTarget.current, rightSideTarget.current], { display: 'block', zIndex: 2 })
                    .set([leftSideActive.current, rightSideActive.current], { zIndex: 1 })
                    .addLabel('start')
                    .to(leftSideActive.current, { x: -300, autoAlpha: 0, duration: .5 })
                    .to(rightSideActive.current, { x: -300, autoAlpha: 0, duration: .5 }, 'start')
                    .addLabel('reveal', '-=.2')
                    .fromTo(leftSideTarget.current, { autoAlpha: 0, x: 300 }, { autoAlpha: 1, x: 0, duration: .5 }, 'reveal')
                    .fromTo(rightSideTarget.current, { autoAlpha: 0, x: 300 }, { autoAlpha: 1, x: 0, duration: .5 }, 'reveal')
            }
            
        }
    });

    const getRef = (index: number, activeRef: MutableRefObject<null>, targetRef: MutableRefObject<null>) => {
        if (index === state.index) {
            return targetRef;
        }
        else if (index === state.prevIndex) {
            return activeRef;
        }
        return null;
    }
	return (
        <div className={styles.zoomSlides}>
            <div className={styles.slideContainer}>
                <div className={`${styles.container} ${styles.left} left`}>{left.map((item, index) => <div key={'left-' + index} className={styles.slide + ' slide'} ref={getRef(index, leftSideActive, leftSideTarget)}>{item}</div>)}</div>
                <div className={`${styles.container} ${styles.right} right`}>{right.map((item, index) => <div key={'left-' + index} className={styles.slide + ' slide'} ref={getRef(index, rightSideActive, rightSideTarget)}>{item}</div>)}</div>
			</div>
		</div>
	)
}