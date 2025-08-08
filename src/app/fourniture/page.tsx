import Image from "next/image";
import Footer from "../components/footer";
import Link from "next/link";



export default function Sanitaire(){
    return(
        <div className="flex flex-col py-8">
        
        <div className="px-24">
            <Link href="/" className="w-[10%] p-4 border border-[#006bff] bg-[#006bff] text-white rounded-full text-center flex justify-center">Retour</Link>
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
                        <div className="flex flex-col space-y-4 px-8">
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

        <footer className="pb-8">
            <div className="text-center">
                <h1 className="text-gray-500 font-bold">Ensemble, faisons progresser la santé en Afrique.</h1>
            </div>
        </footer>

        <div className="border border-[#ccc]"></div>

        </div>

    );
}