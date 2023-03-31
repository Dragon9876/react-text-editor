import { FC, useMemo } from 'react';

import { BaseButton, BaseContainer, BaseModal, BaseTypography } from '../../components';

import { convertTextToJSON } from '../../utils/convertTextToJSON';

import { useEditorStore } from '../../store/editor-store';

import styles from './Header.module.scss';

export const Header: FC = () => {
   const toggleModal = useEditorStore((state) => state.toggleModal);
   const isModalOpen = useEditorStore((state) => state.isModalOpen);

   const editorContent = useEditorStore((state) => state.editorContent);
   const jsonEditorContent = useMemo(
      () => (editorContent ? convertTextToJSON(editorContent) : null),
      [editorContent]
   );

   console.log('jsonEditorContent ------- ', jsonEditorContent);

   return (
      <header className={styles.header}>
         <BaseContainer>
            <div className={styles.header__inner}>
               <div>
                  <BaseTypography as="div" className={styles.header__title}>
                     Document saint row
                  </BaseTypography>
                  <BaseTypography as="span" className={styles.header__subtitle}>
                     Feb 23, 2023 at 23:56 - Roman Malanchuk
                  </BaseTypography>
               </div>
               <BaseButton className={styles.header__button} onClick={() => toggleModal()}>
                  Convert text to JSON
               </BaseButton>

               {isModalOpen ? (
                  <BaseModal isModalOpen={isModalOpen}>
                     Json Format
                     <BaseButton onClick={() => toggleModal()}>Close</BaseButton>
                     <div>{jsonEditorContent}</div>
                  </BaseModal>
               ) : null}
            </div>
         </BaseContainer>
      </header>
   );
};
