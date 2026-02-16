import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { Products } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package } from 'lucide-react';

export default function ProductsPage() {
  const [products, setProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      const result = await BaseCrudService.getAll<Products>('products');
      setProducts(result.items);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
            Our Products
          </h1>
          <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
            Explore our comprehensive range of PET preforms and caps, engineered with precision for diverse packaging needs
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-20 pb-24">
        <div className="min-h-[600px]">
          {isLoading ? null : products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background border border-muted-grey/20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-square bg-secondary/5 flex items-center justify-center p-8">
                    {product.productImage ? (
                      <Image
                        src={product.productImage}
                        alt={product.productName || 'Product'}
                        width={400}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Package className="w-24 h-24 text-muted-grey" />
                    )}
                  </div>
                  
                  <div className="p-8">
                    <h3 className="font-heading text-2xl text-primary mb-3">
                      {product.productName}
                    </h3>
                    
                    {product.productType && (
                      <div className="mb-4">
                        <span className="inline-block px-4 py-1 bg-accent-gold/10 text-accent-gold font-paragraph text-sm rounded">
                          {product.productType}
                        </span>
                      </div>
                    )}
                    
                    {product.sizeDimensions && (
                      <div className="mb-4">
                        <p className="font-paragraph text-sm text-foreground/60 mb-1">Size & Dimensions</p>
                        <p className="font-paragraph text-base text-foreground">
                          {product.sizeDimensions}
                        </p>
                      </div>
                    )}
                    
                    {product.technicalSpecifications && (
                      <div>
                        <p className="font-paragraph text-sm text-foreground/60 mb-1">Technical Specifications</p>
                        <p className="font-paragraph text-base text-foreground leading-relaxed">
                          {product.technicalSpecifications}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Package className="w-20 h-20 text-muted-grey mx-auto mb-6" />
              <h3 className="font-heading text-3xl text-primary mb-4">
                Products Coming Soon
              </h3>
              <p className="font-paragraph text-base text-foreground/70">
                We're updating our product catalog. Please check back soon.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl text-primary-foreground mb-6">
              Need Custom Solutions?
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              We offer tailored manufacturing solutions to meet your specific requirements
            </p>
            <a href="/contact">
              <button className="px-10 py-4 border border-accent-gold text-accent-gold font-paragraph text-base rounded-lg hover:bg-accent-gold hover:text-secondary transition-all duration-300">
                Contact Our Team
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
