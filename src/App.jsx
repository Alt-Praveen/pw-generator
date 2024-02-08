import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const generatePassword = () => {
    let characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const characters = "!#$%'()*+,-./:;<=>?@[]^_`{|}~";
    let pass = "";

    if (numberAllowed) characterSet += numbers
    if (charAllowed) characterSet += characters

    for (let i = 1; i <= passwordLength; i++) {
      pass += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }

    setPassword(pass)
    console.log(pass);
  }

  useEffect(() => {
    generatePassword();
  }, [passwordLength, numberAllowed, charAllowed])

  const copyPass = () => {
    const copiedItem = document.getElementById("copy-password").innerText;
    console.log(copiedItem);
    window.navigator.clipboard.writeText(copiedItem);
  }

  return (
    <>
      <div id='copy-password'>{password}</div>
      <button onClick={() => copyPass()}>Copy</button>

      <div>
        <div>
          <input
            id="default-range"
            type="range"
            min="0"
            max="50"
            value={passwordLength}
            onChange={(event) => setPasswordLength(event.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <label>
            Length ({passwordLength})
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="characters"
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(!charAllowed)}
            className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="characters" className="ms-2 text-sm font-medium">
            Characters
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="numbers"
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
            className="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
          />
          <label htmlFor="numbers" className="ms-2 text-sm font-medium ">
            Numbers
          </label>
        </div>

        {/* <button onClick={() => generatePassword()} >Generate Password</button> */}
      </div>
    </>
  )
}

export default App
