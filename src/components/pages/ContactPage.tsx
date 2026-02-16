import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@radhepolymers.com',
      link: 'mailto:info@radhepolymers.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 123 456 7890',
      link: 'tel:+911234567890'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Manufacturing Unit, Industrial Area, India',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-20 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-6xl lg:text-7xl text-primary mb-6">
            Get in Touch
          </h1>
          <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
            Have a question or need a custom solution? We're here to help you find the perfect packaging solution
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = info.link ? (
              <a
                href={info.link}
                className="font-paragraph text-base text-foreground hover:text-accent-gold transition-colors duration-300"
              >
                {info.content}
              </a>
            ) : (
              <p className="font-paragraph text-base text-foreground">
                {info.content}
              </p>
            );

            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary/5 p-8 rounded-lg text-center"
              >
                <Icon className="w-12 h-12 text-accent-gold mx-auto mb-4" />
                <h3 className="font-heading text-xl text-primary mb-3">
                  {info.title}
                </h3>
                {content}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl text-primary mb-6">
              Send Us a Message
            </h2>
            <p className="font-paragraph text-base text-foreground/70 mb-8 leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-paragraph text-sm text-foreground mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full font-paragraph"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <Label htmlFor="email" className="font-paragraph text-sm text-foreground mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full font-paragraph"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="font-paragraph text-sm text-foreground mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full font-paragraph"
                  placeholder="+91 123 456 7890"
                />
              </div>

              <div>
                <Label htmlFor="company" className="font-paragraph text-sm text-foreground mb-2 block">
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full font-paragraph"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <Label htmlFor="message" className="font-paragraph text-sm text-foreground mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full font-paragraph min-h-[150px]"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-accent-gold/10 border border-accent-gold rounded-lg"
                >
                  <p className="font-paragraph text-sm text-foreground">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 border border-primary text-primary font-paragraph text-base rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pt-16"
          >
            <div className="bg-secondary p-12 rounded-2xl text-secondary-foreground">
              <h3 className="font-heading text-3xl text-primary-foreground mb-6">
                Why Choose Radhe Polymers?
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading text-xl text-primary-foreground mb-2">
                      Expert Consultation
                    </h4>
                    <p className="font-paragraph text-sm text-secondary-foreground/80 leading-relaxed">
                      Our team provides personalized guidance to help you select the right products for your needs
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading text-xl text-primary-foreground mb-2">
                      Quick Response
                    </h4>
                    <p className="font-paragraph text-sm text-secondary-foreground/80 leading-relaxed">
                      We respond to all inquiries within 24 hours to keep your projects moving forward
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading text-xl text-primary-foreground mb-2">
                      Custom Solutions
                    </h4>
                    <p className="font-paragraph text-sm text-secondary-foreground/80 leading-relaxed">
                      We offer tailored manufacturing options to meet your specific requirements
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading text-xl text-primary-foreground mb-2">
                      Reliable Partnership
                    </h4>
                    <p className="font-paragraph text-sm text-secondary-foreground/80 leading-relaxed">
                      Build a long-term relationship with a manufacturer you can trust
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-secondary-foreground/10">
                <p className="font-paragraph text-sm text-secondary-foreground/60 mb-4">
                  Business Hours
                </p>
                <p className="font-paragraph text-base text-secondary-foreground">
                  Monday - Saturday: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
