const countryList = require("country-list");
// https://purecatamphetamine.github.io/country-flag-icons/3x2

const data = "India, Vietnam, Argentina, Brazil, China";

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

const element = document.createElement("div");

selcetedCategort;
const displayCategoryWiseData = (categories) => {
    const categoryDataContainer = document.getElementById(
        "category-data-container"
    );
    categories.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick="loadDataById('${
            category.category_id
        }')" class="bg-btnColor capitalize px-8 py-2 rounded-md text-xs ${
            category?.id === selcetedCategort ? "bg-btnRed" : "bg-btnColor"
        }">${category?.category}</button>
        `;
        categoryDataContainer.appendChild(div);
    });
};

if (id === selcetedCategort) {
    div.classList.add("bg-btnRed");
} else {
    div.classList.add("bg-btnColor");
}
