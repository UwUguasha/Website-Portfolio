"use client"

import { useRouter } from "next/navigation"

export default function NintendoDsPage() {
  const router = useRouter();

  return (
    <div className="container">

      {/* 🔙 BACK BUTTON */}
      <button className="back-button" onClick={() => router.push("/")}>
        ← Back
      </button>

      <h1>DS Projects</h1>

    <a href="https://github.com/UwUguasha/CatchTheStarsDS" target="_blank">
      <div className="box project-card">
        <img src="/CatchTheStarsImage.png" className="project-image" />
        
        <div className="project-content">
          <div className="project-title">CatchTheStars</div>

          <div className="project-desc">
            Demo project I made at school to up my grades and get acquainted with low level programming for old hardware
          </div>
        </div>
      </div>
    </a>

  <a href="https://github.com/UwUguasha" target="_blank">
      <div className="box project-card">
        <img src="/SuikaGameDsImage.png" className="project-image" />

        <div className="project-content">
          <div className="project-title">Suika Game DS</div>

          <div className="project-desc">
            A Suika Game clone for the DS
          </div>
        </div>
      </div>
    </a>
    </div>
  )
}