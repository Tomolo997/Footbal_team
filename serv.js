// Require Puppeteer.

const puppeteer = require("puppeteer");

async function generatePDF() {
  // Launch a new browser session.
  const browser = await puppeteer.launch();
  // Open a new Page.
  const page = await browser.newPage();

  // Go to our invoice page that we serve on `localhost:8000`.
  await page.goto("http://localhost:8080");
  const item = await yea.document.querySelector(".field");

  await page.setContent(item);
  // Store the PDF in a file named `invoice.pdf`.
  await page.pdf({
    path: "invoice.pdf",
    format: "A3",
    margin: { left: "200px", top: "0px" },
  });

  await browser.close();
}
generatePDF();
