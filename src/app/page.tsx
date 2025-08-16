// app/page.tsx ou pages/index.tsx selon ta structure
"use client"; // si tu es dans un dossier `app/`

import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Garde le loader visible pendant au moins 3 secondes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
<>
      {/* Loader overlay */}
      {loading && (
        <div
          id="initial-loader"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div className="spinner" />
          <style jsx>{`
            .spinner {
              width: 60px;
              height: 60px;
              border: 6px solid #006bff;
              border-top: 6px solid #ccc;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            }

            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      )}

      {/* Contenu principal — toujours présent, mais masqué si loading */}
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>

  );
}
