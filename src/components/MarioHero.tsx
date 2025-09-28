import { Button } from "@/components/ui/button";
import marioGif from "@/assets/hero.gif";
import Typed from "react-typed";

const MarioHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Text Section */}
          <div className="space-y-6">
            <div className="mario-bounce">
              <h1 className="text-4xl md:text-6xl font-pixel text-mario-red mb-4">
                FELICIA JOSE
              </h1>
              <p className="text-lg md:text-xl font-pixel text-mario-gold">
                Full Stack Developer 
              </p>
            </div>

            <div className="mario-block p-6 rounded-lg">
              <p className="text-sm md:text-base font-pixel text-mario-block-foreground leading-relaxed">
                Welcome to my digital kingdom! I'm an enthusiastic full-stack
                developer with passion for crafting interactive web
                applications. From MERN stack to AI/ML, let's build something
                amazing together!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
    

              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="bg-mario-gold text-mario-gold-foreground hover:bg-mario-gold-dark border-2 border-mario-gold-dark font-pixel px-8 py-4 text-sm"
              >
                ENTER WARP ZONE
              </Button>

              <Button
                asChild
                variant="outline"
                className="bg-mario-green text-mario-green-foreground hover:bg-mario-green-dark font-pixel px-8 py-4 text-sm border-2 border-mario-green-dark"
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1w2gmOuiq6j28wA5vATdGPYXmz0WexGUA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOWNLOAD RESUME
                </a>
              </Button>
            </div>
          </div>

          {/* GIF Section */}
          <div className="flex justify-center">
            <div className="mario-bounce">
              <img
                src={marioGif}
                alt="Mario GIF"
                className="w-full max-w-md rounded-lg mario-block"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarioHero;
