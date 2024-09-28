import React, { useState } from "react";
import BasePopup from "./BasePopup";
import styles from "./Popup03.module.css";

interface Popup03Props {
  title: string;
  description: string;
  backgroundImage?: string;
  onSubscribe: (email: string) => void;
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

const Popup03: React.FC<Popup03Props> = ({
  title,
  description,
  backgroundImage,
  onSubscribe,
  isOpen,
  onClose,
  position = "center",
}) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe(email);
    setEmail("");
    onClose();
  };

  return (
    <BasePopup isOpen={isOpen} onClose={onClose} position={position}>
      <div
        className={styles.content}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <form onSubmit={handleSubscribe} className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <button type="submit" className={styles.subscribeButton}>
            Subscribe
          </button>
        </form>
      </div>
    </BasePopup>
  );
};

export default Popup03;
