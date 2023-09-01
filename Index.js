import jsPDF from "./node_modules/jspdf/dist/jspdf.min.js";

const downloadBtn = document.querySelector("#download-btn");

downloadBtn.addEventListener("click", downloadPdf);

function downloadPdf() {
    const pdf = new jsPDF();
    const pages = document.querySelectorAll("#user-table-body tr");

    for (let i = 0; i < pages.length; i++) {
        if (i !== 0) {
            pdf.addPage();
        }

        const page = pages[i];
        const pageData = [];

        for (let j = 0; j < page.children.length; j += 3) {
            const name = page.children[j].textContent;
            const address = page.children[j + 1].textContent;
            const voterNumber = page.children[j + 2].textContent;

            pageData.push({
                name,
                address,
                voterNumber,
            });
        }

        pdf.autoTable({
            columns: [
                { header: "Name", dataKey: "name" },
                { header: "Address", dataKey: "address" },
                { header: "Voter Number", dataKey: "voterNumber" },
            ],
            body: pageData,
        });
    }

    pdf.save("user-data-table.pdf");
}
