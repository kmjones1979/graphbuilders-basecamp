import React, { useState } from "react";
import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";

interface CodeSnippetProps {
  code: string;
  button: boolean;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, button }) => {
  const [buttonText, setButtonText] = useState(<ClipboardIcon className="h-4 w-4" />);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setButtonText(<CheckIcon className="h-4 w-4" />);
        setTimeout(() => setButtonText(<ClipboardIcon className="h-4 w-4" />), 3000);
      },
      err => {
        console.error("Could not copy text: ", err);
      },
    );
  };

  return (
    <div className="max-w-3xl mx-auto mt-2">
      <div className="flex flex-col items-center">
        <div className="mockup-code w-full relative">
          <pre>
            <code>{code}</code>
          </pre>
          {button && (
            <button
              className="btn btn-secondary btn-xs btn-outline absolute right-3 top-3"
              onClick={() => copyToClipboard(code)}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
