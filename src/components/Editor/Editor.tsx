import { FormEvent, useRef } from 'react';
import { BaseContainer } from '../../components';

import ContentEditable from 'react-contenteditable';

import { useEditorStore } from '../../store/editor-store';

import styles from './Editor.module.scss';

export const Editor = () => {
   const editorRef = useRef(null);
   const editorContent = useEditorStore((state) => state.editorContent);
   const setEditorContent = useEditorStore((state) => state.setEditorContent);

   const handleTextChange = (e: FormEvent<HTMLDivElement>) => {
      setEditorContent(e.currentTarget.innerHTML);
   };

   return (
      <BaseContainer>
         <div className={styles.editor__inner}>
            <ContentEditable
               innerRef={editorRef}
               tagName="p"
               html={String(editorContent)}
               onChange={(e) => handleTextChange(e)}
            />

            {/*<BaseEditor*/}
            {/*   ref={editorRef}*/}
            {/*   // dangerouslySetInnerHTML={{ __html: String(editorContent) }}*/}
            {/*   contentEditable={true}*/}
            {/*   suppressContentEditableWarning={true}*/}
            {/*   value={String(editorContent)}*/}
            {/*   onInput={(event) => handleTextChangeOnBlur(event)}*/}
            {/*/>*/}
         </div>
      </BaseContainer>
   );
};
