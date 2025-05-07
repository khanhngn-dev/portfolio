import { AlbumIcon, PackageIcon, PanelsTopLeftIcon } from 'lucide-react';
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
import { loadTheme, saveTheme, Theme, themeMap } from '@/lib/theme';
import GithubIcon from './icons/github';

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
    <div className="fixed top-4 left-1/2 -translate-x-1/2 max-w-4xl w-full px-5">
      <NavigationMenu className="bg-accent border p-1.5 rounded-lg w-full max-w-full">
        <div className="flex-1 px-3">
          <a href="/" className="font-semibold">
            khanhngn
          </a>
        </div>
        <NavigationMenuList className="gap-4 w-full flex-1">
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
              <Button size="icon" variant="outline">
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
          <Button size="icon" className='border bg-white not-dark:hover:bg-accent' asChild>
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
