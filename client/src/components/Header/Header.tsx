"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "FEATURED TREK",
    "HOW IT WORKS",
    "TREKKING GUIDE",
    "SAFETY & TRUST",
  ];

  return (
    <nav className="absolute top-0 z-50 mx-auto w-full h-fit">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        height={"5rem"}
        shouldHideOnScroll
        isBlurred={false}
        className="mx-auto bg-transparent"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-white"
          />
          <NavbarBrand>
            <Link href="/" className="font-bold text-inherit text-white">
              TrekOn
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-8" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link href="#" className="text-white text-sm md:text-md">
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} href="#" className="text-black bg-white">
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full text-black" href="#" size="md">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </nav>
  );
};

export default React.memo(Header);
