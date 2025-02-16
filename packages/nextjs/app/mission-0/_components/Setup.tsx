import React from "react";
import CodeSnippet from "./CodeSnippet";

const Setup: React.FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-sm sm:max-w-2xl w-full p-4">
          <div className="flex justify-center top pt-4">
            <h1 className="text-3xl pt-4 text-left max-w-2xl italic font-bold">Development Environment Setup</h1>
          </div>

          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl pt-4">
              Are you ready to be a interstellar subgraph developer? 🚀 Before starting the missions, you'll need to set
              up your development environment. Follow these steps to install all required tools:
            </p>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl pt-4 italic">
              Note: The instructions below are catered to Mac and Linux users. If you are using Windows, you should
              install the tools below using WSL (Windows Subsystem for Linux). More information can be found{" "}
              <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">
                here.
              </a>
            </p>
          </div>
          <div className="flex justify-center top">
            <h3 className="text-2xl pt-8 text-left max-w-2xl">1. Install Node.js</h3>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">
              Install Node.js LTS version (20.x or newer) from the{" "}
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600"
              >
                official website
              </a>{" "}
              or using a package manager.
            </p>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left italic text-gray-400">
              💡 Tip: Node Version Manager (nvm) is recommended but optional.{" "}
              <a
                href="https://github.com/nvm-sh/nvm#installing-and-updating"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600"
              >
                Learn more about nvm
              </a>
            </p>
          </div>
          <CodeSnippet
            code="curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
            button={true}
          />
          <CodeSnippet code="nvm install 20" button={true} />
          <CodeSnippet code="node --version" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Expected output should show v20.x or newer</p>
          </div>

          <div className="flex justify-center top">
            <h3 className="text-2xl pt-8 text-left max-w-2xl">2. Install Yarn Package Manager</h3>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">
              Install the newest version of Yarn. If you need help, check out the{" "}
              <a
                href="https://yarnpkg.com/getting-started/install"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600"
              >
                Installation guide
              </a>
            </p>
          </div>
          <CodeSnippet code="npm install -g yarn" button={true} />
          <CodeSnippet code="yarn --version" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Expected output should show version 1.22.x or newer</p>
          </div>

          <div className="flex justify-center top">
            <h3 className="text-2xl pt-8 text-left max-w-2xl">3. Install Git</h3>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">
              Install Git from{" "}
              <a
                href="https://git-scm.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600"
              >
                git-scm.com
              </a>{" "}
              or your system's package manager
            </p>
          </div>
          <CodeSnippet code="git --version" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Expected output should show version 2.x or newer</p>
          </div>

          <div className="flex justify-center top">
            <h3 className="text-2xl pt-8 text-left max-w-2xl">4. Install Docker</h3>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">
              Install Docker Desktop from{" "}
              <a
                href="https://www.docker.com/products/docker-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600"
              >
                docker.com
              </a>{" "}
              (required for local Graph Node development)
            </p>
          </div>
          <CodeSnippet code="docker --version" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Expected output should show version 20.x or newer</p>
          </div>

          <div className="flex justify-center top">
            <h3 className="text-2xl pt-8 text-left max-w-2xl">5. Install Graph CLI</h3>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">
              Install The Graph's CLI tool globally using npm.{" "}
              <a
                href="https://thegraph.com/docs/en/developing/creating-a-subgraph/#installing-the-graph-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600"
              >
                CLI documentation
              </a>
            </p>
          </div>
          <CodeSnippet code="npm install -g @graphprotocol/graph-cli" button={true} />
          <CodeSnippet code="graph --version" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Expected output should show version 0.95.x or newer</p>
          </div>

          <div className="flex justify-center top pt-8">
            <h1 className="text-3xl pt-4 text-left max-w-2xl italic font-bold">Verify Installation</h1>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl pt-4">
              After installing all tools, verify your development environment is ready by running these commands:
            </p>
          </div>

          <div className="flex justify-center top mt-4">
            <div className="bg-slate-700 text-white p-4 rounded-lg overflow-auto w-full">
              <pre className="text-sm">
                <code>
                  {`✔️ Node.js: node --version
✔️ Yarn: yarn --version
✔️ Git: git --version
✔️ Docker: docker --version
✔️ Graph CLI: graph --version`}
                </code>
              </pre>
            </div>
          </div>

          <div className="flex justify-center top pt-8">
            <h1 className="text-3xl pt-4 text-left max-w-2xl italic font-bold">Next Steps</h1>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl">
              Once you have all tools installed, you're ready to clone the repository and start the missions!
            </p>
          </div>

          <div className="flex justify-center top pt-10">
            <div className="flex justify-center top">
              Need help getting setup? Join the telegram channel for this mission...{" "}
            </div>
          </div>
          <br />
          <div className="flex justify-center top">
            <div className="">
              <a href="https://t.me/+vbvAPzHXj08wMGUx" target="_blank" rel="noopener noreferrer">
                🏫 Mission 0: Orientation 🚀
              </a>
            </div>
          </div>
          <div className="flex justify-center top">
            <div className="">
              <p>If not, continue to the first part of the mission...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setup;
