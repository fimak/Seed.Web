import Head from 'next/head'
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import { FooterContent, HeaderContent } from 'content/global';
export type LayoutData = {
    children: React.ReactNode,
}

export default function Layout({ children }: LayoutData) {
    const animation  = {
        variants: {
            initial: {
                opacity: 0,
                x: 0
            },
            animate: {
                opacity: 1,
                x: 0
            },
            exit: {
                x: '-100%'
            },
        },
        transition: {
            duration: .6
        }
    }

    const resetScroll = () => window.scrollTo(0,0);
    return (
        <>
            <Head>
                <meta name="HandheldFriendly" content="True" />
                <meta name="MobileOptimized" content="320" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
            </Head>
            <Header {...HeaderContent} />
            <LazyMotion features={domAnimation}>
                <AnimatePresence exitBeforeEnter onExitComplete={resetScroll}>
                    <m.div className="animationWrapper" initial="initial" animate="animate" exit="exit" transition={animation.transition} variants={animation.variants}>
                        <main id="content">{children}</main>
                        <Footer {...FooterContent} />
                    </m.div>
                </AnimatePresence>
            </LazyMotion>
        </>
    )
}