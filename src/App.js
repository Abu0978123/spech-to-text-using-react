import React, { useState } from "react";
import "./App.scss";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("ar - SA");
  const [copied, setCopied] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  ////////////////////////////////// CopyFuntion /////////////////////////////

  const handleCopy = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  ////////////////////////////////// handleValueChange /////////////////////////////

  const handleValueChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  ////////////////////////////////// handleListening /////////////////////////////

  const handleListening = () => {
    setCopied(false);

    let selectLanguage;

    switch (selectedLanguage) {
      case "Afrikaans":
        selectLanguage = "af";
        break;
      case "Arabic (Algeria)":
        selectLanguage = "ar-DZ";
        break;
      case "Arabic (Bahrain)":
        selectLanguage = "ar-BH";
        break;
      case "Arabic (Egypt)":
        selectLanguage = "ar-EG";
        break;
      case "Arabic (Iraq)":
        selectLanguage = "ar-IQ";
        break;
      case "Arabic (Jordan)":
        selectLanguage = "ar-JO";
        break;
      case "Arabic (Kuwait)":
        selectLanguage = "ar-KW";
        break;
      case "Arabic (Lebanon)":
        selectLanguage = "ar-LB";
        break;
      case "Arabic (Lybia)":
        selectLanguage = "ar-LY";
        break;
      case "Arabic (Morocco)":
        selectLanguage = "ar-MA";
        break;
      case "Arabic (Oman)":
        selectLanguage = "ar-OM";
        break;
      case "Arabic (Qatar)":
        selectLanguage = "ar-QA";
        break;
      case "Arabic (Saudi Arabia)":
        selectLanguage = "ar-SA";
        break;
      case "Arabic (Tunisia)":
        selectLanguage = "ar-TN";
        break;
      case "Arabic (UAE)":
        selectLanguage = "ar-AE";
        break;
      case "Arabic (Yemen)":
        selectLanguage = "ar-YE";
        break;
      case "Basque":
        selectLanguage = "eu";
        break;
      case "Bulgarian":
        selectLanguage = "bg";
        break;
      case "Cantonese":
        selectLanguage = "zh-HK";
        break;
      case "Catalan":
        selectLanguage = "ca";
        break;
      case "Czech":
        selectLanguage = "cs";
        break;
      case "Dutch":
        selectLanguage = "nl-NL";
        break;
      case "English (Australia)":
        selectLanguage = "en-AU";
        break;
      case "English (Canada)":
        selectLanguage = "en-CA";
        break;
      case "English (India)":
        selectLanguage = "en-IN";
        break;
      case "English (New Zealand)":
        selectLanguage = "en-NZ";
        break;
      case "English (South Africa)":
        selectLanguage = "en-ZA";
        break;
      case "English(UK)":
        selectLanguage = "en-GB";
        break;
      case "English(US)":
        selectLanguage = "en-US";
        break;
      case "Finnish":
        selectLanguage = "fi";
        break;
      case "French":
        selectLanguage = "fr-FR";
        break;
      case "Galician":
        selectLanguage = "gl";
        break;
      case "German":
        selectLanguage = "de-DE";
        break;
      case "Greek":
        selectLanguage = "el-GR";
        break;
      case "Hebrew":
        selectLanguage = "he";
        break;
      case "Hungarian":
        selectLanguage = "hu";
        break;
      case "Icelandic":
        selectLanguage = "is";
        break;
      case "Indonesian":
        selectLanguage = "id";
        break;
      case "Japanese":
        selectLanguage = "ja";
        break;
      case "Korean":
        selectLanguage = "ko";
        break;
      case "Latin":
        selectLanguage = "la";
        break;
      case "Mandarin Chinese":
        selectLanguage = "zh-CN";
        break;
      case "Taiwanese":
        selectLanguage = "zh-TW";
        break;
      case "Cantonese":
        selectLanguage = "zh-HK";
        break;
      case "Malaysian":
        selectLanguage = "ms-MY";
        break;
      case "Norwegian":
        selectLanguage = "no-NO";
        break;
      case "Polish":
        selectLanguage = "pl";
        break;
      case "Pig Latin":
        selectLanguage = "xx-piglatin";
        break;
      case "Portuguese":
        selectLanguage = "pt-PT";
        break;
      case "Portuguese (Brasil)":
        selectLanguage = "pt-br";
        break;
      case "Romanian":
        selectLanguage = "ro-RO";
        break;
      case "Russian":
        selectLanguage = "ru";
        break;
      case "Serbian":
        selectLanguage = "sr-SP";
        break;
      case "Slovak":
        selectLanguage = "sk";
        break;
      case "Spanish (Argentina)":
        selectLanguage = "es-AR";
        break;
      case "Spanish (Bolivia)":
        selectLanguage = "es-BO";
        break;
      case "Spanish (Chile)":
        selectLanguage = "es-CL";
        break;
      case "Spanish (Colombia)":
        selectLanguage = "es-CO";
        break;
      case "Spanish (Costa Rica)":
        selectLanguage = "es-CR";
        break;
      case "Spanish (Dominican Republic)":
        selectLanguage = "es-DO";
        break;
      case "Spanish (Ecuador)":
        selectLanguage = "es-EC";
        break;
      case "Spanish (El Salvador)":
        selectLanguage = "es-SV";
        break;
      case "Spanish (Guatemala)":
        selectLanguage = "es-GT";
        break;
      case "Spanish (Honduras)":
        selectLanguage = "es-HN";
        break;
      case "Spanish (Mexico)":
        selectLanguage = "es-MX";
        break;
      case "Spanish (Nicaragua)":
        selectLanguage = "es-NI";
        break;
      case "Spanish (Panama)":
        selectLanguage = "es-PA";
        break;
      case "Spanish (Paraguay)":
        selectLanguage = "es-PY";
        break;
      case "Spanish (Peru)":
        selectLanguage = "es-PE";
        break;
      case "Spanish (Puerto Rico)":
        selectLanguage = "es-PR";
        break;
      case "Spanish (Spain)":
        selectLanguage = "es-ES";
        break;
      case "Spanish (US)":
        selectLanguage = "es-US";
        break;
      case "Spanish (Uruguay)":
        selectLanguage = "es-UY";
        break;
      case "Spanish (Venezuela)":
        selectLanguage = "es-VE";
        break;
      case "Swedish":
        selectLanguage = "sv-SE";
        break;
      case "Turkish":
        selectLanguage = "tr";
        break;
      case "Zulu":
        selectLanguage = "zu";
        break;
      default:
        selectLanguage = "en-US";
        break;
    }

    SpeechRecognition.startListening({
      continuous: true,
      language: selectLanguage,
    });
  };

  ////////////////////////////////// Browser Support check /////////////////////////////

  if (!browserSupportsSpeechRecognition) {
    return (
      <p className="text-white fs-3 text-center my-5">
        Browser doesn't support speech recognition.
      </p>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center py-5">
          <h1 className="text-center text-primary">SPEECH TO TEXT CONVERTOR</h1>
          <div className="col-12 col-md-10 col-lg-8 bg-primary mt-4 rounded-3 px-0 mx-0 py-2 coldiv">
            <div className="text-center">
              {listening ? (
                <>
                  <i className="fa-solid fa-microphone fs-3"></i>
                </>
              ) : (
                <i className="fa-solid fa-microphone-slash fs-3"></i>
              )}
            </div>
            <div className="textArea border rounded-2 position-relative mx-3 my-2 scroll">
              <p className="fs-4 px-1 py-1">{transcript}</p>
            </div>
            <div className="selection d-flex  px-1 px-md-4">
              <select
                className="form-select"
                aria-label="Default select example"
                value={selectedLanguage}
                onChange={handleValueChange}
              >
                <option defaultValue={"English(US)"}>English(US)</option>
                <option>Afrikaans</option>
                <option>Basque</option>
                <option>Bulgarian</option>
                <option>Catalan</option>
                <option>Arabic (Egypt)</option>
                <option>Arabic (Jordan)</option>
                <option>Arabic (Kuwait)</option>
                <option>Arabic (Lebanon)</option>
                <option>Arabic (Qatar)</option>
                <option>Arabic (UAE)</option>
                <option>Arabic (Morocco)</option>
                <option>Arabic (Iraq)</option>
                <option>Arabic (Algeria)</option>
                <option>Arabic (Bahrain)</option>
                <option>Arabic (Lybia)</option>
                <option>Arabic (Oman)</option>
                <option>Arabic (Saudi Arabia)</option>
                <option>Arabic (Tunisia)</option>
                <option>Arabic (Yemen)</option>
                <option>Czech</option>
                <option>Dutch</option>
                <option>English (Australia)</option>
                <option>English (Canada)</option>
                <option>English (India)</option>
                <option>English (New Zealand)</option>
                <option>English (South Africa)</option>
                <option>English(UK)</option>
                <option>English(US)</option>
                <option>Finnish</option>
                <option>French</option>
                <option>Galician</option>
                <option>German</option>
                <option>Greek</option>
                <option>Hebrew</option>
                <option>Hungarian</option>
                <option>Icelandic</option>
                <option>Italian</option>
                <option>Indonesian</option>
                <option>Japanese</option>
                <option>Korean</option>
                <option>Latin</option>
                <option>Mandarin Chinese</option>
                <option>Taiwanese</option>
                <option>Cantonese</option>
                <option>Malaysian</option>
                <option>Norwegian</option>
                <option>Polish</option>
                <option>Pig Latin</option>
                <option>Portuguese</option>
                <option>Portuguese (Brasil)</option>
                <option>Romanian</option>
                <option>Russian</option>
                <option>Serbian</option>
                <option>Slovak</option>
                <option>Spanish (Argentina)</option>
                <option>Spanish (Bolivia)</option>
                <option>Spanish (Chile)</option>
                <option>Spanish (Colombia)</option>
                <option>Spanish (Costa Rica)</option>
                <option>Spanish (Dominican Republic)</option>
                <option>Spanish (Ecuador)</option>
                <option>Spanish (El Salvador)</option>
                <option>Spanish (Guatemala)</option>
                <option>Spanish (Honduras)</option>
                <option>Spanish (Mexico)</option>
                <option>Spanish (Nicaragua)</option>
                <option>Spanish (Panama)</option>
                <option>Spanish (Paraguay)</option>
                <option>Spanish (Peru)</option>
                <option>Spanish (Puerto Rico)</option>
                <option>Spanish (Spain)</option>
                <option>Spanish (US)</option>
                <option>Spanish (Uruguay)</option>
                <option>Spanish (Venezuela)</option>
                <option>Swedish</option>
                <option>Turkish</option>
                <option>Zulu</option>
              </select>
              <button
                className="border-0 bg-success ms-2 me-2 fs-4 rounded-circle"
                onClick={() => {
                  resetTranscript();
                }}
              >
                <i className="fa-solid fa-rotate-left text-white"></i>
              </button>
            </div>

            <div className="buttons py-md-1">
              <div className="d-flex flex-column px-1 py-1 flex-md-row justify-content-md-around">
                <CopyToClipboard text={transcript} onCopy={handleCopy}>
                  <button className="btn btn-success px-md-3 fs-5">
                    Copy to clipboard with button
                  </button>
                </CopyToClipboard>

                <button
                  className="btn btn-success px-md-3 my-2 my-md-0 fs-5"
                  type="button"
                  onClick={handleListening}
                >
                  Start Listening
                </button>
                <button
                  className="btn btn-success px-md-3 fs-5"
                  type="button"
                  onClick={SpeechRecognition.stopListening}
                >
                  stop Listening
                </button>
              </div>
              {copied ? (
                <span className="ms-4 fw-bold" style={{ color: "red" }}>
                  Copied.
                </span>
              ) : null}
            </div>
          </div>
          {/* Github */}
        </div>
      </div>
      <span className="fs-1 ">
        <a
          target="_blanck"
          href="https://github.com/Zeeshankhaliq219/SPEECH-TO-TEXT-CONVERTOR"
        >
          <i className="fa-brands github fa-github rounded-circle bg-white"></i>
        </a>
      </span>
    </>
  );
}
