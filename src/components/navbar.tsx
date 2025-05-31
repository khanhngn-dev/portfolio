import { openSearchCommand } from '@/libs/search-command';
import { loadTheme, saveTheme, type Theme, themeMap } from '@/libs/theme';
import { MenuIcon, SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import GithubIcon from './icons/github';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';

const links = [
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Libs',
    href: '/libs',
  },
  {
    title: 'Blogs',
    href: '/blogs',
  },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [theme, setTheme] = useState<Theme>('system');
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
    <div className="fixed top-4 left-1/2 -translate-x-1/2 max-w-6xl w-full px-4 z-10">
      <NavigationMenu className="bg-background/80 backdrop-blur-sm border p-1.5 rounded-lg w-full max-w-full">
        <Button
          className="flex sm:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <MenuIcon />
        </Button>
        <div className="px-3">
          <a href="/" className="font-semibold">
            khanhngn
          </a>
        </div>
        <NavigationMenuList className="gap-4 w-full flex-1 hidden sm:flex">
          {links.map(({ href, title }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink href={href}>{title}</NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <div className="flex-1 flex justify-end items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            onClick={openSearchCommand}
          >
            <SearchIcon />
          </Button>
          <Button
            variant="secondary"
            className="font-normal text-muted-foreground hidden sm:flex"
            onClick={openSearchCommand}
          >
            <SearchIcon />
            Search...
            <span className="text-xs font-mono border rounded-xs size-5 flex items-center justify-center ml-2">
              /
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <ActiveIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Object.entries(themeMap).map(([key, { icon: Icon, label }]) => (
                <DropdownMenuItem
                  key={key}
                  onClick={() => onToggleDarkMode(key as Theme)}
                >
                  <Icon />
                  {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" asChild>
            <a href="https://github.com/khanhngn-dev" target="_blank">
              <GithubIcon />
            </a>
          </Button>
        </div>
      </NavigationMenu>
      <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
        <DropdownMenuTrigger className="absolute inset-x-4" />
        <DropdownMenuContent className="w-(--radix-popper-anchor-width) bg-background/80 backdrop-blur-sm">
          <div className="flex flex-col gap-2">
            {links.map(({ href, title }) => (
              <DropdownMenuItem key={href} asChild>
                <a key={href} href={href}>
                  {title}
                </a>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
