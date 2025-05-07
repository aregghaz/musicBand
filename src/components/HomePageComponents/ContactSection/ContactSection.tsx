import React, { FC } from 'react';
import './ContactSection.scss';
import { isValidEmail, isValidPhone } from '@utils/index';
import Link from 'next/link';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';

interface IContactSection {
  contacts: any;
  socialLinks: any;
}

const ContactSection: FC<IContactSection> = ({ contacts, socialLinks }) => {
  const renderPhone = (phone: string | null) => {
    const cleanedPhone = phone?.replace(/[^\d+]/g, '');

    if (isValidPhone(cleanedPhone as string | null)) {
      return <Link href={`tel:${cleanedPhone}`}>T {phone}</Link>;
    } else {
      return `T ${phone}`;
    }
  };

  const renderEmail = (email: string | null) => {
    if (isValidEmail(email)) {
      return <Link href={`mailto:${email}`}>{email}</Link>;
    } else {
      return email;
    }
  };

  const filteredContacts =
    contacts &&
    contacts.filter(
      (el: any) =>
        Boolean(el.name) ||
        Boolean(el.surname) ||
        Boolean(el.phone) ||
        Boolean(el.email)
    );

  return (
    <>
      <section id="contact" className="contact main">
        <SectionTitle title="Stay in touch" />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <ul className="feature-list feature-list-sm text-center row">
                {filteredContacts &&
                  filteredContacts.map((contact: any, index: number) => (
                    <li key={index} className="col-md-6 col-lg-4">
                      <div className="card text-center stay-in-toch-card">
                        <div className="card-body">
                          <h2 className="uppercase">{contact.type}</h2>
                          <p className="mb-0">
                            <em className="uppercase h5 opc-70">
                              {contact.name} {contact.surname}
                            </em>

                            {renderPhone(contact?.phone)}
                            <br />
                            {renderEmail(contact?.email)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <ul className="block-social list-inline text-center mt-4">
                {socialLinks &&
                  Object.keys(socialLinks).map((key, index) => {
                    if (socialLinks[key]) {
                      return (
                        <li key={index} className="list-inline-item">
                          <a
                            href={socialLinks[key]}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={`socicon-${key.slice(0, -4)}`}></i>
                          </a>
                        </li>
                      );
                    }
                    return null;
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
