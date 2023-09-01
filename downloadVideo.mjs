/* 
    This script will open a browser and go to youtube.com, then it will get the most viewed video and download it.
    puppeteer - use for web automation
    ytdl - use for download video
    open - use for open video on my default video palyer
*/
import puppeteer from "puppeteer";
import ytdl from "ytdl-core";
import fs from "fs";
import open from "open";

// run puppeteer
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 1280,
            height: 720,
            // set screen size
        },
        userDataDir: "temporary",
    });
    // open new pages
    const page = await browser.newPage();
    const pages = await browser.pages();
    await pages[0].close();
    // open youtube
    await page.goto("https://www.youtube.com/", {
        waitUntil: "networkidle2",
        timeout: 50000,
    });

    await page.waitForSelector("#content");

    // storing all home page video
    const videoDetails = await page.evaluate(() => {
        const videoElements = document.querySelectorAll("#dismissible");
        const videoDetailsArray = [];
        videoElements.forEach((element) => {
            const videoLink = element.querySelector("#thumbnail a")?.href;
            const videoTitle =
                element.querySelector("#video-title-link")?.innerText;
            const channelName =
                element.querySelector("#channel-name")?.innerText;
            const channelLink = element.querySelector(
                ".ytd-channel-name a"
            )?.href;
            const views = element.querySelector(
                "#metadata-line span"
            )?.innerText;

            videoDetailsArray.push({
                videoLink,
                videoTitle,
                channelName,
                channelLink,
                views,
            });
        });

        return videoDetailsArray.filter((e) => e.videoLink);
    });

    // create file with all homepage videos
    (async () => {
        const json = JSON.stringify(videoDetails, null, 2);
        try {
            if (fs.existsSync("videoDetails.json")) {
                fs.promises.unlink("videoDetails.json");
            }
            await fs.promises.writeFile("videoDetails.json", json);
        } catch (error) {
            console.error("Error writing JSON file:", error);
        }
    })();

    // find most views videos
    const getMostViewedVideo = (videoDetails) => {
        let mostViewedVideo = videoDetails[0];
        videoDetails.forEach((video) => {
            let viewsText;
            let mostViewedVideoText;
            if (!video.views.includes(".")) {
                viewsText = parseFloat(
                    video.views
                        .replace(/\./g, "")
                        .replace(/M/, "e6")
                        .replace(/K/, "e3")
                );
            } else {
                viewsText = parseFloat(
                    video.views.replace(/M/, "e6").replace(/K/, "e3")
                );
            }
            if (mostViewedVideo.views.includes(".")) {
                mostViewedVideoText = parseFloat(
                    mostViewedVideo.views
                        .replace(/\./g, "")
                        .replace(/M/, "e6")
                        .replace(/K/, "e3")
                );
            } else {
                mostViewedVideoText = parseFloat(
                    mostViewedVideo.views.replace(/M/, "e6").replace(/K/, "e3")
                );
            }

            if (viewsText > mostViewedVideoText) mostViewedVideo = video;
        });

        return mostViewedVideo;
    };
    // calling function
    const MostViewedVideo = getMostViewedVideo(videoDetails);
    // open most view vidoes
    await page.goto(MostViewedVideo.videoLink, {
        waitUntil: "networkidle2",
    });
    await page.waitForSelector(".html5-video-container");
    // console log for show most views videos
    console.log(MostViewedVideo);

    const downloadVideo = async (url) => {
        // dowanloding videos
        const video = ytdl(url, { filter: "videoandaudio" });
        // replace all character file name didn't accept
        const fileName = MostViewedVideo.videoTitle.replaceAll(
            /[/\\?%*:|"<>]/g,
            ""
        );

        if (fs.existsSync(`${fileName}.mp4`)) {
            console.log(`File ${fileName}.mp4 already exists.`);
            open(`${fileName}.mp4`);
            return;
        }

        if (!fs.existsSync(`download.mp4`)) {
            // set file name
            video.pipe(fs.createWriteStream(`${fileName}.mp4`));
            // showing downlaod progress
            video.on("progress", (_, downloaded, total) => {
                const percentage = (downloaded / total) * 100;
                const totalInMB = total / 1000000;
                // console log for downlaod progress
                console.log(
                    `Downloaded (${percentage.toFixed(2)}%)  of ${totalInMB} `
                );
            });
            video.on("finish", () => {
                // opeing video on video player
                open(`${fileName}.mp4`);
            });
            video.on("error", (err) => {
                console.error("Error downloading video:", err);
            });
        }
    };
    // calling downlaod video function
    downloadVideo(MostViewedVideo.videoLink);
    // page close
    page.close();
    // browser close
    browser.close();
})();
