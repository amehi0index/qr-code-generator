import React from 'react'
import { useQRCode } from '../contexts/QRCodeContext'
import { FiDownload } from "react-icons/fi"
import { BiLoaderCircle } from "react-icons/bi"

const QRCodeDownload = () => {
    const { qrCodeUrl, loading }  = useQRCode()
    if (loading) {
        return <div className="qrLoad"> 
            <span>Generating QR Code</span>  <BiLoaderCircle className="pulsingIcon"/>
        </div>
    }

    return qrCodeUrl ? (
        // <a href={qrCodeUrl} download className={`downloadLink ${qrCodeUrl ? 'show' : ''}`}>
        <a href={qrCodeUrl} download className="downloadLink">
            <span>Download QR Code</span> <FiDownload />
        </a>
    ) : null
}


export default QRCodeDownload