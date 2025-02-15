import React, { useEffect, useState } from "react";
import { PartyPopper, Rocket, Trophy, X } from "lucide-react";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface SuccessModalProps {
  accountMinted: boolean;
  mission: number;
  onClose?: () => void;
}

interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes?: Array<{
    trait_type: string;
    value: string | number;
  }>;
}

const SuccessModal = ({ accountMinted, mission, onClose }: SuccessModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [metadata, setMetadata] = useState<NFTMetadata | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const shareText = `I just completed Mission ${mission} of The Graph Builders Basecamp by @graphprotocol! 🎓 Ready to build some subgraphs 🚀 Come join me! https://basecamp.thegraph.com`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
  const farcasterShareUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(shareText)}`;

  const { data: currentCredentials } = useScaffoldReadContract({
    contractName: "Basecamp",
    functionName: "credentials",
    args: [mission],
  });

  useEffect(() => {
    if (accountMinted && !hasShown) {
      setIsOpen(true);
      setHasShown(true);
    }

    const fetchMetadata = async () => {
      if (!currentCredentials?.[2]) return;

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(currentCredentials[2]);
        if (!response.ok) {
          throw new Error(`Failed to fetch metadata: ${response.statusText}`);
        }
        const data = await response.json();
        setMetadata(data);
      } catch (err) {
        console.error("Error fetching NFT metadata:", err);
        setError(err instanceof Error ? err.message : "Failed to load NFT metadata");
      } finally {
        setLoading(false);
      }
    };

    if (currentCredentials?.[2]) {
      fetchMetadata();
    }
  }, [accountMinted, hasShown, currentCredentials]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box bg-base-100 border-2 border-slate-700">
        <button
          onClick={handleClose}
          className="btn btn-sm btn-circle absolute right-2 top-2 bg-slate-700 text-white hover:bg-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center space-y-6 p-4">
          <div className="flex items-center space-x-2">
            <Trophy className="w-12 h-12 text-purple-500" />
            <PartyPopper className="w-12 h-12 text-purple-500" />
            <Rocket className="w-12 h-12 text-purple-500" />
          </div>

          <h2 className="text-3xl font-bold text-center">Mission Accomplished!</h2>

          <div className="alert bg-slate-700 text-white">
            <span className="text-center">
              {metadata?.name
                ? `Congratulations! Your on-chain validation is complete.You've earned ${metadata.name}`
                : "Congratulations! Your on-chain validation is complete.You've earned a credential NFT."}
            </span>
          </div>

          <div className="w-96 h-96 bg-slate-700 rounded-lg shadow-lg overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <span className="loading loading-spinner loading-lg text-purple-500"></span>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-full text-red-500 p-4 text-center">{error}</div>
            ) : (
              <img
                src={metadata?.image}
                alt={metadata?.name || "Achievement NFT"}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="flex gap-4">
            <a
              href={twitterShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm bg-slate-700 text-white hover:bg-purple-600"
            >
              Share on X
            </a>
            <a
              href={farcasterShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm bg-slate-700 text-white hover:bg-purple-600"
            >
              Share on Farcaster
            </a>
          </div>

          <button onClick={handleClose} className="btn bg-slate-700 text-white hover:bg-purple-600">
            Keep Building
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop" onClick={handleClose}>
        <button>close</button>
      </form>
    </dialog>
  );
};

export default SuccessModal;
