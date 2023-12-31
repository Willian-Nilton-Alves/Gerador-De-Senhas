import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState(12);

  function generate() {
    const characters = "asdfghjkqwertyuio!@#$%¨&*(";
    let newPassword = "";
    const maxLength = 100; // Limite máximo de caracteres
    const length = Math.min(passwordSize, maxLength); // Verifica o tamanho máximo da senha
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopyText("copiar");
  }

  function copyToClipBoard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado");
  }

  return (
    <div className="app">
      <h1>Gerador de Senhas</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <input
          type="number"
          id="passwordSize"
          min={1}
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}
        />{" "}
      </div>
      <button onClick={generate}>Gerar senha! max 100</button>
      <button onClick={copyToClipBoard}>{copyText}</button>
      <div>{password}</div>
    </div>
  );
}

export default App;
