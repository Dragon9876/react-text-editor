import { create } from 'zustand';
import { IEditorStore } from './store-types.in';
import { SvgNames } from '../components/common/BaseSvgSelect/types.in';

export const useEditorStore = create<IEditorStore>((set) => ({
   isModalOpen: false,
   editorContent:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
      '\n' +
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
   toolbarActions: [
      {
         key: 1,
         icon: SvgNames.BOLD,
         actionName: 'bold',
         styleValue: undefined
      },
      {
         key: 2,
         icon: SvgNames.ITALIC,
         actionName: 'italic',
         styleValue: undefined
      },
      {
         key: 3,
         icon: SvgNames.UNDERLINE,
         actionName: 'underline',
         styleValue: undefined
      },
      {
         key: 4,
         icon: '10px',
         actionName: 'fontSize',
         styleValue: '1'
      },
      {
         key: 5,
         icon: '16px',
         actionName: 'fontSize',
         styleValue: '3'
      },
      {
         key: 6,
         icon: '24px',
         actionName: 'fontSize',
         styleValue: '5'
      },
      {
         key: 7,
         icon: '48px',
         actionName: 'fontSize',
         styleValue: '7'
      },
      {
         key: 8,
         icon: '#FFDC00',
         actionName: 'hiliteColor',
         styleValue: '#FFDC00'
      },
      {
         key: 9,
         icon: '#01FF70',
         actionName: 'hiliteColor',
         styleValue: '#01FF70'
      },
      {
         key: 10,
         icon: '#2ECC40',
         actionName: 'hiliteColor',
         styleValue: '#2ECC40'
      },
      {
         key: 11,
         icon: '#3D9970',
         actionName: 'hiliteColor',
         styleValue: '#3D9970'
      },
      {
         key: 12,
         icon: 'Arial',
         actionName: 'fontName',
         styleValue: 'Arial'
      },
      {
         key: 13,
         icon: 'Lato',
         actionName: 'fontName',
         styleValue: 'Lato'
      },
      {
         key: 14,
         icon: 'Times New Roman',
         actionName: 'fontName',
         styleValue: 'Times New Roman'
      }
   ],

   toggleModal: () =>
      set((state) => ({
         ...state,
         isModalOpen: !state.isModalOpen
      })),

   setEditorContent: (editorContent: string) =>
      set((state) => ({
         ...state,
         editorContent
      }))
}));
