export interface Phrase {
  language: string;
  phrase: string;
  transcription: string;
}

const phrases: Phrase[] = [
  { 
    language: "English",
    phrase: "Fuck you",
    transcription: "fuhk yoo"
  },
  { 
    language: "German",
    phrase: "Fick dich",
    transcription: "fik dikh"
  },
  { 
    language: "Ukrainian",
    phrase: "Іди нахуй",
    transcription: "idy nakhuy"
  },
  { 
    language: "Spanish",
    phrase: "jódete",
    transcription: "HOH-deh-teh"
  },
  { 
    language: "Italian",
    phrase: "vaffanculo",
    transcription: "vah-fan-KOO-lo"
  }
];

export default phrases;
