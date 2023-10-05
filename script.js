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
    qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(text);
    qrCode.alt = "QR Code";
    qrCodeContainer.appendChild(qrCode);

    downloadLink.style.display = "inline-block";
    downloadLink.href = qrCode.src;
}

document.getElementById("generateBtn").addEventListener("click", generateQRCode);
