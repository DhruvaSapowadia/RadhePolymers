import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { Capabilities } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Target, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  const [capabilities, setCapabilities] = useState<Capabilities[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCapabilities();
  }, []);

  const loadCapabilities = async () => {
    try {
      setIsLoading(true);
      const result = await BaseCrudService.getAll<Capabilities>('capabilities');
      setCapabilities(result.items);
    } catch (error) {
      console.error('Error loading capabilities:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'Uncompromising commitment to excellence in every product we manufacture'
    },
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Advanced technology and meticulous attention to detail in our processes'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building lasting partnerships through reliable service and support'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously evolving to meet the changing needs of the industry'
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
            About Radhe Polymers
          </h1>
          <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
            A legacy of excellence in PET preform and cap manufacturing, built on precision, quality, and trust
          </p>
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-4 font-paragraph text-base text-foreground/80 leading-relaxed">
              <p>
                Radhe Polymers has established itself as a trusted name in the manufacturing of PET preforms and caps. With years of experience and a commitment to excellence, we have grown to become a preferred partner for businesses seeking premium packaging solutions.
              </p>
              <p>
                Our state-of-the-art manufacturing facility combines advanced technology with skilled craftsmanship to produce products that meet the highest industry standards. Every preform and cap that leaves our facility is a testament to our dedication to quality and precision.
              </p>
              <p>
                We understand that packaging plays a crucial role in product integrity and brand perception. That's why we invest continuously in technology, training, and quality control to ensure our products exceed expectations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/5">
              <Image
                src="https://static.wixstatic.com/media/9b1a81_dbcad26cd1974ef4a9d6368f11245fb6~mv2.jpg"
                alt="Radhe Polymers Manufacturing"
                width={600}
                className="w-full h-full object-contain p-12"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-secondary py-24">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl text-primary-foreground mb-6">
              Our Core Values
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background p-8 rounded-lg text-center"
                >
                  <Icon className="w-12 h-12 text-accent-gold mx-auto mb-4" />
                  <h3 className="font-heading text-2xl text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-20 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl text-primary mb-6">
            Our Capabilities
          </h2>
          <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
            Comprehensive manufacturing expertise to serve your needs
          </p>
        </motion.div>

        <div className="min-h-[400px]">
          {isLoading ? null : capabilities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  {capability.representativeImage && (
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-secondary/5">
                      <Image
                        src={capability.representativeImage}
                        alt={capability.capabilityTitle || 'Capability'}
                        width={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl text-primary mb-3">
                      {capability.capabilityTitle}
                    </h3>
                    {capability.shortDescription && (
                      <p className="font-paragraph text-base text-foreground/70 mb-3 leading-relaxed">
                        {capability.shortDescription}
                      </p>
                    )}
                    {capability.processDescription && (
                      <p className="font-paragraph text-sm text-foreground/60 leading-relaxed">
                        {capability.processDescription}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="font-paragraph text-base text-foreground/70">
                Our capabilities information is being updated.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary py-20">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl text-primary-foreground mb-6">
              Partner With Us
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Experience the Radhe Polymers difference in quality and service
            </p>
            <a href="/contact">
              <button className="px-10 py-4 border border-accent-gold text-accent-gold font-paragraph text-base rounded-lg hover:bg-accent-gold hover:text-secondary transition-all duration-300">
                Get in Touch
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
