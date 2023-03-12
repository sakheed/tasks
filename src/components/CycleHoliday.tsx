import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    /*
    Holidays: 
    1) Birthday: 🥳
    2) Diwali: 🪔
    3) St. Patrick's Day: ☘️
    4) Holi: 🕺
    5) Christmas: 🤶
    */
    const [holiday, setHoliday] = useState<string>("☘️")
    const holidays_alphabetically = ["🥳", "🤶", "🪔", "🕺", "☘️"];
    const holidays_monthly = ["🕺", "☘️", "🪔", "🥳", "🤶"];

    function changeByMonth(): void {
        const length = holidays_monthly.length
        setHoliday(holidays_monthly[(holidays_monthly.indexOf(holiday) + 1 ) % length]);
    }
    function changebyAlphabet(): void {
        const length = holidays_alphabetically.length
        setHoliday(holidays_alphabetically[(holidays_alphabetically.indexOf(holiday) + 1 ) % length]);
    }
    return (
        <div>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
            <Button onClick={changebyAlphabet}> Advance By Alphabet</Button>
            <Button onClick={changeByMonth}> Advance By Year</Button>
        </div>
    );
}
