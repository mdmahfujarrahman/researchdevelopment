import fs from "fs";
import xml2js from "xml2js";
import request from "./downlaodRedisFile.js";
import { keywords, description } from "./constant.js";

const kml = fs.readFileSync("sample.kml", "utf-8");

const circleCenter = {
    longitude: -79.4640172,
    latitude: 43.8637321,
    altitude: 0.0,
};

const radiusInKilometers = 10.0;
const numPoints = 500;

function calculateCoordinates(center, radius, angle) {
    const earthRadius = 6371;
    const bearing = (angle * 180) / Math.PI;

    const lat1 = (Math.PI / 180) * center.latitude;
    const lon1 = (Math.PI / 180) * center.longitude;

    const lat2 = Math.asin(
        Math.sin(lat1) * Math.cos(radius / earthRadius) +
            Math.cos(lat1) * Math.sin(radius / earthRadius) * Math.cos(bearing)
    );

    const lon2 =
        lon1 +
        Math.atan2(
            Math.sin(bearing) * Math.sin(radius / earthRadius) * Math.cos(lat1),
            Math.cos(radius / earthRadius) - Math.sin(lat1) * Math.sin(lat2)
        );

    return {
        longitude: (lon2 * 180) / Math.PI,
        latitude: (lat2 * 180) / Math.PI,
        altitude: 0.0,
    };
}

const circleCoordinates = [];
for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI;
    const point = calculateCoordinates(circleCenter, radiusInKilometers, angle);
    const coordinates = `${point.longitude},${point.latitude},${point.altitude}`;
    circleCoordinates.push(coordinates);
}

const placemarks = circleCoordinates.map((coordinates, index) => ({
    name: `Point ${index + 1}`,
    styleUrl: "#icon-1899-F9A825-nodesc",
    Point: {
        coordinates,
    },
}));

const randomNumber = (max) => {
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
};

xml2js.parseString(kml, async (err, result) => {
    if (err) {
        throw err;
    }
    result.kml.Document[0].Placemark = placemarks;
    result.kml.Document[0].Placemark.forEach((item) => {
        let rk = randomNumber(keywords.length - 1);
        let des = randomNumber(description.length - 1);
        item.name = keywords[rk];
        item.styleUrl = "#icon-1899-F9A825-nodesc";
        item.description = [description[des]];
    });
    const CircelInfo = await request(
        radiusInKilometers,
        circleCenter.latitude,
        circleCenter.longitude
    );
    result.kml.Document[0].Placemark.unshift(CircelInfo);

    const builder = new xml2js.Builder();
    const xml = builder.buildObject(result);
    fs.writeFile("circel.kml", xml, (err) => {
        if (err) {
            throw err;
        }
        console.log("KML file has been saved!");
    });
});
