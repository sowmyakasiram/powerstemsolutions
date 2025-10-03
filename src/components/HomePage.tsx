import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sun, Wind, TrendingUp, Leaf, Users, Target, Award } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Sun,
      title: 'Solar Projects',
      description: 'Comprehensive solar project design, installation, compliance, and optimization services.',
      features: ['Project Design', 'Installation', 'Compliance', 'Optimization']
    },
    {
      icon: Wind,
      title: 'Wind Projects',
      description: 'Expert consultancy on wind power generation setups and renewable energy solutions.',
      features: ['Site Assessment', 'Consultancy', 'Implementation', 'Maintenance']
    },
    {
      icon: TrendingUp,
      title: 'Power Trading',
      description: 'Navigate energy trading markets and identify profitable opportunities.',
      features: ['Market Analysis', 'Trading Strategy', 'Risk Management', 'Optimization']
    },
    {
      icon: Leaf,
      title: 'Sustainability Consulting',
      description: 'Guide individuals and businesses toward greener, more sustainable practices.',
      features: ['Assessment', 'Strategy', 'Implementation', 'Monitoring']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50MW+', label: 'Energy Generated' },
    { number: '100+', label: 'Happy Clients' },
    { number: '5', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/images/background-image.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                Powering a 
                <span className="text-green-400"> Sustainable</span> Future
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Leading clean energy solutions provider specializing in solar, wind, power trading, and sustainability consulting. Transform your energy landscape with our expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => onNavigate('services')}
                >
                  Explore Our Services
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => onNavigate('contact')}
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/images/logo.png"
                alt="PowerStem Solutions"
                className="rounded-lg shadow-2xl w-full h-[400px] object-contain bg-white p-8"
              />
            
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive clean energy solutions tailored to meet your specific needs and drive sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <service.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('services')}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <ImageWithFallback
                src="https://images.unsplash.com/photo-1678699255640-a1b75cec7718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1c3RhaW5hYmlsaXR5JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU4NzAzNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Green Sustainability Business"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Why Choose PowerStemSolutions?
              </h2>
              <p className="text-lg text-gray-600">
                We're more than just an energy solutions provider. We're your partners in creating a sustainable future through innovative technology and expert guidance.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Expert Team</h3>
                    <p className="text-gray-600">Certified professionals with years of experience in renewable energy solutions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Tailored Solutions</h3>
                    <p className="text-gray-600">Custom approaches designed specifically for your unique energy needs and goals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Proven Results</h3>
                    <p className="text-gray-600">Track record of successful projects delivering measurable environmental and financial benefits.</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => onNavigate('contact')}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Go Green?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their energy infrastructure with our expert solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate('contact')}
            >
              Get Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-700"
              onClick={() => onNavigate('services')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

     
    </div>
  );
}