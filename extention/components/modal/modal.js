const customModal = () => {
    const modal = document.createElement("div");
    modal.classList.add("customModalWrapper");
    modal.innerHTML = `
    <div>
       Hello World 
    </div>
    `;
    document.body.appendChild(modal);
};

// const openModal = () => {
//     // Create your modal or popup here

//     modal.innerHTML = "This is a modal";
//     modal.style.position = "fixed";
//     modal.style.top = "50%";
//     modal.style.left = "50%";
//     modal.style.transform = "translate(-50%, -50%)";
//     modal.style.background = "white";
//     modal.style.padding = "20px";
//     modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
//     modal.style.zIndex = "9999";
//     document.body.appendChild(modal);

//     // Close the modal on some event, e.g., clicking a button
//     const closeButton = document.createElement("button");
//     closeButton.innerText = "Close";
//     closeButton.addEventListener("click", () => {
//         modal.remove();
//     });
//     modal.appendChild(closeButton);
// };

export {
    customModal,
}
