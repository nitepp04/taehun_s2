import { QRCodeCanvas } from "qrcode.react";

function QRCode() {
    const fileName = "fileName";

    return (
        <div>
            <QRCodeCanvas
                value={`localhost:3000=${fileName}}`}
            />
        </div>
    )
}

export default QRCode;