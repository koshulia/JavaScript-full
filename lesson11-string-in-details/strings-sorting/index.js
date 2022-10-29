// const sortContacts = (contacts, direction) => {
//   if (!Array.isArray(contacts)) return null;
//   const result = contacts.sort((a, b) =>
//     direction ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
//   );
//   return result;
// };

const sortContacts = (contacts, direction) => {
  if (!Array.isArray(contacts)) return null;
  const result = contacts.sort((a, b) => {
    if (direction === false) return b.name.localeCompare(a.name);
    return a.name.localeCompare(b.name);
  });
  return result;
};

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '666-69-66',
  },
  {
    name: 'John',
    phoneNumber: '666-67-66',
  },
  {
    name: 'Ann',
    phoneNumber: '666-66-68',
  },
  {
    name: 'Stephan',
    phoneNumber: '686-66-66',
  },
  {
    name: 'Suzy',
    phoneNumber: '666-86-66',
  },
  {
    name: 'Adel',
    phoneNumber: '966-66-66',
  },
];

console.log(sortContacts(contacts, true));
console.log(sortContacts(contacts, false));
