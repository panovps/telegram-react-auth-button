import React, {useEffect, useRef} from 'react'

export type TelegramLoggedUser = {
    id: number;
    auth_date: number;
    first_name: string;
    last_name: string;
    username: string;
    hash: string;
    photo_url: string;
};

export type TelegramLoginBtnProps = {
    onAuth: (data: TelegramLoggedUser) => void;
    botName: string;
    size?: 'large' | 'medium' | 'small';
    cornerRadius?: number;
    showUserPhoto?: boolean;
    requestAccessToWrite?: boolean;
}

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
        props.cornerRadius && script.setAttribute('data-radius', String(props.cornerRadius));

        containerRef.current!.appendChild(script);

        script.onload = function () {
            loadingRef.current!.innerHTML = '';
        };

        (window as any).onTelegramAuth = props.onAuth;

        return () => {
            // containerRef.current!.removeChild(script);
            delete (window as any).onTelegramAuth;
        };
    }, [containerRef, loadingRef]);

    return (
        <div ref={containerRef}>
            <div ref={loadingRef}>Telegram is loading...</div>
        </div>
    );
};

export default TelegramLoginBtn;
