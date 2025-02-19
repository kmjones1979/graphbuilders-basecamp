"use client";

import { FC, useEffect, useState } from "react";
import { rankNames } from "../../config/constants";
import BuidlGuidlProfileLink from "./_components/BuidlGuidlProfileLink";
import BuidlGuidlLink from "./_components/BuidlGuidlProfileLink";
import { faGithub, faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Share2 } from "lucide-react";
import { useAccount, useEnsName } from "wagmi";
import { GetUserCredentialsDocument, execute } from "~~/.graphclient";
import SuccessModal from "~~/components/SuccessModal";
import { Address } from "~~/components/scaffold-eth";

interface UserCredentials {
  users: Array<{
    id: string;
    credentials: Array<{
      Basecamp_id: string | number;
    }>;
    rank: string | number;
  }>;
}

const User: FC<{ params: { address: `0x${string}` } }> = ({ params }) => {
  const { address: viewerAddress } = useAccount();
  const isOwnProfile = viewerAddress?.toLowerCase() === params.address.toLowerCase();
  const { address } = params;
  const [userCredentials, setUserCredentials] = useState<UserCredentials | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedMission, setSelectedMission] = useState<number | null>(null);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const { data: ensName } = useEnsName({ address: params.address });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const fetchUserCredentials = async () => {
      try {
        const result = await execute(GetUserCredentialsDocument, { address: address.toLowerCase() });
        setUserCredentials(result.data as UserCredentials);
      } catch (error) {
        console.error("Error fetching user credentials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserCredentials();
  }, [address]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getUserProgress = () => {
    if (!userCredentials?.users[0]) return 0;
    const rank = Number(userCredentials.users[0].rank) || 0;
    return rank;
  };

  const getCurrentRankName = () => {
    const rank = getUserProgress();
    return rankNames[rank] || "No rank";
  };

  const handleMissionClick = (missionId: number) => {
    if (isOwnProfile) {
      setSelectedMission(missionId);
    }
  };

  const getProfileName = () => {
    return ensName || address;
  };

  const shareToX = () => {
    const shareUrl = window.location.href;
    const shareText = `Check out this builders profile on Graph Builders Basecamp by @graphprotocol`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  const shareToFarcaster = () => {
    const shareUrl = window.location.href;
    const shareText = `Check out this builders profile on Graph Builders Basecamp by @graphprotocol`;
    const url = `https://farcaster.xyz/share?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareText = `Check out this builders profile on Graph Builders Basecamp by @graphprotocol`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Graph Builders Basecamp Profile",
          text: shareText,
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setShowShareTooltip(true);
        setTimeout(() => setShowShareTooltip(false), 2000);
      }
    } catch (err) {
      console.error("Error sharing:", err);
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShowShareTooltip(true);
        setTimeout(() => setShowShareTooltip(false), 2000);
      } catch (clipboardError) {
        console.error("Failed to write to clipboard:", clipboardError);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Profile Card */}
      <div className="card bg-base-50 w-full shadow-xl">
        <div className="card-body">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="sm:flex-row justify-between items-center">
              <h2 className="card-title flex space-x-4 mt-2 justify-center sm:justify-start">
                <Address address={address} />
              </h2>

              <div className="flex space-x-4 mt-2 justify-center sm:justify-start ">
                {isMounted && (
                  <>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-gray-500 w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors"
                    />
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-gray-500 w-6 h-6 hover:text-gray-700 cursor-pointer transition-colors"
                    />
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-gray-500 w-6 h-6 hover:text-blue-600 cursor-pointer transition-colors"
                    />
                    <FontAwesomeIcon
                      icon={faTelegram}
                      className="text-gray-500 w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors"
                    />
                    <FontAwesomeIcon
                      icon={faShareAlt}
                      className="text-gray-500 w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors"
                    />
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="text-gray-500 w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors"
                    />

                    <BuidlGuidlProfileLink address={address} />
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-4 sm:mt-0">
              <button
                onClick={handleShare}
                className="btn btn-ghost btn-sm gap-2 hover:bg-slate-700 transition-colors relative"
              >
                <Share2 className="w-3 h-3" />
                Share Profile
                {showShareTooltip && (
                  <div className="absolute -bottom-8 whitespace-nowrap bg-slate-700 text-white px-2 py-1 rounded text-sm">
                    Copied to clipboard!
                  </div>
                )}
              </button>
              <button onClick={shareToX} className="btn btn-ghost btn-sm hover:bg-slate-700 transition-colors">
                <Share2 className="w-3 h-3" />
                Share on X
              </button>
              <button onClick={shareToFarcaster} className="btn btn-ghost btn-sm hover:bg-slate-700 transition-colors">
                <Share2 className="w-3 h-3" />
                Share on Farcaster
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-purple-950 bg-opacity-30 shadow-xl rounded-lg border border-purple-950">
          <div className="rounded-lg p-4">
            <div className="card-body">
              <h2 className="card-title">Mission Progress</h2>
              <div className="h-32 flex flex-col">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    <p>{userCredentials?.users[0]?.rank || 0} / 7 missions completed</p>
                    <progress
                      className="progress progress-primary w-full h-4"
                      value={getUserProgress()}
                      max={7}
                    ></progress>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-purple-950 bg-opacity-30 shadow-xl rounded-lg border border-purple-950">
          <div className="rounded-lg p-4">
            <div className="card-body">
              <h2 className="card-title">Current Rank</h2>
              <div className="h-32 flex items-center justify-center">
                {loading ? <p>Loading...</p> : <p className="text-2xl font-bold">{getCurrentRankName()}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-purple-950 bg-opacity-30 shadow-xl rounded-lg border border-purple-950">
          <div className="rounded-lg p-4">
            <div className="card-body">
              <h2 className="card-title">Experience</h2>
              <div className="h-32 flex items-center justify-center">
                <p className="text-left text-gray-400">XP progress bar coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card shadow-xl rounded-lg bg-purple-950 bg-opacity-30 border border-purple-950">
          <div className="card-body">
            <h2 className="card-title">Achievements</h2>
            <div className="min-h-48 flex items-center justify-center">
              <p className="text-left text-gray-400">Achievements coming soon</p>
            </div>
          </div>
        </div>

        <div className="card shadow-xl rounded-lg bg-purple-950 bg-opacity-30 border border-purple-950">
          <div className="card-body">
            <h2 className="card-title">Activity</h2>
            <div className="min-h-48 flex items-center justify-left">
              <div className="min-h-48 flex">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <div className="w-full">
                    <ul className="space-y-2">
                      {userCredentials?.users[0]?.credentials.map((cred, index) => {
                        const isClickable = !isOwnProfile;
                        const handleClick = () => {
                          if (isOwnProfile) {
                            handleMissionClick(Number(cred.Basecamp_id));
                          } else {
                            window.location.href = `/nft/${cred.Basecamp_id}`; // Link to NFT landing page
                          }
                        };

                        return (
                          <li
                            key={index}
                            className={`p-2 rounded transition-colors ${isClickable ? "hover:bg-slate-700 cursor-pointer" : "cursor-default"}`}
                            onClick={handleClick}
                          >
                            <span className="flex items-center">
                              Completed Mission {cred.Basecamp_id} and received an NFT!
                              {isClickable && <span className="ml-2 text-purple-500">(click to view)</span>}
                              {isOwnProfile && <span className="ml-2 text-purple-500">(click to view)</span>}
                            </span>
                          </li>
                        );
                      }) || "No activity yet"}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Settings Section - Only visible on own profile */}
      {isOwnProfile && (
        <div className="card shadow-xl rounded-lg bg-purple-950 bg-opacity-30 border border-purple-950">
          <div className="card-body">
            <h2 className="card-title">Profile Settings</h2>
            <div className="min-h-48 flex flex-col gap-4">
              <div className="">
                <span className="text-gray-400">Basecamp profile settings coming soon</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Twitter Handle</span>
                  </label>
                  <input type="text" placeholder="@vitalik" className="input bg-slate-700" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">GitHub Username</span>
                  </label>
                  <input type="text" placeholder="@vitalik" className="input bg-slate-700" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">LinkedIn Handle</span>
                  </label>
                  <input type="text" placeholder="@vitalik" className="input bg-slate-700" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Telegram Handle</span>
                  </label>
                  <input type="text" placeholder="@vitalik" className="input bg-slate-700" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Farcaster Handle</span>
                  </label>
                  <input type="text" placeholder="@vitalik" className="input bg-slate-700" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Website</span>
                  </label>
                  <input type="text" placeholder="https://ethereum.org" className="input bg-slate-700" />
                </div>
              </div>

              <button className="btn btn-disabled bg-purple-500 text-white hover:bg-purple-600 w-full md:w-auto md:self-end">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {selectedMission !== null && (
        <SuccessModal accountMinted={true} mission={selectedMission} onClose={() => setSelectedMission(null)} />
      )}
    </div>
  );
};

export default User;
