import React, { useEffect, useRef } from 'react';
import { TelegramLoggedUser } from './global';

export type TelegramLoginBtnProps = {
    onAuth: (data: TelegramLoggedUser) => void;
    botName: string;
    size?: 'large' | 'medium' | 'small';
    cornerRadius?: number;
    showUserPhoto?: boolean;
    requestAccessToWrite?: boolean;
    loader?: React.ReactNode;
};

const DEFAULT_LOADER = 'Telegram is loading...';

function TelegramLoginBtn(props: TelegramLoginBtnProps): React.ReactElement<TelegramLoginBtnProps> {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const loadingRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef?.current) return;
        const script = document.createElement('script');

        script.src = 'https://telegram.org/js/telegram-widget.js?22';
        script.async = true;

        script.setAttribute('data-telegram-login', props.botName);
        script.setAttribute('data-size', props.size || 'large');
        script.setAttribute('data-onauth', 'onTelegramAuth(user)');

        if (props.showUserPhoto === false) {
            script.setAttribute('data-userpic', 'false');
        }
        if (props.requestAccessToWrite !== false) {
            script.setAttribute('data-request-access', 'write');
        }
        if (props.cornerRadius) {
            script.setAttribute('data-radius', String(props.cornerRadius));
        }

        containerRef.current!.appendChild(script);

        script.onload = function () {
            loadingRef.current!.innerHTML = '';
        };

        globalThis.onTelegramAuth = props.onAuth;

        return () => {
            // containerRef.current!.removeChild(script);
            delete globalThis.onTelegramAuth;
        };
    }, [containerRef, loadingRef]);

    return (
        <div ref={containerRef}>
            <div ref={loadingRef}>{props.loader || DEFAULT_LOADER}</div>
        </div>
    );
}

export default TelegramLoginBtn;
