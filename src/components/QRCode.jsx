import { QRCodeCanvas } from "qrcode.react";

function QRCode() {
    const uuid = "uuid";

    return (
        <div>
            <QRCodeCanvas
                value={`https://www.naver.com?uuid=${uuid}?expiredtime=${Date.now() + (30 * 60 * 1000)}}`}
            />
        </div>
    )
}

export default QRCode;