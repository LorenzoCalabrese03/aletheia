"use client"
import { useState } from "react"
export default function Footer() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Sezione 1: Nome e slogan */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-bold">Aletheia</h2>
                    <p className="mt-2 text-gray-400">
                        Innovazione e trasparenza per un futuro migliore.
                    </p>
                </div>

                {/* Sezione 2: Collegamenti utili */}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-4">Collegamenti utili</h3>
                    <nav className="hidden md:flex space-x-6">
          {['Chi Siamo', 'Servizi', 'Progetti', 'Team'].map((item) => (
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
                </div>

                {/* Sezione 3: Contatti */}
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="text-xl font-semibold mb-4">Contatti</h3>
                    <p className="text-gray-400">aletheia.aziendale@gmail.com</p>
                    
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.linkedin.com/company/aletheia-startup" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-75" />
                        </a>
                        <a href="https://github.com/Aletheia-Startup" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/github.png" alt="GitHub" className="w-6 h-6 hover:opacity-75" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Sezione 4: Copyright */}
            <div className="text-center text-gray-500 mt-6">
                <p>© 2025 Aletheia. Tutti i diritti riservati.</p>
            </div>
        </footer>
    );
}
