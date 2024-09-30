import React, { useState } from "react";
import { Popup, useExitIntent } from "../../src";

const PopupDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useExitIntent(() => setIsOpen(true), true);

  return (
    <div>
      <h1>Popup Demo</h1>
      <p>This demo showcases the new Popup component with various features.</p>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="center"
        overlayColor="rgba(0, 0, 0, 0.7)"
        overlayOpacity={0.7}
        closeOnOverlayClick={true}
        closeOnEscapeKey={true}
      >
        <h2>Welcome to our site!</h2>
        <p>This is a demo of our new versatile Popup component.</p>
        <img src="https://via.placeholder.com/300" alt="Demo" />
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Popup>
      <p>
        Try to move your mouse out of the browser window to trigger the exit
        intent popup.
      </p>
    </div>
  );
};

export default PopupDemo;
