import React from "react";

const DisplayResult = ({ results }) => {
  console.log(results);
  return (
    <>
      {results.map((result, index) => (
        <div key={index}>
          <h1>{result.word}</h1>
          {result.phonetics.map((phonetic, index) => (
            <div key={index}>
              {phonetic.audio && (
                <>
                  <p>{phonetic.text}</p>
                  <audio controls>
                    <source src={phonetic.audio} type="audio/mpeg" />
                  </audio>
                </>
              )}
            </div>
          ))}
          {result.meanings.map((meaning, index) => (
            <div key={index}>
              <h1>{meaning.partOfSpeech}</h1>
              <h2>Meaning</h2>
              <ul>
                {meaning.definitions.map((definition, index) => (
                  <li key={index}>
                    <p>{definition.definition && definition.definition}</p>
                    <p>{definition.example && definition.example}</p>
                  </li>
                ))}
              </ul>
              {meaning.synonyms.length > 0 && (
                <h3>
                  Synonyms {meaning.synonyms.map((synonym, index) => synonym)}
                </h3>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default DisplayResult;
