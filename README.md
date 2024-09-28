# Reactible Popups

Reactible-popups allows you to create and customize web popups faster with lots of options.

## Installation
bash
npm install reactible-popups


## Usage

### Popup01: Image Popup with External Link

```jsx
import React, { useState } from 'react';
import { Popup01 } from 'reactible-popups';

const App = () => {
const [isOpen, setIsOpen] = useState(false);

return (
<Popup01
isOpen={isOpen}
onClose={() => setIsOpen(false)}
imageUrl="https://example.com/image.jpg"
linkUrl="https://example.com"
/>
);
};
```

### Popup02: Age Verification Popup

```jsx
import React, { useState } from 'react';
import { Popup02 } from 'reactible-popups';

const App = () => {
const [isOpen, setIsOpen] = useState(false);

return (
<Popup02
isOpen={isOpen}
onClose={() => setIsOpen(false)}
title="Age Verification"
message="Are you 18 years or older?"
onConfirm={() => console.log('User confirmed')}
onDeny={() => console.log('User denied')}
/>
);
};
```

### Popup03: Email Subscription Popup

```jsx
import React, { useState } from 'react';
import { Popup03 } from 'reactible-popups';

const App = () => {
const [isOpen, setIsOpen] = useState(false);

return (
<Popup03
isOpen={isOpen}
onClose={() => setIsOpen(false)}
title="Subscribe to Our Newsletter"
description="Get the latest updates directly to your inbox!"
onSubscribe={(email) => console.log('Subscribed:', email)}
/>
);
};
```

## API Reference

### Common Props

All popups share these common props:

- `isOpen` (boolean): Controls the visibility of the popup.
- `onClose` (function): Callback function to close the popup.
- `position` (string, optional): Position of the popup. Options: 'top-left', 'top-center', 'top-right', 'middle-left', 'center', 'middle-right', 'bottom-left', 'bottom-center', 'bottom-right'. Default: 'center'.

### Popup01 Props

- `imageUrl` (string): URL of the image to display.
- `linkUrl` (string): URL to navigate to when the image is clicked.

### Popup02 Props

- `title` (string): Title of the popup.
- `message` (string): Message displayed in the popup.
- `onConfirm` (function): Action to perform if the user clicks "Yes".
- `onDeny` (function): Action to perform if the user clicks "No".

### Popup03 Props

- `title` (string): Title of the popup.
- `description` (string): Description or message.
- `backgroundImage` (string, optional): URL of the background image.
- `onSubscribe` (function): Action to perform on subscription.

## Hooks

### useExitIntent

```jsx
import { useExitIntent } from 'reactible-popups';

useExitIntent(() => setIsOpen(true), true);
```

### useScrollPercentage

```jsx
import { useScrollPercentage } from 'reactible-popups';

useScrollPercentage(() => setIsOpen(true), 50, true);
```

### useInactivityTimer

```jsx
import { useInactivityTimer } from 'reactible-popups';

useInactivityTimer(() => setIsOpen(true), 30, true);
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.