let inputData = {
    name: "",
    email: "",
    message: "",
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.message === "open_modal") {
        const modal = document.createElement("div");
        modal.classList.add("customModalWrapper");
        modal.innerHTML = `
            <div class="modalContainer">
                <div class="modalHeader">
                    <h3>Modal Header</h3>
                    <img id="closeBtn" src="https://firebasestorage.googleapis.com/v0/b/ahmed-auto-parts.appspot.com/o/cross.png?alt=media&token=36791bab-83db-4b8d-be36-a8953377b225"alt="" />
                </div>
                <div class="modalBody">
                <form class="inputFormModal">
                <label class="inputFormLabel">
                    <span class="">Your Name</span>
                    <input id="name-input" type="text" name="name" placeholder="What's your good name?" class="" value="">
                </label>
                <label class="inputFormLabel">
                    <span class="">Your email</span>
                    <input id="email-input" type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="What's your email address?" class="" value="">
                </label>
                <label class="inputFormLabel">
                    <span class="text-white font-medium mb-4">Your Message</span>
                    <textarea id="message-input" rows="7" name="message" placeholder="What you want to say?" class=""></textarea>
                </label>
                
                </div>
                <div class="modalFooter">
                    <button id="StartAutoMation">Start AutoMation</button>
                </div>
            </div>
            `;

        const closeButton = modal.querySelector("#closeBtn");
        closeButton.addEventListener("click", () => {
            modal.remove();
        });

        document.body.appendChild(modal);

        const nameInput = document.querySelector("#name-input");
        const emailInput = document.querySelector("#email-input");
        const messageInput = document.querySelector("#message-input");

        nameInput.addEventListener("change", (event) => {
            inputData.name = event?.target?.value;
        });

        emailInput.addEventListener("change", (event) => {
            inputData.email = event?.target?.value;
        });

        messageInput.addEventListener("change", (event) => {
            inputData.message = event?.target?.value;
        });

        const automationBtn = document.getElementById("StartAutoMation");
        automationBtn.addEventListener("click", () => {
            chrome.runtime.sendMessage({
                message: "start_automation",
                data: inputData,
            });
        });
    }
});
