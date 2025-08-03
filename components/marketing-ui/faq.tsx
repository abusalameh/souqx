'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/container'

const faqs = [
  {
    question: 'هل يمكنني تجربة المنصة مجاناً؟',
    answer: 'نعم، نوفر فترة تجريبية مجانية لمدة 14 يوماً بدون الحاجة لبطاقة ائتمانية. يمكنك تجربة جميع المميزات والتأكد من ملاءمة المنصة لاحتياجاتك.',
  },
  {
    question: 'كم من الوقت يستغرق إعداد القائمة الرقمية؟',
    answer: 'يمكنك إعداد قائمتك الرقمية في أقل من 30 دقيقة. ما عليك سوى إضافة أطباقك مع الصور والأسعار، وستكون جاهزة للاستخدام فوراً.',
  },
  {
    question: 'هل أحتاج لمعرفة تقنية لاستخدام المنصة؟',
    answer: 'لا على الإطلاق! صممنا المنصة لتكون سهلة الاستخدام للجميع. واجهة بسيطة وواضحة تمكنك من إدارة قائمتك بكل سهولة.',
  },
  {
    question: 'هل يمكن للعملاء الطلب مباشرة من القائمة؟',
    answer: 'نعم، يمكن للعملاء تصفح القائمة وإرسال طلباتهم مباشرة إليك عبر واتساب أو أي طريقة تفضلها. ستتلقى إشعارات فورية بالطلبات الجديدة.',
  },
  {
    question: 'هل يمكنني تخصيص تصميم القائمة؟',
    answer: 'بالطبع! يمكنك اختيار الألوان والخطوط وإضافة شعار مطعمك لتتناسب القائمة مع هوية علامتك التجارية.',
  },
  {
    question: 'ماذا لو احتجت مساعدة أو دعم فني؟',
    answer: 'نوفر دعماً فنياً على مدار الساعة عبر الدردشة المباشرة والبريد الإلكتروني. فريقنا جاهز لمساعدتك في أي وقت.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-slate-50 py-20 sm:py-32">
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
            الأسئلة الشائعة
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg tracking-tight text-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            إجابات على أكثر الأسئلة شيوعاً حول منصتنا
          </motion.p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-900/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <dt>
                  <motion.button
                    className="flex w-full items-start justify-between text-right text-slate-900"
                    onClick={() => toggleFAQ(index)}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-display text-lg font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDownIcon
                          className="h-6 w-6 text-slate-500"
                          aria-hidden="true"
                        />
                      </motion.div>
                    </span>
                  </motion.button>
                </dt>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.dd 
                      className="mt-4 pr-12"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-base leading-7 text-slate-600">{faq.answer}</p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </Container>
    </section>
  )
}