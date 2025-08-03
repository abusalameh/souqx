import Hero from "@/components/marketing-ui/hero";
import LogoCloud from "@/components/marketing-ui/logo-cloud";
import Features from "@/components/marketing-ui/features";
import BusinessTypes from "@/components/marketing-ui/business-types";
import HowItWorks from "@/components/marketing-ui/how-it-works";
import Testimonials from "@/components/marketing-ui/testimonials";
import Pricing from "@/components/marketing-ui/pricing";
import FAQ from "@/components/marketing-ui/faq";
import CTA from "@/components/marketing-ui/cta";
import Footer from "@/components/marketing-ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoCloud />
      <Features />
      <BusinessTypes />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
