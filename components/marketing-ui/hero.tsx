'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, QrCodeIcon, DeviceTabletIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'

const navigation = [
  { name: 'المميزات', href: '#features' },
  { name: 'أنواع الأعمال', href: '#business-types' },
  { name: 'كيف يعمل', href: '#how-it-works' },
  { name: 'آراء العملاء', href: '#testimonials' },
  { name: 'الأسعار', href: '#pricing' },
  { name: 'الأسئلة الشائعة', href: '#faq' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="bg-white">
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
            : 'bg-transparent'
        }`}
      >
        <nav aria-label="Global" className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'p-4 lg:px-8' : 'p-6 lg:px-8'
        }`}>
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex lg:flex-1"
          >
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">xsouq</span>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                animate={{ scale: isScrolled ? 0.9 : 1 }}
              >
                <BuildingStorefrontIcon className={`w-auto text-emerald-600 transition-all duration-300 ${
                  isScrolled ? 'h-7' : 'h-8'
                }`} />
              </motion.div>
              <span className={`mr-2 font-bold text-gray-900 transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>xsouq</span>
            </a>
          </motion.div>
          <div className="flex lg:hidden">
            <motion.button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-all duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-gray-700 hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </motion.button>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex lg:gap-x-12"
          >
            {navigation.map((item, index) => (
              <motion.button 
                key={item.name} 
                onClick={() => smoothScrollTo(item.href)}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, color: "#059669" }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm/6 font-semibold transition-all duration-200 cursor-pointer ${
                  isScrolled ? 'text-gray-900' : 'text-gray-900'
                } hover:text-emerald-600`}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex lg:flex-1 lg:justify-end"
          >
            <motion.a 
              href="/auth/login" 
              whileHover={{ scale: 1.05 }}
              className="text-sm/6 font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
            >
              تسجيل الدخول <span aria-hidden="true">&larr;</span>
            </motion.a>
          </motion.div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" 
          />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">xsouq</span>
                <div className="flex items-center space-x-2">
                  <BuildingStorefrontIcon className="h-8 w-8 text-emerald-600" />
                  <span className="text-xl font-bold text-gray-900">xsouq</span>
                </div>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => smoothScrollTo(item.href)}
                      className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/auth/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    تسجيل الدخول
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </motion.header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <Container className="pt-20 pb-16 text-center lg:pt-32">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden sm:mb-8 sm:flex sm:justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative rounded-full px-4 py-2 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-white/80 backdrop-blur-sm"
            >
              🚀 انضم لأكثر من 500+ متجر ومؤسسة نجحوا في التحول الرقمي{' '}
              <a href="#features" className="font-semibold text-emerald-600">
                <span aria-hidden="true" className="absolute inset-0" />
                شاهد النتائج <span aria-hidden="true">&larr;</span>
              </a>
            </motion.div>
          </motion.div>
          <div className="text-center">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-7xl"
            >
              احصل على <motion.span 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                className="text-emerald-600"
              >300% زيادة</motion.span> في المبيعات
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-6 text-xl font-medium text-pretty text-gray-600 sm:text-2xl/8 max-w-3xl mx-auto"
            >
              كتالوج رقمي ذكي + نظام طلبات مباشر + إحصائيات متقدمة = نمو مضمون لمتجرك
            </motion.p>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto"
            >
              تخلص من هموم الكتالوج التقليدي واستقبل الطلبات مباشرة من العملاء مع لوحة تحكم شاملة
            </motion.p>
            
            {/* Social Proof Numbers */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600"
            >
              {[
                { number: "500+", text: "متجر ومؤسسة" },
                { number: "50,000+", text: "طلب شهرياً" },
                { number: "4.9/5", text: "تقييم العملاء" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <span className="font-semibold text-emerald-600">{item.number}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="/admin"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 flex items-center gap-3 transition-all duration-200"
              >
                <QrCodeIcon className="h-6 w-6" />
                ابدأ تجربة مجانية - 30 يوم
              </motion.a>
              <motion.a 
                href="#how-it-works" 
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-lg font-semibold text-gray-900 flex items-center gap-2 hover:text-emerald-600 transition-colors"
              >
                <DeviceTabletIcon className="h-6 w-6" />
                شاهد كيف يعمل <span aria-hidden="true">←</span>
              </motion.a>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500"
            >
              {[
                { text: "بدون رسوم إعداد" },
                { text: "إلغاء في أي وقت" },
                { text: "دعم فني 24/7" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 2.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1"
                >
                  <span>✓</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}