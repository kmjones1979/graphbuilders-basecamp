"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Share2 } from "lucide-react";
import { Address } from "~~/components/scaffold-eth";
import { useDeployedContractInfo, useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes?: Array<{
    trait_type: string;
    value: string | number;
  }>;
}

const NFTPage = () => {
  const { id } = useParams();
  const [metadata, setMetadata] = useState<NFTMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const { data: currentCredentials } = useScaffoldReadContract({
    contractName: "Basecamp",
    functionName: "credentials",
    args: [Number(id)],
  });

  const { data: basecampContractInfo } = useDeployedContractInfo("Basecamp");

  useEffect(() => {
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

    fetchMetadata();
  }, [currentCredentials]);

  const shareToX = () => {
    const shareUrl = window.location.href;
    const shareText = metadata?.description || "Check out this NFT from Graph Builders Basecamp!";
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  const shareToFarcaster = () => {
    const shareUrl = window.location.href;
    const shareText = metadata?.description || "Check out this NFT from Graph Builders Basecamp!";
    const url = `https://farcaster.xyz/share?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  const handleShare = async () => {
    const shareUrl = window.location.href; // Current page URL
    const shareText = metadata?.description || "Check out this NFT from Graph Builders Basecamp!";

    try {
      // Check if the Web Share API is available
      if (navigator.share) {
        await navigator.share({
          title: metadata?.name || "Graph Builders Basecamp NFT",
          text: shareText,
          url: shareUrl,
        });
      } else {
        // Fallback to custom share options
        shareToX(); // Optionally, you can call shareToFarcaster() here as well
      }
    } catch (err) {
      // Fallback to clipboard if share API is not available
      navigator.clipboard.writeText(shareUrl);
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-purple-500"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-4 space-y-4">
      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link href="/" className="btn btn-ghost btn-sm gap-2 hover:bg-slate-700 transition-colors">
          <ArrowLeft className="w-3 h-3" />
          Back to Home
        </Link>
        <div className="flex space-x-2">
          <button
            onClick={handleShare}
            className="btn btn-ghost btn-sm gap-2 hover:bg-slate-700 transition-colors relative"
          >
            <Share2 className="w-3 h-3" />
            Share NFT
            {showShareTooltip && (
              <div className="absolute -bottom-8 whitespace-nowrap bg-slate-700 text-white px-2 py-1 rounded text-sm">
                Copied to clipboard!
              </div>
            )}
          </button>
          <button onClick={() => shareToX()} className="btn btn-ghost btn-sm hover:bg-slate-700 transition-colors">
            <Share2 className="w-3 h-3" />
            Share on X
          </button>
          <button
            onClick={() => shareToFarcaster()}
            className="btn btn-ghost btn-sm hover:bg-slate-700 transition-colors"
          >
            <Share2 className="w-3 h-3" />
            Share on Farcaster
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="card bg-base-100 shadow-xl border-2 border-purple-950">
        <div className="card-body p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* NFT Image */}
            <div className="w-full md:w-2/5">
              <div className="w-full aspect-square bg-purple-950 rounded-lg shadow-lg overflow-hidden">
                {metadata?.image && (
                  <img src={metadata.image} alt={metadata.name} className="w-full h-full object-cover" />
                )}
              </div>
            </div>

            {/* NFT Details */}
            <div className="w-full md:w-3/5 space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">{metadata?.name}</h1>
                <div className="text-white p-4 rounded-lg">
                  <p className="text-base">{metadata?.description}</p>
                </div>
              </div>

              {metadata?.attributes && metadata.attributes.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">Attributes</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {metadata.attributes.map((attr, index) => (
                      <div key={index} className="p-3 rounded-lg">
                        <p className="text-purple-500 font-semibold mb-1 text-sm">{attr.trait_type}</p>
                        <p className="text-white text-sm">{attr.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h2 className="text-xl font-semibold mb-2">Contract Details</h2>
                <div className="p-4 rounded-lg space-y-3">
                  <div>
                    <p className="text-purple-500 font-semibold text-sm">Token ID</p>
                    <p className="text-gray-400 text-sm">{id}</p>
                  </div>
                  <div>
                    <p className="text-purple-500 font-semibold text-sm">Contract</p>
                    <Address address={basecampContractInfo?.address} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTPage;
