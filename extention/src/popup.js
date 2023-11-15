import { WebsiteList } from "../constant.js";

const getHtml = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const mainDiv = document.getElementsByClassName("mainContent");
        const url = tabs[0].url;
        WebsiteList.forEach((website) => {
            if (url.includes(website.url)) {
                mainDiv[0].innerHTML = `<p>Selected Website</p> 
                    <div class="websiteSelect">
                            <select name="" id="">
                                <option value="">${website.name}</option>
                                <option value="">Facebook</option>
                                <option value="">YouTube</option>
                            </select>
                    <button id="createBtn">Create</button>
                    </div>
                    `;

                const createBtn = document.getElementById("createBtn");
                createBtn.addEventListener("click", () => {
                    chrome.tabs.query(
                        { active: true, currentWindow: true },
                        (tabs) => {
                            const tab = tabs[0];
                            chrome.tabs.sendMessage(tab.id, {
                                message: "open_modal",
                            });
                        }
                    );
                });
            } else {
                mainDiv[0].innerHTML = `<p>Sorry not found</p> 
                    
                    `;
            }
        });
    });
};

getHtml();
