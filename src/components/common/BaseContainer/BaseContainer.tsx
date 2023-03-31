import { FC, HTMLProps } from 'react';

import styles from './BaseContainer.module.scss';

type BaseContainerProps = Omit<HTMLProps<HTMLDivElement>, 'className'>;

export const BaseContainer: FC<BaseContainerProps> = ({ children, ...restProps }) => {
   return (
      <div {...restProps} className={styles.container}>
         {children}
      </div>
   );
};
