import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import styles from './BaseModal.module.scss';

interface BaseModalProps {
   children: ReactNode;
   isModalOpen: boolean;
}

const app = document.getElementById('root');

export const BaseModal: FC<BaseModalProps> = ({ children, isModalOpen }) => {
   return isModalOpen
      ? createPortal(
           <div className={styles.modal}>
              <div className={styles.modal__inner}>{children}</div>
           </div>,
           app
        )
      : null;
};
