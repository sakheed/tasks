import { idText } from "typescript";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const published = questions.filter((x: Question): boolean => x.published);
    return published;
}
/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const non_empty = questions.filter(
        (x: Question): boolean =>
            x.body !== "" || x.expected !== "" || x.options.length !== 0
    );
    return non_empty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const new_questions = questions.find((x) => x.id === id);
    return new_questions != null ? new_questions : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    // find the question with that ID using prev function
    const question_to_remove = findQuestion(questions, id);
    // filter that question out of the original
    return questions.filter((x) => x !== question_to_remove);
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((x) => x.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const add = function (x: number, y: number) {
        return x + y;
    };
    const all_points: number[] = questions.map((x) => x.points);
    // want to append the points from each question to new array all_points
    return all_points.reduce(add, 0);
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    //first get a list of only the puvlished questions
    const new_questions = questions.filter((x) => x.published);
    //then call sumPoints on that new list
    return sumPoints(new_questions);
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const new_arr = questions.map(
        (question: Question): string =>
            `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
    );
    return "id,name,options,points,published\n" + new_arr.join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((x: Question) => {
        return {
            questionId: x.id,
            text: "",
            submitted: false,
            correct: false
        };
    });
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((question) => {
        return { ...question, published: true };
    });
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const checkMCQ = questions.every(
        (x: Question): boolean => x.type === "multiple_choice_question"
    );
    const checkSA = questions.every(
        (x: Question): boolean => x.type === "short_answer_question"
    );
    return checkMCQ || checkSA;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const new_questions = [...questions];
    //the findIndex function returns the first instance it finds when the conditional is true
    const target = questions.findIndex((x: Question) => x.id === targetId);
    const newquestion = {
        ...questions[target],
        name: newName
    };
    new_questions[target] = newquestion;
    return new_questions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const new_questions = [...questions];
    const target = questions.findIndex((x) => x.id === targetId);
    const new_question = {
        ...questions[target],
        type: newQuestionType,
        options:
            newQuestionType !== "multiple_choice_question"
                ? []
                : new_questions[target].options
    };
    new_questions[target] = new_question;
    return new_questions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const new_questions = [...questions];
    const target = questions.findIndex((x) => x.id === targetId);
    const old_options = [...new_questions[target].options];
    const new_options =
        targetOptionIndex !== -1
            ? old_options.splice(targetOptionIndex, 1, newOption)
            : old_options.splice(old_options.length, 1, newOption);
    const new_question = {
        ...questions[target],
        options: old_options.length !== 0 ? [...old_options] : [...new_options]
    };
    new_questions[target] = new_question;
    return new_questions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const new_questions = [...questions];
    const target = questions.findIndex((x) => x.id === targetId);
    new_questions.splice(
        target + 1,
        0,
        duplicateQuestion(newId, questions[target])
    );
    return new_questions;
}
