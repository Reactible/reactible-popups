# React-Popups
![reactpopups](https://github.com/Reactible/react-popups/assets/12425932/6590a235-cd4d-4b5a-bad2-2acb05923d19)
React-Popups allows you to create and customize web popups faster with lots of options.

## Installation

```
npm install --save react-popups
yarn add react-popups
```

## Features

-   Dark background
-   Exit intent popup
-   Open popup when a user scrolls xx% of the page
-   Open popup after X sec of inactivity
-   Alignment (popup position)
-   Optin Panel (right/left)

## React
```jsx
    import { Popups, popup } from 'react-popups';
    
    // ...
    
    function App() {
      return (
        <div>
          <Popups />
          <button onClick={() => openPopup()}>Show Magic</button>
        </div>
      );
    }
```
