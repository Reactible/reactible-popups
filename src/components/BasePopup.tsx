import React, { ReactNode } from 'react';
import styles from './BasePopup.module.css';

interface BasePopupProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  overlayColor?: string;
  overlayOpacity?: number;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'middle-left'
    | 'center'
    | 'middle-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
}

const BasePopup: React.FC<BasePopupProps> = ({
  children,
  isOpen,
  onClose,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  overlayOpacity = 0.5,
  position = 'center',
}) => {
  if (!isOpen) return null;

  const overlayStyle = {
    backgroundColor: overlayColor,
    opacity: overlayOpacity,
  };

  return (
    <div className={styles.overlay} style={overlayStyle} onClick={onClose}>
      <div
        className={`${styles.popupContainer} ${styles[position]}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default BasePopup;
