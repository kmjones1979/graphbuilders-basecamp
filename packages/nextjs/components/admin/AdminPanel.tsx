import React from "react";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface AdminPanelProps {
  mission: number;
  sourceCode?: string;
  metadataUrl?: string;
}

interface NFTMetadata {
  name: string;
  description: string;
  image: string;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ mission, sourceCode }) => {
  const [enabled, setEnabled] = React.useState(false);
  const [id, setId] = React.useState(0);
  const [name, setName] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [metadata, setMetadata] = React.useState<NFTMetadata | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

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

  React.useEffect(() => {
    const fetchMetadata = async () => {
      if (!currentCredentials?.[2]) return;

      try {
        setLoading(true);
        const response = await fetch(currentCredentials[2]);
        if (!response.ok) throw new Error("Failed to fetch metadata");
        const data = await response.json();
        setMetadata(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchMetadata();
  }, [currentCredentials]);

  const handleSetMissionCodeHash = async () => {
    try {
      await writeValidatorAsync({
        functionName: "setMissionCodeHash",
        args: [mission, sourceCode],
      });
    } catch (e) {
      console.error("Error setting mission code hash:", e);
    }
  };

  const handleSetCredentials = async () => {
    try {
      await writeBasecampAsync({
        functionName: "setCredential",
        args: [enabled, id, name, url],
      });
    } catch (e) {
      console.error("Error setting credentials:", e);
    }
  };

  return (
    <>
      <div className="max-w-sm sm:max-w-2xl w-full p-4">
        <div className="flex flex-col justify-center gap-4">
          {/* Current Credentials Display */}
          <div className="card bg-opacity-50 bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Current Credentials</h2>
              {currentCredentials ? (
                <div className="space-y-4">
                  {metadata?.image && (
                    <div className="flex justify-center">
                      <img
                        src={metadata.image}
                        alt={metadata.name}
                        className="w-96 h-96 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg"
                      />
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-2">
                    <div>Enabled:</div>
                    <div>{currentCredentials[0] ? "Yes" : "No"}</div>
                    <div>Name:</div>
                    <div>{currentCredentials[1]}</div>
                    <div>URL:</div>
                    <div className="break-all">{currentCredentials[2]}</div>
                    {metadata && (
                      <>
                        <div>Metadata Name:</div>
                        <div>{metadata.name}</div>
                        <div>Description:</div>
                        <div>{metadata.description}</div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <p>No credentials available.</p>
              )}
            </div>
          </div>

          {/* Credentials Form */}
          <div className="card bg-opacity-50 bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Update Credentials</h2>
              <div className="form-control gap-4">
                <label className="label cursor-pointer justify-start gap-4">
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={e => setEnabled(e.target.checked)}
                    className="checkbox"
                  />
                  <span className="label-text">Enabled</span>
                </label>
                <input
                  type="number"
                  placeholder="ID"
                  value={id}
                  onChange={e => setId(Number(e.target.value))}
                  className="input input-bordered"
                />
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="input input-bordered"
                />
                <input
                  type="text"
                  placeholder="URL"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  className="input input-bordered"
                />
                <button className="btn btn-primary" onClick={handleSetCredentials}>
                  Set Credentials
                </button>
              </div>
            </div>
          </div>

          {/* Mission Code Hash Section */}
          <div className="card bg-opacity-50 bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Mission Code Hash</h2>
              <p className="break-all">Current: {currentMissionCodeHash}</p>
              <button className="btn btn-primary" onClick={handleSetMissionCodeHash}>
                Set Mission Code Hash
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
