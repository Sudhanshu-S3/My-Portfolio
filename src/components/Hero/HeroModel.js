import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';

export function HeroModel({ url = '/scene.gltf' }) {
    const modelRef = useRef();

    // You can replace this with your own 3D model
    // const { scene } = useGLTF(url);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        modelRef.current.rotation.y = Math.sin(time / 4) * 0.3;
    });

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.2}
            floatIntensity={0.5}
        >
            <mesh ref={modelRef}>
                {/* Simple geometric shape as a placeholder */}
                <octahedronGeometry args={[1.5, 0]} />
                <meshStandardMaterial
                    color="#0070f3"
                    emissive="#0070f3"
                    emissiveIntensity={0.2}
                    roughness={0.3}
                    metalness={0.8}
                />
                {/* Uncomment this when you have a model */}
                {/* <primitive object={scene} scale={0.5} /> */}
            </mesh>
        </Float>
    );
}