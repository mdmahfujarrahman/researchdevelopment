import https from "https";
import fs from "fs";
import xml2js from "xml2js";

const request = (r, lat, lon) => {
    return new Promise((resolve, reject) => {
        const url = `https://kml4earth.appspot.com/circle.gsp?radius=${r}&units=km&fm=1&lat=${lat}&lon=${lon}&color=ff00ff00&width=2`;
        const downloadPath = `circle${r}.kml`;

        https
            .get(url, (response) => {
                const file = fs.createWriteStream(downloadPath);
                response.pipe(file);

                file.on("finish", () => {
                    file.close(() => {
                        const kml = fs.readFileSync(downloadPath, "utf-8");

                        xml2js.parseString(kml, (err, result) => {
                            if (err) {
                                fs.unlink(downloadPath, () => {
                                    reject(err);
                                });
                            } else {
                                const data =
                                    result.kml.Document[0].Placemark[0];
                                resolve(data);
                                fs.unlink(downloadPath, () => {});
                            }
                        });
                    });
                });
            })
            .on("error", (err) => {
                fs.unlink(downloadPath, () => {
                    reject(err);
                });
            });
    });
};

export default request;
