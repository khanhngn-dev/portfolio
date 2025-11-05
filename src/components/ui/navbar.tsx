import { saveTheme } from '@/libs/theme';
import { MoonIcon, SunIcon } from 'lucide-react';
import GithubIcon from '../icons/github';
import { Button } from './button';
import { NavigationMenu } from './navigation-menu';

const links = [];

const Navbar = () => {
  const onToggleTheme = () => {
    const isDarkMode = document.body.classList.contains('dark');
    document.body.classList.toggle('dark', !isDarkMode);
    saveTheme(!isDarkMode ? 'dark' : 'light');
  };

  const onHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onHashLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.slice(href.indexOf('#') + 1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 max-w-4xl w-full px-4 z-10">
      <NavigationMenu
        viewport={false}
        className="bg-background/80 backdrop-blur-sm border p-1.5 rounded-lg w-full max-w-full"
      >
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex sm:hidden" variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[calc(var(--radix-popper-available-width)-2rem)] mx-4 mt-2 bg-background/80 backdrop-blur-sm">
            <div className="flex flex-col gap-2">
              {links.map(({ href, title }) => (
                <DropdownMenuItem key={href} asChild>
                  <a href={href} onClick={(e) => onHashLinkClick(e, href)}>
                    {title}
                  </a>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu> */}
        <div className="px-3">
          <a href="/" className="font-semibold" onClick={onHomeClick}>
            khanhngn
          </a>
        </div>
        {/* <NavigationMenuList className="gap-4 w-full flex-1 hidden sm:flex">
          {links.map(({ href, title }) => {
            return (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  href={href}
                  onClick={(e) => onHashLinkClick(e, href)}
                >
                  {title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList> */}
        <div className="flex-1 flex justify-end items-center gap-1">
          {/* <Button variant="ghost" size="icon" onClick={openSearchCommand}>
            <SearchIcon />
          </Button> */}
          <Button size="icon" variant="ghost" onClick={onToggleTheme}>
            <SunIcon className="dark:hidden" />
            <MoonIcon className="hidden dark:flex" />
          </Button>
          <Button variant="ghost" asChild>
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
