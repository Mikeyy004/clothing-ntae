import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.product-card, .about-content, .newsletter-content, .section-title, .section-subtitle'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (entry.target instanceof HTMLElement) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
              }
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition =
          'opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export const useParallaxEffect = () => {
  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (hero instanceof HTMLElement) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar?.offsetHeight || 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}; 