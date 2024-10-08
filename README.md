![Build Status](https://github.com/Reactible/reactible-popups/actions/workflows/ci.yml/badge.svg) ![License](https://img.shields.io/github/license/Reactible/reactible-popups) ![npm](https://img.shields.io/npm/v/reactible-popups) ![npm](https://img.shields.io/npm/dt/reactible-popups)

# Reactible Popups

Reactible Popups is a versatile and customizable React popup component library designed to meet various popup needs in modern web applications. It offers a single, flexible `<Popup>` component that can be easily integrated into any React project.

## Features

![Features 1](https://github.com/user-attachments/assets/1ee39584-d87b-4b27-a7ba-107c41bd8b94)

![Features 2](https://github.com/user-attachments/assets/7567630e-783a-4b7f-bcc8-922d94e176a3)

![Features 3](https://github.com/user-attachments/assets/a57c42b0-1d72-4272-8949-a8bd7cd7cb72)

- TypeScript support for enhanced developer experience
- Customizable animations for smooth enter/exit transitions
- Accessibility features including keyboard navigation and screen reader support
- Multiple trigger options (exit intent, scroll percentage, inactivity timer, etc.)
- Screen locking capability
- Configurable open delay
- Full-screen overlay option
- Slide-in popup functionality
- Sticky bar mode
- Customizable overlay color and opacity
- Flexible positioning

## Installation

```bash
npm install reactible-popups
```

## Usage

Here's a basic example of how to use the Reactible Popups component:

```jsx
import React, { useState } from 'react';
import { Popup } from 'reactible-popups';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="center"
        overlayColor="rgba(0, 0, 0, 0.5)"
        overlayOpacity={0.5}
        closeOnOverlayClick={true}
        closeOnEscapeKey={true}
      >
        <h2>Welcome to our site!</h2>
        <p>This is a demo of our versatile Popup component.</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Popup>
    </div>
  );
};

export default App;
```

## API

The `<Popup>` component accepts the following props:

- `isOpen` (boolean): Controls the visibility of the popup.
- `onClose` (function): Callback function to close the popup.
- `children` (ReactNode): Content to be displayed inside the popup.
- `position` (string, optional): Position of the popup. Options: 'center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'. Default: 'center'.
- `overlayColor` (string, optional): Color of the overlay. Default: 'rgba(0, 0, 0, 0.5)'.
- `overlayOpacity` (number, optional): Opacity of the overlay. Default: 0.5.
- `closeOnOverlayClick` (boolean, optional): Whether to close the popup when clicking on the overlay. Default: true.
- `closeOnEscapeKey` (boolean, optional): Whether to close the popup when pressing the Escape key. Default: true.

## Future Plans

We are continuously working to improve Reactible Popups and add new features. Here's what we have planned for future releases:

1. Animations: Add customizable enter/exit animations.
2. Additional trigger mechanisms: Implement scroll percentage and inactivity timer triggers.
3. Screen locker: Add the ability to lock the screen behind the popup.
4. Open delay: Implement a configurable delay before opening the popup.
5. Full screen mode: Add support for full-screen popups.
6. Slide-in popup: Implement a slide-in animation option.
7. Sticky bar: Add a sticky bar mode for the popup.
8. Enhanced accessibility: Improve keyboard navigation and screen reader support.
9. Theming system: Implement a theming system for easy customization.
10. Server-side rendering support: Ensure compatibility with SSR frameworks like Next.js.

We welcome contributions from the community. If you'd like to contribute, please check out our [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License.
