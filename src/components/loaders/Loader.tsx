import React from "react"

interface ILoader {
    className? : React.HTMLProps<HTMLElement>['className']
}

const Loader: React.FC<ILoader> = ({className}) => {
    return (
        <div className={`loading ${className ? className : 'w-[5rem] h-[5rem]'}`}>
            
        </div>
    );
};

export default Loader;