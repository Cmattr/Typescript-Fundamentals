import React from "react";

interface TypeScriptFunctionsProps {
    a: number;
    b: number;
}

const TypeScriptFunctions: React.FC<TypeScriptFunctionsProps> = ({ a, b }) => {
    const add = a + b;
    const greeting: string = "Hello, TypeScript";
    const numberList: number[] = [5, 10, 15];
    
    console.log("numbers", numberList);
    
    return (
        <div>
            <p>{`The sum of ${a} and ${b} is: ${add}`}</p>
            <p>{greeting}</p>
            <p>Number List: {numberList.join(", ")}</p>
        </div>
    );
}

export default TypeScriptFunctions;
