import { useState } from 'react'

// Define a custom dictionary of words and their corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
  recieve: "receive",
  adress: "address",
  definately: "definitely",
  seperate: "separate",
  occured: "occurred",
  untill: "until",
  accomodate: "accommodate",
  arguement: "argument",
  calender: "calendar",
  embarass: "embarrass",
  goverment: "government",
  maintenence: "maintenance",
  occurance: "occurrence",
  recomend: "recommend",
  tommorow: "tomorrow",
  truely: "truly",
  wierd: "weird",
  privilage: "privilege",
  beleive: "believe",
  gaurd: "guard",
  liscense: "license",
  neccessary: "necessary",
  quesion: "question",
  succesful: "successful",
  responsibilty: "responsibility",

  // Sentence structure and grammar corrections
  dont: "don't",
  cant: "can't",
  wont: "won't",
  isnt: "isn't",
  arnt: "aren't",
  doesnt: "doesn't",
  didnt: "didn't",
  hasnt: "hasn't",
  havnt: "haven't",
  werent: "weren't",
  wasnt: "wasn't",
  wouldnt: "wouldn't",
  shouldnt: "shouldn't",

  // Pronouns and common conjunctions
  im: "I'm",
  youre: "you're",
  its: "it's",
  ther: "there",
  thier: "their",
  theyre: "they're",
  ive: "I've",
  id: "I'd",
  couldnt: "couldn't",

  // Other common sentence words
  becuase: "because",
  alot: "a lot",
  probly: "probably",
  gonna: "going to",
  wanna: "want to",
  shouldve: "should've",
  wouldve: "would've",
  tht: "that",
  culd: "could",
  shuld: "should",
  wich: "which",
  dis: "this",
  wat: "what",
  ths: "this",
  cudnt: "couldn't",
  evry: "every",
  frst: "first",
  secnd: "second",
  finaly: "finally"
};

function SpellCheckApp() {

  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    })

    const correctText = correctedWords.join(" ");

    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSuggestedText(firstCorrection || "");
  }

  return (
    <>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder='Enter text...'
        rows={5}
        cols={40}
      />
      {
        suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )
      }
    </>
  )
}

export default SpellCheckApp
