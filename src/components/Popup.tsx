import React, { useEffect, useRef } from "react";
import styles from "./Popup.module.css";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?:
    | "center"
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  overlayColor?: string;
  overlayOpacity?: number;
  closeOnOverlayClick?: boolean;
  closeOnEscapeKey?: boolean;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  children,
  position = "center",
  overlayColor = "rgba(0, 0, 0, 0.5)",
  overlayOpacity = 0.5,
  closeOnOverlayClick = true,
  closeOnEscapeKey = true,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (closeOnEscapeKey && event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose, closeOnEscapeKey]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  const overlayStyle = {
    backgroundColor: overlayColor,
    opacity: overlayOpacity,
  };

  return (
    <div
      className={styles.overlay}
      style={overlayStyle}
      onClick={handleOverlayClick}
    >
      <div className={`${styles.popup} ${styles[position]}`} ref={popupRef}>
        {children}
      </div>
    </div>
  );
};

export default Popup;
