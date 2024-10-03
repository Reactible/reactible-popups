import React from 'react';
import styles from './OptInPanel.module.css';

interface OptInPanelProps {
  onClick: () => void;
  panelPosition?: 'left' | 'right';
}

const OptInPanel: React.FC<OptInPanelProps> = ({ onClick, panelPosition = 'right' }) => (
  <div className={`${styles.panel} ${styles[panelPosition]}`} onClick={onClick}>
    Click Me
  </div>
);

export default OptInPanel;
