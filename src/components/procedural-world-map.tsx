"use client";

import { Billboard, Line, PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GlowPointMaterial = shaderMaterial(
  { uTime: 0, uColorA: new THREE.Color("#00e5ff"), uColorB: new THREE.Color("#a855f7") },
  `
    uniform float uTime;
    varying float vPulse;
    void main() {
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      float wave = sin(position.x * 2.4 + position.y * 4.2 + uTime * 1.8);
      vPulse = 0.55 + wave * 0.45;
      gl_PointSize = (2.0 + vPulse * 2.6) * (34.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  `
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying float vPulse;
    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      float alpha = smoothstep(0.5, 0.05, dist);
      vec3 color = mix(uColorB, uColorA, vPulse);
      gl_FragColor = vec4(color, alpha * 0.86);
    }
  `,
);

extend({ GlowPointMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    glowPointMaterial: React.JSX.IntrinsicElements["shaderMaterial"];
  }
}

type LatLng = [number, number];

const continentBlobs = [
  { lat: 1, lng: 20, rx: 24, ry: 34, count: 720 },
  { lat: 24, lng: 18, rx: 16, ry: 13, count: 240 },
  { lat: 49, lng: 15, rx: 18, ry: 12, count: 320 },
  { lat: 31, lng: 47, rx: 17, ry: 11, count: 240 },
  { lat: 36, lng: 78, rx: 34, ry: 18, count: 580 },
  { lat: 16, lng: 99, rx: 20, ry: 20, count: 360 },
  { lat: 24, lng: 113, rx: 15, ry: 13, count: 260 },
  { lat: -3, lng: 118, rx: 24, ry: 15, count: 260 },
  { lat: -24, lng: 135, rx: 18, ry: 11, count: 160 },
];

const routePairs: [LatLng, LatLng][] = [
  [[30.0, 31.2], [51.5, -0.1]],
  [[30.0, 31.2], [25.2, 55.3]],
  [[30.0, 31.2], [35.6, 139.6]],
  [[6.5, 3.4], [48.8, 2.3]],
  [[1.3, 103.8], [41.0, 29.0]],
  [[28.6, 77.2], [52.5, 13.4]],
];

function seeded(index: number) {
  const x = Math.sin(index * 999.91) * 10000;
  return x - Math.floor(x);
}

function latLngToVector(lat: number, lng: number, radius = 2.6) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lng + 8);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function makeLandPoints() {
  const points: number[] = [];
  let seed = 1;

  continentBlobs.forEach((blob) => {
    for (let i = 0; i < blob.count; i += 1) {
      const angle = seeded(seed++) * Math.PI * 2;
      const spread = Math.sqrt(seeded(seed++));
      const lat = blob.lat + Math.sin(angle) * blob.ry * spread + (seeded(seed++) - 0.5) * 5;
      const lng = blob.lng + Math.cos(angle) * blob.rx * spread + (seeded(seed++) - 0.5) * 7;
      const vec = latLngToVector(lat, lng, 2.62 + seeded(seed++) * 0.025);
      points.push(vec.x, vec.y, vec.z);
    }
  });

  return new Float32Array(points);
}

function makeArc(start: LatLng, end: LatLng) {
  const a = latLngToVector(start[0], start[1], 2.64);
  const b = latLngToVector(end[0], end[1], 2.64);
  const mid = a.clone().lerp(b, 0.5).normalize().multiplyScalar(3.45);
  const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
  return curve.getPoints(42);
}

function GlobeCore() {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const land = useMemo(() => makeLandPoints(), []);
  const arcs = useMemo(() => routePairs.map(([a, b]) => makeArc(a, b)), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = -0.78 + Math.sin(t * 0.12) * 0.035;
      groupRef.current.rotation.x = 0.15 + Math.sin(t * 0.08) * 0.02;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = t;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.16, -0.78, -0.05]} position={[0.55, 0.05, 0]}>
      <mesh>
        <sphereGeometry args={[2.58, 96, 96]} />
        <meshStandardMaterial
          color="#081025"
          emissive="#041a28"
          emissiveIntensity={0.7}
          roughness={0.68}
          metalness={0.12}
          transparent
          opacity={0.52}
          wireframe
        />
      </mesh>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[land, 3]} />
        </bufferGeometry>
        <glowPointMaterial ref={materialRef} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>

      {arcs.map((arc, index) => (
        <Line
          key={index}
          points={arc}
          color={index % 2 ? "#a855f7" : "#00e5ff"}
          lineWidth={1.2}
          transparent
          opacity={0.65}
        />
      ))}

      {[
        [30.0, 31.2, "Egypt"],
        [51.5, -0.1, "London"],
        [25.2, 55.3, "Dubai"],
        [35.6, 139.6, "Tokyo"],
      ].map(([lat, lng, label]) => {
        const pos = latLngToVector(Number(lat), Number(lng), 2.84);
        return (
          <Billboard key={String(label)} position={pos}>
            <mesh>
              <ringGeometry args={[0.035, 0.075, 24]} />
              <meshBasicMaterial color="#00e5ff" transparent opacity={0.86} />
            </mesh>
          </Billboard>
        );
      })}
    </group>
  );
}

function MapScene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.25, 6.2]} fov={42} />
      <ambientLight intensity={0.6} />
      <pointLight position={[1.5, 2.4, 3]} color="#00e5ff" intensity={5} />
      <pointLight position={[-2.5, -1.8, 3]} color="#a855f7" intensity={4} />
      <Stars radius={18} depth={12} count={700} factor={3} saturation={0} fade speed={0.3} />
      <GlobeCore />
    </>
  );
}

export function ProceduralWorldMap() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        dpr={[1, 1.65]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <MapScene />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,transparent_0%,rgba(2,3,10,0.08)_46%,rgba(2,3,10,0.88)_100%)]" />
    </div>
  );
}
