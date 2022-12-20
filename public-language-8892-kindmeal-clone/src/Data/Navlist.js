import { BiHomeCircle, BiFoodMenu } from "react-icons/bi";
import { GiMeal, GiHotMeal, GiArtilleryShell } from "react-icons/gi";
import { MdOutlineAddReaction, MdLiveHelp } from "react-icons/md";
import { VscFileSymlinkDirectory } from "react-icons/vsc";

export const links = [
    {
      to: "/",
      title: "Home",
      icon: <BiHomeCircle />,
    },
    {
      to: "/meals",
      title: "Meal Deals",
      icon: <GiMeal />,
    },
    {
      to: "/moments",
      title: "KindMoments",
      icon: <MdOutlineAddReaction />,
    },
    {
      to: "/picks",
      title: "Hot Picks",
      icon: <GiHotMeal />,
    },
    {
      to: "/recipe",
      title: "Recipes",
      icon: <BiFoodMenu />,
    },
    {
      to: "/directory",
      title: "Directory",
      icon: <VscFileSymlinkDirectory />,
    },
    {
      to: "/aticles",
      title: "Articles",
      icon: <GiArtilleryShell />,
    },
    {
      to: "/help",
      title: "Help",
      icon: <MdLiveHelp />,
    },
  ];