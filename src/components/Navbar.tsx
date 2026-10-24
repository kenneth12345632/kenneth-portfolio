
import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Project' },
  { href: '#skills', label: 'Skill' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')

    const updateNavigation = () => {
      let current = 'home'
      sections.forEach((section) => {
        const top = section.offsetTop - 150
        if (window.scrollY >= top) current = section.id
      })
      setActive(current)
    }

    window.addEventListener('scroll', updateNavigation)
    updateNavigation()
    return () => window.removeEventListener('scroll', updateNavigation)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="navbar">

      <nav>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href.slice(1) ? 'active' : ''}
            onClick={(e) => handleClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}