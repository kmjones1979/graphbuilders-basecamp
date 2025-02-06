import React from "react";
import javaScriptSourceCode from "./JavaScriptSourceCode";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const mission = 3;

const AdminContent: React.FC = () => {
  const handleSetMissionCodeHash = async () => {
    try {
      await writeValidatorAsync({
        functionName: "setMissionCodeHash",
        args: [mission, javaScriptSourceCode],
      });
    } catch (e) {
      console.error("Error submitting URL:", e);
    }
  };

  const handleSetCredentials = async (enabled: boolean, id: number, name: string, url: string) => {
    try {
      await writeBasecampAsync({
        functionName: "setCredential",
        args: [enabled, id, name, url],
      });
    } catch (e) {
      console.error("Error submitting URL:", e);
    }
  };

  const { writeContractAsync: writeValidatorAsync } = useScaffoldWriteContract("Validator");
  const { writeContractAsync: writeBasecampAsync } = useScaffoldWriteContract("Basecamp");

  const { data: currentMissionCodeHash } = useScaffoldReadContract({
    contractName: "Validator",
    functionName: "missionCodeHashes",
    args: [mission],
  });

  const { data: currentCredentials } = useScaffoldReadContract({
    contractName: "Basecamp",
    functionName: "credentials",
    args: [mission],
  });

  const [enabled, setEnabled] = React.useState(false);
  const [id, setId] = React.useState(0);
  const [name, setName] = React.useState("");
  const [url, setUrl] = React.useState("");

  return (
    <>
      {/* Part 2 */}{" "}
      <div className="flex justify-center">
        <div className="max-w-sm sm:max-w-2xl w-full p-4">
          <div className="flex flex-col justify-center top">
            <p className="text-lg text-left max-w-2xl font-bold">Current Credentials:</p>
            <div className="border p-4 rounded-lg mb-4">
              {currentCredentials ? (
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Enabled:</strong> {currentCredentials[0] ? "Yes" : "No"}
                  </li>
                  <li>
                    <strong>Name:</strong> {currentCredentials[1]}
                  </li>
                  <li>
                    <strong>URL:</strong> {currentCredentials[2]}
                  </li>
                </ul>
              ) : (
                <p>No credentials available.</p>
              )}
            </div>

            {/* New input fields for credentials */}
            <div className="flex flex-col mb-4">
              <label htmlFor="enabled" className="flex items-center">
                <input type="checkbox" id="enabled" onChange={e => setEnabled(e.target.checked)} className="mr-2" />
                Enabled
              </label>
              <input
                type="number"
                placeholder="ID"
                onChange={e => setId(Number(e.target.value))}
                className="border p-2 mb-2"
              />
              <input
                type="text"
                placeholder="Name"
                onChange={e => setName(e.target.value)}
                className="border p-2 mb-2"
              />
              <input type="text" placeholder="URL" onChange={e => setUrl(e.target.value)} className="border p-2 mb-4" />
            </div>

            <button className="btn mb-2" onClick={() => handleSetCredentials(enabled, id, name, url)}>
              Set Credentials
            </button>
            <p className="text-lg text-left max-w-2xl">Current Mission Code Hash: {currentMissionCodeHash}</p>
            <button className="btn" onClick={handleSetMissionCodeHash}>
              Set Mission Code Hash
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminContent;
