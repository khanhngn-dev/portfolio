import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { SendIcon } from 'lucide-react';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

type InquiryFormData = {
  name: string;
  email: string;
  message: string;
};

const InquiryForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<InquiryFormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = (data: InquiryFormData) => {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(`Thank you, ${data.name}! Your message has been sent.`);
      form.reset();
    });
  };

  return (
    <Card className="max-w-2xl w-full mx-auto">
      <CardHeader>
        <CardTitle>Left your inquiries here</CardTitle>
        <CardDescription>
          What would you like to discuss? Feel free to reach out!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <Label>Name</Label>
            <Input
              className="text-sm"
              type="text"
              autoComplete="name"
              placeholder="John Doe"
              {...form.register('name', {
                required: true,
              })}
              aria-invalid={!!form.formState.errors.name}
            />
            {form.formState.errors.name && (
              <span className="text-sm text-destructive">Name is required</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input
              className="text-sm"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="john.doe@example.com"
              {...form.register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/,
              })}
              aria-invalid={!!form.formState.errors.email}
            />
            {form.formState.errors.email && (
              <span className="text-sm text-destructive">
                Please enter a valid email address
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label>Message</Label>
            <Textarea
              className="text-sm"
              name="message"
              placeholder="Anything really..."
              {...form.register('message', {
                required: true,
              })}
              aria-invalid={!!form.formState.errors.message}
            />
            {form.formState.errors.message && (
              <span className="text-sm text-destructive">
                Message is required
              </span>
            )}
          </div>
          <Button className="sm:self-end" type="submit" disabled={isPending}>
            Send
            <SendIcon />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InquiryForm;
