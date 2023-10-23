# React-Popups (Under Dev)

![React-Popups](https://github.com/Reactible/react-popups/assets/12425932/62e2d612-a52b-47e0-b510-165ca71b488d)

Reactible-popups allow you to create and customize web popups faster with lots
of options. (Please don't use the package for now, the final version will be
published soon v1.0.0, please follow me on Twitter:
https://twitter.com/RachidLajmi)

## Installation

```
npm install --save reactible-popups
yarn add reactible-popups
```

## Features

- Dark background
- Exit intent popup
- Open popup when a user scrolls xx% of the page
- Open popup after X sec of inactivity
- Alignment (popup position)
- Optin Panel (right/left)

## React

```jsx
import { Popups, popup } from 'reactible-popups';

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
