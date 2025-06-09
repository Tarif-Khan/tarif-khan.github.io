import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import FloatingGeometry from './FloatingGeometry';
import { useTheme } from '../../contexts/ThemeContext';

const Scene3D: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={isDark ? 0.3 : 0.5} />
          <pointLight position={[10, 10, 10]} intensity={isDark ? 0.8 : 1} />
          <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.4 : 0.6} />
          
          {isDark && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />}
          
          <Environment preset={isDark ? 'night' : 'dawn'} />
          
          {/* Floating geometries */}
          <FloatingGeometry position={[-4, 2, -2]} geometry="box" scale={0.5} speed={0.8} />
          <FloatingGeometry position={[4, -1, -3]} geometry="sphere" scale={0.7} speed={1.2} />
          <FloatingGeometry position={[-2, -3, -1]} geometry="torus" scale={0.6} speed={0.9} />
          <FloatingGeometry position={[3, 3, -4]} geometry="octahedron" scale={0.8} speed={1.1} />
          <FloatingGeometry position={[0, -2, -5]} geometry="box" scale={0.4} speed={1.3} />
          <FloatingGeometry position={[-3, 1, -6]} geometry="sphere" scale={0.5} speed={0.7} />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;