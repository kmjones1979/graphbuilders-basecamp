"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useAccount } from "wagmi";
import {
  BanknotesIcon,
  Bars3Icon,
  BeakerIcon,
  BugAntIcon,
  CheckCircleIcon,
  DocumentCurrencyBangladeshiIcon,
  FlagIcon,
  HomeIcon,
  LockClosedIcon,
  MoonIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import { ChartBarIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick, useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Debug Contracts",
    href: "/debug",
    icon: <BugAntIcon className="h-4 w-4" />,
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-secondary shadow-md" : ""
              } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export const LeaderboardLink = () => {
  return (
    <Link href="/leaderboard" passHref className="ml-1 btn btn-ghost">
      <ChartBarIcon className="h-4 w-4" />
      Leaderboard
    </Link>
  );
};

export const DebugContractsLink = () => {
  return (
    <Link href="/debug" passHref className="ml-1 btn btn-ghost">
      <BugAntIcon className="h-4 w-4" />
      Debug Contracts
    </Link>
  );
};

const Ready = () => {
  return <button className="btn btn-ghost btn-xs text-green-400">Ready</button>;
};

const Complete = () => {
  return (
    <button className="btn btn-ghost btn-xs text-green-400">
      <CheckCircleIcon className="h-4 w-4" /> Complete
    </button>
  );
};

const Locked = () => {
  return (
    <button className="btn btn-ghost btn-xs text-red-400">
      <LockClosedIcon className="h-4 w-4" /> Locked
    </button>
  );
};

export const Missions = () => {
  const { address } = useAccount();

  const userCredentials = Array.from({ length: 4 }, (_, index) =>
    useScaffoldReadContract({
      contractName: "Basecamp",
      functionName: "balanceOf",
      args: [address ? address : "", BigInt(index)],
    }),
  );

  const [userCredential0, userCredential1, userCredential2, userCredential3] = userCredentials;

  return (
    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-80 p-2 shadow">
      <li>
        <a href="/mission-0">
          <BookOpenIcon className="h-4 w-4" />
          0: Orientation {userCredential0?.data ? <Complete /> : <Ready />}
        </a>
      </li>
      <li>
        <a href="/mission-1">
          <FlagIcon className="h-4 w-4" />
          1: Alpha Centauri {userCredential1?.data ? <Complete /> : <Ready />}
        </a>
      </li>
      <li>
        <a href="/mission-2">
          <WifiIcon className="h-4 w-4" />
          2: Establish Comms {userCredential2?.data ? <Complete /> : <Ready />}
        </a>
      </li>
      <li>
        <a href="/mission-3">
          <MoonIcon className="h-4 w-4" />
          3: Lunar Economy {userCredential3?.data ? <Complete /> : <Ready />}
        </a>
      </li>
      <li>
        <a>
          <BeakerIcon className="h-4 w-4" />
          4: Crystalic Fusion <Locked />
        </a>
      </li>
      <li>
        <a>
          <BanknotesIcon className="h-4 w-4" />
          5: Interstellar Trade <Locked />
        </a>
      </li>
      <li>
        <a>
          <DocumentCurrencyBangladeshiIcon className="h-4 w-4" />
          6: Galactic Governance <Locked />
        </a>
      </li>
    </ul>
  );
};

export const MissionDropdown = () => {
  return (
    <details className="dropdown">
      <summary className="ml-1 btn btn-ghost">
        <RocketLaunchIcon className="h-4 w-4" />
        Missions
      </summary>
      <Missions />
    </details>
  );
};

export const MissionsStaticLinks = () => {
  return (
    <>
      <Missions />
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <MissionsStaticLinks />
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image
              alt="logo"
              className="cursor-pointer"
              fill
              src={resolvedTheme === "light" ? "/logo4.png" : "/logo3.png"}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">The Graph</span>
            <span className="text-xs">Builders Basecamp</span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
          <MissionDropdown />
          <LeaderboardLink />
          <DebugContractsLink />
        </ul>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};
