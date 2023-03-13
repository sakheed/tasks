import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    function doubler(): void {
        return setDhValue(2 * dhValue);
    }

    function halver(): void {
        return setDhValue(0.5 * dhValue);
    }

    // function Doubler(): JSX.Element {
    //     return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
    // }

    // function Halver(): JSX.Element {
    //     return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
    // }

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={doubler}>Double</Button>
            <Button onClick={halver}>Halve</Button>
        </div>
    );
}
