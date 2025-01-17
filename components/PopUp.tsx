import { Information } from "@/types/Information";
import Image from 'next/image';

interface PopUpProps {
  closeModal: () => void;
  person: Information | null;
}

export default function PopUp({ closeModal, person }: PopUpProps) {
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center dark:text-white"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden">
        <div className="p-8 bg-gradient-to-b from-teal-100 to-white dark:from-gray-800 dark:to-gray-500">
          {/* Nome e X per uscire */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-teal-800 flex items-center dark:text-white">
              {person?.nome}
            </h2>
            <button
              onClick={closeModal}
              className="text-teal-600 hover:text-teal-800 text-2xl focus:outline-none dark:text-white"
            >
              X
            </button>
          </div>

          {/* Descrizione persona */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Foto e Ruolo */}
            <div className="flex flex-col items-center md:col-span-1">
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-teal-300 dark:border-white">
                <Image
                  src={person?.src || "/placeholder.svg"}
                  alt={`${person?.nome || ""}`}
                  className="object-cover"
                  layout="fill"
                />
              </div>
              <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mt-3 dark:bg-gray-500 dark:text-white dark:border-white">
                {person?.ruolo}
              </div>
            </div>

            {/* Descrizione */}
            <div className="flex flex-col justify-between text-gray-700 dark:text-white text-sm w-full break-words md:col-span-2">
              {/* Descrizione testuale */}
              <div style={{ wordWrap: "break-word" }}>
                {person?.descrizione ||
                  "La natura ci regala una bellezza senza pari, un luogo dove il cielo si incontra con la terra in un abbraccio eterno. Ogni passo verso la sostenibilità è un passo verso un futuro migliore."}
              </div>

              {/* Bottoni */}
              <div className="flex gap-4 mt-4">
              <a href={`mailto:${person?.mail}`}>
                <button className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-teal-600">
                  Contattami
                </button>
                </a>
                <a href={person?.linkedin} target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                  Linkedin
                </button>
                </a>
                <a href={person?.github} target="_blank" rel="noopener noreferrer">
                <button className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-teal-200" >
                  GitHub
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
