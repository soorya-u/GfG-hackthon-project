import {
  NavigationMenu,
  // NavigationMenuContent,
  //   NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  //   NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { NavLink } from "react-router-dom";

import icon from "@/assets/icon.png";

import "./style.css";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center pt-[1rem] px-[7vw] pb-[1rem]">
        <div className="max-[630px]:hidden">
          <a
            className="flex justify-center items-center gap-[0.5rem]"
            href="https://github.com/puneeth072003/GfG-hackthon-project"
          >
            <img src={icon} alt="logo" className="w-[1.5rem]" />
            <h1 className="text-[1.7rem] text-[#44D9E6] tracking-[0.20rem] font-extrabold font-overlock">
              Vitista
            </h1>
          </a>
        </div>
        <div  className="max-[630px]:w-full max-[630px]:flex max-[630px]:justify-evenly">
          <NavigationMenu>
            <NavigationMenuList className="gap-[3rem]">
              <NavigationMenuItem>
                <NavigationMenuLink className="font-medium">
                  <NavLink to={"/"} className="underline-effect">
                    Home
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="font-medium">
                  <NavLink to={"/algorithms"} className="underline-effect text-center">
                    Risk Assessments
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="font-medium">
                  <NavLink to={"/about"} className="underline-effect">
                    About
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    </>
  );
}

export default Header;