import { FC } from "react";
import { faGithub, faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address } from "~~/components/scaffold-eth";

const ProfilePage: FC<{ params: { address: string } }> = ({ params }) => {
  const { address } = params;

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Profile Card - Made full width on mobile */}
      <div className="card bg-base-50 w-full shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex space-x-4 mt-2 justify-center sm:justify-start">
            <Address address={address} />
          </h2>
          <div className="flex space-x-4 mt-2 justify-center sm:justify-start">
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
          </div>
        </div>
      </div>

      {/* Stats Grid - Stack on mobile, row on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-purple-950 bg-opacity-50 shadow-xl rounded-lg border border-purple-900">
          <div className="rounded-lg p-4">
            <div className="card-body">
              <h2 className="card-title">Mission Progress</h2>
              <div className="h-32 flex items-center justify-center">
                {/* Placeholder for mission progress content */}
                <p className="text-left text-gray-400">Mission progress visualization coming soon</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-purple-950 bg-opacity-50 shadow-xl rounded-lg border border-purple-900">
          <div className="rounded-lg p-4">
            <div className="card-body">
              <h2 className="card-title">Current Rank</h2>
              <div className="h-32 flex items-center justify-center">
                <p className="text-left text-gray-400">Rank badge placeholder coming soon</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-purple-950 bg-opacity-50 shadow-xl rounded-lg border border-purple-900">
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

      {/* Bottom Grid - Stack on mobile, 2 columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card shadow-xl rounded-lg bg-purple-950 bg-opacity-50 border border-purple-900">
          <div className="card-body">
            <h2 className="card-title">Achievements</h2>
            <div className="min-h-48 flex items-center justify-center">
              <p className="text-left text-gray-400">Achievements list coming soon</p>
            </div>
          </div>
        </div>

        <div className="card shadow-xl rounded-lg bg-purple-950 bg-opacity-50 border border-purple-900">
          <div className="card-body">
            <h2 className="card-title">Activity</h2>
            <div className="min-h-48 flex items-center justify-center">
              <p className="text-left text-gray-400">Activity feed coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
