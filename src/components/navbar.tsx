import { AlbumIcon, MenuIcon, PackageIcon, PanelsTopLeftIcon } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useEffect, useState } from 'react';
import { loadTheme, saveTheme, Theme, themeMap } from '@/libs/theme';
import GithubIcon from './icons/github';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

const links = [
  {
    title: 'projects',
    href: '/projects',
    icon: PanelsTopLeftIcon,
  },
  {
    title: 'libs',
    href: '/libs',
    icon: PackageIcon,
  },
  {
    title: 'blog',
    href: '/blog',
    icon: AlbumIcon,
  },
];

const Navbar = () => {
  const [theme, setTheme] = useState<Theme>(Theme.SYSTEM);
  const ActiveIcon = themeMap[theme].icon;

  const onToggleDarkMode = (theme: Theme) => {
    saveTheme(theme);
    setTheme(theme);
  };

  useEffect(() => {
    const theme = loadTheme();
    setTheme(theme);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 max-w-6xl w-full px-4">
      <NavigationMenu className="bg-accent/50 backdrop-blur-md border p-1.5 rounded-lg w-full max-w-full">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="flex sm:hidden" variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="py-10">
            <SheetHeader hidden>
              <SheetTitle>khanhngn-dev</SheetTitle>
              <SheetDescription>khanhngn's personal portfolio</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-2">
              {links.map(({ href, icon: Icon, title }) => (
                <NavigationMenuLink key={href} href={href}>
                  <Icon />
                  {title}
                </NavigationMenuLink>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex-1 px-3">
          <a href="/" className="font-semibold">
            khanhngn
          </a>
        </div>
        <NavigationMenuList className="gap-4 w-full flex-1 hidden sm:flex">
          {links.map(({ href, icon: Icon, title }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink href={href}>
                <Icon />
                {title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <div className="flex-1 flex justify-end gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <ActiveIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Object.entries(themeMap).map(([key, { icon: Icon, label }]) => (
                <DropdownMenuItem key={key} onClick={() => onToggleDarkMode(key as Theme)}>
                  <Icon />
                  {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="icon" className="border bg-white not-dark:hover:bg-accent" asChild>
            <a href="https://github.com/khanhngn-dev" target="_blank">
              <GithubIcon />
            </a>
          </Button>
        </div>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
