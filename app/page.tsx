"use client"

import { Canvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from "three"
import { useRouter } from "next/navigation"

import "./globals.css"

type Props = {
  modelPath: string
  hovered: boolean
}

function PlatformModel({ modelPath, hovered }: Props) {
  const { scene } = useGLTF(modelPath)
  const ref = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (hovered) {
      ref.current.rotation.y += 0.03
    } else {
      let rot = ref.current.rotation.y
      rot = ((rot + Math.PI) % (Math.PI * 2)) - Math.PI
      ref.current.rotation.y = THREE.MathUtils.lerp(rot, 0, 0.1)
    }
  })

  return <primitive ref={ref} object={scene} scale={1.2} />
}

export default function Home() {
  const router = useRouter()
  const [pcHovered, setPcHovered] = useState(false)
  const [dsHovered, setDsHovered] = useState(false)
  const [lang, setLang] = useState("en")

  return (
    <div className="container">
      {/* 🌐 Language buttons now at top-right */}
      <div className="lang-switch top-right">
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("es")}>ES</button>
      </div>

      {/* 🔝 Top section */}
      <div className="top">
        <a href="https://github.com/UwUguasha" target="_blank">
        <div className="box profile">
          <img src="/ProfilePic.png" alt="profile pic" />
        </div>
        </a>

        <div className="box about">
          <p>
            {lang === "en"
              ? "Hey! My name is Iridis Ina, and I'm a 22 year old spanish game developer. I've been playing videogames since I was 4 years old and I am a big fan of retro consoles and games, such as N64 and DS games.  I've made several projects for both modern day computers and the Nintendo DS. I am a junior dev, freshly graduated who's full of passion for the medium and very motivated to learn and create. My dream is to make people happy and allow them to smile while they play the games I've worked on. And for that, I'll pour my soul into any project!"
              : "¡Hola! Me llamo Iridis Ina y soy una desarrolladora de videojuegos española de 22 años. Llevo jugando a videojuegos desde los 4 años y soy una gran fan de las consolas y juegos retro, como los de N64 y DS. He creado varios proyectos tanto para ordenadores modernos como para Nintendo DS. Soy una desarrolladora junior, recién graduada, apasionada por este medio y muy motivada para aprender y crear. Mi sueño es hacer feliz a la gente y que sonrían mientras juegan a los juegos en los que he trabajado, y para ello pondré mi cuerpo y alma en cada proyecto!"}
          </p>
        </div>
      </div>

      {/* 🔽 Bottom section */}
      <div className="bottom">
        <h2>Platforms I've made projects for</h2>

        <div className="platforms">
          {/* 💻 PC */}
          <div
            className="box platform"
            onMouseEnter={() => setPcHovered(true)}
            onMouseLeave={() => setPcHovered(false)}
            onClick={() => router.push("/pc")}
            style={{ cursor: "pointer" }}
          >
            <h3>PC</h3>
            <div className="canvas-container">
              <Canvas camera={{ position: [-8, 4, 8], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} />
                <PlatformModel modelPath="/PC.glb" hovered={pcHovered} />
              </Canvas>
            </div>
          </div>

          {/* 🎮 Nintendo DS */}
          <div
            className="box platform"
            onMouseEnter={() => setDsHovered(true)}
            onMouseLeave={() => setDsHovered(false)}
            onClick={() => router.push("/ds")}
            style={{ cursor: "pointer" }}
          >
            <h3>Nintendo DS</h3>
            <div className="canvas-container">
              <Canvas camera={{ position: [6, 6, 6], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} />
                <PlatformModel modelPath="/nintendoDS.glb" hovered={dsHovered} />
              </Canvas>
            </div>
          </div>
        </div>

        <button className="contact-button"
        onClick={() => router.push("/contact")}>
        Contact Me
      </button>
      </div>
    </div>
  )
}