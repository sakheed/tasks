import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [number_of_attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    // function flipProgress(): void {
    //     setProgress(!progress);
    // }

    // function changeAttempts(): void {
    //     setAttempts(number_of_attempts - 1);
    //     flipProgress();
    // }

    return (
        <div>
            <Button
                onClick={() => {
                    setProgress(true);
                    setAttempts(number_of_attempts - 1);
                }}
                disabled={progress || number_of_attempts == 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setProgress(false)} disabled={!progress}>
                Stop Quiz
            </Button>

            <Button
                onClick={() => {
                    setAttempts(number_of_attempts + 1);
                }}
                disabled={progress}
            >
                Mulligan
            </Button>
            <span> Attempts: {number_of_attempts} </span>
        </div>
    );
}
