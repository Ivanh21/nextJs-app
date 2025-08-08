import Image from "next/image";
import Footer from "../components/footer";



export default function Afrique(){
    return(
        <div className="flex flex-col py-8">
        
        <div className="px-24">
            <a href="/" className="w-[10%] p-4 border border-[#006bff] bg-[#006bff] text-white rounded-full text-center flex justify-center">Retour</a>
        </div>

        <main>
            <div className="w-full flex flex-col justify-between space-y-8 h-full">
            <div className="relative w-full h-[500px]">
                <Image
                src="/images/project/projet-01.jpeg"
                layout="fill"
                objectFit="cover"
                alt="Projet afrique 1"
                className="mt-12 px-24 rounded-[8%]"
                />
            </div>

            <div className="px-24 py-16">
            
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
                        <div className="flex flex-col space-y-4 px-8">
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

        <div className="border border-[#ccc]"></div>

        </div>

    );
}