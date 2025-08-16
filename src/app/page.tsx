// app/page.tsx ou pages/index.tsx selon ta structure
"use client"; // si tu es dans un dossier `app/`

import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Lance le fondu
      // Puis retire complètement le loader après la durée de la transition
      setTimeout(() => {
        setLoading(false);
      }, 500); // correspond à la durée du fade-out
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader visible uniquement s’il n’est pas encore désactivé */}
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
            opacity: fadeOut ? 0 : 1,
            transition: "opacity 0.5s ease-in-out",
            pointerEvents: "none", // permet de cliquer à travers si nécessaire
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

      {/* Contenu principal toujours présent dans le DOM */}
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
