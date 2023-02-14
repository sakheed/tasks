import React from "react";
import "./App.css";

import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>My name is Sakhee Desai</p>
            <p> Hello World</p>

            <h1> My Favorite Things </h1>
            <Container>
                <Row>
                    <Col>
                        {" "}
                        <img
                            src="../assets/images/fiji.jpg"
                            alt="A picture of a beach in Fiji"
                        />
                        <div
                            style={{
                                width: "100px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>

                    <Col>
                        <ol>
                            <li> Friends </li>
                            <li> Traveling </li>
                            <li> Dark Chocolate </li>
                        </ol>

                        <div
                            style={{
                                width: "100px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
