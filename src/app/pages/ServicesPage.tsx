import { Sun, Wind, Zap, Check, TrendingUp, Shield, Clock, Home, Building2, FileText, Recycle, Scale, FileCheck, ArrowRight, X, ChevronDown } from 'lucide-react';
import { LiquidIcon } from '../components/LiquidIcon';
import { GlassCard } from '../components/GlassCard';
import { Link } from '../components/Link';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

export function ServicesPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Home className="w-10 h-10" />,
      title: 'Solar For Home',
      description:
        'We provide affordable and hassle-free rooftop solar solutions for homes, taking care of everything from customized system design and installation to net metering approvals and government subsidy support. Our end-to-end service ensures long-term savings, energy independence, and a smooth transition to clean, renewable power.',
      color: 'accent' as const,
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'Solar For Business',
      description:
        'We provide customized solar solutions for commercial buildings, factories, and institutions. Our rooftop and ground-mounted systems are designed to be cost-effective, efficient, and tailored to your energy needs. By reducing your electricity bills and supporting compliance with ESG (Environmental, Social, and Governance) goals, our solar solutions help you move toward a more sustainable & future-ready business.',
      color: 'primary' as const,
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Power Trading',
      description:
        'We help businesses legally reduce their electricity costs through open access power purchase models. From designing the right ownership structure to securing approvals from SLDC and DISCOM, our team manages the entire process seamlessly—ensuring compliance, savings, and long-term energy security. With our expertise, you can focus on your core operations while we take care of the power strategy.',
      color: 'secondary' as const,
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Solar Project Consultancy',
      description:
        'Get expert guidance on every stage of your solar journey — from system design and load sanction to net metering, subsidy compliance, and regulatory approvals. Our services are ideal for businesses planning installations ranging from 10 kW to multi-megawatt scale. We ensure your project is technically sound, policy-compliant, and financially optimized.',
      color: 'accent' as const,
    },
    {
      icon: <Recycle className="w-10 h-10" />,
      title: 'Second-Hand Solar / Wind Assets',
      description:
        'We offer verified listings, thorough due diligence, and end-to-end support for buying or selling second-hand solar and wind assets—making the process seamless, transparent, and secure. Whether you\'re an investor looking for proven assets or a plant owner seeking to exit or upgrade, our platform ensures maximum value with minimal hassle.',
      color: 'primary' as const,
    },
    {
      icon: <Scale className="w-10 h-10" />,
      title: 'Regulatory Support',
      description:
        'We simplify and streamline the complex approval process for projects involving grid connectivity, open access, PM-KUSUM, Virtual Net Metering (VNM), and other policy-driven schemes. Our team ensures accurate documentation, timely submissions, and full compliance with state and central regulations—helping you avoid delays and stay focused on project execution.',
      color: 'secondary' as const,
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: 'PPA Structuring',
      description:
        'We help structure long-term Power Purchase Agreements (PPAs) customized for captive, third-party, and Independent Power Producer (IPP) models. Our approach ensures full regulatory compliance, commercial viability, and financial clarity for both power producers and consumers. We also support in tariff structuring, risk mitigation, and contract negotiations to make your energy purchase strategy bankable and future-ready.',
      color: 'accent' as const,
    },
  ];

  const handleServiceClick = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--secondary)]/5 to-[var(--accent)]/5" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
            Comprehensive renewable energy solutions designed to power a sustainable future
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <GlassCard 
                key={index}
                className="group transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <LiquidIcon size="md" color={service.color}>
                      {service.icon}
                    </LiquidIcon>
                    <h3 className="text-2xl text-[var(--foreground)] flex-1">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--muted-foreground)] leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[var(--muted)]/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--foreground)]">Our Process</h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We analyze your energy needs and discuss potential solutions',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Custom system design tailored to your specific requirements',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Professional installation and integration by certified experts',
              },
              {
                step: '04',
                title: 'Support',
                description: 'Ongoing monitoring, maintenance, and optimization services',
              },
            ].map((process, index) => (
              <GlassCard key={index} className="text-center">
                <div className="text-5xl mb-4 text-[var(--secondary)] opacity-50">{process.step}</div>
                <h3 className="mb-3 text-[var(--foreground)]">{process.title}</h3>
                <p className="text-[var(--muted-foreground)]">{process.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-[var(--foreground)]">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] mb-8">
              Let's discuss how we can help you achieve your sustainability goals
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Contact Our Team
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}