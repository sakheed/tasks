import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [revealed, setReveal] = useState<boolean>(false);

    function flipReveal(): void {
        setReveal(!revealed);
    }

    return (
        <div>
            <Button onClick={flipReveal}>Reveal Answer</Button>
            {revealed && <div>42</div>}
        </div>
    );
}
