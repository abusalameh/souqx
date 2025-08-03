"use client";
import { CheckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const tiers = [
  {
    name: "المجاني",
    id: "tier-free",
    href: "#",
    priceMonthly: "0 $",
    description: "مثالي للمطاعم الصغيرة والمقاهي",
    features: [
      "قائمة رقمية واحدة",
      "حتى 20 صنف",
      "رمز QR أساسي",
      "تحديثات فورية",
      "دعم عبر البريد الإلكتروني",
    ],
    mostPopular: false,
  },
  {
    name: "الاحترافي",
    id: "tier-professional",
    href: "#",
    priceMonthly: "10 $",
    description: "الأفضل للمطاعم المتوسطة",
    features: [
      "قوائم متعددة",
      "أصناف غير محدودة",
      "تخصيص كامل للتصميم",
      "إحصائيات متقدمة",
      "استقبال الطلبات",
      "دعم واتساب",
      "دعم على مدار الساعة",
    ],
    mostPopular: true,
  },
  {
    name: "المؤسسي",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "100 $",
    description: "للسلاسل والمطاعم الكبيرة",
    features: [
      "فروع متعددة",
      "إدارة مركزية",
      "تقارير مفصلة",
      "تكامل مع أنظمة نقاط البيع",
      "مدير حساب مخصص",
      "تدريب مجاني",
      "دعم أولوية",
    ],
    mostPopular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20 sm:py-32">
      <Container>
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            خطط أسعار تناسب جميع الأحجام
          </motion.h2>
          <motion.p
            className="mt-4 text-lg tracking-tight text-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            اختر الخطة المناسبة لحجم مطعمك واحتياجاتك
          </motion.p>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-3 lg:gap-x-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className={`flex flex-col justify-between rounded-2xl bg-white p-8 shadow-xl shadow-slate-900/10 ring-1 ring-slate-200 ${
                tier.mostPopular
                  ? "relative lg:z-10 lg:rounded-b-none ring-2 ring-emerald-600"
                  : "lg:mt-8"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={`font-display text-lg font-semibold leading-8 ${
                      tier.mostPopular ? "text-emerald-600" : "text-slate-900"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <motion.p
                      className="rounded-full bg-emerald-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-emerald-600"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      الأكثر شعبية
                    </motion.p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-slate-900">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-slate-500">
                    /شهرياً
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-slate-600"
                >
                  {tier.features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      className="flex gap-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckIcon
                          className="h-6 w-5 flex-none text-emerald-600"
                          aria-hidden="true"
                        />
                      </motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.a
                href={tier.href}
                aria-describedby={tier.id}
                className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${
                  tier.mostPopular
                    ? "bg-emerald-600 text-white shadow-lg hover:bg-emerald-500 focus-visible:outline-emerald-600"
                    : "text-emerald-600 ring-1 ring-inset ring-emerald-200 hover:bg-emerald-50 hover:ring-emerald-300 focus-visible:outline-emerald-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                ابدأ الآن
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
