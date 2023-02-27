/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    /*
    if (numbers.length == 0) {
        return [];
    } else {
        const new_numbers = [numbers[0], numbers[numbers.length - 1]];
        return new_numbers;
    }
    */

    return numbers.length !== 0
        ? [numbers[0], numbers[numbers.length - 1]]
        : [];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const new_numbers = numbers.map((x) => x * 3);
    return new_numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const new_numbers = numbers.map((x) => (Number(x) ? Number(x) : 0));
    return new_numbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const no_dollar = amounts.map((x) => (x[0] === "$" ? x.substring(1) : x));

    const new_amounts = no_dollar.map((x: string): number =>
        isNaN(parseInt(x)) ? 0 : parseInt(x)
    );
    return new_amounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const checkExclamation = function (message: string) {
        return message[message.length - 1] === "!"
            ? message.toUpperCase()
            : message;
    };

    const new_messages = messages.filter(
        (message) => message[message.length - 1] !== "?"
    );
    const final = new_messages.map(checkExclamation);

    return final;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const new_list = words.filter((x) => x.length < 4);
    const count = new_list.length;
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }

    const checkColors = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );

    return checkColors;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const add = function (x: number, y: number) {
        return x + y;
    };
    let sum = addends.reduce(add, 0);

    if (sum === 0) {
        return "0=0";
    }

    const strings = addends.map((x) => x.toString());
    const nums = [...strings];
    let first = `${sum}=${nums}`;
    let second = first.replaceAll(",", "+");

    return second;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let helper = function (x: number) {
        if (x < 0) {
            positive = false;
        }
        return x >= 0 && positive;
    };
    let positive = true;
    const only_positives = values.filter(helper);

    const sum = only_positives.reduce(
        (current: number, x) => (current += x),
        0
    );
    const nums = [...values];
    nums.splice(only_positives.length + 1, 0, sum);
    return nums;
}
