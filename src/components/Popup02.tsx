import React from "react";
import BasePopup from "./BasePopup";
import styles from "./Popup02.module.css";

interface Popup02Props {
  title: string;
  message: string;
  onConfirm: () => void;
  onDeny: () => void;
  isOpen: boolean;
  onClose: () => void;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "middle-left"
    | "center"
    | "middle-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
}

const Popup02: React.FC<Popup02Props> = ({
  title,
  message,
  onConfirm,
  onDeny,
  isOpen,
  onClose,
  position = "center",
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const handleDeny = () => {
    onDeny();
    onClose();
  };

  return (
    <BasePopup isOpen={isOpen} onClose={onClose} position={position}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttonGroup}>
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={handleDeny}>No</button>
        </div>
      </div>
    </BasePopup>
  );
};

export default Popup02;
