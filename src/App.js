import TimeLine from './components/TimeLine';
import Particles from "react-tsparticles";

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  
  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  return (
    <div className="App" style={{position:"relative", color:"#ffffff", display:"flex"}}>

      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{backgroundColor: "#FBDA61",
              backgroundImage: `linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)`
              }}
            options={{
              background: {
                color: {
                  value: "#4158D0"
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 4,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 1,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: false,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 3,
                },
              },
              detectRetina: true,
            }}>
          </Particles>
          <TimeLine />
    </div>
  );
}

export default App;
