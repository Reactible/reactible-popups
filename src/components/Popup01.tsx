import React from "react";
import BasePopup from "./BasePopup";
import styles from "./Popup01.module.css";

interface Popup01Props {
  imageUrl: string;
  linkUrl: string;
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

const Popup01: React.FC<Popup01Props> = ({
  imageUrl,
  linkUrl,
  isOpen,
  onClose,
  position = "center",
}) => {
  const handleImageClick = () => {
    window.open(linkUrl, "_blank");
    onClose();
  };

  return (
    <BasePopup isOpen={isOpen} onClose={onClose} position={position}>
      <img
        src={imageUrl}
        alt="Popup"
        className={styles.image}
        onClick={handleImageClick}
      />
    </BasePopup>
  );
};

export default Popup01;
