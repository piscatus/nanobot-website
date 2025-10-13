import {
  BiBarChartSquare,
  BiCloudDrizzle,
  BiCodeBlock,
  BiCog,
  BiCompass,
  BiExport,
  BiFileFind,
  BiGift,
  BiHelpCircle,
  BiImport,
  BiMeteor,
  BiWater,
} from "react-icons/bi";

// style.color should be the same as tailwind custom black
const style = {
  size: "32px",
  color: "#151417",
};

export default function Icon({ name = "" }: { name?: string }) {
  switch (name.toLowerCase()) {
    case "/audit":
      return <BiFileFind size={style.size} color={style.color} />;
    case "/config":
      return <BiCog size={style.size} color={style.color} />;
    case "/drop":
      return <BiMeteor size={style.size} color={style.color} />;
    case "/fish":
      return <BiWater size={style.size} color={style.color} />;
    case "/guide":
      return <BiCompass size={style.size} color={style.color} />;
    case "/gift":
      return <BiGift size={style.size} color={style.color} />;
    case "/help":
      return <BiHelpCircle size={style.size} color={style.color} />;
    case "/leaderboards":
      return <BiBarChartSquare size={style.size} color={style.color} />;
    case "/rain":
      return <BiCloudDrizzle size={style.size} color={style.color} />;
    case "/receive":
      return <BiImport size={style.size} color={style.color} />;
    case "/send":
      return <BiExport size={style.size} color={style.color} />;
    default:
      return <BiCodeBlock size={style.size} color={style.color} />;
  }
}
