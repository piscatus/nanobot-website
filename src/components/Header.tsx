"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

const CoinGeckoNanoAPi =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=nano";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/donate", label: "Donate" },
];

type LogoProps = {
  setOpen: (state: boolean) => void;
};

type HamburgerProps = {
  isOpen: boolean;
  setOpen: (state: boolean) => void;
};

type DataProps = {
  current_price: number;
  price_change_percentage_24h: number;
};

export default function Header() {
  const [data, setData] = useState<DataProps | null>(null);

  // Fecthing data
  useEffect(() => {
    fetch(CoinGeckoNanoAPi)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  // Locking the body (making it unscrollable), while the navbar is open
  useEffect(() => {
    isOpen
      ? (document.getElementsByTagName("body")[0].style.overflow = "hidden")
      : (document.getElementsByTagName("body")[0].style.overflow = "");
  }, [isOpen]);

  // Resetting the navbar upon path change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-16 bg-black sticky z-50 inset-0"
    >
      <nav className="flex flex-row justify-between items-center h-full container py-4">
        <Link href={"/"} aria-label="Nanobot Logo (Redirecting to Home)">
          <Logo setOpen={setOpen} />
        </Link>
        <DesktopNavLinks pathname={pathname} />
        <div className="flex gap-2">
          <InviteButton />
          <Hamburger isOpen={isOpen} setOpen={setOpen} />
        </div>
      </nav>
      <MobileNavMenu isOpen={isOpen} pathname={pathname} nanoData={data} />
    </motion.header>
  );
}

function Logo({ setOpen }: LogoProps) {
  return (
    <svg
      className="h-9 fill-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1540.66 1448.01"
      onClick={() => setOpen(false)}
    >
      <g id="Nanobot">
        <g id="Body">
          <g>
            <path
              d="M997.31,1448a141.89,141.89,0,0,1-130.75-196l46.19-111.53-59.76-.09a110.23,110.23,0,0,1-80.9-35.81L749.78,1080l-28.23,17.37a71.88,71.88,0,0,1-107.65-44.59l-7.68-32.24-33.1,1.55c-1.7.08-3.42.12-5.11.12a110.11,110.11,0,0,1-82.47-37.41l-42.41-48.47L393.55,1056a140.8,140.8,0,0,1-53.15,64.17,142.23,142.23,0,0,1-78.08,23.36,141.88,141.88,0,0,1-130.74-196l19-45.93a27.5,27.5,0,1,1,50.81,21.07l-19,45.9A86.77,86.77,0,1,0,342.73,1035l53-127.85-24-18.73a338.41,338.41,0,0,1-126.39-218L242,647.89l-75.59-31.31c-66.2-27.42-88-87.35-86.34-134.3s27.67-105.2,95.66-127.85L977.66,87.21a140,140,0,0,1,169.48,70.19l378.08,756c22.23,44.46,20.27,93.76-5.38,135.26-25.9,41.92-71.37,67.95-118.65,67.95h0a142.54,142.54,0,0,1-54.75-11.25L1270.84,1074l-18.22,13.6A340.74,340.74,0,0,1,1050.16,1155a335.59,335.59,0,0,1-49.53-3.69l-30.91-4.63L917.38,1273a86.77,86.77,0,1,0,160.34,66.41l19-45.9a27.5,27.5,0,0,1,50.82,21l-19,45.93a140.8,140.8,0,0,1-53.14,64.16A142.3,142.3,0,0,1,997.31,1448ZM313.7,512.2a285.92,285.92,0,0,0,.09,220.08,295.56,295.56,0,0,0,13.26,27.8,284.78,284.78,0,0,0,94.67,102.71A291.55,291.55,0,0,0,469.52,888l470.65,195a291.29,291.29,0,0,0,51.69,16,285.24,285.24,0,0,0,54.47,6h.49l3.34,0a287.84,287.84,0,0,0,110.28-553.75l-470.66-195a286,286,0,0,0-109.95-22h0A287.88,287.88,0,0,0,314,511.61Z"
              transform="translate(-40 -40)"
            />
            <path
              d="M1021.89,120a100.09,100.09,0,0,1,89.47,55.29l378.08,756c21.76,43.51,7.07,79-3.63,96.34-18.67,30.21-51.1,49-84.63,49a102.93,102.93,0,0,1-39.44-8.2l-54.58-22.61-15.72-6.51a327.89,327.89,0,0,0-115.7-525L705.09,319.32A327.69,327.69,0,0,0,277.15,495.93l-.1.23-.31.75A327.7,327.7,0,0,0,252,608.73l-15.66-6.49-54.59-22.61C161,571,145,557.68,134.27,540a104,104,0,0,1,4-111.4c12-16.91,28.83-29.09,50.16-36.2L990.3,125.16a99.56,99.56,0,0,1,31.59-5.16M504.55,945.82l85.61,35.46-18.91.88c-1.08.06-2.17.08-3.24.08a70.09,70.09,0,0,1-52.37-23.75l-11.09-12.67m138.67,57.44,40.14,16.63,12.37,5.12,40.13,16.62-35.28,21.7a32,32,0,0,1-16.79,4.79,32,32,0,0,1-31-24.58l-9.59-40.28m145.7,60.35,88.81,36.79-24.67,0a70.14,70.14,0,0,1-51.38-22.74l-12.76-14M1021.9,40A179.53,179.53,0,0,0,965,49.26L163.1,316.48C5,369.15-2.8,589.79,151.12,653.54l54.58,22.61A378.5,378.5,0,0,0,347.08,920l-41.31,99.73a46.78,46.78,0,1,1-86.43-35.8l19-45.91a67.5,67.5,0,1,0-124.73-51.67l-19,45.92c-38.36,92.6,5.77,199.14,98.38,237.5a180.8,180.8,0,0,0,69.32,13.84c71.36,0,139.21-42.29,168.18-112.22l24.93-60.18A150.08,150.08,0,0,0,568,1062.24q3.5,0,7-.16a111.83,111.83,0,0,0,167.52,69.39,150.19,150.19,0,0,0,110.42,48.89l-23.32,56.31c-38.36,92.6,5.77,199.14,98.37,237.5A180.7,180.7,0,0,0,997.31,1488c71.36,0,139.21-42.29,168.18-112.21l19-45.92a67.5,67.5,0,1,0-124.72-51.66l-19,45.91a46.78,46.78,0,1,1-86.43-35.8l40.38-97.49a374.5,374.5,0,0,0,55.45,4.13,379.17,379.17,0,0,0,226.38-75.27l54.58,22.61a182.36,182.36,0,0,0,70.06,14.29c124.87,0,222.85-135,159.81-261.1l-378.08-756A180.07,180.07,0,0,0,1021.9,40Zm28.26,1025-3.3,0a245,245,0,0,1-46.82-5.15A250.57,250.57,0,0,1,955.48,1046l-40-16.58-140.6-58.24L726.34,951.1,714,946l-48.53-20.1L516.34,864.11l-31.51-13.05a250.32,250.32,0,0,1-41.24-21.76A244.86,244.86,0,0,1,362.19,741a252.9,252.9,0,0,1-11.45-24,246.16,246.16,0,0,1-.07-189.49l.07-.16A247.91,247.91,0,0,1,579.82,374.27h0a246.15,246.15,0,0,1,94.64,19l470.66,194.95a247.82,247.82,0,0,1,41.33,436,248.08,248.08,0,0,1-136.3,40.82Z"
              transform="translate(-40 -40)"
            />
          </g>
        </g>
        <g id="Eyes">
          <path
            d="M700.8,580a60.84,60.84,0,0,1-4.66,23.32L648.68,717.85a61,61,0,0,1-79.7,33q-2.47-1-4.8-2.24A61,61,0,0,1,536,671.16L547.24,644l36.18-87.36A61,61,0,0,1,700.8,580Z"
            transform="translate(-40 -40)"
          />
          <path
            d="M1098.65,744.76a60.84,60.84,0,0,1-4.66,23.32l-35.81,86.46-11.64,28.1a61,61,0,0,1-79.71,33c-1.22-.51-2.42-1-3.59-1.63A61,61,0,0,1,933.82,836l47.45-114.56a61,61,0,0,1,117.38,23.37Z"
            transform="translate(-40 -40)"
          />
        </g>
      </g>
    </svg>
  );
}

function DesktopNavLinks({ pathname }: { pathname: string }) {
  return (
    <ul className="hidden gap-2 flex-row items-center select-none absolute left-1/2 -translate-x-1/2 lg:flex">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={`px-4 h-9 flex items-center rounded-lg text-transparent font-semibold transition-all duration-300 
                      after:absolute after:content-[attr(aria-label)] after:transition-all after:duration-300
                      hover:after:font-semibold hover:after:text-black
                      active:scale-95
                      speech:after:hidden 
                      ${
                        link.href === pathname
                          ? "bg-secondary hover:bg-primary after:text-black after:semibold"
                          : "hover:bg-tertiary after:text-white after:font-normal"
                      }`}
            href={link.href}
            aria-label={link.label}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function InviteButton() {
  return (
    <Link
      href={"/invite"}
      className="font-semibold h-9 text-black bg-primary px-4 rounded-lg transition duration-300 flex items-center hover:bg-tertiary active:scale-95 active:bg-secondary"
    >
      Add Nanobot
    </Link>
  );
}

function Hamburger({ isOpen, setOpen }: HamburgerProps) {
  return (
    <button
      className="aspect-square h-9 flex justify-center items-center rounded-lg bg-tertiary lg:hidden"
      aria-label="Navigation Hamburgermenu"
      onClick={() => setOpen(!isOpen)}
    >
      <svg
        className="stroke-black stroke-2 h-6 aspect-square"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            className={`transition duration-300 origin-center ${
              isOpen ? "translate-y-[6px] opacity-0" : ""
            }`}
            strokeLinecap="round"
            d="M4 6h16"
          ></path>
        </g>
        <g>
          <path
            className={`transition duration-200 origin-center ${
              isOpen ? "rotate-45 duration-500" : ""
            }`}
            strokeLinecap="round"
            d="M4 12h16"
          ></path>
          <path
            className={`transition duration-200 origin-center ${
              isOpen ? "-rotate-45 duration-500" : ""
            }`}
            strokeLinecap="round"
            d="M4 12h16"
          ></path>
        </g>
        <g>
          <path
            className={`transition duration-300 origin-center ${
              isOpen ? "-translate-y-[6px] opacity-0" : ""
            }`}
            strokeLinecap="round"
            d="M4 18h16"
          ></path>
        </g>
      </svg>
    </button>
  );
}

function MobileNavMenu({
  isOpen,
  pathname,
  nanoData,
}: {
  isOpen: boolean;
  pathname: string;
  nanoData: DataProps | null;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute w-screen h-dynamic-screen-minusnav container py-4 bg-black outline-none"
        >
          <nav className="h-full w-full overflow-y-scroll flex flex-col justify-between">
            <ul className="grid gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className={`h-11 px-4 flex text-lg items-center rounded-lg transition-all duration-200 hover:text-black hover:font-semibold active:scale-95 
                    ${
                      link.href === pathname
                        ? "bg-secondary text-black font-semibold hover:bg-primary"
                        : "hover:bg-tertiary"
                    }`}
                    href={link.href}
                  >
                    <span className="flex justify-between w-full">
                      <span>{link.label}</span>
                      <span>{link.href === pathname && "->"}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <NanoTicker nanoData={nanoData} />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NanoTicker({ nanoData }: { nanoData: DataProps | null }) {
  return (
    <div className="grid gap-1">
      <p className="text-gray text-right text-sm">Data provided by CoinGecko</p>
      {nanoData ? (
        <div
          className={`h-11 rounded-lg px-4 text-black text-lg font-semibold flex items-center justify-between
              ${
                nanoData.price_change_percentage_24h >= 0
                  ? "bg-tertiary"
                  : "bg-secondary"
              }`}
        >
          <span>Ӿ1 ≈ ${nanoData.current_price}</span>
          <span>
            {nanoData.price_change_percentage_24h >= 0 && "+"}
            {nanoData.price_change_percentage_24h}%
          </span>
        </div>
      ) : (
        <div className="h-11 rounded-lg px-4 text-black bg-primary text-lg font-semibold flex items-center justify-center">
          CoinGecko API unreachable
        </div>
      )}
    </div>
  );
}
