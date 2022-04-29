import React from "react";

export interface dButtonPropsType {
    className?: string;
    children: any
}

/**
 * @param props 
 * @param props.children any
 * @param props.className string
 */
const DButton  = (props)=> {
    return (
        <div className={props?.className}>
            {props?.children}
        </div>
    )
}



export default DButton;