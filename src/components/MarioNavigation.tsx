import { useState } from 'react';

const MarioNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'HOME', icon: '🏠' },
    { id: 'about', label: 'ABOUT', icon: '👨‍💻' },
    { id: 'skills', label: 'POWER-UPS', icon: '🍄' },
    { id: 'projects', label: 'LEVELS', icon: '🏁' },
    { id: 'contact', label: 'WARP ZONE', icon: '🟢' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-mario-red border-b-4 border-mario-red-dark px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-mario-red-foreground font-pixel text-lg mario-bounce">
          Felicia's Workspace
        </div>
        
        <div className="flex gap-2 md:gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                px-3 py-2 text-xs md:text-sm font-pixel transition-all duration-200
                ${activeSection === item.id
                  ? 'bg-mario-gold text-mario-gold-foreground mario-block'
                  : 'text-mario-red-foreground hover:bg-mario-red-dark'
                }
                hover:mario-bounce
              `}
            >
              <span className="hidden md:inline">{item.icon} {item.label}</span>
              <span className="md:hidden">{item.icon}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MarioNavigation;