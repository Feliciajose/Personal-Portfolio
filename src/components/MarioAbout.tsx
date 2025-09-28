import coinImage from '@/assets/mario-coin.jpg';

const MarioAbout = () => {
  const stats = [
    { label: 'MAJOR PROJECTS', value: '4+', icon: '🏁' },
    { label: 'CURRENT CGPA', value: '8.68', icon: '⭐' },
    { label: 'INTERNSHIPS', value: '4', icon: '💼' },
    { label: 'CERTIFICATIONS', value: '3+', icon: '🏆' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-pixel text-mario-red mb-6 mario-bounce">
            ABOUT THE HERO
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="mario-block p-6 rounded-lg">
              <p className="font-pixel text-sm md:text-base text-mario-block-foreground leading-relaxed mb-4">
                Just like Mario navigates through challenging levels, I tackle complex 
                coding problems with determination and creativity.
              </p>
              <p className="font-pixel text-sm md:text-base text-mario-block-foreground leading-relaxed mb-4">
                Currently pursuing Bachelor of Engineering (CSE) at Panimalar Engineering College, 
                Chennai. My journey spans from cybersecurity to AI/Data Science, collecting 
                power-ups (skills) along the way.
              </p>
              <p className="font-pixel text-sm md:text-base text-mario-block-foreground leading-relaxed">
                I specialize in MERN stack, Python, Java, and modern web technologies, 
                always ready for the next coding adventure! 🎮
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="mario-block p-4 text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-mario-gold text-xl md:text-2xl font-pixel mb-1">
                  {stat.value}
                </div>
                <div className="text-mario-block-foreground text-xs font-pixel leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex justify-center items-center gap-4">
          
            <p className="font-pixel text-mario-gold text-lg">
              READY TO LEVEL UP YOUR PROJECT?
            </p>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarioAbout;