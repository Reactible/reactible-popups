// reactible-popups/example/pages/Popup01Demo.tsx
import React, { useState } from "react";
import { Popup01, useExitIntent } from "../../src";

const Popup01Demo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useExitIntent(() => setIsOpen(true), true);

  return (
    <div>
      <h1>Popup01 Demo</h1>
      <p>
        This demo showcases the Popup01 component with an exit intent trigger.
      </p>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      <Popup01
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imageUrl="https://via.placeholder.com/300"
        linkUrl="https://example.com"
        position="center"
      />
      <p>
        Try to move your mouse out of the browser window to trigger the exit
        intent popup.
      </p>
    </div>
  );
};

export default Popup01Demo;
