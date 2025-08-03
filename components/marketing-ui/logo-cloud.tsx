'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LogoCloud() {
  const logos = [
    {
      name: 'Apple',
      imageUrl: '/logos/apple.svg',
      alt: 'Apple logo'
    },
    {
      name: 'Google',
      imageUrl: '/logos/google.svg',
      alt: 'Google logo'
    },
    {
      name: 'Stripe',
      imageUrl: '/logos/stripe.svg',
      alt: 'Stripe logo'
    },
    {
      name: 'Instagram',
      imageUrl: '/logos/instagram.svg',
      alt: 'Instagram logo'
    },
    {
      name: 'Discord',
      imageUrl: '/logos/discord.svg',
      alt: 'Discord logo'
    },
    {
      name: 'Coinbase',
      imageUrl: '/logos/coinbase.svg',
      alt: 'Coinbase logo'
    },
    {
      name: 'Framer',
      imageUrl: '/logos/framer.svg',
      alt: 'Framer logo'
    },
    {
      name: 'Linear',
      imageUrl: '/logos/linear.svg',
      alt: 'Linear logo'
    },
    {
      name: 'Intel',
      imageUrl: '/logos/intel.svg',
      alt: 'Intel logo'
    }
  ]

  // Triple the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg font-semibold leading-8 text-gray-900">
            يثق بنا أكثر من 500+ متجر ومؤسسة حول العالم
          </h2>
        </motion.div>
        
        {/* Moving carousel container */}
          <div className="mt-10 relative overflow-hidden">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            
            <motion.div
              className="flex space-x-6 lg:space-x-8"
              animate={{
                x: [0, `-${160 * logos.length}px`],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{
                width: `${160 * duplicatedLogos.length}px`,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <motion.div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: '140px', height: '70px' }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                    <Image
                      src={logo.imageUrl}
                      alt={logo.alt}
                      width={80}
                      height={40}
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      priority={index < 9}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>


      </div>
    </div>
  );
}
