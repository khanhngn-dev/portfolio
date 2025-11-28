import GithubIcon from '@/components/icons/github';
import { saveTheme } from '@/libs/theme';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from './button';

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

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 max-w-2xl w-full px-4 z-10">
      <nav className="relative flex flex-1 items-center bg-background/80 backdrop-blur-sm border-2 p-1 rounded-lg w-full max-w-full">
        <div className="px-3">
          <a href="/" className="font-semibold" onClick={onHomeClick}>
            khanhngn
          </a>
        </div>
        <div className="flex-1 flex justify-end items-center gap-1">
          <Button size="icon" variant="ghost" onClick={onToggleTheme}>
            <SunIcon className="dark:hidden" />
            <MoonIcon className="hidden dark:flex" />
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <a href="https://github.com/khanhngn-dev" target="_blank">
              <GithubIcon />
            </a>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
