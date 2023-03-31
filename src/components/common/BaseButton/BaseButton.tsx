import { ButtonHTMLAttributes, FC } from 'react';

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton: FC<BaseButtonProps> = ({ children, ...restProps }) => {
   return <button {...restProps}>{children}</button>;
};
