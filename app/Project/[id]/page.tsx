"use client"
import { Project } from "@/types/Information";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
interface RouteParams {
    id?: string
  }

  export default function Dettagli(){
    const params = useParams() as RouteParams; 
    const id = params.id;
    const [dettagli, setDettagli] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState(true);
 
    useEffect(() => {
      fetch('/InfoProject.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Errore nel caricamento dei dati: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data: Project[]) => {
          const progetto = data.find((item) => item.id === id);
          if (progetto) {
            setDettagli(progetto);
          } else {
            console.error('Progetto non trovato');
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Errore nel caricamento dei dati:', error);
          setIsLoading(false);
        });
    }, [id]);
  
    if (isLoading) {
      return <div>Caricamento progetti...</div>;
    }
  
    if (!dettagli) {
      return <div>Progetto non trovato</div>;
    }
  
    return (
        <div className="container mx-auto px-4 py-20">
        <div className="overflow-hidden">
             <Image
                src={dettagli.imageUrl}
                alt={dettagli.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
          <div>
            <h1 className="text-3xl font-bold">{dettagli.title}</h1>
            <h3>{dettagli.description}</h3>
          </div>
          <div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Obiettivi del Progetto</h3>
                <p>{dettagli.description || "Informazioni sugli obiettivi non disponibili."}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tecnologie Utilizzate</h3>
                {/* <ul className="list-disc list-inside">
                  {dettagli.technologies?.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  )) || <li>Informazioni sulle tecnologie non disponibili.</li>}
                </ul> */}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Team di sviluppo</h3>
                <ul>
                {dettagli.team?.map((membro, index) => (
                <li key={index}>{membro}</li>
                ))}
            </ul>
              </div>
            </div>  
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button onClick={() => window.history.back()}>Torna ai Progetti</button>
        </div>
      </div>
    );
  
  
  }