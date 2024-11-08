import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { HomeInfo, Loader } from "../components";
import { Sky, Plane } from "../models";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(true); 

  const adjustBiplaneForScreenSize = () => {
    const isMobile = window.innerWidth < 768;
    return {
      scale: isMobile ? [1.5, 1.5, 1.5] : [3, 3, 3],
      position: isMobile ? [0, 0, 0] : [0, -2, -4], 
    };
  };

  const { scale: biplaneScale, position: biplanePosition } = adjustBiplaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas className="w-full h-screen bg-transparent" camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Sky />
          <Plane isRotating={isRotating} position={biplanePosition} rotation={[0, 20.1, 0]} scale={biplaneScale} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
