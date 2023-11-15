// Chef in his Office
const workingHoursInOffice = (x, y) => {
    return x * 4 + y;
};

workingHoursInOffice(3, 2);

//Way Too Long Words

const wayTooLongWords = (words) => {
    const result = [];
    for (const word of words) {
        if (word.length > 10) {
            const a = word[0] + (word.length - 2) + word[word.length - 1];
            result.push(a);
        } else {
            result.push(word);
        }
    }
    return result;
};

const n = 4;
const words = [
    "word",
    "localization",
    "internationalization",
    "pneumonoultramicroscopicsilicovolcanoconiosis",
];

const abbreviationcheck = wayTooLongWords(words);
console.log(abbreviationcheck);
