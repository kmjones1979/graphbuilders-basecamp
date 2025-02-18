"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TerminalText from "../components/TerminalText";
import { nftActive, nftComingSoon } from "./config/constants";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { FaChevronDown } from "react-icons/fa";

interface ComponentProps {
  resolvedTheme: string | undefined;
  router: any;
}

interface NFTCardProps {
  nft: {
    id: number;
    name: string;
    description: string;
    image: string;
    mission: number;
  };
  isActive?: boolean;
}

// Component for the hero section
const Hero = ({ resolvedTheme, router }: ComponentProps) => (
  <div
    className="hero min-h-screen"
    style={{
      backgroundImage: resolvedTheme === "light" ? "url(/bg-light.png)" : "url(/bg-dark.png)",
      backgroundPosition: "center top",
      backgroundSize: "cover",
    }}
  >
    <div className="hero-overlay bg-opacity-20" />
    <div className="hero-content text-neutral-content flex flex-col items-center justify-center w-full h-screen px-4 sm:px-8">
      <div className="max-w-1xl text-center">
        <p className="mb-7 text-lg sm:text-xl text-violet-300 the-graph-text">Welcome to</p>
        <h1
          className={`mb-7 text-3xl sm:text-6xl the-graph-text font-semibold ${
            resolvedTheme === "light" ? "text-gray-500" : "text-white"
          }`}
        >
          The Graph
        </h1>
        <div className="flex justify-center">
          <TerminalText
            text="Builders Basecamp"
            className={`mb-5 text-4xl sm:text-6xl silkscreen-text text-center ${
              resolvedTheme === "light" ? "text-gray-500" : "text-white"
            }`}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="p-2 mb-10 max-w-lg text-center text-sm sm:text-xl text-violet-300 the-graph-text">
            A series of missions where you will test your ability to write smart contracts and develop subgraphs on The
            Graph protocol. To get started click the button below.
          </p>
          <button className="btn btn-primary text-lg sm:text-base py-2 px-4" onClick={() => router.push("/mission-0")}>
            START
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Component for NFT cards
const NFTCard = ({ nft, isActive = true }: NFTCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="card bg-base-200 hover:bg-base-300 transition-all duration-300 shadow-xl overflow-hidden group w-full max-w-[300px]"
  >
    <figure className="relative aspect-square overflow-hidden">
      <img
        src={nft.image}
        alt={nft.name}
        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-white text-sm">{nft.description}</p>
      </div>
    </figure>
    <div className="card-body p-4">
      <h3 className="card-title text-lg mb-2">{nft.name}</h3>
      {isActive && (
        <div className="flex justify-between items-center">
          <span className="text-sm text-purple-500">Mission {nft.mission}</span>
          <motion.span className="text-sm text-purple-500" whileHover={{ x: 5 }}>
            Start Mission →
          </motion.span>
        </div>
      )}
    </div>
  </motion.div>
);

// Component for the powered by section
const PoweredBy = ({ resolvedTheme }: { resolvedTheme: string | undefined }) => (
  <div className="p-6 bg-base-100 items-center">
    <h2 className="text-center text-2xl font-bold pt-12 pb-4">Powered by</h2>
    <div className="flex justify-center space-x-8">
      {[
        {
          href: "https://scaffoldeth.io",
          img: resolvedTheme === "light" ? "/logos/se2-light.svg" : "/logos/se2-dark.svg",
          alt: "Scaffold-ETH",
        },
        {
          href: "https://thegraph.com",
          img: resolvedTheme === "light" ? "/logos/thegraph-dark.svg" : "/logos/thegraph-light.svg",
          alt: "The Graph",
        },
        {
          href: "https://chain.link",
          img: resolvedTheme === "light" ? "/logos/chainlink-dark.svg" : "/logos/chainlink-light.svg",
          alt: "Chainlink",
        },
        {
          href: "https://base.org",
          img: "/logos/base.svg",
          alt: "Base",
        },
      ].map(logo => (
        <a key={logo.href} href={logo.href} target="_blank" rel="noopener noreferrer">
          <img src={logo.img} alt={logo.alt} className="h-10" />
        </a>
      ))}
    </div>
  </div>
);

const Home: NextPage = () => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  useEffect(() => {}, [resolvedTheme]);

  return (
    <>
      <div className="justify-center p-0 sm:pt-1 bg-base-100">
        <Hero resolvedTheme={resolvedTheme} router={router} />

        <div className="flex flex-col items-center mt-12 mb-12 space-y-1">
          <FaChevronDown className="h-8 w-8 text-primary animate-pulse-slow" />
          <FaChevronDown className="h-8 w-8 text-primary -mt-4 animate-pulse-slow delay-150" />
        </div>

        <h2 className="text-center text-2xl font-bold pb-8">Complete the Missions and Earn NFTs</h2>

        <div className="py-2 px-2 bg-base-100 items-center">
          <div className="flex justify-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 justify-center">
              {nftActive.map(nft => (
                <Link href={`/mission-${nft.mission}`} key={nft.id}>
                  <NFTCard nft={nft} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-center text-1xl p-8">Additional Missions Coming Soon...</h2>

        <div className="bg-base-100">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-7xl">
              {nftComingSoon.slice(0, 3).map(nft => (
                <div key={nft.id} className="flex justify-center">
                  <NFTCard nft={nft} isActive={false} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <PoweredBy resolvedTheme={resolvedTheme} />
      </div>
    </>
  );
};

export default Home;
