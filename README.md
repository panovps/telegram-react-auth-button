# telegram-react-auth-button

Telegram React Auth Button

A simple, customizable React component for implementing Telegram login functionality in your web application.
This component provides an easy way to add a "Log in with Telegram" button to your React project, allowing users to authenticate using their Telegram accounts.

## Features
- Easy integration with React applications 
- Customizable button appearance 
- Handles Telegram authentication flow 
- Provides user data upon successful login 
- TypeScript support

```tsx
import TelegramReactAuthButton, { type TelegramLoggedUser } from 'react-telegram-auth-button';

function App() {
    const handleTelegramResponse = (response: TelegramLoggedUser) => {
        console.log(response);
        // Handle the auth response here
    };

    return (
        <TelegramReactAuthButton
            botName="YourBotName"
            onAuth={handleTelegramResponse}
            buttonSize="large"
            cornerRadius={20}
            showUserPhoto={true}
            requestAccessToWrite={true}
        />
    );
}
```

### Usage
Import the component and use it in your React application:
```sh
npm install telegram-react-auth-button
```