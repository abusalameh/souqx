"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

const testimonials = [
  {
    body: "منصة رائعة ساعدتني في تحويل متجري إلى تجربة رقمية حديثة. العملاء يحبون مسح رمز QR لرؤية الكتالوج، والمبيعات زادت بشكل ملحوظ منذ بدأت استخدام المنصة.",
    author: {
      name: "أحمد الراشد",
      handle: "alrashidstore",
      business: "متجر الراشد للإلكترونيات",
      location: "عمان، الأردن",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  },
  {
    body: "التحكم بالكتالوج أصبح سهلاً جداً. يمكنني تحديث الأسعار وإضافة منتجات جديدة في أي وقت، والتغييرات تظهر فوراً للعملاء. الإحصائيات تساعدني في فهم تفضيلات الزبائن.",
    author: {
      name: "فاطمة حسن",
      handle: "fatimastore",
      business: "بوتيك فاطمة للأزياء",
      location: "إربد، الأردن",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
  },
  {
    body: "الدعم متعدد اللغات ممتاز لعملائنا المتنوعين. العملاء العرب والأجانب يمكنهم تصفح الكتالوج بسهولة. رموز QR في المتجر وفرت علينا تكلفة طباعة الكتالوجات.",
    author: {
      name: "عمر خليل",
      handle: "levantshoes",
      business: "متجر الشام للأحذية",
      location: "دبي، الإمارات العربية المتحدة",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
  },
  {
    body: "استقبال الطلبات أصبح أسهل بكثير. العملاء يطلبون مباشرة من المتجر أو للتوصيل، وأتلقى إشعارات فورية. هذا وفر علي الكثير من الوقت والجهد في إدارة المتجر.",
    author: {
      name: "ليلى منصور",
      handle: "lilycosmetics",
      business: "متجر ليلى لمستحضرات التجميل",
      location: "بيروت، لبنان",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
  },
  {
    body: "إمكانية إخفاء المنتجات غير المتوفرة فورياً غيّرت طريقة عملي. لا مزيد من العملاء المحبطين الذين يطلبون منتجات غير متاحة. المنصة سهلة الاستخدام ومناسبة لجميع الأعمار.",
    author: {
      name: "خالد الزهراء",
      handle: "mobileshopksa",
      business: "متجر الزهراء للهواتف المحمولة",
      location: "الرياض، المملكة العربية السعودية",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
  },
  {
    body: "التصميم الجميل والمرونة في التخصيص جعلا كتالوجي يبدو احترافياً جداً. يمكنني تغيير الألوان والشعار ليتناسب مع هوية متجري. العملاء معجبون بالتجربة الرقمية.",
    author: {
      name: "نور عبدالله",
      handle: "sweetdreamsjewelry",
      business: "متجر الأحلام الحلوة للمجوهرات",
      location: "القاهرة، مصر",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    },
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
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
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl md:text-center"
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            محبوب من قبل الشركات في جميع أنحاء العالم
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-lg tracking-tight text-slate-700"
          >
            منصتنا بسيطة جداً لدرجة أن الناس لا يستطيعون إلا أن يقعوا في حبها. 
            البساطة سهلة عندما تركز على الميزات الأساسية.
          </motion.p>
        </motion.div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {[testimonials.slice(0, 2), testimonials.slice(2, 4), testimonials.slice(4, 6)].map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <motion.li 
                    key={testimonialIndex}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: columnIndex * 0.1 + testimonialIndex * 0.1 }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.body}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.business}
                          </div>
                          <div className="mt-1 text-xs text-slate-400">
                            {testimonial.author.location}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className="h-14 w-14"
                          >
                            <Image
                              className="h-14 w-14 object-cover rounded-full"
                              src={testimonial.author.imageUrl}
                              alt={`${testimonial.author.name} - ${testimonial.author.business}`}
                              width={56}
                              height={56}
                              priority={false}
                            />
                          </motion.div>
                        </div>
                      </figcaption>
                    </figure>
                  </motion.li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
