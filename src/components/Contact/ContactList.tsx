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
        <li key={contact.url}>
          <Contact {...contact} className="p-2 w-max" />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
