import clsx from 'clsx';

type TooltipProps = {
  children: React.ReactNode;
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
};

const positions = {
  top: 'bottom-[calc(100%_+_0.5rem)] left-1/2 -translate-x-1/2',
  bottom: 'top-full left-1/2 -translate-x-1/2',
  left: '-left-3 top-1/2 -translate-y-1/2',
  right: '-right-3 top-1/2 -translate-y-1/2',
};

const Tooltip = ({ children, text, position = 'top' }: TooltipProps) => {
  return (
    <div className="group/tooltip relative">
      {children}
      <div
        className={clsx(
          'opacity-0 absolute invisible group-hover/tooltip:opacity-100 group-hover:visible transition-all bg-neutral-900 shadow-2xl z-10 w-max px-2 py-1 text-sm font-light text-white/80 select-none',
          positions[position],
        )}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
