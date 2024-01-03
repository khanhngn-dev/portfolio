import clsx from 'clsx';

import Contact, { ContactProps } from './Contact';

type ContactListProps = {
  contacts: ContactProps[];
  className?: string;
};

const ContactList = ({ contacts, className }: ContactListProps) => {
  return (
    <ul className={clsx('gap-8 flex', className)}>
      {contacts.map((contact) => (
        <li key={contact.url}>
          <Contact {...contact} className="py-2" />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
