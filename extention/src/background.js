import puppeteer from "puppeteer";

console.log("Background script running");
console.log(puppeteer);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.message === "start_automation") {
        performAutomation(message.data);
    }
});
