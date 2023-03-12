import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question_type, setType] = useState<QuestionType>(
        "short_answer_question"
    );

    function flipType(): void {
        // if question_type == "multiple_choice_question"{
        //     setType("short_answer_question")
        // }
        // setType("multiple_choice_question")

        return question_type == "multiple_choice_question"
            ? setType("short_answer_question")
            : setType("multiple_choice_question");
    }
    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            <span>
                {question_type == "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </span>
        </div>
    );
}
