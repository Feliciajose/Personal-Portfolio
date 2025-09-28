import { Button } from '@/components/ui/button';
import { useState } from 'react';

const MarioContact = () => {
  const [message, setMessage] = useState('');
  
  const contactMethods = [
    {
      name: 'EMAIL PIPE',
      value: 'feliciajose200407@gmail.com',
      icon: '📧',
      link: 'mailto:feliciajose200407@gmail.com',
      color: 'mario-green'
    },
    {
      name: 'LINKEDIN WARP',
      value: 'https://www.linkedin.com/in/felicia-jose-ab5679255/',
      icon: '💼',
      link: 'https://www.linkedin.com/in/felicia-jose-ab5679255/',
      color: 'mario-blue'
    },
    {
      name: 'GITHUB CASTLE',
      value: 'https://github.com/Feliciajose',
      icon: '💻',
      link: 'https://github.com/Feliciajose',
      color: 'mario-block'
    },
    {
      name: 'COLLEGE PORTAL',
      value: 'Panimalar Engineering College',
      icon: '🎓',
      link: 'https://www.panimalar.ac.in/', // update with real link
      color: 'mario-gold'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Opens the default email client with the message body
      window.location.href = `mailto:feliciajose200407@gmail.com?subject=New%20Quest%20Message&body=${encodeURIComponent(message)}`;
      setMessage('');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-pixel text-mario-red mb-6 mario-bounce">
            ENTER THE WARP ZONE
          </h2>
          <p className="font-pixel text-mario-block text-lg">
            🟢 LET'S START AN ADVENTURE TOGETHER! 🟢
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-4">
            <h3 className="font-pixel text-mario-gold text-xl mb-6">
              CHOOSE YOUR PORTAL:
            </h3>
            
            {contactMethods.map((method, index) => (
              <a 
                key={index} 
                href={method.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`mario-pipe p-4 hover:mario-bounce transition-transform cursor-pointer flex items-center gap-4`}
              >
                <div className="text-2xl">{method.icon}</div>
                <div>
                  <div className="font-pixel text-mario-green-foreground text-sm mb-1">
                    {method.name}
                  </div>
                  <div className="font-pixel text-mario-green-foreground text-xs">
                    {method.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* Message Form */}
          <div className="mario-block p-6">
            <h3 className="font-pixel text-mario-block-foreground text-lg mb-6">
              SEND A MESSAGE:
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="font-pixel text-mario-block-foreground text-xs mb-2 block">
                  YOUR QUEST MESSAGE:
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project adventure..."
                  className="w-full h-32 p-3 border-2 border-mario-block-dark rounded font-pixel text-xs resize-none focus:outline-none focus:border-mario-gold"
                />
              </div>
              
              <Button 
                onClick={handleSendMessage}
                className="w-full bg-mario-gold text-mario-gold-foreground hover:bg-mario-gold-dark font-pixel py-4 text-sm border-2 border-mario-gold-dark mario-bounce"
              >
                 LAUNCH MESSAGE!
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="mario-block p-6 inline-block">
            <p className="font-pixel text-mario-gold text-lg mb-2">
              ⭐ THANK YOU FOR VISITING! ⭐
            </p>
            <p className="font-pixel text-mario-block-foreground text-sm">
              YOUR PRINCESS IS IN ANOTHER CASTLE... <br />
              BUT YOUR PERFECT DEVELOPER IS RIGHT HERE! 
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-16 text-center border-t-4 border-mario-red pt-8">
            <p className="font-pixel text-mario-block text-xs mb-4">
              © 2025 FELICIA R P - CRAFTED WITH ❤️ & CODE
            </p>
          <div className="flex justify-center gap-4 text-2xl">
            <span className="mario-bounce">🍄</span>
            <span className="mario-coin">🪙</span>
            <span className="mario-bounce">⭐</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default MarioContact;
