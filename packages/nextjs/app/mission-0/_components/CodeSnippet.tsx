import React, { useState } from "react";

interface CodeSnippetProps {
  code: string;
  button: boolean;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, button }) => {
  const [buttonText, setButtonText] = useState("Copy to Clipboard");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setButtonText("Copied!");
        setTimeout(() => setButtonText("Copy to Clipboard"), 2000);
      },
      err => {
        console.error("Could not copy text: ", err);
      },
    );
  };

  return (
    <div className="max-w-3xl mx-auto mt-2">
      <div className="flex flex-col items-center">
        <div className="mockup-code w-full">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
        {button && (
          <button className="btn btn-secondary btn-xs btn-outline mt-2" onClick={() => copyToClipboard(code)}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default CodeSnippet;
