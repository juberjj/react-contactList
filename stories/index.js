import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'
import Contact from '../src/components/contact/'
import ContactList from '../src/components/contactList/'
import { action } from '@storybook/addon-actions';

const sample = {
  name: {first:'Joe', last:'Bloggs'},
  email: 'j.bloggs@example.com',
  phone: '012-3456789',
  picture: {thumbnail: './profile.png'}
}


storiesOf("Contact List App/Header", module).add("default", () => (
  <Header noContacts={10} />
));

// NEW STORY
storiesOf("Contact List App/Filter Controls", module).add("default", () => (
  <FilterControls />
));

storiesOf("Contact List App/Contact", module).add("default", () => ( 
    <Contact contact={sample}/>
  ));
  
storiesOf("Contact List App/Contact List", module).add("default", () => { 
  const samples = [sample, sample, sample, sample, sample]
  return <ContactList contacts={samples}/>
});

storiesOf("Contact List App/Contact", module).add("default", () => ( 
  <Contact contact={sample} deleteHandler={action('Delete confirmed') }/>
));