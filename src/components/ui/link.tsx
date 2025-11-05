import { Button } from './button';

const Link = (props: React.ComponentProps<'a'>) => {
  return (
    <Button variant="secondary" asChild size="sm">
      <a {...props} />
    </Button>
  );
};

export default Link;
