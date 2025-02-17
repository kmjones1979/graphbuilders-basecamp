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
    <div className="w-full">
      <div className="mockup-code text-xs sm:text-sm w-full">
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
  );
};

export default CodeSnippet;
