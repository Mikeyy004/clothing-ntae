"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import styled from "styled-components"
import type { TestimonialType } from "../types"

const TestimonialsSection = styled.section`
  padding: 120px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  margin-bottom: 70px;
  color: white;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.8rem;
  }
`

const TestimonialSlider = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto 50px;
  height: 280px;
`

const TestimonialSlide = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  transition: ${({ theme }) => theme.transitions.default};
  transform: translateY(${({ active }) => (active ? 0 : "20px")});
`

const TestimonialContent = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 40px;
  text-align: center;
  position: relative;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.3;
    font-family: 'Georgia', serif;
    line-height: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 30px 20px;
  }
`

const StarIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`

const ChevronIcon = styled.svg`
  width: 24px;
  height: 24px;
  color: white;
`

const Rating = styled.div`
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  gap: 5px;
`

const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 25px;
  line-height: 1.8;
  font-weight: ${({ theme }) => theme.fontWeights.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`

const CustomerInfo = styled.div`
  margin-top: 20px;
`

const CustomerName = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 5px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.secondary};
`

const CustomerTitle = styled.p`
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.8;
`

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

const SliderButton = styled.button`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

const SliderDots = styled.div`
  display: flex;
  margin: 0 20px;
`

const Dot = styled.span<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active, theme }) => (active ? theme.colors.secondary : "rgba(255, 255, 255, 0.3)")};
  margin: 0 5px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  transform: ${({ active }) => (active ? "scale(1.3)" : "scale(1)")};
`

const testimonials: TestimonialType[] = [
  {
    id: 1,
    text: "The craftsmanship of Maison Élégance pieces is truly exceptional. Each garment exudes quality and sophistication that is increasingly rare in today's fashion landscape.",
    name: "Victoria Harrington",
    title: "Fashion Editor",
    rating: 5,
  },
  {
    id: 2,
    text: "Their attention to detail and commitment to sustainable luxury sets them apart. I've never experienced such personalized service and impeccable quality.",
    name: "Alexander Chen",
    title: "Creative Director",
    rating: 5,
  },
  {
    id: 3,
    text: "Investing in Maison Élégance pieces has transformed my wardrobe. Their timeless designs have an effortless elegance that makes me feel confident and sophisticated.",
    name: "Isabella Montero",
    title: "Loyal Client",
    rating: 4.5,
  },
]

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    // Auto-rotate testimonials
    intervalRef.current = setInterval(nextSlide, 6000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [nextSlide])

  return (
    <TestimonialsSection id="testimonials">
      <div className="container text-center">
        <SectionTitle>Client Testimonials</SectionTitle>

        <TestimonialSlider>
          {testimonials.map((testimonial, index) => (
            <TestimonialSlide key={testimonial.id} active={currentSlide === index}>
              <TestimonialContent>
                <Rating>
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <StarIcon
                      key={i}
                      viewBox="0 0 24 24"
                      fill={testimonial.rating >= i + 1 ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </StarIcon>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <StarIcon
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ clipPath: "inset(0 50% 0 0)" }}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </StarIcon>
                  )}
                </Rating>
                <TestimonialText>{testimonial.text}</TestimonialText>
                <CustomerInfo>
                  <CustomerName>{testimonial.name}</CustomerName>
                  <CustomerTitle>{testimonial.title}</CustomerTitle>
                </CustomerInfo>
              </TestimonialContent>
            </TestimonialSlide>
          ))}
        </TestimonialSlider>

        <SliderControls>
          <SliderButton onClick={prevSlide}>
            <ChevronIcon
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </ChevronIcon>
          </SliderButton>
          <SliderDots>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                active={currentSlide === index}
                onClick={() => goToSlide(index)}
              />
            ))}
          </SliderDots>
          <SliderButton onClick={nextSlide}>
            <ChevronIcon
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </ChevronIcon>
          </SliderButton>
        </SliderControls>
      </div>
    </TestimonialsSection>
  )
}

export default Testimonials

