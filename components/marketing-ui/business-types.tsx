'use client'

import { Container } from '@/components/ui/container'
import { motion } from 'framer-motion'
import {
  ShoppingBagIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  GiftIcon,
  HomeIcon,
  HeartIcon,
  CakeIcon,
  WrenchScrewdriverIcon,
  BookOpenIcon,
  PaintBrushIcon,
  MusicalNoteIcon,
  CameraIcon,
} from '@heroicons/react/24/outline'

const businessTypes = [
  {
    name: 'ملابس وأزياء',
    description: 'عرض أحدث التصاميم والموضة',
    icon: ShoppingBagIcon,
    color: 'from-pink-500 to-rose-500',
    examples: ['ملابس نسائية', 'ملابس رجالية', 'ملابس أطفال', 'أزياء محجبات']
  },
  {
    name: 'إلكترونيات وهواتف',
    description: 'أحدث الأجهزة والتقنيات',
    icon: DevicePhoneMobileIcon,
    color: 'from-blue-500 to-cyan-500',
    examples: ['هواتف ذكية', 'لابتوب', 'إكسسوارات', 'أجهزة منزلية']
  },
  {
    name: 'مجوهرات وإكسسوارات',
    description: 'قطع فريدة وتصاميم راقية',
    icon: SparklesIcon,
    color: 'from-yellow-500 to-amber-500',
    examples: ['ذهب وفضة', 'ساعات', 'نظارات', 'حقائب']
  },
  {
    name: 'هدايا ومناسبات',
    description: 'هدايا مميزة لكل المناسبات',
    icon: GiftIcon,
    color: 'from-purple-500 to-violet-500',
    examples: ['هدايا عيد ميلاد', 'هدايا زواج', 'هدايا تخرج', 'هدايا مواليد']
  },
  {
    name: 'أثاث ومنزل',
    description: 'كل ما تحتاجه لمنزل عصري',
    icon: HomeIcon,
    color: 'from-green-500 to-emerald-500',
    examples: ['أثاث غرف نوم', 'أثاث مطبخ', 'ديكورات', 'أدوات منزلية']
  },
  {
    name: 'صحة وجمال',
    description: 'منتجات العناية والجمال',
    icon: HeartIcon,
    color: 'from-red-500 to-pink-500',
    examples: ['مستحضرات تجميل', 'عطور', 'منتجات عناية', 'مكملات غذائية']
  },
  {
    name: 'حلويات ومخبوزات',
    description: 'أشهى الحلويات والمخبوزات',
    icon: CakeIcon,
    color: 'from-orange-500 to-red-500',
    examples: ['كيك وتورت', 'حلويات شرقية', 'شوكولاتة', 'معجنات']
  },
  {
    name: 'خدمات وصيانة',
    description: 'خدمات احترافية متنوعة',
    icon: WrenchScrewdriverIcon,
    color: 'from-gray-500 to-slate-500',
    examples: ['صيانة هواتف', 'خدمات تنظيف', 'صيانة أجهزة', 'خدمات توصيل']
  },
  {
    name: 'كتب وقرطاسية',
    description: 'كل ما يخص التعليم والثقافة',
    icon: BookOpenIcon,
    color: 'from-indigo-500 to-blue-500',
    examples: ['كتب دراسية', 'قرطاسية', 'كتب ثقافية', 'أدوات مكتبية']
  },
  {
    name: 'فنون وحرف',
    description: 'إبداعات فنية وحرف يدوية',
    icon: PaintBrushIcon,
    color: 'from-teal-500 to-green-500',
    examples: ['لوحات فنية', 'حرف يدوية', 'أدوات رسم', 'تحف وأنتيكات']
  },
  {
    name: 'موسيقى وترفيه',
    description: 'آلات موسيقية ووسائل ترفيه',
    icon: MusicalNoteIcon,
    color: 'from-violet-500 to-purple-500',
    examples: ['آلات موسيقية', 'ألعاب', 'كتب موسيقية', 'إكسسوارات موسيقية']
  },
  {
    name: 'تصوير وفيديو',
    description: 'معدات التصوير والإنتاج',
    icon: CameraIcon,
    color: 'from-cyan-500 to-blue-500',
    examples: ['كاميرات', 'عدسات', 'إضاءة', 'معدات استوديو']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function BusinessTypes() {
  return (
    <section id="business-types" className="bg-white py-20 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            منصة شاملة لجميع أنواع الأعمال
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            مهما كان نوع عملك، xsouq يوفر لك الحلول المناسبة لعرض منتجاتك وخدماتك بطريقة احترافية وجذابة
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {businessTypes.map((business, index) => (
            <motion.div
              key={business.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${business.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${business.color} shadow-lg`}>
                <business.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800">
                  {business.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {business.description}
                </p>
                
                {/* Examples */}
                <div className="mt-4 space-y-1">
                  {business.examples.slice(0, 3).map((example, exampleIndex) => (
                    <div
                      key={exampleIndex}
                      className="flex items-center text-xs text-gray-500"
                    >
                      <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${business.color} mr-2`} />
                      {example}
                    </div>
                  ))}
                  {business.examples.length > 3 && (
                    <div className="text-xs text-gray-400 mt-1">
                      +{business.examples.length - 3} المزيد
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              لم تجد نوع عملك؟
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              لا تقلق! منصة xsouq مرنة وقابلة للتخصيص لتناسب أي نوع من الأعمال
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-emerald-700 transition-colors duration-200"
              >
                ابدأ مجاناً الآن
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-lg ring-1 ring-gray-300 hover:bg-gray-50 transition-colors duration-200"
              >
                تحدث مع فريقنا
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}