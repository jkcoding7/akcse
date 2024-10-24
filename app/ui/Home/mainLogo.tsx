"use client";

import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useFBO, useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { easing } from "maath";
import { Mesh } from "three";
import { Clouds, Cloud, Sky as SkyImpl } from "@react-three/drei";

export default function MainLogo() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 15 }}
      style={{ background: "#ffffff", borderRadius: "3%" }}
    >
      <ambientLight intensity={Math.PI / 1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Sky />
      <Lens />
    </Canvas>
  );
}

function Lens({ damping = 0.15, ...props }) {
  const ref = useRef<Mesh | null>(null);
  const buffer = useFBO();
  const { nodes } = useGLTF("/lens-transformed.glb");
  const texture = useLoader(THREE.TextureLoader, "/AKCSE_McGill.png");
  const viewport = useThree((state) => state.viewport);
  const [scene] = useState(() => new THREE.Scene());

  useFrame((state, delta) => {
    if (ref.current) {
      const viewport = state.viewport.getCurrentViewport(
        state.camera,
        [0, 0, 15]
      );
      easing.damp3(
        ref.current.position,
        [
          (state.pointer.x * viewport.width) / 2,
          (state.pointer.y * viewport.height) / 2,
          15,
        ],
        damping,
        delta
      );
    }
    state.gl.setRenderTarget(buffer);
    state.gl.setClearColor("#ffffff");
    state.gl.render(scene, state.camera);
    state.gl.setRenderTarget(null);
  });

  return (
    <>
      <mesh
        position={[0, 0, -0.1]}
        scale={[viewport.width, viewport.height, 1]}
      >
        <planeGeometry />
        <meshBasicMaterial map={texture} transparent={true} />
      </mesh>
      <mesh
        scale={0.25}
        ref={ref}
        rotation-x={Math.PI / 2}
        geometry={(nodes.Cylinder as THREE.Mesh).geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          ior={1.4}
          thickness={0.5}
          anisotropy={0.1}
          chromaticAberration={0.02}
          transmission={1}
          transparent={true}
        />
      </mesh>
    </>
  );
}

function Sky() {
  const ref = useRef<THREE.Group | null>(null);
  const cloud0 = useRef<THREE.Mesh | null | any>(null);
  const config = {
    seed: 1,
    segments: 14,
    volume: 7,
    opacity: 0.6,
    fade: 13,
    growth: 2,
    speed: 0.03,
    x: 6,
    y: 1,
    z: 2,
    color: "white",
  };

  useFrame((state, delta) => {
    // Ensure ref.current and cloud0.current are defined before accessing them
    if (ref.current) {
      ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2;
    }
    if (cloud0.current) {
      cloud0.current.rotation.y -= delta;
    }
  });

  return (
    <>
      <SkyImpl />
      <group ref={ref}>
        <Clouds material={THREE.MeshLambertMaterial} limit={400}>
          <Cloud ref={cloud0} {...config} bounds={[6, 1, 2]} color="#f5d0f1" />
          <Cloud {...config} bounds={[3, 1, 1]} color="#f4f5d6" seed={2} />
        </Clouds>
      </group>
    </>
  );
}
