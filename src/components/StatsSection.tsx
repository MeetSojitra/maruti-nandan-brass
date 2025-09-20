import { useState, useEffect, useRef } from 'react';
import { Award, Users, Globe, Factory } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  number: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon: Icon, number, suffix, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2000;
        const increment = number / (duration / 16);
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= number) {
            setCount(number);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, number, delay]);

  return (
    <div 
      ref={ref}
      className={`bg-card border border-border rounded-xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-hover ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-full mb-4 shadow-brass">
        <Icon className="h-8 w-8 text-secondary-foreground" />
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 font-poppins">
        {count}{suffix}
      </div>
      <div className="text-sm sm:text-base text-muted-foreground font-medium font-inter">
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: Award,
      number: 28,
      suffix: '+',
      label: 'Years of Excellence',
      delay: 0
    },
    {
      icon: Factory,
      number: 150,
      suffix: '+',
      label: 'Product Categories',
      delay: 200
    },
    {
      icon: Globe,
      number: 25,
      suffix: '+',
      label: 'Countries Served',
      delay: 400
    },
    {
      icon: Users,
      number: 500,
      suffix: '+',
      label: 'Satisfied Clients',
      delay: 600
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">
            Trusted by Industries Worldwide
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-inter px-4">
            Our commitment to precision engineering and quality manufacturing has earned us recognition across global markets
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;