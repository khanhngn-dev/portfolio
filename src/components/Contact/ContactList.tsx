import clsx from 'clsx';

import Contact, { ContactProps } from './Contact';

type ContactListProps = {
  contacts: ContactProps[];
  className?: string;
};

const ContactList = ({ contacts, className }: ContactListProps) => {
  return (
    <ul className={clsx('gap-8 flex flex-col', className)}>
      {contacts.map((contact) => (
        <li key={contact.url} className="border border-solid border-white/40 bg-neutral-850/50">
          <Contact {...contact} className="p-2" />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
