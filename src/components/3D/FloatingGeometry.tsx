import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useTheme } from '../../contexts/ThemeContext';

interface FloatingGeometryProps {
  position: [number, number, number];
  geometry: 'box' | 'sphere' | 'torus' | 'octahedron';
  scale?: number;
  speed?: number;
}

const FloatingGeometry: React.FC<FloatingGeometryProps> = ({
  position,
  geometry,
  scale = 1,
  speed = 1
}) => {
  const meshRef = useRef<Mesh>(null);
  const { isDark } = useTheme();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[0.5, 0.2, 16, 100]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.5]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {renderGeometry()}
      <meshStandardMaterial
        color={isDark ? '#60a5fa' : '#3b82f6'}
        transparent
        opacity={0.7}
        wireframe
      />
    </mesh>
  );
};

export default FloatingGeometry;