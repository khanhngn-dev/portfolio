import {
  searchCommandEventKey,
  searchCommandEventMap,
} from '@/libs/search-command';
import { useEffect, useState } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './ui/command';

const openDialogKeyBind = {
  '/': (event: KeyboardEvent) => event.ctrlKey || event.metaKey,
  k: (event: KeyboardEvent) => event.ctrlKey || event.metaKey,
};

const closeDialogKeyBind = {
  Escape: (event: KeyboardEvent) => event.key === 'Escape',
  Enter: (event: KeyboardEvent) => event.key === 'Enter',
};

const useDialogKeyBind = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key in openDialogKeyBind &&
        openDialogKeyBind[event.key](event)
      ) {
        event.preventDefault();
        setOpen(true);
      }

      if (
        event.key in closeDialogKeyBind &&
        closeDialogKeyBind[event.key](event)
      ) {
        event.preventDefault();
        setOpen(false);
      }
    };

    const handleCustomEvent = (event: CustomEvent) => {
      const { detail } = event;
      if (detail === searchCommandEventMap.open) {
        setOpen(true);
      }
      if (detail === searchCommandEventMap.close) {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener(searchCommandEventKey, handleCustomEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener(searchCommandEventKey, handleCustomEvent);
    };
  }, []);

  return [open, setOpen] as const;
};

const SearchCommand = () => {
  const [open, setOpen] = useDialogKeyBind();

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search for a library, project, or blog..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Projects">
          <CommandItem>Portfolio</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Libs"></CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Blog"></CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SearchCommand;
