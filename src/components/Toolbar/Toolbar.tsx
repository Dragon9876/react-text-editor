import { FC } from 'react';

import { BaseButton, BaseContainer, BaseSvgSelect } from '../../components';

import { useEditorStore } from '../../store/editor-store';

import styles from './Toolbar.module.scss';
import { IToolbarAction } from '../../store/store-types.in';

export const Toolbar: FC = () => {
   const toolbarActions = useEditorStore((state) => state.toolbarActions);

   const handleToolbarAction = (toolbarAction: IToolbarAction) => {
      document.execCommand('styleWithCss', false);
      document.execCommand(toolbarAction.actionName, false, toolbarAction?.styleValue);
   };
   return (
      <div className={styles.toolbar}>
         <BaseContainer>
            <div className={styles.toolbar__inner}>
               {toolbarActions.map((toolbarAction) => (
                  <BaseButton
                     key={toolbarAction.key}
                     onClick={() => handleToolbarAction(toolbarAction)}
                  >
                     {toolbarAction.actionName === 'fontSize' ||
                     toolbarAction.actionName === 'fontName' ||
                     toolbarAction.actionName === 'hiliteColor' ? (
                        toolbarAction.icon
                     ) : (
                        <BaseSvgSelect svgName={toolbarAction.icon} />
                     )}
                  </BaseButton>
               ))}
            </div>
         </BaseContainer>
      </div>
   );
};
