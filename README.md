# telegram-react-auth-button

Telegram React Auth Button

A simple, customizable React component for implementing Telegram login functionality in your web application.
This component provides an easy way to add a "Log in with Telegram" button to your React project, allowing users to authenticate using their Telegram accounts.

## Features

Easy integration with React applications
Customizable button appearance
Handles Telegram authentication flow
Provides user data upon successful login
TypeScript support

import TelegramLoginButton from 'react-telegram-auth-button';

```tsx
function App() {
    const handleTelegramResponse = (response) => {
        console.log(response);
        // Handle the auth response here
    };

    return (
        <TelegramLoginButton
            botName="YourBotName"
            onAuth={handleTelegramResponse}
            buttonSize="large"
            cornerRadius={20}
        />
    );
}
```

## Usage
Import the component and use it in your React application:
```sh
npm install telegram-react-auth-button
```