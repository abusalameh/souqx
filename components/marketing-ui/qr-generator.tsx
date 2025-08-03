'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QrCodeIcon, ArrowDownTrayIcon, PrinterIcon, ShareIcon } from '@heroicons/react/24/outline'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

const formVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

const previewVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
}

export default function QRGenerator() {
  const [businessName, setBusinessName] = useState('')
  const [businessUrl, setBusinessUrl] = useState('')
  const [qrSize, setQrSize] = useState('medium')
  const [qrStyle, setQrStyle] = useState('square')
  const [showPreview, setShowPreview] = useState(false)

  const generateQR = () => {
    if (businessName && businessUrl) {
      setShowPreview(true)
    }
  }

  const downloadQR = (format: string) => {
    // This would integrate with a QR code library like qrcode.js
    console.log(`Downloading QR code in ${format} format`)
  }

  const qrSizes = {
    small: { size: '200px', label: 'صغير (200x200)' },
    medium: { size: '300px', label: 'متوسط (300x300)' },
    large: { size: '400px', label: 'كبير (400x400)' },
    xlarge: { size: '500px', label: 'كبير جداً (500x500)' }
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            مولد رمز QR
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg/8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            أنشئ رموز QR جميلة لعملك. مثالية للملصقات أو بطاقات العمل أو المشاركة الرقمية.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Form Section */}
            <motion.div 
              className="space-y-6"
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">
                  اسم العمل
                </label>
                <motion.input
                  type="text"
                  id="business-name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                  placeholder="أدخل اسم عملك"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="business-url" className="block text-sm font-medium text-gray-700">
                  رابط العمل أو رابط القائمة
                </label>
                <motion.input
                  type="url"
                  id="business-url"
                  value={businessUrl}
                  onChange={(e) => setBusinessUrl(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                  placeholder="https://xsouq.com/your-business"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="qr-size" className="block text-sm font-medium text-gray-700">
                  حجم رمز QR
                </label>
                <motion.select
                  id="qr-size"
                  value={qrSize}
                  onChange={(e) => setQrSize(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {Object.entries(qrSizes).map(([key, { label }]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </motion.select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label htmlFor="qr-style" className="block text-sm font-medium text-gray-700">
                  نمط رمز QR
                </label>
                <motion.select
                  id="qr-style"
                  value={qrStyle}
                  onChange={(e) => setQrStyle(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <option value="square">مربع</option>
                  <option value="rounded">مدور</option>
                  <option value="dots">نقاط</option>
                </motion.select>
              </motion.div>

              <motion.button
                onClick={generateQR}
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <QrCodeIcon className="h-5 w-5 mr-2" />
                </motion.div>
                إنشاء رمز QR
              </motion.button>
            </motion.div>

            {/* Preview Section */}
            <motion.div 
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <AnimatePresence mode="wait">
                {showPreview ? (
                  <motion.div 
                    className="space-y-6"
                    variants={previewVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    key="preview"
                  >
                    {/* QR Code Preview */}
                    <motion.div 
                      className="bg-gray-100 rounded-lg p-8 text-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="mx-auto bg-white rounded-lg shadow-lg flex items-center justify-center"
                        style={{ 
                          width: qrSizes[qrSize as keyof typeof qrSizes].size, 
                          height: qrSizes[qrSize as keyof typeof qrSizes].size 
                        }}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, type: "spring" }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <QrCodeIcon className="h-24 w-24 text-gray-400" />
                        </motion.div>
                      </motion.div>
                      <motion.p 
                        className="mt-4 text-sm text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {businessName}
                      </motion.p>
                      <motion.p 
                        className="text-xs text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {businessUrl}
                      </motion.p>
                    </motion.div>

                    {/* Download Options */}
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-lg font-medium text-gray-900 text-center">خيارات التحميل</h3>
                      <motion.div 
                        className="grid grid-cols-2 gap-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {[
                          { format: 'png', icon: ArrowDownTrayIcon, label: 'PNG' },
                          { format: 'svg', icon: ArrowDownTrayIcon, label: 'SVG' },
                          { format: 'pdf', icon: PrinterIcon, label: 'PDF' },
                          { format: 'share', icon: ShareIcon, label: 'مشاركة' }
                        ].map((item) => (
                          <motion.button
                            key={item.format}
                            onClick={() => downloadQR(item.format)}
                            className="flex items-center justify-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.2 }}
                            >
                              <item.icon className="h-4 w-4 mr-2" />
                            </motion.div>
                            {item.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="text-center text-gray-500"
                    variants={previewVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    key="placeholder"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <QrCodeIcon className="h-24 w-24 mx-auto mb-4 text-gray-300" />
                    </motion.div>
                    <p>املأ النموذج لإنشاء رمز QR الخاص بك</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Usage Examples */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-gray-900 text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              كيفية استخدام رمز QR الخاص بك
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: PrinterIcon, title: 'ملصقات الباب', desc: 'اطبع والصق على واجهة متجرك' },
                { icon: QrCodeIcon, title: 'رموز QR للطاولات', desc: 'رمز QR فريد لكل طاولة' },
                { icon: ShareIcon, title: 'مشاركة اجتماعية', desc: 'شارك على وسائل التواصل' },
                { icon: ArrowDownTrayIcon, title: 'خيم الطاولات', desc: 'مثالية للمطاعم' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="bg-emerald-100 rounded-lg p-4 mb-4"
                    whileHover={{ backgroundColor: "#d1fae5" }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="h-8 w-8 text-emerald-600 mx-auto" />
                    </motion.div>
                  </motion.div>
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}