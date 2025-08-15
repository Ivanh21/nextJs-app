import Image from "next/image";

export default function Materiel() {
  
  return (
    <>
      <div className="flex">
        <div className="dark:bg-[#1c2136] w-[30%] h-auto rounded-lg flex flex-col space-y-4 menu-item">

        <div className="relative h-72 flex items-center justify-center img-project">
              <Image 
              layout="fill"
              src="/images/project/projet-01.jpg"
              alt="Projet image"
              className="object-cover img-project"
              />
        </div>

        <div className="flex flex-col space-y-4 p-4"> 
          <p className="text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <div className="flex justify-end">
            <button className="bg-[#006bff] p-4 rounded-full w-[120px] text-white">Read More</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
