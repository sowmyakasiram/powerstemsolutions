import { Sun, Wind, Zap, ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { LiquidIcon } from '../components/LiquidIcon';
import { GlassCard } from '../components/GlassCard';
import { Link } from '../components/Link';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
// Use static asset served from Vite public directory
const logoImage = '/assets/images/logo.png';


export function HomePage() {
  const services = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Solar Energy',
      description: 'Harness the power of the sun with cutting-edge photovoltaic solutions tailored to your energy needs.',
      color: 'accent' as const,
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Wind Energy',
      description: 'Transform wind into clean, renewable power with our innovative turbine technology and infrastructure.',
      color: 'primary' as const,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power Trading',
      description: 'Optimize your energy portfolio with intelligent trading solutions and market expertise.',
      color: 'secondary' as const,
    },
  ];

  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, value: '500+', label: 'Projects Completed' },
    { icon: <Users className="w-6 h-6" />, value: '100+', label: 'Happy Clients' },
    { icon: <Award className="w-6 h-6" />, value: '15+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pb-32 md:pb-40">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1545209575-704d1434f9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGNsZWFuJTIwZW5lcmd5fGVufDF8fHx8MTc2NTc3OTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sustainable Energy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/90 via-[var(--background)]/70 to-[var(--background)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            {/* Logo - Clean and Seamless */}
            <div className="mb-10 flex justify-center">
              <img 
                src={logoImage} 
                alt="PowerStem Solutions" 
                className="h-28 md:h-36 lg:h-44 w-auto"
                style={{
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08)) drop-shadow(0 0 30px rgba(92, 184, 92, 0.15))',
                }}
              />
            </div>

            <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
              Powering a Sustainable Future
            </h1>
            <p className="text-xl md:text-2xl text-[var(--foreground)] mb-8 max-w-3xl mx-auto">
              Leading the energy transition with innovative solar, wind, and power trading solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-4 rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2 justify-center"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-[var(--foreground)] hover:bg-white/20 transition-all inline-flex items-center gap-2 justify-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 w-full max-w-5xl px-4">
          <div className="hidden md:flex gap-4 lg:gap-6 justify-center flex-wrap">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4 flex items-center gap-3"
              >
                <div className="text-[var(--secondary)]">{stat.icon}</div>
                <div>
                  <div className="text-2xl text-[var(--foreground)]">{stat.value}</div>
                  <div className="text-sm text-[var(--muted-foreground)]">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--foreground)]">Our Core Services</h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Comprehensive energy solutions designed for a sustainable tomorrow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassCard key={index}>
                <div className="flex flex-col items-center text-center">
                  <LiquidIcon size="lg" color={service.color}>
                    {service.icon}
                  </LiquidIcon>
                  <h3 className="mt-6 mb-3 text-[var(--foreground)]">{service.title}</h3>
                  <p className="text-[var(--muted-foreground)] mb-6">{service.description}</p>
                  <Link
                    href="/services"
                    className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[var(--muted)]/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-[var(--foreground)]">
                Committed to Excellence
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] mb-8">
                With over 15 years of industry experience, we deliver cutting-edge renewable energy solutions
                that drive sustainability and profitability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <LiquidIcon size="sm" color="secondary">
                      <Sun className="w-5 h-5" />
                    </LiquidIcon>
                  </div>
                  <div>
                    <h4 className="mb-2 text-[var(--foreground)]">Innovative Technology</h4>
                    <p className="text-[var(--muted-foreground)]">
                      Leveraging the latest advancements in renewable energy systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <LiquidIcon size="sm" color="accent">
                      <Award className="w-5 h-5" />
                    </LiquidIcon>
                  </div>
                  <div>
                    <h4 className="mb-2 text-[var(--foreground)]">Proven Track Record</h4>
                    <p className="text-[var(--muted-foreground)]">
                      Over 500 successful projects delivered worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <LiquidIcon size="sm" color="primary">
                      <Users className="w-5 h-5" />
                    </LiquidIcon>
                  </div>
                  <div>
                    <h4 className="mb-2 text-[var(--foreground)]">Expert Team</h4>
                    <p className="text-[var(--muted-foreground)]">
                      Industry-leading professionals dedicated to your success
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <GlassCard className="overflow-hidden" hover={false}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NjU3MzE3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Solar panels"
                  className="w-full h-auto rounded-2xl"
                />
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-[var(--foreground)]">
              Ready to Transform Your Energy Future?
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] mb-8">
              Join hundreds of satisfied clients making the switch to sustainable energy
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}