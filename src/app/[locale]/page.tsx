// app/[locale]/page.tsx ou pages/index.tsx selon ta structure
"use client"; // si tu es dans un dossier `app/`

import { use, useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import { useTranslation } from "react-i18next";


export default function Home({ params }: { params: Promise<{ locale: string }> }) {

  const { t, i18n } = useTranslation();
  const { locale } = use(params);

  if (i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }

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





// "use client";

// import { useTranslation } from "react-i18next";
// import i18n from "../../i18n";
// import { useRouter, usePathname } from "next/navigation";

// export default function HomePage({ params }: { params: { locale: string } }) {
//   const { t } = useTranslation();
//   const router = useRouter();
//   const pathname = usePathname();

//   // mettre i18n sur la langue de l'URL
//   if (i18n.language !== params.locale) {
//     i18n.changeLanguage(params.locale);
//   }

//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng);

//     // remplacer la locale dans l’URL
//     const segments = pathname.split("/");
//     segments[1] = lng; // le premier segment = locale
//     router.push(segments.join("/"));
//   };

//   return (
//     <div>
//       <h1>{t("Index.title")}</h1>
//       <p>{t("Index.description")}</p>

//       <button onClick={() => changeLanguage("fr")}>FR</button>
//       <button onClick={() => changeLanguage("en")}>EN</button>
//       <button onClick={() => changeLanguage("tr")}>TR</button>
//     </div>
//   );
// }


