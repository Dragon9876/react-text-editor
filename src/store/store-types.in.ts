import { SvgNames } from '../components/common/BaseSvgSelect/types.in';

export interface IToolbarAction {
   key: number;
   icon: SvgNames | string;
   actionName: string;
   styleValue: string | undefined;
}

export interface IEditorStore {
   isModalOpen: boolean;
   editorContent: string | null;
   toolbarActions: IToolbarAction[];
   toggleModal: () => void;
   setEditorContent: (editorContent: string) => void;
}
