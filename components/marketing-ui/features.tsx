"use client";
import { motion } from "framer-motion";
import {
  StarIcon,
  DocumentIcon,
  ChartBarIcon,
  CheckIcon,
  ClockIcon,
  GlobeAltIcon,
  QrCodeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/container";

const features = [
  {
    name: "تحكم بشكل ظهورك",
    description:
      "خصص الهوية البصرية من خلال تغيير الألوان، والشعار، والغلاف، وقم بالربط مع وسائل التواصل الاجتماعي المختلفة.",
    icon: StarIcon,
  },
  {
    name: "تحكم بالكامل بالأقسام والعناصر",
    description:
      "قم بإضافة الأقسام والتحكم بترتيبها، أضف العناصر بكل مرونة وسهولة وتحكم بالأسعار والأوصاف والصور المرفقة.",
    icon: DocumentIcon,
  },
  {
    name: "تابع الطلبات بسهولة",
    description:
      "استقبل طلبات عملائك بسهولة للاستلام أو للتوصيل، مع إمكانية متابعة حالة كل طلب وتحديثها مباشرة.",
    icon: CheckIcon,
  },
  {
    name: "إحصائيات لمتابعة النمو",
    description:
      "من أجل متابعة نموك قمنا برصد الزيارات لك ولأقسامك ومنتجاتك لتتمكن من التطوير والمتابعة المستمرة.",
    icon: ChartBarIcon,
  },
  {
    name: "QR كود ورابط مخصص",
    description:
      "احصل على الرمز المخصص لتتمكن من وضعه في متجرك أو بجانب الكاشير، وامتلك رابطك المخصص.",
    icon: QrCodeIcon,
  },
  {
    name: "تعدد اللغات",
    description:
      "يمكنك تخصيص عرض الكتالوج بلغات مختلفة مثل العربية، الإنجليزية والتركية لخدمة جميع عملائك.",
    icon: GlobeAltIcon,
  },
  {
    name: "تحديثات فورية",
    description:
      "يمكنك أيضاً إخفاء عناصر عن القائمة في حال عدم توفرها أو انتهاء صلاحيتها، والتحديث يتم فوراً.",
    icon: ClockIcon,
  },
  {
    name: "تصميم متجاوب",
    description:
      "كتالوج رقمي يعمل على جميع الأجهزة الذكية والأجهزة اللوحية بتصميم جميل وسهل الاستخدام.",
    icon: PhoneIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Features() {
  return (
    <section 
      id="features" 
      aria-label="Features for running your business"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <motion.div 
          className="mx-auto max-w-2xl md:text-center xl:max-w-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            كل ما تحتاجه لإدارة متجرك
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg tracking-tight text-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            حصلنا على ثقة المئات من العملاء من كل أنحاء العالم. منصة شاملة تحتوي
            على جميع الأدوات التي تحتاجها لإدارة متجرك أو مؤسستك بشكل احترافي.
          </motion.p>
        </motion.div>
        <motion.dl 
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.name} 
              className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 hover:shadow-2xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.div 
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 shadow-lg"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <feature.icon
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                />
              </motion.div>
              <dt className="mt-4 text-lg font-semibold text-slate-900">
                {feature.name}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
