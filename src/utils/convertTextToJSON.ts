export const convertTextToJSON = (editorText: string) => {
   if (!editorText) return false;

   const div = <HTMLElement>document.createElement('div');
   div.innerHTML = editorText;

   return JSON.stringify({
      ...Array.from(div.childNodes).map((childNode) => {
         const stylesObject: Record<string, any> = {};
         const styleValuesArray = childNode?.attributes?.style?.value
            .split(';')
            .filter((e: string) => e)
            .map((e: string) => e.split(':'));

         styleValuesArray?.forEach((style: string) => {
            const styleName: string = style[0].trim().replaceAll('-', '_');
            const styleValue: string = style[1].trim();

            stylesObject[styleName] = styleValue;
         });

         return {
            text: childNode.textContent,
            ...stylesObject
         };
      })
   });
};
