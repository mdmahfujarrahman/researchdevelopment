import xml2js from "xml2js";
import fs from "fs";
import { keywords } from "./constant.js";

const xml = fs.readFileSync(
    "Total 50 Miles-80 KM Radius Area Cover.kml",
    "utf-8"
);
const xml2 = fs.readFileSync("downloadedFile.kml", "utf-8");
const randomNumber = (max) => {
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
};

let description;

xml2js.parseString(xml2, (err, result) => {
    if (err) {
        throw err;
    }
    description = result.kml.Document[0].description;
});

console.log(description);

xml2js.parseString(xml, (err, result) => {
    if (err) {
        throw err;
    }
    // console.log(result.kml.Document[0].Folder[1].Placemark.slice(5));
    result.kml.Document[0].Placemark.forEach((item) => {
        let rk = randomNumber(keywords.length - 1);
        // let des = randomNumber(description.length - 1);
        item.name = keywords[rk];
        // item.styleUrl = "#icon-1899-F9A825-nodesc";
        item.description = description;
    });
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(result);

    fs.writeFile("Emergency Dentist Cincinnati-update.kml", xml, (err) => {
        if (err) {
            throw err;
        }
        console.log("KML file has been saved!");
    });
});
