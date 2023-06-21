import React from "react";

const DisplayResult = ({ results }) => {
  console.log(results);
  return (
    <>
      {results.map((result, index) => (
        <div key={index}>
          <h1>{result.word}</h1>
          <p>{result.phonetic}</p>
          <div>Phonetics:</div>
          <ul>
            {result.phonetics.map((phonetic, index) => (
              <li key={index}>
                {phonetic.text}
                {phonetic.audio && (
                  <audio controls>
                    <source src={phonetic.audio} type="audio/mpeg" />
                  </audio>
                )}
              </li>
            ))}
          </ul>
          <div>Origin: {result.origin}</div>
          <div>Meanings:</div>
          <ul>
            {result.meanings.map((meaning, index) => (
              <li key={index}>
                <div>Part of Speech: {meaning.partOfSpeech}</div>
                <div>Definitions:</div>
                <ul>
                  {meaning.definitions.map((definition, index) => (
                    <li key={index}>
                      <div>Definition: {definition.definition}</div>
                      <div>Example: {definition.example}</div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default DisplayResult;
