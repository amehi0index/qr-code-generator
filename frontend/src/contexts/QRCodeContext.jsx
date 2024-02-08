import React, { createContext, useState, useContext } from 'react'

const QRCodeContext = createContext()

export const useQRCode = () => useContext(QRCodeContext)

export const QRCodeProvider = ({ children }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const value = {
    loading,
    setLoading,
    qrCodeUrl,
    setQrCodeUrl,
  }

  return <QRCodeContext.Provider value={value}>{children}</QRCodeContext.Provider>
}