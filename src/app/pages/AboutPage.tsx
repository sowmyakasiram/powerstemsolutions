import { Shield, Award, Zap, Users, TrendingUp, CheckCircle2, Building2, Handshake } from 'lucide-react';
import { LiquidIcon } from '../components/LiquidIcon';
import { GlassCard } from '../components/GlassCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoImage from '../components/figma/logo.png';
// Vite serves files in `public` at root paths; use URL string instead
//const logoImage = '../components/figma/logo.png';
export function AboutPage() {
  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Authorized Partner',
      description: 'Certified partner of Waaree, one of India\'s leading solar brands, ensuring product authenticity.',
      color: 'primary' as const,
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '10+ Years of Experience',
      description: 'A decade of expertise bringing deep technical knowledge to every project.',
      color: 'secondary' as const,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Proven Track Record',
      description: 'Over 100+ MW of solar and wind power installations delivered through Group Captive and Third-Party models.',
      color: 'accent' as const,
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Financial Credibility',
      description: 'End-to-end financial support with trusted partnerships across major banks like SIDBI, Canara Bank, SBI, HDFC, and ICICI.',
      color: 'secondary' as const,
    },
  ];

  const services = [
    'Power Trading',
    'Solar Project Consulting',
    'Renewable Asset Transactions',
    'Group Captive Models',
    'Rooftop Solar Setups',
    'Ground-Mounted Solar',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--secondary)]/5 to-[var(--accent)]/5" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img 
                src={logoImage} 
                alt="PowerStem Solutions" 
                className="h-24 md:h-28 w-auto"
                style={{
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))',
                }}
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
              Trusted advisors in power trading, solar consulting, and renewable energy transitions
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <GlassCard className="overflow-hidden" hover={false}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2V8ZW58MXx8fHwxNzY1Nzc0OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="PowerStem Solutions Team"
                  className="w-full h-auto rounded-2xl"
                />
              </GlassCard>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-[var(--foreground)]">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-[var(--muted-foreground)]">
                <p>
                  PowerStem Solutions is a trusted advisory firm specializing in power trading, solar project consulting, and renewable asset transactions. We empower businesses to transition to 100% renewable energy.
                </p>
                <p>
                  Our mission is to make sustainable energy simple, strategic, and scalable for all. We help industries, developers, and investors navigate the clean energy landscape with clarity—offering expert support in group captive models, rooftop and ground-mounted solar setups, and asset transactions.
                </p>
              </div>

              {/* Services List */}
              <div className="mt-8">
                <h3 className="text-xl mb-4 text-[var(--foreground)]">Our Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--secondary)] flex-shrink-0" />
                      <span className="text-[var(--foreground)]">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[var(--muted)]/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--foreground)]">
              Why Choose PowerStem?
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Our commitment to excellence and proven expertise set us apart in the renewable energy industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <GlassCard key={index}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <LiquidIcon size="lg" color={item.color}>
                      {item.icon}
                    </LiquidIcon>
                  </div>
                  <div>
                    <h3 className="text-2xl mb-3 text-[var(--foreground)]">{item.title}</h3>
                    <p className="text-[var(--muted-foreground)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership & Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="text-center">
            <div className="flex justify-center mb-6">
              <LiquidIcon size="lg" color="primary">
                <Handshake className="w-10 h-10" />
              </LiquidIcon>
            </div>
            <h2 className="text-3xl md:text-4xl mb-4 text-[var(--foreground)]">
              Trusted Financial Partnerships
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto mb-8">
              We maintain strong relationships with India's leading financial institutions, enabling us to provide comprehensive financial solutions for your renewable energy projects.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-[var(--foreground)]">
              <div className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10">
                SIDBI
              </div>
              <div className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10">
                Canara Bank
              </div>
              <div className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10">
                SBI
              </div>
              <div className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10">
                HDFC
              </div>
              <div className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10">
                ICICI
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="text-center">
              <div className="mx-auto mb-4 w-fit">
                <LiquidIcon size="lg" color="secondary">
                  <TrendingUp className="w-8 h-8" />
                </LiquidIcon>
              </div>
              <div className="text-4xl mb-2 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] bg-clip-text text-transparent">
                100+ MW
              </div>
              <p className="text-[var(--muted-foreground)]">Installation Capacity</p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="mx-auto mb-4 w-fit">
                <LiquidIcon size="lg" color="primary">
                  <Award className="w-8 h-8" />
                </LiquidIcon>
              </div>
              <div className="text-4xl mb-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                10+ Years
              </div>
              <p className="text-[var(--muted-foreground)]">Industry Experience</p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="mx-auto mb-4 w-fit">
                <LiquidIcon size="lg" color="accent">
                  <Users className="w-8 h-8" />
                </LiquidIcon>
              </div>
              <div className="text-4xl mb-2 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent">
                80+
              </div>
              <p className="text-[var(--muted-foreground)]">Happy Customers</p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}