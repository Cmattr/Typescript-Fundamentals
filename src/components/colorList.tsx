import React from "react";

const colorList: string[] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const ColorList: React.FC = () => {
    console.log("Rainbow", colorList);
    return (
        <p>Colors: {colorList.join(", ")}</p>
    );
};

export default ColorList;