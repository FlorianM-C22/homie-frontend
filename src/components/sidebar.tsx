"use client";

import React from "react";
import { PersonIcon, HomeIcon, GearIcon, RocketIcon } from "@radix-ui/react-icons";
import UserItem from "./UserItem";
import HomieLogo from "@/app/HomieLogo";
import Link from "next/link";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface IMenuItem {
  link: string;
  icon: JSX.Element;
  text: string;
}

const menuList: IMenuItem[] = [
  { link: "/dashboard", icon: <HomeIcon />, text: "Dashboard" },
  { link: "/builder", icon: <RocketIcon />, text: "Build" },
];

const settingsItems: IMenuItem[] = [
  { link: "/profile", icon: <PersonIcon />, text: "Profile" },
  { link: "/settings", icon: <GearIcon />, text: "Settings" },
];

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col gap-2 w-[250px] min-w-[250px] border-r min-h-screen p-4">
      <div className="flex justify-center">
        <Link href="/">
          <HomieLogo />
        </Link>
      </div>
      <div className="flex-grow overflow-y-auto">
        <Command>
          <CommandList>
            <CommandGroup heading="General">
              {menuList.map((item, index) => (
                <Link href={item.link} key={index}>
                  <CommandItem className="flex items-center gap-2 cursor-pointer">
                    {item.icon}
                    <span>{item.text}</span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
      <div className="mt-auto">
        <Command>
          <CommandList>
            <CommandGroup heading="Settings">
              {settingsItems.map((item, index) => (
                <Link href={item.link} key={index}>
                  <CommandItem className="flex items-center gap-2 cursor-pointer">
                    {item.icon}
                    <span>{item.text}</span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
};

export default Sidebar;
