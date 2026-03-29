"use client"

import { useRouter } from "next/navigation"

export default function PCPage() {
  const router = useRouter();

  return (
    <div className="container">

      {/* 🔙 BACK BUTTON */}
      <button className="back-button" onClick={() => router.push("/")}>
        ← Back
      </button>

      <h1>PC Projects</h1>

    <a href="https://github.com/UwUguasha/Space-Invaders" target="_blank">
      <div className="box project-card">
        <img src="/SpaceInvadersImage.png" className="project-image" />
        
        <div className="project-content">
          <div className="project-title">Space Invaders</div>

          <div className="project-desc">
            A small recreation of Space Invaders made in Unity
          </div>
        </div>
      </div>
    </a>

  <a href="https://github.com/UwUguasha/Uncontainable" target="_blank">
      <div className="box project-card">
        <img src="/UncontainableImage.png" className="project-image" />

        <div className="project-content">
          <div className="project-title">Uncontainable</div>

          <div className="project-desc">
            A simple 2D game made for the 2D Manacor GameJam of 2025
          </div>
        </div>
      </div>
    </a>

    <a href="https://github.com/UwUguasha/Gamejam-Project-25-26" target="_blank">
      <div className="box project-card">
        <img src="/SuikaGameDsImage.png" className="project-image" />

        <div className="project-content">
          <div className="project-title">(WIP) Dashbreaker</div>

          <div className="project-desc">
            A 3D game inspired by franchises like Sonic or the game Haste, for the Manacor-Inca GameJam of 2026
          </div>
        </div>
      </div>
    </a>

    <a href="https://github.com/UwUguasha/FiskSpel" target="_blank">
      <div className="box project-card">
        <img src="/FiskSpelImage.png" className="project-image" />

        <div className="project-content">
          <div className="project-title">FiskSpel</div>

          <div className="project-desc">
            Fishing game I made for school with the help of an old swedish acquaintance, reflected in the title of the project.
          </div>
        </div>
      </div>
    </a>

    <a href="https://github.com/UwUguasha" target="_blank">
      <div className="box project-card">
        <img src="/WebsiteImage.png" className="project-image" />

        <div className="project-content">
          <div className="project-title">This Website!</div>

          <div className="project-desc">
            Website made to show my portfolio and skills as I grow into a better Game developer and programmer
          </div>
        </div>
      </div>
    </a>
    </div>
  )
}