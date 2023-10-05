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
        fetch(qrCodeUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = "qrcode.png";
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            });
    });
}

document.getElementById("generateBtn").addEventListener("click", generateQRCode);
