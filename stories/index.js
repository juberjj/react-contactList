import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { MemoryRouter, Route } from "react-router";

import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'
import Contact from '../src/components/contact/'
import ContactList from '../src/components/contactList/'
import { action } from '@storybook/addon-actions';
import PublicProfile from '../src/components/contactPublic/publicProfile'

const sample = {
  name: {first:'Joe', last:'Bloggs'},
  location: {
    street: "ljan terrasse 346",
    city: "vear",
    state: "rogaland",
    postcode: "3095",
    coordinates: {
      latitude: "54.8646",
      longitude: "-97.3136"
    },
    timezone: {
      offse: "-10:00",
      description: "Hawaii"
    }
  },
    "login": {
      "uuid": "c4168eac-84b8-46ea-b735-c9da9bfb97fd",
      "username": "bluefrog786",
      "password": "ingrid",
      "salt": "GtRFz4NE",
      "md5": "5c581c5748fc8c35bd7f16eac9efbb55",
      "sha1": "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
      "sha256": "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
    },
    "dob": {
      "date": "1975-11-12T06:34:44Z",
      "age": 42
    },
    "registered": {
      "date": "2015-11-04T22:09:36Z",
      "age": 2
    },
  email: 'j.bloggs@example.com',
  phone: '012-3456789',
  picture: {thumbnail: './profile.png',
  large: './profile.png'}
}


storiesOf("Contact List App/Header", module).add("default", () => (
  <Header noContacts={10} />
));

// NEW STORY
storiesOf("Contact List App/Filter Controls", module).add("default", () => (
  <FilterControls />
));

storiesOf("Contact List App/Contact", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => ( 
   <Contact contact={sample} deleteHandler={action('Delete confirmed') }/>
));

storiesOf("Contact List App/Contact List", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => { 
  const samples = [sample, sample, sample, sample, sample]
  return <ContactList contacts={samples}/>
});

storiesOf("Contact List App/Contact", module).add("default", () => ( 
  <Contact contact={sample} deleteHandler={action('Delete confirmed') }/>
));

storiesOf("Contact List App/Filter Controls", module).add("default", () => (
  <FilterControls onUserInput={action('Search criteria changes') }/>
));

storiesOf("Contact List App/Contact Page/PublicProfile", module)
.add("default", () => ( 
   <PublicProfile user={sample}/>
));