import countryList from "country-list";
import fs from "fs";

const country = countryList
    .getNames()
    .sort()
    .map((name) => name);

fs.writeFileSync("./country.json", JSON.stringify(country, null, 2));
