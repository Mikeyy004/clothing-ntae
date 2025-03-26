import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/GlobalStyle"
import theme from "./styles/theme"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import { CartProvider } from "./context/CartContext"
import { useScrollAnimation, useParallaxEffect, useSmoothScroll } from './hooks/useScrollAnimation';
import { CartNotification } from './hooks/useCartNotification';

const App = () => {
  useScrollAnimation();
  useParallaxEffect();
  useSmoothScroll();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <CartProvider>
        <Navbar />
        <Hero />
        <FeaturedProducts />
        <About />
        <Testimonials />
        <Newsletter />
        <Footer />
        <CartNotification />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App

