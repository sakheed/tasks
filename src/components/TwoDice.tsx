import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left_die, setLeftDie] = useState<number>(1);
    const [right_die, setRightDie] = useState<number>(2);

    function roll_left(): void {
        setLeftDie(d6());
    }
    function roll_right(): void {
        setRightDie(d6());
    }

    return (
        <div>
            <div>
                Left Die: <span data-testid="left-die">{left_die}</span>, Right
                Die: <span data-testid="right-die"> {right_die} </span>
            </div>
            <Button onClick={roll_left}> Roll Left</Button>
            <Button onClick={roll_right}> Roll Right</Button>
            <div>
                {left_die !== right_die ? "" : left_die === 1 ? "Lose" : "Win"}
            </div>
        </div>
    );
}
