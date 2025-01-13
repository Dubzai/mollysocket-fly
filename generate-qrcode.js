const QRCode = require('qrcode');

const unifiedPushConfig = {
    endpoint: "https://mollysocket-unified.fly.dev",
    publicKey: "BIMZdefTLEivPVqlCeL2YaMOHVdiIwAm9jzTRARddZccJP9F_BTpz77IaaBM9aAuXCE1vYmUY33Dv3wtTWfo-hw",
    auth: "Ght9ml3pKq7ZL6Xkqz8Ybm9"
};

const jsonString = JSON.stringify(unifiedPushConfig);

// Generate and display the QR code in the terminal
QRCode.toString(jsonString, { type: 'terminal' }, (err, url) => {
    if (err) console.error('Error:', err);
    else console.log(url);
});

// Save the QR code as an image
QRCode.toFile('qrcode.png', jsonString, (err) => {
    if (err) console.error('Error saving QR code:', err);
    else console.log('QR code saved as qrcode.png');
});

