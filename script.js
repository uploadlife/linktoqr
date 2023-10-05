function generateQRCode() {
    const text = document.getElementById("qrText").value;
    const qrCodeContainer = document.getElementById("qrcode");
    const downloadLink = document.getElementById("downloadLink");

    if (text === "") {
        alert("Please enter QR code content.");
        return;
    }

    qrCodeContainer.innerHTML = "";
    qrCodeContainer.style.display = "block";

    // Create a QR code element and append it to the container
    const qrCode = document.createElement("img");
    const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=" + encodeURIComponent(text);
    qrCode.src = qrCodeUrl;
    qrCode.alt = "QR Code";
    qrCodeContainer.appendChild(qrCode);

    downloadLink.style.display = "inline-block";

    // Add an event listener to the download link
    downloadLink.addEventListener("click", function() {
        const link = document.createElement("a");
        link.href = qrCodeUrl;
        link.download = "qrcode.png";
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

document.getElementById("generateBtn").addEventListener("click", generateQRCode);
