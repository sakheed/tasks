import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setColor] = useState<string>("Color");
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3> Change Color </h3>
            {colors.map((color: string, key: number) => {
                return (
                    <Form.Check
                        inline
                        type="radio"
                        key={key}
                        name="color selector"
                        onChange={updateColor}
                        style={{ backgroundColor: color }}
                        label={color}
                        value={color}
                        checked={color === chosenColor}
                    />
                );
            })}
            <div>
                Your color is chosen&nbsp;
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}
                </span>
            </div>
        </div>
    );
}
