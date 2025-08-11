import { useState } from "react";

export default function Services(){
    const [sanitaire, setSanitaire] = useState(false);
    const [fourniture, setFourniture] = useState(false);
    const [afrique, setAfrique] = useState(false);

    return(
        <>
        <div className="flex justify-center items-center">
          <div className="flex flex-col space-y-4 px-2 max-lg:px-4">
            <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl text-center">Nos services</h1>
            <p className="text-center text-sm text-gray-500">Nous vous proposons de nombreux services pour satisfaire vos besoins et nous vous accompagnons à la réalisation de vos projets.</p>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center space-y-4 px-4 lg:px-24">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <div className="w-full menu-item rounded-lg p-4 flex justify-between items-center cursor-pointer">
             
              <div className="flex space-x-4 flex items-center">
                <i className="fi fi-ss-hand-holding-medical icon-circle"></i>
              <div className="flex flex-col space-y-6">
                <span className="text-lg font-bold ">Services sanitaires & Tourisme médical</span>
              </div>
              </div>
                {!sanitaire && (
                  <i className="fa-solid fa-plus font-extrabold text-4xl text-[#006bff]" onClick={() =>setSanitaire(!sanitaire)}></i>
                ) }
                {sanitaire && (
                  <i className="fa-solid fa-minus font-extrabold text-4xl text-[#006bff]" onClick={() =>setSanitaire(!sanitaire)}></i>
                ) }
              </div>

              { sanitaire &&(
                 <div className="flex flex-col">        
                        <main className="px-4 lg:px-24">
                            <div className="w-full flex flex-col justify-between space-y-8 h-full">
                        
                            <div className=" py-16">
                            
                                <div className="flex flex-col space-y-8">
                                    <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl">Services Sanitaires & Tourisme Médical</h1>
                                    <p>Chez Turkey Healthcare Group et Istanbul Infertility Center, nous offrons une prise en charge médicale intégrée et personnalisée pour les patients internationaux, en combinant soins de santé de haut niveau, accompagnement sur mesure.</p>
                                    <p className="text-justify">Notre objectif est de rendre l’excellence médicale turque accessible à tous, dans un cadre sécurisé, organisé et rassurant.</p>
                                    <h2 className="text-3xl font-bold max-lg:text-2xl">Nos services médicaux</h2>
                                    <ul className="flex flex-col space-y-8 list-disc">
                                        <li className="flex flex-col space-y-2">
                                            <span className="text-xl font-bold">Consultations médicales internationales</span>
                                            <p className="px-4">Accès à des spécialistes de renommée internationale pour des diagnostics et des plans de traitement précis.</p>
                                            {/* <ul className="list-disc px-12">
                                                <li>l’évacuation sanitaire rapide et encadrée</li>
                                                <li>l’accès direct aux traitements spécialisés (oncologie, cardiologie, fertilité, greffes, etc.)</li>
                                                <li>la continuité des soins à distance via la télémédecine.</li>
                                            </ul> */}
                                        </li>
                
                                        <li className="flex flex-col space-y-2">
                                            <span className="text-xl font-bold">Suivi médical à distance</span>
                                            <p className="px-4">Monitoring médical continu des patients internationaux, même après leur retour dans leur pays.</p>
                                            {/* <ul className="list-disc px-12">
                                               <li>accompagnons la création de centres de soins spécialisés (fertilité, diagnostics, chirurgie ambulatoire)</li>
                                                <li>proposons des modèles hospitaliers clé en main</li>
                                                <li>facilitons l’acquisition de matériel médical de pointe adapté aux réalités locales.</li>
                                            </ul> */}
                                        </li>
                
                                        <li className="flex flex-col space-y-2">
                                            <span className="text-xl font-bold">FIV & traitement de l’infertilité</span>
                                            <p className="px-4">Programmes complets de procréation médicalement assistée, adaptés à chaque situation, avec des taux de réussite élevés.</p>
                                            {/* <ul className="list-disc px-12">
                                                <li>sessions de formation continue pour professionnels de santé africains en Turquie ou en ligne</li>
                                                <li>stages pratiques en milieu hospitalier</li>
                                                <li>développement de partenariats académiques.</li>
                                            </ul> */}
                                        </li>
                
                                         <li className="flex flex-col space-y-2">
                                            <span className="text-xl font-bold">Greffe capillaire et chirurgie esthétique</span>
                                            <p className="px-4">Soins réalisés dans des cliniques certifiées, avec des chirurgiens expérimentés et des technologies de pointe.</p>
                                            {/* <ul className="list-disc px-12">
                                                <li>tests infectieux, cardiaques, tumoraux, FIV, etc.</li>
                                                <li>dispositifs de diagnostic rapide,</li>
                                                <li>équipements hospitaliers (moniteurs, respirateurs, blocs opératoires mobiles…).</li>
                                            </ul> */}
                                        </li>
                
                                         <li className="flex flex-col space-y-2">
                                            <span className="text-xl font-bold">Prise en charge dans les hôpitaux spécialisés</span>
                                            <p className="px-4">Coordination rapide et efficace pour une prise en charge des patients dans les établissements les mieux adaptés à leur pathologie.</p>
                                            {/* <ul className="list-disc px-12">
                                                <li>tests infectieux, cardiaques, tumoraux, FIV, etc.</li>
                                                <li>dispositifs de diagnostic rapide,</li>
                                                <li>équipements hospitaliers (moniteurs, respirateurs, blocs opératoires mobiles…).</li>
                                            </ul> */}
                                        </li>
                
                                         <li className="flex flex-col space-y-2">
                                            <span className="text-xl font-bold">Consultations médicales en ligne</span>
                                            <p className="px-4">Évaluations préliminaires et second avis médicaux avec nos médecins, en toute confidentialité et simplicité.</p>
                                            {/* <ul className="list-disc px-12">
                                                <li>tests infectieux, cardiaques, tumoraux, FIV, etc.</li>
                                                <li>dispositifs de diagnostic rapide,</li>
                                                <li>équipements hospitaliers (moniteurs, respirateurs, blocs opératoires mobiles…).</li>
                                            </ul> */}
                                        </li>
                                    </ul>
                
                                </div>
                
                            </div>
                        </div>
                        </main>
                
                        </div>
                
              )

              }

            <div className="w-full menu-item rounded-lg p-4 justify-between flex items-center cursor-pointer">
              <div className="space-x-4 flex items-center">
                <i className="fi fi-rr-stethoscope icon-circle"></i>
                <div className="flex flex-col space-y-6">
                  <span className="text-lg font-bold">Fourniture de Matériel Médical et de Laboratoire</span>
                </div>
              </div>
                {!fourniture && (
                  <i className="fa-solid fa-plus font-extrabold text-4xl text-[#006bff]" onClick={() =>setFourniture(!fourniture)}></i>
                ) }
                {fourniture && (
                  <i className="fa-solid fa-minus font-extrabold text-4xl text-[#006bff]" onClick={() =>setFourniture(!fourniture)}></i>
                ) }
            </div>

            {fourniture && (
             <div className="flex flex-col">
            
                    <main className="px-4 lg:px-24">
                        <div className="w-full flex flex-col justify-between space-y-8 h-full"> 
            
                        <div className=" py-16">
                        
                            <div className="flex flex-col space-y-8">
                                <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl">Fourniture de Matériel Médical et de Laboratoire</h1>
                                <p className="text-justify">Nous mettons à la disposition des établissements de santé publics et privés une large gamme d’équipements médicaux et de dispositifs de diagnostic, avec des standards de qualité internationale. Notre objectif est de garantir l’accès à des produits fiables, performants et conformes aux normes en vigueur pour renforcer les capacités des structures sanitaires en Afrique.</p>
                                <p className="text-justify">Grâce à nos partenaires stratégiques et notre expertise terrain, nous assurons une chaîne d’approvisionnement fluide et maîtrisée, de la commande à la livraison.</p>
                                <ul className="flex flex-col space-y-8">
                                    <li className="flex flex-col space-y-2">
                                        <span className="text-xl font-bold">Tests de Diagnostic de Laboratoire</span>
                                        <ul className="list-disc px-12">
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
            
                                    <li className="flex flex-col space-y-2">
                                        <span className="text-xl font-bold">Fournitures et équipements complémentaires</span>
                                        <ul className="list-disc px-12">
                                           <li>Équipements pour laboratoires d’analyses médicales</li>
                                            <li>Dispositifs de dépistage rapide (RDT)</li>
                                            <li>Kits de prélèvement, consommables et réactifs</li>
                                            <li>Matériel hospitalier : moniteurs, lits médicaux, pousse-seringues, etc.</li>
                                            <li>Appareils de diagnostic : échographes, ECG, dopplers, autoclaves etc</li>
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
                                            <span>Produits certifiés CE, ISO et validés cliniquement.</span>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                                            <span>Livraison internationale avec accompagnement logistique.</span>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                                            <span>Conseil technique pour le choix des équipements adaptés à vos besoins.</span>
                                        </div>
                                         <div className="flex space-x-2 items-center">
                                            <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                                            <span>Service après-vente et possibilité de formation à l’utilisation du matériel.</span>
                                        </div>
                                    </div>
                                </div>
            
                            </div>
            
                        </div>
                    </div>
                    </main>
            
                    </div>
               
            )

            }

            <div className="w-full menu-item rounded-lg p-4 justify-between flex items-center cursor-pointer">
              <div className="space-x-4 flex items-center">
                <i className="fi fi-ss-hard-hat icon-circle"></i>
              <div className="flex flex-col space-y-6">
                <span className="text-lg font-bold">Matériel de Construction & Finition</span>
              </div>
              </div>
              <i className="fa-solid fa-plus font-extrabold text-4xl text-[#006bff]"></i>
            </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <div className="w-full menu-item rounded-lg p-4 space-x-4 flex justify-between items-center cursor-pointer">
              <div className="space-x-4 flex items-center">
                <i className="fi fi-ss-plane icon-circle"></i>
              <div className="flex flex-col space-y-6">
                <span className="text-lg font-bold">Voyages d’Affaires en Turquie</span>
              </div>
              </div>
              <i className="fa-solid fa-plus font-extrabold text-4xl text-[#006bff]"></i>
              </div>

            <div className="w-full menu-item  rounded-lg p-4 space-x-4 flex justify-between items-center cursor-pointer">
              <div className="space-x-4 flex items-center">
                <i className="fi fi-rr-earth-africa icon-circle"></i>
              <div className="flex flex-col space-y-6">
                <span className="text-lg font-bold">Projets en Afrique</span>
              </div>
              </div>
                {!afrique && (
                  <i className="fa-solid fa-plus font-extrabold text-4xl text-[#006bff]" onClick={() =>setAfrique(!afrique)}></i>
                ) }
                {afrique && (
                  <i className="fa-solid fa-minus font-extrabold text-4xl text-[#006bff]" onClick={() =>setAfrique(!afrique)}></i>
                ) }
            </div>

            {afrique && (
                <div className="flex flex-col">
                
                        <main className="px-4 lg:px-24">
                            <div className="w-full flex flex-col justify-between space-y-8 h-full">
                           
                            <div className=" py-16">
                            
                                <div className="flex flex-col space-y-8">
                                    <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl">Projets en Afrique</h1>
                                    <p>Une vision claire, des actions concrètes</p>
                                    <p className="text-justify">Notre présence en Afrique ne se limite pas à l’exportation de services médicaux. Nous développons une dynamique régionale forte, articulée autour de projets structurants, durables et à fort impact social. Grâce à notre expertise combinée dans la santé, la logistique médicale et la coopération internationale, nous menons une série d’initiatives pour renforcer l’accès aux soins de qualité sur le continent.</p>
                                    <ul className="flex flex-col space-y-8">
                                        <li className="flex flex-col space-y-2">
                                            <span className="text-xl font-bold">1. Déploiement de corridors de santé Turquie – Afrique</span>
                                            <p>Nous mettons en place des passerelles médicales sûres et organisées entre plusieurs pays africains et les plus grands hôpitaux de Turquie. Ces corridors permettent :</p>
                                            <ul className="list-disc px-12">
                                                <li>l’évacuation sanitaire rapide et encadrée</li>
                                                <li>l’accès direct aux traitements spécialisés (oncologie, cardiologie, fertilité, greffes, etc.)</li>
                                                <li>la continuité des soins à distance via la télémédecine.</li>
                                            </ul>
                                        </li>
                
                                        <li className="flex flex-col space-y-2">
                                            <span className="text-xl font-bold">2. Développement d’infrastructures médicales locales</span>
                                            <p>En collaboration avec des partenaires africains du secteur privé, nous :</p>
                                            <ul className="list-disc px-12">
                                               <li>accompagnons la création de centres de soins spécialisés (fertilité, diagnostics, chirurgie ambulatoire)</li>
                                                <li>proposons des modèles hospitaliers clé en main</li>
                                                <li>facilitons l’acquisition de matériel médical de pointe adapté aux réalités locales.</li>
                                            </ul>
                                        </li>
                
                                        <li className="flex flex-col space-y-2">
                                            <span className="text-xl font-bold">3. Renforcement des compétences médicales</span>
                                            <p>Nos projets comprennent également des volets de formation, transfert de technologie et mentoring :</p>
                                            <ul className="list-disc px-12">
                                                <li>sessions de formation continue pour professionnels de santé africains en Turquie ou en ligne</li>
                                                <li>stages pratiques en milieu hospitalier</li>
                                                <li>développement de partenariats académiques.</li>
                                            </ul>
                                        </li>
                
                                         <li className="flex flex-col space-y-2">
                                            <span className="text-xl font-bold">4. Approvisionnement en matériel de diagnostic et dispositifs médicaux</span>
                                            <p>Nous distribuons en Afrique une gamme complète de tests de laboratoire et équipements médicaux certifiés :</p>
                                            <ul className="list-disc px-12">
                                                <li>tests infectieux, cardiaques, tumoraux, FIV, etc.</li>
                                                <li>dispositifs de diagnostic rapide,</li>
                                                <li>équipements hospitaliers (moniteurs, respirateurs, blocs opératoires mobiles…).</li>
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
                                                <span><strong>Orientation patient :</strong> chaque projet est conçu pour améliorer la qualité et la rapidité de prise en charge.</span>
                                            </div>
                                            <div className="flex space-x-2 items-center">
                                                <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                                                <span><strong>Modèle collaboratif :</strong> nous travaillons main dans la main avec des partenaires africains locaux.</span>
                                            </div>
                                            <div className="flex space-x-2 items-center">
                                                <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                                                <span><strong>Adaptation aux réalités du terrain :</strong> solutions médicales personnalisées selon les besoins et les contextes.</span>
                                            </div>
                                             <div className="flex space-x-2 items-center">
                                                <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                                                <span><strong>Impact mesurable :</strong> notre action se traduit en vies améliorées, en capacités renforcées, en systèmes de santé plus solides.</span>
                                            </div>
                                        </div>
                                    </div>
                
                                </div>
                
                            </div>
                        </div>
                        </main>
                
                        <footer className="pb-8">
                            <div className="text-center">
                                <h1 className="text-gray-500 font-bold">Ensemble, faisons progresser la santé en Afrique.</h1>
                            </div>
                        </footer>
                
                        </div>
                
            )

            }

            </div>
        </div>
        </>
    );
}