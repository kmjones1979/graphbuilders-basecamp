"use client";

import { FC, useEffect, useState } from "react";
import { faGithub, faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAccount } from "wagmi";
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

  const getUserProgress = () => {
    if (!userCredentials?.users[0]) return 0;
    const rank = Number(userCredentials.users[0].rank) || 0;
    return rank;
  };

  const handleMissionClick = (missionId: number) => {
    if (isOwnProfile) {
      setSelectedMission(missionId);
    }
  };

  const shareToX = (address: string) => {
    const url = `https://twitter.com/intent/tweet?text=Check%20out%20this%20NFT%20at%20address%3A%20${address}`;
    window.open(url, "_blank");
  };

  const shareToFarcaster = (address: string) => {
    const url = `https://farcaster.xyz/share?text=Check%20out%20this%20NFT%20at%20address%3A%20${address}`;
    window.open(url, "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Profile Card */}
      <div className="card bg-base-50 w-full shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex space-x-4 mt-2 justify-center sm:justify-start">
            <Address address={address} />
          </h2>
          <div className="flex space-x-4 mt-2 justify-center sm:justify-start">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-gray-500 w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors"
              onClick={() => shareToX(address)}
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
              className="text-gray-500 w-6 h-6 hover:text-gray-700 cursor-pointer transition-colors"
              onClick={() => shareToFarcaster(address)}
            />
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
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <p className="text-2xl font-bold">{userCredentials?.users[0]?.rank || "No rank"}</p>
                )}
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
                      {userCredentials?.users[0]?.credentials.map((cred, index) => (
                        <li
                          key={index}
                          className={`p-2 rounded ${
                            isOwnProfile ? "hover:bg-slate-700 cursor-pointer transition-colors" : ""
                          }`}
                          onClick={() => handleMissionClick(Number(cred.Basecamp_id))}
                        >
                          Completed Mission {cred.Basecamp_id}!
                          {isOwnProfile && <span className="text-xs text-gray-400 ml-2">(click to view)</span>}
                        </li>
                      )) || "No activity yet"}
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
