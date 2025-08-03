"use client";
import {
  DocumentIcon,
  PaintBrushIcon,
  QrCodeIcon,
  PhoneIcon,
  ClipboardDocumentListIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const steps = [
  {
    id: "01",
    name: "أنشئ كتالوجك الرقمي",
    description:
      "سجل مجاناً وأضف منتجاتك مع الصور والأوصاف والأسعار في دقائق معدودة.",
    icon: ClipboardDocumentListIcon,
  },
  {
    id: "02",
    name: "خصص التصميم",
    description:
      "اختر الألوان والخطوط وأضف شعار متجرك لتجربة تتناسب مع هويتك التجارية.",
    icon: PaintBrushIcon,
  },
  {
    id: "03",
    name: "اطبع رموز QR",
    description:
      "احصل على رموز QR فريدة لمتجرك أو لأقسام مختلفة واطبعها بجودة عالية.",
    icon: QrCodeIcon,
  },
  {
    id: "04",
    name: "استقبل الطلبات",
    description:
      "العملاء يمسحون الرمز، يتصفحون منتجاتك، ويطلبون مباشرة أو يحجزون للاستلام.",
    icon: DevicePhoneMobileIcon,
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-32">
      <Container>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            حوّل متجرك رقمياً في 4 خطوات
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-lg tracking-tight text-slate-700"
          >
            لا حاجة لخبرة تقنية. أنشئ كتالوج رقمي احترافي وابدأ استقبال الطلبات
            في أقل من 30 دقيقة.
          </motion.p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <motion.dl
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.5 },
                  }}
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
                >
                  <step.icon aria-hidden="true" className="h-8 w-8" />
                </motion.div>
                <dt className="font-display text-lg font-semibold text-slate-900">
                  <span className="text-emerald-600">{step.id}.</span>{" "}
                  {step.name}
                </dt>
                <dd className="mt-2 text-base text-slate-600">
                  {step.description}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </Container>
    </section>
  );
}
