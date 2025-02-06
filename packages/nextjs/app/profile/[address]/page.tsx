import { FC } from "react";
import { Address } from "~~/components/scaffold-eth";

const ProfilePage: FC<{ params: { address: string } }> = ({ params }) => {
  const { address } = params;

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-4xl font-bold">Profile</h1>
      <p>Coming soon!</p>
      <div className="flex items-center gap-2">
        <span className="font-bold">Address:</span>
        <Address address={address} />
      </div>

      {/* Add more profile information here */}
      {/* You can use useScaffoldReadContract to fetch on-chain data for this address */}
    </div>
  );
};

export default ProfilePage;
