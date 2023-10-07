# React-Popups
![React popup component](https://cdn.dribbble.com/userupload/10126629/file/original-5bf25d6d4a89a0de0898f8c495bac50e.png?resize=1024x768)
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
