const countryList = require("country-list");
// https://purecatamphetamine.github.io/country-flag-icons/3x2

const data =
    "India, Vietnam, Argentina, Brazil, China";

let country = [];
let flag = [];

const convertData = (data) => {
    const check = data.split(", ");
    check.map((item) => {
        country.push({
            name: item,
            flag: countryList.getCode(item),
        });
        flag.push(countryList.getCode(item));
    });
};

convertData(data);
console.log(country.sort((a, b) => a.name.localeCompare(b.name)));
console.log(flag.sort());
