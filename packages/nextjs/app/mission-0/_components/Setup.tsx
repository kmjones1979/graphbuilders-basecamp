import React from "react";
import CodeSnippet from "./CodeSnippet";

interface Tool {
  id: number;
  name: string;
  description: string;
  version: string;
  installCommands: string[];
  verifyCommand: string;
  link: {
    text: string;
    url: string;
  };
  tip?: {
    text: string;
    link?: {
      text: string;
      url: string;
    };
  };
}

const REQUIRED_TOOLS: Tool[] = [
  {
    id: 1,
    name: "Node.js",
    description: "JavaScript runtime for executing code",
    version: "v20.x or newer",
    installCommands: [
      "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash",
      "nvm install 20",
    ],
    verifyCommand: "node --version",
    link: {
      text: "Download Node.js",
      url: "https://nodejs.org",
    },
    tip: {
      text: "We recommend using NVM (Node Version Manager) for easier version management",
      link: {
        text: "NVM Installation Guide",
        url: "https://github.com/nvm-sh/nvm#installing-and-updating",
      },
    },
  },
  {
    id: 2,
    name: "Yarn",
    description: "Package manager for installing dependencies",
    version: "v1.22.x or newer",
    installCommands: ["npm install -g yarn"],
    verifyCommand: "yarn --version",
    link: {
      text: "Yarn Installation Guide",
      url: "https://yarnpkg.com/getting-started/install",
    },
  },
  {
    id: 3,
    name: "Git",
    description: "Version control system",
    version: "v2.x or newer",
    installCommands: [],
    verifyCommand: "git --version",
    link: {
      text: "Download Git",
      url: "https://git-scm.com/downloads",
    },
  },
  {
    id: 4,
    name: "Docker",
    description: "Container platform for running services",
    version: "v20.x or newer",
    installCommands: [],
    verifyCommand: "docker --version",
    link: {
      text: "Download Docker Desktop",
      url: "https://www.docker.com/products/docker-desktop",
    },
  },
  {
    id: 5,
    name: "Graph CLI",
    description: "Command line tool for building and deploying subgraphs",
    version: "v0.95.x or newer",
    installCommands: ["npm install -g @graphprotocol/graph-cli"],
    verifyCommand: "graph --version",
    link: {
      text: "CLI Documentation",
      url: "https://thegraph.com/docs/en/developing/creating-a-subgraph/#installing-the-graph-cli",
    },
  },
];

const Setup: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Development Environment Setup</h1>
          <p className="text-base sm:text-xl">
            Ready to become an interstellar subgraph developer? 🚀 Let's get your tools ready!
          </p>
        </div>

        {/* Windows Note */}
        <div className="alert alert-neutral shadow-lg bg-base-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 shrink-0 stroke-current opacity-70"
            >
              {/* <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path> */}
            </svg>
            <div className="space-y-1">
              <p className="font-bold">Windows Users:</p>
              <p className="text-base-content/80 text-sm sm:text-base">
                We recommend using WSL (Windows Subsystem for Linux).{" "}
                <a
                  href="https://learn.microsoft.com/en-us/windows/wsl/install"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  Learn more about WSL
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Tool Installation Cards */}
        <div className="space-y-6">
          {REQUIRED_TOOLS.map(tool => (
            <div key={tool.id} className="card bg-base-200 shadow-xl">
              <div className="card-body p-4 sm:p-8">
                <h2 className="card-title text-lg sm:text-xl flex flex-wrap items-center gap-2">
                  <span className="badge badge-primary">{tool.id}</span>
                  {tool.name}
                </h2>
                <p className="text-sm sm:text-base text-base-content/80">{tool.description}</p>

                <div className="space-y-4 mt-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-sm sm:text-base">Required version:</span>
                    <code className="badge badge-ghost text-xs sm:text-sm">{tool.version}</code>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href={tool.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link link-primary text-sm sm:text-base"
                    >
                      {tool.link.text}
                    </a>

                    <div className="w-full overflow-x-auto">
                      {tool.installCommands.map((command, index) => (
                        <div key={index} className="mb-2">
                          <CodeSnippet code={command} button={true} />
                        </div>
                      ))}

                      <div className="mt-4">
                        <p className="text-xs sm:text-sm text-base-content/70 mb-1">Verify installation:</p>
                        <CodeSnippet code={tool.verifyCommand} button={true} />
                      </div>
                    </div>
                  </div>

                  {tool.tip && (
                    <div className="alert bg-base-300 border border-base-content/10 mt-4 text-sm sm:text-base">
                      <div>
                        <p className="text-base-content/80">💡 Tip: {tool.tip.text}</p>
                        {tool.tip.link && (
                          <a
                            href={tool.tip.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link link-primary"
                          >
                            {tool.tip.link.text}
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-lg sm:text-xl">Verify Your Setup</h2>
            <p className="text-sm sm:text-base">Run these commands to verify all tools are properly installed:</p>
            <div className="w-full overflow-x-auto mt-4">
              <div className="mockup-code text-xs sm:text-sm">
                {REQUIRED_TOOLS.map(tool => (
                  <pre key={tool.id} data-prefix="$">
                    <code>{tool.verifyCommand}</code>
                  </pre>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="card bg-base-200 shadow-xl text-center">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title justify-center text-lg sm:text-xl">Need Help?</h2>
            <p className="text-sm sm:text-base">Join our Telegram support channel:</p>
            <div className="card-actions justify-center">
              <a
                href="https://t.me/+vbvAPzHXj08wMGUx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm sm:btn-md"
              >
                🏫 Mission 0: Setup Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
