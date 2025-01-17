import { Project } from "@/types/Information";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Progetti() {
  const [dati, setDati] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/aletheia/InfoProject.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Errore nel caricamento dei dati: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setDati(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel caricamento dei dati:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Caricamento progetti...</div>;
  }

  return (
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">I Nostri Progetti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {dati.map((project) => (
            <div key={project.id} className="bg-gray-600 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className=" mb-4">{project.description}</p>
                <Link href={`Project/${project.id}`}>
                  <button className="">Scopri di più</button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>
  
  );
}

