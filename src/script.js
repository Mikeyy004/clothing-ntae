// DOM Elements
const navbar = document.querySelector(".navbar")
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const addToCartButtons = document.querySelectorAll(".btn-add-cart")
const cartCount = document.querySelector(".cart-count")
const cartNotification = document.getElementById("cartNotification")
const testimonialSlides = document.querySelectorAll(".testimonial-slide")
const dots = document.querySelectorAll(".dot")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const newsletterForm = document.querySelector(".newsletter-form")

// Variables
let currentSlide = 0
let cartItems = 0

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Initialize animations for elements as they come into view
  initScrollAnimations()

  // Set up smooth scrolling for navigation links
  setupSmoothScrolling()
})

// Navbar scroll effect with enhanced transition
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Mobile menu toggle with improved animation
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Enhanced add to cart functionality
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart)
})

// Testimonial slider controls with smooth transitions
prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)

dots.forEach((dot) => {
  dot.addEventListener("click", function () {
    const slideIndex = Number.parseInt(this.getAttribute("data-slide"))
    goToSlide(slideIndex)
  })
})

// Newsletter form submission with elegant feedback
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const emailInput = this.querySelector('input[type="email"]')
    if (emailInput.value) {
      // Create a more elegant notification
      const notification = document.createElement("div")
      notification.className = "cart-notification show"
      notification.innerHTML = `
                <i class="fas fa-envelope"></i>
                <p>Thank you for subscribing to our private collection</p>
            `
      document.body.appendChild(notification)

      setTimeout(() => {
        notification.classList.remove("show")
        setTimeout(() => {
          document.body.removeChild(notification)
        }, 500)
      }, 3000)

      emailInput.value = ""
    }
  })
}

// Functions
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const navbarHeight = navbar.offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

function addToCart(e) {
  // Increment cart count with animation
  cartItems++
  cartCount.textContent = cartItems
  cartCount.style.transform = "scale(1.3)"
  setTimeout(() => {
    cartCount.style.transform = "scale(1)"
  }, 300)

  // Show notification with enhanced animation
  cartNotification.classList.add("show")

  // Hide notification after 3 seconds
  setTimeout(() => {
    cartNotification.classList.remove("show")
  }, 3000)

  // Get product info for potential future use
  const productCard = e.target.closest(".product-card")
  const productName = productCard.querySelector("h3").textContent
  const productPrice = productCard.querySelector(".price").textContent

  console.log(`Added to collection: ${productName} - ${productPrice}`)
}

function prevSlide() {
  currentSlide = currentSlide === 0 ? testimonialSlides.length - 1 : currentSlide - 1
  goToSlide(currentSlide)
}

function nextSlide() {
  currentSlide = currentSlide === testimonialSlides.length - 1 ? 0 : currentSlide + 1
  goToSlide(currentSlide)
}

function goToSlide(slideIndex) {
  // Hide all slides with smooth transition
  testimonialSlides.forEach((slide) => {
    slide.classList.remove("active")
  })

  // Remove active class from all dots
  dots.forEach((dot) => {
    dot.classList.remove("active")
  })

  // Show the selected slide and activate corresponding dot
  testimonialSlides[slideIndex].classList.add("active")
  dots[slideIndex].classList.add("active")

  // Update current slide index
  currentSlide = slideIndex
}

function initScrollAnimations() {
  // Enhanced scroll animations with staggered effect
  const elements = document.querySelectorAll(
    ".product-card, .about-content, .newsletter-content, .section-title, .section-subtitle",
  )

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered delay based on element index
          setTimeout(() => {
            entry.target.style.opacity = 1
            entry.target.style.transform = "translateY(0)"
          }, index * 100)

          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  elements.forEach((element) => {
    element.style.opacity = 0
    element.style.transform = "translateY(30px)"
    element.style.transition =
      "opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)"
    observer.observe(element)
  })

  // Add parallax effect to hero section
  const hero = document.querySelector(".hero")
  if (hero) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset
      hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`
    })
  }
}

// Auto-rotate testimonials with smoother timing
setInterval(nextSlide, 6000)

