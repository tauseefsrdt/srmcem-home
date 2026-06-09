import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* Lightweight scroll-reveal: adds .is-visible to any .reveal element when it enters the viewport */
if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-reveal');
  const reveal = () => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!els.length) return
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.06, rootMargin: '0px 0px -4% 0px' })
    els.forEach((el) => io.observe(el))
  }
  // run after initial paint and keep watching for newly mounted nodes
  window.requestAnimationFrame(() => setTimeout(reveal, 100))
  window.addEventListener('load', reveal)
}
