import mushroomImage from '@/assets/mario-mushroom.jpg';

const MarioSkills = () => {
  const powerUps = [
    {
      name: 'MERN MUSHROOM',
      description: 'Full stack web development power',
      icon: '⚛️',
      level: 'SUPER',
      skills: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      name: 'PYTHON FLOWER',
      description: 'Shoots AI/ML algorithms',
      icon: '🐍',
      level: 'FIRE',
      skills: ['Python', 'Data Science', 'AI/ML', 'Algorithms']
    },
    {
      name: 'JAVA STAR',
      description: 'Object-oriented programming mastery',
      icon: '☕',
      level: 'STAR',
      skills: ['Java', 'OOP', 'Data Structures', 'Backend']
    },
    {
      name: 'DESIGN CAPE',
      description: 'Creates pixel-perfect interfaces',
      icon: '🎨',
      level: 'CAPE',
      skills: ['Figma', 'Photoshop', 'Illustrator', 'Blender']
    },
    {
      name: 'WEB SHELL',
      description: 'Frontend development shield',
      icon: '🌐',
      level: 'SHELL',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {
      name: 'CLOUD POWER',
      description: 'AWS cloud computing abilities',
      icon: '☁️',
      level: 'CLOUD',
      skills: ['AWS', 'Cloud Foundations', 'MySQL', 'PHP']
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-pixel text-mario-red mb-6 mario-bounce">
            POWER-UP COLLECTION
          </h2>
          <p className="font-pixel text-mario-block text-lg">
            🍄 COLLECTED ABILITIES & SKILLS 🍄
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {powerUps.map((powerUp, index) => (
            <div 
              key={index} 
              className="mario-block p-6 text-center power-up-glow hover:mario-bounce transition-transform cursor-pointer"
            >
              <div className="text-4xl mb-4">{powerUp.icon}</div>
              
              <h3 className="font-pixel text-mario-gold text-sm mb-2">
                {powerUp.name}
              </h3>
              
              <div className="bg-mario-red text-mario-red-foreground px-3 py-1 rounded font-pixel text-xs mb-4">
                {powerUp.level} LEVEL
              </div>
              
              <p className="font-pixel text-mario-block-foreground text-xs leading-relaxed mb-4">
                {powerUp.description}
              </p>
              
              <div className="space-y-1">
                {powerUp.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-mario-blue text-mario-blue-foreground px-2 py-1 rounded text-xs font-pixel inline-block mx-1 mb-1"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="mario-block p-6 inline-block">
            <img 
              src={mushroomImage} 
              alt="Power-up Mushroom" 
              className="w-16 h-16 mx-auto mb-4 power-up-glow"
            />
            <p className="font-pixel text-mario-block-foreground text-sm">
              POWER LEVEL: MAXIMUM! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarioSkills;