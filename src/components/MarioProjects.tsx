import { Button } from '@/components/ui/button';

const MarioProjects = () => {
  const projects = [
    {
      title: 'WORLD 1-1: EVENT TOKEN GENERATOR',
      description: 'Python-based application for generating secure event tokens and QR codes with cryptographic features.',
      tech: ['Python', 'QR Code Generation', 'Cryptography', 'GUI'],
      status: 'COMPLETED',
      difficulty: '⭐⭐⭐'
    },
    {
      title: 'WORLD 2-1: IMAGE STEGANOGRAPHY',
      description: 'Java application for hiding secret messages within image files using advanced steganographic techniques.',
      tech: ['Java', 'Image Processing', 'Encryption', 'Swing UI'],
      status: 'COMPLETED',
      difficulty: '⭐⭐⭐'
    },
    {
      title: 'WORLD 3-1: SMART IRRIGATION',
      description: 'IoT-based irrigation system using Arduino with AI/ML algorithms for optimized water management.',
      tech: ['Arduino', 'AI/ML', 'IoT Sensors', 'Data Analysis'],
      status: 'COMPLETED',
      difficulty: '⭐⭐⭐⭐'
    },
    {
      title: 'WORLD 4-1: E-COMMERCE PLATFORM',
      description: 'Full-stack e-commerce website built with MERN stack featuring modern shopping experience.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      status: 'COMPLETED',
      difficulty: '⭐⭐⭐⭐⭐'
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-pixel text-mario-red mb-6 mario-bounce">
            COMPLETED LEVELS
          </h2>
          <p className="font-pixel text-mario-block text-lg">
            🏁 ADVENTURES IN CODE DEVELOPMENT 🏁
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="mario-block p-6 hover:mario-bounce transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="font-pixel text-mario-gold text-sm mb-2">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-pixel ${
                      project.status === 'COMPLETED' 
                        ? 'bg-mario-green text-mario-green-foreground' 
                        : 'bg-mario-blue text-mario-blue-foreground'
                    }`}>
                      {project.status}
                    </span>
                    <span className="bg-mario-red text-mario-red-foreground px-2 py-1 rounded text-xs font-pixel">
                      {project.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="font-pixel text-mario-block-foreground text-xs leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-mario-gold text-mario-gold-foreground px-2 py-1 rounded text-xs font-pixel"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="mario-block p-6 inline-block">
            <p className="font-pixel text-mario-gold text-lg mb-4">
              🏆 ACHIEVEMENT UNLOCKED! 🏆
            </p>
            <p className="font-pixel text-mario-block-foreground text-sm">
              FULL-STACK DEVELOPER STATUS ACHIEVED!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarioProjects;