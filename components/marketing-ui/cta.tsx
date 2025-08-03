"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function CTA() {
  return (
    <div className="bg-emerald-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            اختر الباقة المثالية لإدارة متجرك باحترافية!
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg/8 text-emerald-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ابدأ تجربة مجانية بدون تفاصيل بطاقة ائتمانية وحوّل متجرك أو مؤسستك
            إلى تجربة رقمية عصرية
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/auth/register"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-emerald-600 shadow-sm hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                ابدأ تجربتك المجانية
              </Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="#how-it-works"
                className="text-sm/6 font-semibold text-white"
              >
                تعلم المزيد <span aria-hidden="true">←</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Features highlight */}
          <motion.div
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="text-2xl font-bold text-white"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                شهرين مجاناً
              </motion.div>
              <div className="text-sm text-emerald-200">
                عند الاشتراك السنوي
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="text-2xl font-bold text-white"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                لا تتضمن إعلانات
              </motion.div>
              <div className="text-sm text-emerald-200">تجربة نظيفة</div>
            </motion.div>
            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="text-2xl font-bold text-white"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                إحصائيات متقدمة
              </motion.div>
              <div className="text-sm text-emerald-200">لمتابعة النمو</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
