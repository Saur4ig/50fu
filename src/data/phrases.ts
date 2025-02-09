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
];

export default phrases;
