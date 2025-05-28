export const searchCommandEventMap = {
  open: 'open',
  close: 'close',
};

export const searchCommandEventKey = 'dialog-custom-event';

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
