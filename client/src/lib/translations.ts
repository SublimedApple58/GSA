export const translations = {
  en: {
    hero: {
      title: "Professional Fitness Coaching",
      subtitle: "Achieve your fitness goals with expert guidance",
    },
    services: {
      title: "Our Services",
      training: "Training Programs",
      nutrition: "Nutrition & Supplements",
      competition: "Competition Prep"
    },
    stats: {
      experience: "Years of Experience",
      clients: "Satisfied Clients",
      competitions: "Competitions Won"
    },
    contact: {
      title: "Get Started Today",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message"
    }
  },
  it: {
    hero: {
      title: "Coaching Fitness Professionale",
      subtitle: "Raggiungi i tuoi obiettivi fitness con una guida esperta",
    },
    services: {
      title: "I Nostri Servizi",
      training: "Programmi di Allenamento",
      nutrition: "Alimentazione e Integratori",
      competition: "Preparazione Agonistica"
    },
    stats: {
      experience: "Anni di Esperienza",
      clients: "Clienti Soddisfatti", 
      competitions: "Competizioni Vinte"
    },
    contact: {
      title: "Inizia Oggi",
      name: "Nome",
      email: "Email",
      message: "Messaggio",
      submit: "Invia Messaggio"
    }
  }
};

export type Language = keyof typeof translations;
