
export interface Information{
    id:number,
    nome: string,
    src: string,
    ruolo: string,
    descrizione: string,
    github: string,
    mail:string,
    linkedin:string,
}

export interface Project {
    id: string
    title: string
    description: string
    imageUrl: string
    team: string[]
  }
  