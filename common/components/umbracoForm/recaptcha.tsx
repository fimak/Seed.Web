import Script from "next/script";
import { useRef } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export type RecaptchaModel = {
    siteKey: string,
    scoreThreshold: number,
    errorMessage?: string,
    id: string,
    onChange: (key: string) => void
    onError?: (error: string) => void
}

export default function Recaptcha({siteKey, id, scoreThreshold, errorMessage, onChange, onError}: RecaptchaModel) {
    if (typeof window === 'undefined') {
        return null;
    }
    const refreshToken = () => {
        window.grecaptcha.execute(siteKey, { action: 'umbracoform_submit' })
            .then(token => {
                onChange(token);
                setTimeout(refreshToken, 60000);
            });
            // .catch(error => {
            //     if (onError) {
            //         onError(errorMessage || error);
            //     }
            // })
    }
    const container = useRef<HTMLDivElement>(null);
    const init = () => {
        window.grecaptcha.ready(refreshToken);
    }
    return <>
        <Script src={"https://www.google.com/recaptcha/api.js?render=" + siteKey} onReady={init} />
    </>
}