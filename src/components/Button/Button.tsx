import React,{FC, forwardRef} from "react";
import {Button as MUIButton, ButtonProps as MUIButtonProps} from "@material-ui/core"
import { cn } from "../../helper/csx";

export interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export interface ButtonProps extends MUIButtonProps {}
export interface MGPButtonProps extends MUIButtonProps {
    label?: string;
}



const Button = forwardRef<ButtonProps, MGPButtonProps>(({label, className, children, ...props}, ref) =>{
    return  <MUIButton {...props} className={cn('text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',className)}>{children? children : label}</MUIButton>
})


export default Button;