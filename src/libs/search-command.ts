export const searchCommandEventMap = {
  open: 'open',
  close: 'close',
};

export const searchCommandEventKey = 'dialog-custom-event';

export const openDialogKeyBind = {
  '/': () => true,
  k: (event: KeyboardEvent) => event.ctrlKey || event.metaKey,
};

export const closeDialogKeyBind = {
  Escape: (event: KeyboardEvent) => event.key === 'Escape',
};

export const openSearchCommand = () => {
  const event = new CustomEvent(searchCommandEventKey, {
    detail: searchCommandEventMap.open,
  });
  window.dispatchEvent(event);
};

export const closeSearchCommand = () => {
  const event = new CustomEvent(searchCommandEventKey, {
    detail: searchCommandEventMap.close,
  });
  window.dispatchEvent(event);
};
