"use client"
import Image from "next/image";
import { Information } from "@/types/Information";
import { useEffect, useState } from "react";
import PopUp from "@/components/PopUp";


export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [dati,setDati] = useState<Information[]>([]);
    // Stato per l'attività selezionata
    const [selectedPerson, setSelectedPerson] = useState<Information | null>(null);

  const openModal = (information: Information) => {
    setSelectedPerson(information); // Imposta l'attività selezionata
    setIsOpen(true); // Apre il modal
  };
  const closeModal = () => setIsOpen(false);


  useEffect(() => {
    fetch("/InfoTeam.json") // Percorso relativo dalla directory public
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Errore nel caricamento dei dati: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setDati(data))
      .catch((error) => console.error("Errore nel caricamento dei dati:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>

      </div>
      <div className="flex flex-col justify-center items-center gap-8" >
          <h1 className="text-3xl"><strong>TEAM</strong></h1>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
          {dati.map((persona) => (
            <div 
            key={persona.id} 
            className="flex flex-col items-center w-80 transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-md"
            onClick={() => openModal(persona)} // Apre il modal al clic
            >
              <div className="relative w-80 h-80 sm:w-80 sm:h-80">
                 <Image
                src={persona.src}
                alt={persona.nome}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              </div>
              <h1 className="text-xl">{persona.nome}</h1>
              <h2>{persona.ruolo}</h2>
            </div>  
            
          ))}
        </div>
      </div>
      {isOpen&&<PopUp closeModal={closeModal} person={selectedPerson} />}
    </div>
  );
}
