import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { LiquidIcon } from '../components/LiquidIcon';
import { GlassCard } from '../components/GlassCard';

export function ContactPage() {
  const addressText =
    '1st Floor, L.S.Building, Annamalai St, Vengatappa Gounder Layout, Erode-638004, Tamilnadu, India';
  const mapsLink = `https://maps.google.com/?q=${encodeURIComponent(addressText)}`;
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(addressText)}&output=embed`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email body with form data
    const subject = encodeURIComponent('Contact Form Submission - PowerStem Solutions');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Company: ${formData.company}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open default email client with pre-filled data
    window.location.href = `mailto:sowmyakasiram@gmail.com?subject=${subject}&body=${body}`;
    
    // Clear form after sending
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'siva@powerstemsolutions.com',
      link: 'mailto:siva@powerstemsolutions.com',
      color: 'secondary' as const,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91-9994667761',
      link: 'tel:+919994667761',
      color: 'accent' as const,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      value: (
        <>
          1st Floor, L.S.Building, Annamalai St
          <br />
          Vengatappa Gounder Layout
          <br />
          Erode-638004, Tamilnadu, India
        </>
      ),
      link: mapsLink,
      color: 'primary' as const,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--secondary)]/5 to-[var(--accent)]/5" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
            Have a question or ready to start your sustainable energy journey? We're here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <GlassCard>
                <h2 className="text-2xl md:text-3xl mb-6 text-[var(--foreground)]">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-[var(--foreground)]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-[var(--input-background)] border border-[var(--glass-border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-[var(--foreground)]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-[var(--input-background)] border border-[var(--glass-border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-[var(--foreground)]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-[var(--input-background)] border border-[var(--glass-border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block mb-2 text-[var(--foreground)]">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-[var(--input-background)] border border-[var(--glass-border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block mb-2 text-[var(--foreground)]">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-[var(--input-background)] border border-[var(--glass-border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </GlassCard>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlassCard className="hover:scale-105">
                    <div className="flex items-start gap-4">
                      <LiquidIcon size="sm" color={info.color}>
                        {info.icon}
                      </LiquidIcon>
                      <div className="flex-1">
                        <h3 className="mb-1 text-[var(--foreground)]">{info.title}</h3>
                        <p className="text-[var(--muted-foreground)]">{info.value}</p>
                      </div>
                    </div>
                  </GlassCard>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="overflow-hidden" hover={false}>
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <iframe
                src={mapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PowerStem Solutions Location"
              />
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}