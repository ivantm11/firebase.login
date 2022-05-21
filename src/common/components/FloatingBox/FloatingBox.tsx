import { FC, ReactNode } from 'react';

import styles from './FloatingBox.module.scss';

type FloatingBoxProps = {
  children?: ReactNode;
  className?: string;
};

const FloatingBox: FC<FloatingBoxProps> = ({
  children = '',
  className = ''
}) => {
  return (
    <div className={styles.FloatingBox}>
      <div className={className}>{children}</div>
    </div>
  );
};

export default FloatingBox;
