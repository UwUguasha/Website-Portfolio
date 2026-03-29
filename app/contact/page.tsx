"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const router = useRouter()

  const [text, setText] = useState("")
  const [showLinks, setShowLinks] = useState(false)

  const fullText = "> initializing contact.exe..."

  useEffect(() => {
    let i = 0

    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++

      if (i > fullText.length) {
        clearInterval(interval)

        setTimeout(() => {
          setShowLinks(true)
        }, 500)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container">

      {/* 🔙 BACK BUTTON */}
      <button className="back-button" onClick={() => router.push("/")}>
        ← Back
      </button>

      <div className="box">

        <p className="cursor">{text}</p>

        {showLinks && (
          <>
            <br />

            <p>{"> contact methods loaded:"}</p>

            <br />

            <p>
              {"> "}
              
            <a href="https://mail.google.com/mail/?view=cm&to=inlaureano@gmail.com" target="_blank">
              email.exe
            </a>
            </p>

            <br />

            <p>
              {"> "}
              <a
                href="https://www.linkedin.com/in/iridis-ina-laureano-garcia-63824735a/"
                target="_blank"
              >
                linkedin.exe
              </a>
            </p>
          </>
        )}

      </div>
    </div>
  )
}