'use client'

import { useState, useEffect } from 'react'
//import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 gap-4">
        <Image
            src="/Logo_trasparente.png"
            alt="Aletheia Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        <div className="text-2xl font-bold text-primary">Aletheia Startup</div> 
        </div>
        <nav className="hidden md:flex space-x-6">
          {['Chi Siamo', 'Servizi', 'Progetti', 'Team', 'Contatti'].map((item) => (
            <button
              key={item}
            //   variant="ghost"
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className="text-base font-medium"
            >
              {item}
            </button>
          ))}
        </nav>
        <button
        //  variant="outline"
        //  size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col p-4">
            {['Chi Siamo', 'Servizi', 'Progetti', 'Contatti'].map((item) => (
              <button
                key={item}
            //    variant="ghost"
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="justify-start text-base font-medium py-2"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}



