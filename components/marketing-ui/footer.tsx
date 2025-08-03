"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const navigation = {
  product: [
    { name: "الميزات", href: "#features" },
    { name: "كيف يعمل", href: "#how-it-works" },
    { name: "الأسعار", href: "/pricing" },
    { name: "مولد رمز QR", href: "/qr-generator" },
  ],
  support: [
    { name: "مركز المساعدة", href: "/help" },
    { name: "اتصل بنا", href: "/contact" },
    { name: "توثيق API", href: "/docs" },
    { name: "الحالة", href: "/status" },
  ],
  company: [
    { name: "حول", href: "/about" },
    { name: "المدونة", href: "/blog" },
    { name: "الوظائف", href: "/careers" },
    { name: "الشركاء", href: "/partners" },
  ],
  legal: [
    { name: "سياسة الخصوصية", href: "/privacy" },
    { name: "شروط الخدمة", href: "/terms" },
    { name: "سياسة ملفات تعريف الارتباط", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 7.929.01 7.102.048 6.273.088 5.718.222 5.238.42a4.83 4.83 0 00-1.771 1.153A4.83 4.83 0 00.42 3.344c-.198.48-.332 1.035-.372 1.864C.01 6.035 0 6.502 0 10.124v3.753c0 3.621.01 4.088.048 4.915.04.829.174 1.384.372 1.864.2.675.52 1.248 1.153 1.771a4.83 4.83 0 001.771 1.153c.48.198 1.035.332 1.864.372.827.038 1.294.048 4.915.048h3.753c3.621 0 4.088-.01 4.915-.048.829-.04 1.384-.174 1.864-.372a4.83 4.83 0 001.771-1.153 4.83 4.83 0 001.153-1.771c.198-.48.332-1.035.372-1.864.038-.827.048-1.294.048-4.915V10.124c0-3.621-.01-4.088-.048-4.915-.04-.829-.174-1.384-.372-1.864a4.83 4.83 0 00-1.153-1.771A4.83 4.83 0 0019.656.42c-.48-.198-1.035-.332-1.864-.372C16.965.01 16.498 0 12.877 0H12.017zm-.132 2.199h.132c3.539 0 3.961.014 5.36.052.793.036 1.224.166 1.512.276.38.148.652.325.937.61.285.285.462.557.61.937.11.288.24.719.276 1.512.038 1.399.052 1.821.052 5.36s-.014 3.961-.052 5.36c-.036.793-.166 1.224-.276 1.512-.148.38-.325.652-.61.937-.285.285-.557.462-.937.61-.288.11-.719.24-1.512.276-1.399.038-1.821.052-5.36.052s-3.961-.014-5.36-.052c-.793-.036-1.224-.166-1.512-.276a2.478 2.478 0 01-.937-.61 2.478 2.478 0 01-.61-.937c-.11-.288-.24-.719-.276-1.512-.038-1.399-.052-1.821-.052-5.36s.014-3.961.052-5.36c.036-.793.166-1.224.276-1.512.148-.38.325-.652.61-.937.285-.285.557-.462.937-.61.288-.11.719-.24 1.512-.276 1.225-.056 1.701-.07 4.228-.07zm8.376 2.048a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0zM5.838 12.017a6.179 6.179 0 1112.358 0 6.179 6.179 0 01-12.358 0zm2.16 0a4.019 4.019 0 108.038 0 4.019 4.019 0 00-8.038 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.0956Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-900">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <motion.div
          className="xl:grid xl:grid-cols-3 xl:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="h-8 w-8 rounded bg-emerald-600 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white font-bold text-lg">X</span>
              </motion.div>
              <span className="ml-2 text-xl font-bold text-white">xsouq</span>
            </motion.div>
            <motion.p
              className="text-sm/6 text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              تمكين الشركات في جميع أنحاء الشرق الأوسط بالحلول الرقمية. إنشاء
              قوائم QR جميلة وتجارب رقمية لعملائك.
            </motion.p>
            <motion.div
              className="flex space-x-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {navigation.social.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.2,
                    color: "#10b981",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-sm/6 font-semibold text-white">المنتج</h3>
                <motion.ul
                  role="list"
                  className="mt-6 space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {navigation.product.map((item) => (
                    <motion.li key={item.name} variants={itemVariants}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={item.href}
                          className="text-sm/6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div
                className="mt-10 md:mt-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-sm/6 font-semibold text-white">الدعم</h3>
                <motion.ul
                  role="list"
                  className="mt-6 space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {navigation.support.map((item) => (
                    <motion.li key={item.name} variants={itemVariants}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={item.href}
                          className="text-sm/6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-sm/6 font-semibold text-white">الشركة</h3>
                <motion.ul
                  role="list"
                  className="mt-6 space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {navigation.company.map((item) => (
                    <motion.li key={item.name} variants={itemVariants}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={item.href}
                          className="text-sm/6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div
                className="mt-10 md:mt-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-sm/6 font-semibold text-white">قانوني</h3>
                <motion.ul
                  role="list"
                  className="mt-6 space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {navigation.legal.map((item) => (
                    <motion.li key={item.name} variants={itemVariants}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={item.href}
                          className="text-sm/6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-sm/6 text-gray-400">
            &copy; 2024 xsouq. جميع الحقوق محفوظة. صُنع بـ ❤️ للشركات في الشرق
            الأوسط.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
