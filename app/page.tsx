"use client"

import Team from "@/components/Team";
import Progetti  from "@/components/Progetti";
import Servizi from "@/components/Servizi";
export default function Home() {

  return (
    <div className="grid grid-cols-1 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
         {/* Chi Siamo */}
         <section id="chi-siamo" className="py-20 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Chi Siamo</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Aletheia IT è una startup innovativa che offre soluzioni tecnologiche all avanguardia per aiutare le aziende a crescere e prosperare nell era digitale.
            </p>
          </div>
        </section>
      
        {/* Servizi */}
        <section id="servizi" className="py-20">
          <Servizi/>
        </section>

        {/* Progetti */}
        <section id="progetti" className="py-20">
          <Progetti/>
        </section>

        <section id="Team" className="py-20">
          <Team/>
        </section>
      
    </div>
  );
}
