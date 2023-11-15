import fs from "fs";
import xml2js from "xml2js";

const xml = fs.readFileSync("Artech Landscaping.kml", "utf-8");

const circleCenter = {
    longitude: -79.4640172,
    latitude: 43.8637321,
    // altitude: 0.0,
};

const radiusInKilometers = 2.0; 
const numPoints = 50; 

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

xml2js.parseString(xml, (err, result) => {
    if (err) {
        throw err;
    }
    result.kml.Document[0].Placemark = placemarks;
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(result);
    fs.writeFile("Artech Landscaping3.kml", xml, (err) => {
        if (err) {
            throw err;
        }
        console.log("KML file has been saved!");
    });
});
