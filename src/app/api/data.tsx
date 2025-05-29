import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Privacy Policy", herf: "#" },
  { label: "Legal Info", herf: "#" },
  { label: "Investor Relations", herf: "#" },
  { label: "Company Updates", herf: "#" },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Bitcoin",
    short: "BTC/USD",
    icon: "images/icons/icon-bitcoin.svg",
    background: "bg-warning bg-opacity-20",
    price: "$93,291.24",
    mark: "$94,040.99 (+0.9%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Ethereum",
    short: "ETH/USD",
    icon: "images/icons/icon-ethereum.svg",
    background: "bg-light_grey",
    price: "$3,128.84",
    mark: "$4,878.26 (+35.9%)",
    width: 18,
    height: 23,
    padding: "px-4 py-2",
  },
  {
    title: "Bitcoin Cash ",
    short: "BTC/USD",
    icon: "images/icons/icon-bitcoin-circle.svg",
    background: "bg-warning bg-opacity-20",
    price: "$443.27",
    mark: "$3,785.82 (+88.3%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "Litecoin",
    short: "LTC/USD",
    icon: "images/icons/icon-litecoin.svg",
    background: "bg-light_grey",
    price: "$86.11",
    mark: "$410.26 (+79.1%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Solana",
    short: "SOL/USD",
    icon: "images/icons/icon-solana.svg",
    background: "bg-light_grey",
    price: "$238.70",
    mark: "$259.96 (+8.2%)",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Dogecoin",
    short: "DOGE/USD",
    icon: "images/icons/icon-dogecoin.svg",
    background: "bg-light_grey",
    price: "$0.394",
    mark: "$0.7316 (+46.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "images/portfolio/icon-wallet.svg",
    title: "Track your investments",
  },
  {
    image: "images/portfolio/icon-vault.svg",
    title: "Secure asset storage",
  },
  {
    image: "images/portfolio/icon-mobileapp.svg",
    title: "Access on the go",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "Fully Encrypted" },
  { title: "Incredibly Affordable" },
  { title: "Built to Last" },
  { title: "User-Friendly" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "images/perks/icon-support.svg",
    title: "Round-the-Clock Help",
    text: "Have questions? Our expert team is here anytime you need.",
    space: "lg:mt-8",
  },
  {
    icon: "images/perks/icon-community.svg",
    title: "Global Network",
    text: "Connect with users in our vibrant global community",
    space: "lg:mt-14",
  },
  {
    icon: "images/perks/icon-academy.svg",
    title: "Learning Center",
    text: "Explore blockchain and<br /> crypto essentials at no cost.",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "images/timeline/icon-planning.svg",
    title: "Initial Strategy",
    text: "Define goals, scope, and technical foundation",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "images/timeline/icon-refinement.svg",
    title: "Enhancement",
    text: "Polish and optimize every detail of the plan",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "images/timeline/icon-prototype.svg",
    title: "Demo Creation",
    text: "Craft a demo version to gather early feedback",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "images/timeline/icon-support.svg",
    title: "Ongoing Care",
    text: "Launch the product and continue proactive assistance",
    position: "md:bottom-0 md:right-0",
  },
];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];

