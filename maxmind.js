import maxmind from "maxmind";
import { Reader } from "@maxmind/geoip2-node";

// const lookup = maxmind.openSync("./GeoLite2-City.mmdb");

// const getCountry = (ip) => {
//     Reader.open("./GeoIP2-Country.mmdb").then((reader) => {
//         console.log(reader.country(ip));
//     });
// };
// getCountry("37.111.217.198");

const getCountry = async (ip) => {
    const res = await fetch(`http://localhost:3000/api/ipconfig?ip=${ip}`);
    const data = await res.json();
    console.log(data);
};

getCountry("37.111.217.198");
