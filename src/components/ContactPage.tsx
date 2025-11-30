import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `
New Contact Form Submission

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Service of Interest: ${formData.service}
Project Type: ${formData.projectType || 'Not specified'}
Budget: ${formData.budget || 'Not specified'}

Message:
${formData.message}
    `.trim();

    const emailSubject = `Contact Form: ${formData.service || 'General Inquiry'} - ${formData.firstName} ${formData.lastName}`;
    
    // Open default email client with pre-filled information
    window.location.href = `mailto:siva@powerstemsolutions.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Show success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone:',
      details: ['+91 99946 67761'],
      description: ''
    },
    {
      icon: Mail,
      title: 'Email:',
      details: ['siva@powerstemsolutions.com'],
      description: ''
    },
    {
      icon: MapPin,
      title: 'Address:',
      details: ['45/5 Vivekananda 2 Street,', 'Perundurai Erode, Tamil Nadu - 638052'],
      description: ''
    }
  ];

  const services = [
    'Solar Projects',
    'Wind Projects', 
    'Power Trading',
    'Sustainability Consulting',
    'Other'
  ];

  const projectTypes = [
    'Residential',
    'Commercial',
    'Industrial',
    'Utility Scale',
    'Not Sure'
  ];

  const budgetRanges = [
    'Under $50k',
    '$50k - $100k',
    '$100k - $500k',
    '$500k - $1M',
    'Over $1M',
    'Need Assessment'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 energy-flow border-b border-white/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="holographic-text">Get In Touch</span>
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              Ready to start your clean energy journey? Contact our experts today for a free consultation and personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="liquid-card iridescent-border liquid-glow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-slate-900">
                    <MessageSquare className="h-6 w-6 text-slate-600" />
                    <span>Send us a Message</span>
                  </CardTitle>
                  <CardDescription className="text-slate-700">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-slate-600 mx-auto mb-4 liquid-glow" />
                      <h3 className="text-xl font-semibold mb-2 holographic-text">Message Sent Successfully!</h3>
                      <p className="text-slate-700">
                        Thank you for contacting us. One of our experts will reach out to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Service of Interest *</Label>
                          <Select onValueChange={(value) => handleInputChange('service', value)} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service.toLowerCase()}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Project Type</Label>
                          <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type.toLowerCase()}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Estimated Budget</Label>
                        <Select onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range.toLowerCase()}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                          className="min-h-[120px]"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full liquid-button text-slate-900 font-semibold">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="liquid-card border-white/10 liquid-glow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 crystal-surface rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-5 w-5 text-slate-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2 text-slate-900">{info.title}</h3>
                            <div className="space-y-1 mb-2">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-slate-700">{detail}</p>
                              ))}
                            </div>
                            <p className="text-sm text-slate-500">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 liquid-glass border-y border-white/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="liquid-card p-6 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 text-slate-900">How long does a typical solar installation take?</h3>
                <p className="text-slate-700 text-sm">Most residential solar installations are completed within 1-3 days, while commercial projects may take 1-2 weeks depending on size and complexity.</p>
              </div>
              <div className="liquid-card p-6 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 text-slate-900">Do you provide financing options?</h3>
                <p className="text-slate-700 text-sm">Yes, we partner with leading financial institutions to offer various financing options including loans, leases, and power purchase agreements.</p>
              </div>
              <div className="liquid-card p-6 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 text-slate-900">What warranties do you offer?</h3>
                <p className="text-slate-700 text-sm">We provide comprehensive warranties including 25-year panel warranties, 10-year inverter warranties, and workmanship warranties up to 10 years.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="liquid-card p-6 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 text-slate-900">Can you help with permits and approvals?</h3>
                <p className="text-slate-700 text-sm">Absolutely! We handle all necessary permits, approvals, and utility interconnection processes as part of our comprehensive service.</p>
              </div>
              <div className="liquid-card p-6 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 text-slate-900">Do you offer maintenance services?</h3>
                <p className="text-slate-700 text-sm">Yes, we provide ongoing maintenance, monitoring, and support services to ensure optimal system performance throughout its lifetime.</p>
              </div>
              <div className="liquid-card p-6 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 text-slate-900">What's included in a free consultation?</h3>
                <p className="text-slate-700 text-sm">Our free consultation includes site assessment, energy usage analysis, system design recommendations, and detailed cost estimates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}