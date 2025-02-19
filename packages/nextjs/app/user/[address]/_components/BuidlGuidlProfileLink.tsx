"use client";

import { FC, useEffect, useState } from "react";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BuidlGuidlLink: FC<{ address: string }> = ({ address }) => {
  const [hasProfile, setHasProfile] = useState(false);
  const buidlGuidlUrl = `https://app.buidlguidl.com/builders/${address}`;

  useEffect(() => {
    const checkBuidlGuidlProfile = async () => {
      try {
        const response = await fetch(`/api/buidlguidl?address=${address}`);
        const data = await response.json();
        setHasProfile(data.exists);
      } catch (error) {
        console.error("Error checking BuidlGuidl profile:", error);
        setHasProfile(false);
      }
    };

    checkBuidlGuidlProfile();
  }, [address]);

  if (!hasProfile) return null;

  return (
    <a
      href={buidlGuidlUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-purple-500 transition-colors"
    >
      <FontAwesomeIcon icon={faFortAwesome} className="w-6 h-6" title="BuidlGuidl Profile" />
    </a>
  );
};

export default BuidlGuidlLink;
