


 import { useState, useEffect, useRef } from "react";

 interface Service {
   id: string;
   title: string;
   icon: string;
   content: React.ReactNode;
 }

 export default function Services() {
   const [openIds, setOpenIds] = useState<string[]>([]);

   const toggle = (id: string) => {
     setOpenIds((prev) =>
       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
     );
   };

   const services: Service[] = [
     {
       id: "sanitaire",
       title: "Services sanitaires & Tourisme médical",
       icon: "fi fi-ss-hand-holding-medical",
       content: (
         <div className="space-y-8">
           <h1 className="text-3xl font-bold max-md:text-2xl">
             Services Sanitaires & Tourisme Médical
           </h1>
           <p className="md:text-justify">
             Chez Turkey Healthcare Group et Istanbul Infertility Center, nous
             offrons une prise en charge médicale intégrée et personnalisée pour
             les patients internationaux, en combinant soins de santé de haut
             niveau, accompagnement sur mesure.
           </p>
           <p className="md:text-justify">
             Notre objectif est de rendre l’excellence médicale turque accessible
             à tous, dans un cadre sécurisé, organisé et rassurant.
           </p>
           <h2 className="text-2xl font-bold max-lg:text-2xl">
             Nos services médicaux
           </h2>
           <ul className="flex flex-col space-y-8 list-disc px-8">
             <li>
                <p>
                 <strong className="text-xl font-bold">Consultations médicales internationales : </strong>
                    Accès à des spécialistes de renommée internationale pour des
                    diagnostics et des plans de traitement précis.
                </p>
             </li>
             <li>
                 <p>
                 <strong className="text-xl font-bold">Suivi médical à distance : </strong>
                    Monitoring médical continu des patients internationaux, même
                    après leur retour dans leur pays.
                </p>
             </li>
             <li>
                 <p>
                 <strong className="text-xl font-bold">FIV & traitement de l’infertilité : </strong>
                    Programmes complets de procréation médicalement assistée,
                    adaptés à chaque situation, avec des taux de réussite élevés.
                </p>
             </li>
             <li>
                 <p>
                 <strong className="text-xl font-bold">Greffe capillaire et chirurgie esthétique : </strong>
                    Soins réalisés dans des cliniques certifiées, avec des chirurgiens
                    expérimentés et des technologies de pointe.
                </p>
             </li>
             <li>
                <p>
                 <strong className="text-xl font-bold">Prise en charge dans les hôpitaux spécialisés : </strong>
                    Coordination rapide et efficace pour une prise en charge des
                    patients dans les établissements les mieux adaptés à leur
                    pathologie.
                </p>
             </li>
             <li>
                 <p>
                 <strong className="text-xl font-bold">Consultations médicales en ligne : </strong>
                    Évaluations préliminaires et second avis médicaux avec nos
                    médecins, en toute confidentialité et simplicité.
                </p>
             </li>
           </ul>
         </div>
       ),
     },
     {
       id: "fourniture",
       title: "Fourniture de Matériel Médical et de Laboratoire",
       icon: "fi fi-rr-stethoscope",
       content: (
         <div className="space-y-8">
           <h1 className="font-bold text-3xl max-md:text-2xl">
             Fourniture de Matériel Médical et de Laboratoire
           </h1>
           <p className="md:text-justify">
             Nous mettons à la disposition des établissements de santé publics et
             privés une large gamme d’équipements médicaux et de dispositifs de
             diagnostic, avec des standards de qualité internationale.
           </p>
           <p className="md:text-justify">
             Grâce à nos partenaires stratégiques et notre expertise terrain, nous
             assurons une chaîne d’approvisionnement fluide et maîtrisée, de la
             commande à la livraison.
           </p>
           <ul className="flex flex-col space-y-8">
             <li>
               <span className="text-xl font-bold">
                 Tests de Diagnostic de Laboratoire
               </span>
               <ul className="list-disc px-12 flex flex-col space-y-2 py-4">
                 <li>Tests des maladies infectieuse</li>
                 <li>Tests COVID-19</li>
                 <li>Maladies sexuellement transmissibles</li>
                 <li>Tests des maladies tropicales</li>
                 <li>Marqueurs tumoraux</li>
                 <li>Tests de grossesse</li>
                 <li>Marqueurs cardiaques</li>
                 <li>Groupage sanguin</li>
               </ul>
             </li>
             <li>
               <span className="text-xl font-bold">
                 Fournitures et équipements complémentaires
               </span>
               <ul className="list-disc px-12 flex flex-col space-y-2 py-4">
                 <li>
                   Équipements pour laboratoires d’analyses médicales
                 </li>
                 <li>Dispositifs de dépistage rapide (RDT)</li>
                 <li>Kits de prélèvement, consommables et réactifs</li>
                 <li>
                   Matériel hospitalier : moniteurs, lits médicaux,
                   pousse-seringues, etc.
                 </li>
                 <li>
                   Appareils de diagnostic : échographes, ECG, dopplers,
                   autoclaves etc
                 </li>
               </ul>
             </li>
           </ul>
           <div className="flex flex-col space-y-4">
             <div className="flex space-x-2 items-center">
               <i className="fa-solid fa-earth-africa text-2xl"></i>
               <h1 className="text-xl font-bold">Nos engagements</h1>
             </div>
             <div className="flex flex-col space-y-4 px-2 lg:px-8">
               <div className="flex space-x-2 items-center">
                 <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                 <span>
                   Produits certifiés CE, ISO et validés cliniquement.
                 </span>
               </div>
               <div className="flex space-x-2 items-center">
                 <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                 <span>
                   Livraison internationale avec accompagnement logistique.
                 </span>
               </div>
               <div className="flex space-x-2 items-center">
                 <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                 <span>
                   Conseil technique pour le choix des équipements adaptés à vos
                   besoins.
                 </span>
               </div>
               <div className="flex space-x-2 items-center">
                 <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                 <span>
                   Service après-vente et possibilité de formation à
                   l’utilisation du matériel.
                 </span>
               </div>
             </div>
           </div>
         </div>
       ),
     },
      {
         id: "contruction",
         title: "Matériel de Construction & Finition",
         icon: "fi fi-ss-hard-hat",
         content: (
         <div className="space-y-8">
           <h1 className="font-bold text-2xl">
             Aucun contenu pour le moment
           </h1>
         </div>
         )
      },
      {
         id: "voyage",
         title: "Voyage d'affaires en Turquie",
         icon: "fi fi-ss-plane",
         content: (
         <div className="space-y-8">
           <h1 className="font-bold text-2xl">
             Aucun contenu pour le moment
           </h1>
         </div>
         )
      },

     {
       id: "afrique",
       title: "Projets en Afrique",
       icon: "fi fi-rr-earth-africa",
       content: (
         <div className="space-y-8">
           <h1 className="font-bold text-3xl max-md:text-2xl">
             Projets en Afrique
           </h1>
           <p>Une vision claire, des actions concrètes</p>
           <p className="md:text-justify">
             Notre présence en Afrique ne se limite pas à l’exportation de
             services médicaux. Nous développons une dynamique régionale forte,
             articulée autour de projets structurants, durables et à fort impact
             social.
           </p>
           <ul className="flex flex-col space-y-8">
             <li>
               <span className="text-xl font-bold">
                 1. Déploiement de corridors de santé Turquie – Afrique
               </span>
               <ul className="list-disc px-12 flex flex-col space-y-2 py-4">
                 <li>l’évacuation sanitaire rapide et encadrée</li>
                 <li>
                   l’accès direct aux traitements spécialisés (oncologie,
                   cardiologie, fertilité, greffes, etc.)
                 </li>
                 <li>
                   la continuité des soins à distance via la télémédecine.
                 </li>
               </ul>
             </li>
             <li>
               <span className="text-xl font-bold">
                 2. Développement d’infrastructures médicales locales
               </span>
               <ul className="list-disc px-12 flex flex-col space-y-2 py-4">
                 <li>
                   accompagnons la création de centres de soins spécialisés
                   (fertilité, diagnostics, chirurgie ambulatoire)
                 </li>
                 <li>proposons des modèles hospitaliers clé en main</li>
                 <li>
                   facilitons l’acquisition de matériel médical de pointe adapté
                   aux réalités locales.
                 </li>
               </ul>
             </li>
             <li>
               <span className="text-xl font-bold">
                 3. Renforcement des compétences médicales
               </span>
               <ul className="list-disc px-12 flex flex-col space-y-2 py-4">
                 <li>
                   sessions de formation continue pour professionnels de santé
                   africains en Turquie ou en ligne
                 </li>
                 <li>stages pratiques en milieu hospitalier</li>
                 <li>développement de partenariats académiques.</li>
               </ul>
             </li>
             <li>
               <span className="text-xl font-bold">
                 4. Approvisionnement en matériel de diagnostic et dispositifs
                 médicaux
               </span>
               <ul className="list-disc px-12 flex flex-col space-y-2 py-4">
                 <li>tests infectieux, cardiaques, tumoraux, FIV, etc.</li>
                 <li>dispositifs de diagnostic rapide</li>
                 <li>
                   équipements hospitaliers (moniteurs, respirateurs, blocs
                   opératoires mobiles…)
                 </li>
               </ul>
             </li>
           </ul>
           <div className="flex flex-col space-y-4">
             <div className="flex space-x-2 items-center">
               <i className="fa-solid fa-earth-africa text-2xl"></i>
               <h1 className="text-xl font-bold">Notre approche en Afrique</h1>
             </div>
             <div className="flex flex-col space-y-4 px-2 lg:px-8">
               <div className="flex space-x-2 items-center">
                 <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                 <span>
                   <strong>Orientation patient :</strong> chaque projet est conçu
                   pour améliorer la qualité et la rapidité de prise en charge.
                 </span>
               </div>
               <div className="flex space-x-2 items-center">
                 <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                 <span>
                   <strong>Modèle collaboratif :</strong> nous travaillons main
                   dans la main avec des partenaires africains locaux.
                 </span>
               </div>
               <div className="flex space-x-2 items-center">
                 <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                 <span>
                   <strong>Adaptation aux réalités du terrain :</strong>{" "}
                   solutions médicales personnalisées selon les besoins et les
                   contextes.
                 </span>
               </div>
               <div className="flex space-x-2 items-center">
                 <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                 <span>
                   <strong>Impact mesurable :</strong> notre action se traduit en
                   vies améliorées, en capacités renforcées, en systèmes de santé
                   plus solides.
                 </span>
               </div>
             </div>
           </div>
           <footer className="pb-8">
             <div className="text-center">
               <h1 className="text-gray-500 font-bold">
                 Ensemble, faisons progresser la santé en Afrique.
               </h1>
             </div>
           </footer>
         </div>
       ),
     },
   ];

   return (
    <div className="w-full mx-auto flex flex-col space-y-4 px-4 lg:px-24">
      <div className="flex flex-col space-y-8">
        <h1 className="text-5xl max-lg:text-4xl max-md:text-2xl font-bold text-center">
          Nos Services
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Nous vous proposons de nombreux services pour satisfaire vos besoins et
          nous vous accompagnons à la réalisation de vos projets.
        </p>
      </div>

      {services.map((service) => {
        const isOpen = openIds.includes(service.id);
        const contentRef = useRef<HTMLDivElement>(null);

        const maxHeight = isOpen
          ? `${contentRef.current?.scrollHeight ?? 0}px`
          : "0px";

        return (
          <div
            key={service.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm mt-8 transition-all duration-300"
          >
            {/* Header */}
            <button
              onClick={() => toggle(service.id)}
              className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-[#1c2136] dark:hover:bg-[#181c31] hover:bg-gray-100"
            >
              <div className="flex items-center space-x-3">
                <i className={`${service.icon} text-xl icon-circle`} />
                <span className="font-semibold text-start">{service.title}</span>
              </div>
              <i
                className={`fa-solid ${
                  isOpen ? "fa-minus" : "fa-plus"
                } text-[#006bff] text-xl`}
              />
            </button>

            {/* Content */}
            <div
              ref={contentRef}
              style={{
                maxHeight,
                transition: "max-height 0.5s ease",
              }}
              className="overflow-hidden bg-white dark:bg-[#1c2136] px-4"
            >
              <div className="py-4">{service.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
 }


//  import { useState } from "react";

//  interface Service {
//    id: string;
//    title: string;
//    icon: string;
//    content: React.ReactNode;
//  }

//  export default function Services() {
//    const [openIds, setOpenIds] = useState<string[]>([]);

//    const toggle = (id: string) => {
//      setOpenIds((prev) =>
//        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//      );
//    };

//    const services: Service[] = [
//      {
//        id: "sanitaire",
//        title: "Services sanitaires & Tourisme médical",
//        icon: "fi fi-ss-hand-holding-medical",
//        content: (
//          <div className="space-y-8">
//            <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl">
//              Services Sanitaires & Tourisme Médical
//            </h1>
//            <p className="md:text-justify">
//              Chez Turkey Healthcare Group et Istanbul Infertility Center, nous
//              offrons une prise en charge médicale intégrée et personnalisée pour
//              les patients internationaux, en combinant soins de santé de haut
//              niveau, accompagnement sur mesure.
//            </p>
//            <p className="md:text-justify">
//              Notre objectif est de rendre l’excellence médicale turque accessible
//              à tous, dans un cadre sécurisé, organisé et rassurant.
//            </p>
//            <h2 className="text-3xl font-bold max-lg:text-2xl">
//              Nos services médicaux
//            </h2>
//            <ul className="flex flex-col space-y-8 list-disc px-4">
//              <li>
//                <span className="text-xl font-bold">
//                  Consultations médicales internationales
//                </span>
//                <p className="px-4">
//                  Accès à des spécialistes de renommée internationale pour des
//                  diagnostics et des plans de traitement précis.
//                </p>
//              </li>
//              <li>
//                <span className="text-xl font-bold">
//                  Suivi médical à distance
//                </span>
//                <p className="px-4">
//                  Monitoring médical continu des patients internationaux, même
//                  après leur retour dans leur pays.
//                </p>
//              </li>
//              <li>
//                <span className="text-xl font-bold">
//                  FIV & traitement de l’infertilité
//                </span>
//                <p className="px-4">
//                  Programmes complets de procréation médicalement assistée,
//                  adaptés à chaque situation, avec des taux de réussite élevés.
//                </p>
//              </li>
//              <li>
//                <span className="text-xl font-bold">
//                  Greffe capillaire et chirurgie esthétique
//                </span>
//                <p className="px-4">
//                  Soins réalisés dans des cliniques certifiées, avec des chirurgiens
//                  expérimentés et des technologies de pointe.
//                </p>
//              </li>
//              <li>
//                <span className="text-xl font-bold">
//                  Prise en charge dans les hôpitaux spécialisés
//                </span>
//                <p className="px-4">
//                  Coordination rapide et efficace pour une prise en charge des
//                  patients dans les établissements les mieux adaptés à leur
//                  pathologie.
//                </p>
//              </li>
//              <li>
//                <span className="text-xl font-bold">
//                  Consultations médicales en ligne
//                </span>
//                <p className="px-4">
//                  Évaluations préliminaires et second avis médicaux avec nos
//                  médecins, en toute confidentialité et simplicité.
//                </p>
//              </li>
//            </ul>
//          </div>
//        ),
//      },
//      {
//        id: "fourniture",
//        title: "Fourniture de Matériel Médical et de Laboratoire",
//        icon: "fi fi-rr-stethoscope",
//        content: (
//          <div className="space-y-8">
//            <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl">
//              Fourniture de Matériel Médical et de Laboratoire
//            </h1>
//            <p className="md:text-justify">
//              Nous mettons à la disposition des établissements de santé publics et
//              privés une large gamme d’équipements médicaux et de dispositifs de
//              diagnostic, avec des standards de qualité internationale.
//            </p>
//            <p className="md:text-justify">
//              Grâce à nos partenaires stratégiques et notre expertise terrain, nous
//              assurons une chaîne d’approvisionnement fluide et maîtrisée, de la
//              commande à la livraison.
//            </p>
//            <ul className="flex flex-col space-y-8">
//              <li>
//                <span className="text-xl font-bold">
//                  Tests de Diagnostic de Laboratoire
//                </span>
//                <ul className="list-disc px-12">
//                  <li>Tests des maladies infectieuse</li>
//                  <li>Tests COVID-19</li>
//                  <li>Maladies sexuellement transmissibles</li>
//                  <li>Tests des maladies tropicales</li>
//                  <li>Marqueurs tumoraux</li>
//                  <li>Tests de grossesse</li>
//                  <li>Marqueurs cardiaques</li>
//                  <li>Groupage sanguin</li>
//                </ul>
//              </li>
//              <li>
//                <span className="text-xl font-bold">
//                  Fournitures et équipements complémentaires
//                </span>
//                <ul className="list-disc px-12">
//                  <li>
//                    Équipements pour laboratoires d’analyses médicales
//                  </li>
//                  <li>Dispositifs de dépistage rapide (RDT)</li>
//                  <li>Kits de prélèvement, consommables et réactifs</li>
//                  <li>
//                    Matériel hospitalier : moniteurs, lits médicaux,
//                    pousse-seringues, etc.
//                  </li>
//                  <li>
//                    Appareils de diagnostic : échographes, ECG, dopplers,
//                    autoclaves etc
//                  </li>
//                </ul>
//              </li>
//            </ul>
//            <div className="flex flex-col space-y-4">
//              <div className="flex space-x-2 items-center">
//                <i className="fa-solid fa-earth-africa text-2xl"></i>
//                <h1 className="text-xl font-bold">Nos engagements</h1>
//              </div>
//              <div className="flex flex-col space-y-4 px-2 lg:px-8">
//                <div className="flex space-x-2 items-center">
//                  <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                  <span>
//                    Produits certifiés CE, ISO et validés cliniquement.
//                  </span>
//                </div>
//                <div className="flex space-x-2 items-center">
//                  <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                  <span>
//                    Livraison internationale avec accompagnement logistique.
//                  </span>
//                </div>
//                <div className="flex space-x-2 items-center">
//                  <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                  <span>
//                    Conseil technique pour le choix des équipements adaptés à vos
//                    besoins.
//                  </span>
//                </div>
//                <div className="flex space-x-2 items-center">
//                  <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                  <span>
//                    Service après-vente et possibilité de formation à
//                    l’utilisation du matériel.
//                  </span>
//                </div>
//              </div>
//            </div>
//          </div>
//        ),
//      },
//       {
//          id: "contruction",
//          title: "Matériel de Construction & Finition",
//          icon: "fi fi-ss-hard-hat",
//          content: (
//          <div className="space-y-8">
//            <h1 className="font-bold text-2xl">
//              Aucun contenu pour le moment
//            </h1>
//          </div>
//          )
//       },
//       {
//          id: "voyage",
//          title: "Voyage d'affaires en Turquie",
//          icon: "fi fi-ss-plane",
//          content: (
//          <div className="space-y-8">
//            <h1 className="font-bold text-2xl">
//              Aucun contenu pour le moment
//            </h1>
//          </div>
//          )
//       },

//      {
//        id: "afrique",
//        title: "Projets en Afrique",
//        icon: "fi fi-rr-earth-africa",
//        content: (
//          <div className="space-y-8">
//            <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl">
//              Projets en Afrique
//            </h1>
//            <p>Une vision claire, des actions concrètes</p>
//            <p className="md:text-justify">
//              Notre présence en Afrique ne se limite pas à l’exportation de
//              services médicaux. Nous développons une dynamique régionale forte,
//              articulée autour de projets structurants, durables et à fort impact
//              social.
//            </p>
//            <ul className="flex flex-col space-y-8">
//              <li>
//                <span className="text-xl font-bold">
//                  1. Déploiement de corridors de santé Turquie – Afrique
//                </span>
//                <ul className="list-disc px-12">
//                  <li>l’évacuation sanitaire rapide et encadrée</li>
//                  <li>
//                    l’accès direct aux traitements spécialisés (oncologie,
//                    cardiologie, fertilité, greffes, etc.)
//                  </li>
//                  <li>
//                    la continuité des soins à distance via la télémédecine.
//                  </li>
//                </ul>
//              </li>
//              <li>
//                <span className="text-xl font-bold">
//                  2. Développement d’infrastructures médicales locales
//                </span>
//                <ul className="list-disc px-12">
//                  <li>
//                    accompagnons la création de centres de soins spécialisés
//                    (fertilité, diagnostics, chirurgie ambulatoire)
//                  </li>
//                  <li>proposons des modèles hospitaliers clé en main</li>
//                  <li>
//                    facilitons l’acquisition de matériel médical de pointe adapté
//                    aux réalités locales.
//                  </li>
//                </ul>
//              </li>
//              <li>
//                <span className="text-xl font-bold">
//                  3. Renforcement des compétences médicales
//                </span>
//                <ul className="list-disc px-12">
//                  <li>
//                    sessions de formation continue pour professionnels de santé
//                    africains en Turquie ou en ligne
//                  </li>
//                  <li>stages pratiques en milieu hospitalier</li>
//                  <li>développement de partenariats académiques.</li>
//                </ul>
//              </li>
//              <li>
//                <span className="text-xl font-bold">
//                  4. Approvisionnement en matériel de diagnostic et dispositifs
//                  médicaux
//                </span>
//                <ul className="list-disc px-12">
//                  <li>tests infectieux, cardiaques, tumoraux, FIV, etc.</li>
//                  <li>dispositifs de diagnostic rapide</li>
//                  <li>
//                    équipements hospitaliers (moniteurs, respirateurs, blocs
//                    opératoires mobiles…)
//                  </li>
//                </ul>
//              </li>
//            </ul>
//            <div className="flex flex-col space-y-4">
//              <div className="flex space-x-2 items-center">
//                <i className="fa-solid fa-earth-africa text-2xl"></i>
//                <h1 className="text-xl font-bold">Notre approche en Afrique</h1>
//              </div>
//              <div className="flex flex-col space-y-4 px-2 lg:px-8">
//                <div className="flex space-x-2 items-center">
//                  <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                  <span>
//                    <strong>Orientation patient :</strong> chaque projet est conçu
//                    pour améliorer la qualité et la rapidité de prise en charge.
//                  </span>
//                </div>
//                <div className="flex space-x-2 items-center">
//                  <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                  <span>
//                    <strong>Modèle collaboratif :</strong> nous travaillons main
//                    dans la main avec des partenaires africains locaux.
//                  </span>
//                </div>
//                <div className="flex space-x-2 items-center">
//                  <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                  <span>
//                    <strong>Adaptation aux réalités du terrain :</strong>{" "}
//                    solutions médicales personnalisées selon les besoins et les
//                    contextes.
//                  </span>
//                </div>
//                <div className="flex space-x-2 items-center">
//                  <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                  <span>
//                    <strong>Impact mesurable :</strong> notre action se traduit en
//                    vies améliorées, en capacités renforcées, en systèmes de santé
//                    plus solides.
//                  </span>
//                </div>
//              </div>
//            </div>
//            <footer className="pb-8">
//              <div className="text-center">
//                <h1 className="text-gray-500 font-bold">
//                  Ensemble, faisons progresser la santé en Afrique.
//                </h1>
//              </div>
//            </footer>
//          </div>
//        ),
//      },
//    ];

//    return (
//      <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-4">
//        <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl text-center">Nos services</h1>
//        <p className="text-center text-gray-500 mb-6">
//          Nous vous proposons de nombreux services pour satisfaire vos besoins et nous vous accompagnons à la réalisation de vos projets.
//        </p>

//        {services.map((service) => (
//          <div
//            key={service.id}
//            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
//          >
//            {/* Header */}
//            <button
//              onClick={() => toggle(service.id)}
//              className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-[#181c31] dark:hover:bg-[#1c2136] hover:bg-gray-100"
//            >
//              <div className="flex items-center space-x-3">
//                <i className={`${service.icon} text-xl icon-circle`} />
//                <span className="font-semibold text-start">{service.title}</span>
//              </div>
//              <i
//                className={`fa-solid ${
//                  openIds.includes(service.id) ? "fa-minus" : "fa-plus"
//                } text-[#006bff] text-xl`}
//              />
//            </button>

//            {/* Content */}
//            <div
//              className={`transition-all duration-300 ease-in-out ${
//                openIds.includes(service.id) ? "max-h-auto p-4" : "max-h-0 p-0"
//              } overflow-hidden bg-white dark:bg-[#1c2136]`}
//            >
//              {service.content}
//            </div>
//          </div>
//        ))}
//      </div>
//    );
//  }


// import { Accordion, AccordionItem } from "@heroui/react";

// interface Service {
//   id: string;
//   title: string;
//   icon: string;
//   content: React.ReactNode;
// }

// export default function Services() {
//   const services: Service[] = [
//     {
//       id: "sanitaire",
//       title: "Services sanitaires & Tourisme médical",
//       icon: "fi fi-ss-hand-holding-medical",
//       content: (
//         <div className="space-y-8">
//           <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl">
//             Services Sanitaires & Tourisme Médical
//           </h1>
//           <p className="text-justify">
//             Chez Turkey Healthcare Group et Istanbul Infertility Center, nous
//             offrons une prise en charge médicale intégrée et personnalisée pour
//             les patients internationaux, en combinant soins de santé de haut
//             niveau, accompagnement sur mesure.
//           </p>
//           <p className="text-justify">
//             Notre objectif est de rendre l’excellence médicale turque accessible
//             à tous, dans un cadre sécurisé, organisé et rassurant.
//           </p>
//           <h2 className="text-3xl font-bold max-lg:text-2xl">
//             Nos services médicaux
//           </h2>
//           <ul className="flex flex-col space-y-8 list-disc px-4">
//             <li>
//               <span className="text-xl font-bold">
//                 Consultations médicales internationales
//               </span>
//               <p className="px-4">
//                 Accès à des spécialistes de renommée internationale pour des
//                 diagnostics et des plans de traitement précis.
//               </p>
//             </li>
//             <li>
//               <span className="text-xl font-bold">Suivi médical à distance</span>
//               <p className="px-4">
//                 Monitoring médical continu des patients internationaux, même
//                 après leur retour dans leur pays.
//               </p>
//             </li>
//             <li>
//               <span className="text-xl font-bold">
//                 FIV & traitement de l’infertilité
//               </span>
//               <p className="px-4">
//                 Programmes complets de procréation médicalement assistée,
//                 adaptés à chaque situation, avec des taux de réussite élevés.
//               </p>
//             </li>
//             <li>
//               <span className="text-xl font-bold">
//                 Greffe capillaire et chirurgie esthétique
//               </span>
//               <p className="px-4">
//                 Soins réalisés dans des cliniques certifiées, avec des
//                 chirurgiens expérimentés et des technologies de pointe.
//               </p>
//             </li>
//             <li>
//               <span className="text-xl font-bold">
//                 Prise en charge dans les hôpitaux spécialisés
//               </span>
//               <p className="px-4">
//                 Coordination rapide et efficace pour une prise en charge des
//                 patients dans les établissements les mieux adaptés à leur
//                 pathologie.
//               </p>
//             </li>
//             <li>
//               <span className="text-xl font-bold">
//                 Consultations médicales en ligne
//               </span>
//               <p className="px-4">
//                 Évaluations préliminaires et second avis médicaux avec nos
//                 médecins, en toute confidentialité et simplicité.
//               </p>
//             </li>
//           </ul>
//         </div>
//       ),
//     },
//     {
//       id: "fourniture",
//       title: "Fourniture de Matériel Médical et de Laboratoire",
//       icon: "fi fi-rr-stethoscope",
//       content: (
//         <div className="space-y-8">
//           <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl">
//             Fourniture de Matériel Médical et de Laboratoire
//           </h1>
//           <p className="text-justify">
//              Nous mettons à la disposition des établissements de santé publics et
//              privés une large gamme d’équipements médicaux et de dispositifs de
//              diagnostic, avec des standards de qualité internationale.
//            </p>
//            <p className="text-justify">
//              Grâce à nos partenaires stratégiques et notre expertise terrain, nous
//              assurons une chaîne d’approvisionnement fluide et maîtrisée, de la
//              commande à la livraison.
//            </p>
//            <ul className="flex flex-col space-y-8">
//              <li>
//                <span className="text-xl font-bold">
//                  Tests de Diagnostic de Laboratoire
//                </span>
//                <ul className="list-disc px-12">
//                  <li>Tests des maladies infectieuse</li>
//                  <li>Tests COVID-19</li>
//                  <li>Maladies sexuellement transmissibles</li>
//                  <li>Tests des maladies tropicales</li>
//                  <li>Marqueurs tumoraux</li>
//                  <li>Tests de grossesse</li>
//                  <li>Marqueurs cardiaques</li>
//                  <li>Groupage sanguin</li>
//                </ul>
//              </li>
//              <li>
//                <span className="text-xl font-bold">
//                  Fournitures et équipements complémentaires
//                </span>
//                <ul className="list-disc px-12">
//                  <li>
//                    Équipements pour laboratoires d’analyses médicales
//                  </li>
//                  <li>Dispositifs de dépistage rapide (RDT)</li>
//                  <li>Kits de prélèvement, consommables et réactifs</li>
//                  <li>
//                    Matériel hospitalier : moniteurs, lits médicaux,
//                    pousse-seringues, etc.
//                  </li>
//                  <li>
//                    Appareils de diagnostic : échographes, ECG, dopplers,
//                    autoclaves etc
//                  </li>
//                </ul>
//              </li>
//            </ul>
//            <div className="flex flex-col space-y-4">
//              <div className="flex space-x-2 items-center">
//                <i className="fa-solid fa-earth-africa text-2xl"></i>
//                <h1 className="text-xl font-bold">Nos engagements</h1>
//              </div>
//              <div className="flex flex-col space-y-4 px-2 lg:px-8">
//                <div className="flex space-x-2 items-center">
//                  <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                  <span>
//                    Produits certifiés CE, ISO et validés cliniquement.
//                  </span>
//                </div>
//                <div className="flex space-x-2 items-center">
//                  <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                  <span>
//                    Livraison internationale avec accompagnement logistique.
//                  </span>
//                </div>
//                <div className="flex space-x-2 items-center">
//                  <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                  <span>
//                    Conseil technique pour le choix des équipements adaptés à vos
//                    besoins.
//                  </span>
//                </div>
//                <div className="flex space-x-2 items-center">
//                  <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                  <span>
//                    Service après-vente et possibilité de formation à
//                    l’utilisation du matériel.
//                  </span>
//                </div>
//              </div>
//            </div>
//          </div>
//       ),
//     },
//     {
//       id: "contruction",
//       title: "Matériel de Construction & Finition",
//       icon: "fi fi-ss-hard-hat",
//       content: (
//         <div className="space-y-8">
//           <h1 className="font-bold text-2xl">Aucun contenu pour le moment</h1>
//         </div>
//       ),
//     },
//     {
//       id: "voyage",
//       title: "Voyage d'affaires en Turquie",
//       icon: "fi fi-ss-plane",
//       content: (
//         <div className="space-y-8">
//           <h1 className="font-bold text-2xl">Aucun contenu pour le moment</h1>
//         </div>
//       ),
//     },
//     {
//       id: "afrique",
//       title: "Projets en Afrique",
//       icon: "fi fi-rr-earth-africa",
//       content: (
//         <div className="space-y-8">
//           <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl">
//             Projets en Afrique
//           </h1>
//           <p>Une vision claire, des actions concrètes</p>
//           <p className="text-justify">
//             Notre présence en Afrique ne se limite pas à l’exportation de
//             services médicaux. Nous développons une dynamique régionale forte,
//             articulée autour de projets structurants, durables et à fort impact
//             social.
//           </p>
//           <ul className="flex flex-col space-y-8">
//             <li>
//               <span className="text-xl font-bold">
//                 1. Déploiement de corridors de santé Turquie – Afrique
//               </span>
//               <ul className="list-disc px-12">
//                 <li>l’évacuation sanitaire rapide et encadrée</li>
//                 <li>
//                   l’accès direct aux traitements spécialisés (oncologie,
//                   cardiologie, fertilité, greffes, etc.)
//                 </li>
//                 <li>
//                   la continuité des soins à distance via la télémédecine.
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <span className="text-xl font-bold">
//                 2. Développement d’infrastructures médicales locales
//               </span>
//               <ul className="list-disc px-12">
//                 <li>
//                   accompagnons la création de centres de soins spécialisés
//                   (fertilité, diagnostics, chirurgie ambulatoire)
//                 </li>
//                 <li>proposons des modèles hospitaliers clé en main</li>
//                 <li>
//                   facilitons l’acquisition de matériel médical de pointe adapté
//                   aux réalités locales.
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <span className="text-xl font-bold">
//                 3. Renforcement des compétences médicales
//               </span>
//               <ul className="list-disc px-12">
//                 <li>
//                   sessions de formation continue pour professionnels de santé
//                   africains en Turquie ou en ligne
//                 </li>
//                 <li>stages pratiques en milieu hospitalier</li>
//                 <li>développement de partenariats académiques.</li>
//               </ul>
//             </li>
//             <li>
//               <span className="text-xl font-bold">
//                 4. Approvisionnement en matériel de diagnostic et dispositifs
//                 médicaux
//               </span>
//               <ul className="list-disc px-12">
//                 <li>tests infectieux, cardiaques, tumoraux, FIV, etc.</li>
//                 <li>dispositifs de diagnostic rapide</li>
//                 <li>
//                   équipements hospitaliers (moniteurs, respirateurs, blocs
//                   opératoires mobiles…)
//                 </li>
//               </ul>
//             </li>
//           </ul>
//           <div className="flex flex-col space-y-4">
//             <div className="flex space-x-2 items-center">
//               <i className="fa-solid fa-earth-africa text-2xl"></i>
//               <h1 className="text-xl font-bold">Notre approche en Afrique</h1>
//             </div>
//             <div className="flex flex-col space-y-4 px-2 lg:px-8">
//               <div className="flex space-x-2 items-center">
//                 <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                 <span>
//                   <strong>Orientation patient :</strong> chaque projet est conçu
//                   pour améliorer la qualité et la rapidité de prise en charge.
//                 </span>
//               </div>
//               <div className="flex space-x-2 items-center">
//                 <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                 <span>
//                   <strong>Modèle collaboratif :</strong> nous travaillons main
//                   dans la main avec des partenaires africains locaux.
//                 </span>
//               </div>
//               <div className="flex space-x-2 items-center">
//                 <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                 <span>
//                   <strong>Adaptation aux réalités du terrain :</strong>{" "}
//                   solutions médicales personnalisées selon les besoins et les
//                   contextes.
//                 </span>
//               </div>
//               <div className="flex space-x-2 items-center">
//                 <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
//                 <span>
//                   <strong>Impact mesurable :</strong> notre action se traduit en
//                   vies améliorées, en capacités renforcées, en systèmes de santé
//                   plus solides.
//                 </span>
//               </div>
//             </div>
//           </div>
//           <footer className="pb-8">
//             <div className="text-center">
//               <h1 className="text-gray-500 font-bold">
//                 Ensemble, faisons progresser la santé en Afrique.
//               </h1>
//             </div>
//           </footer>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="w-full lg:px-24">
//       <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl text-center">
//         Nos services
//       </h1>
//       <p className="text-center text-gray-500 mb-6">
//         Nous vous proposons de nombreux services pour satisfaire vos besoins et
//         nous vous accompagnons à la réalisation de vos projets.
//       </p>

//       <Accordion
//         selectionMode="multiple"
//         className="space-y-4"
//         itemClasses={{
//           base: "border border-gray-200 rounded-lg overflow-hidden shadow-sm",
//           title:
//             "w-full flex items-center space-x-3 font-semibold text-base dark:bg-[#181c31] px-4",
//           content: "bg-white dark:bg-[#1c2136] p-4",
       
//         }}
//       >
//         {services.map((service) => (
//           <AccordionItem
//             key={service.id}
//             aria-label={service.title}
//             title={
//               <div className="w-full flex justify-between items-center">
//                 <div className="flex items-center space-x-3">
//                 <i className={`${service.icon} text-xl icon-circle`} />
//                 <span>{service.title}</span>
//               </div>
            
//                 {/* <div className="relative flex">
//                     <i className="fa-solid fa-circle-check text-green-500 text-xl absolute"></i>
//                 </div> */}
//               </div>

//             }
//             className="border-b w-full"
//           >
//             {service.content}
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </div>
//   );
// }

