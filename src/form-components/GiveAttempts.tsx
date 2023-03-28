import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<number>(0);

    function changeRequests(event: React.ChangeEvent<HTMLInputElement>) {
        setRequests(parseInt(event.target.value));
    }
    return (
        <div>
            <h3> Give Attempts </h3>
            <div> You have {attempts} left. </div>
            <div className="container">
                <Form.Group className="mb-3" controlId="formGiveAttempts">
                    <Form.Label>
                        How many attempts would you like to add?
                    </Form.Label>
                    <Form.Control type="number" onChange={changeRequests} />
                    <Form.Text className="muted">
                        <Button
                            onClick={() => setAttempts(attempts + requests)}
                        >
                            {" "}
                            Gain{" "}
                        </Button>
                        <Button
                            onClick={() => setAttempts(attempts - 1)}
                            disabled={attempts < 1}
                        >
                            {" "}
                            Use{" "}
                        </Button>
                    </Form.Text>
                </Form.Group>
            </div>
        </div>
    );
}
