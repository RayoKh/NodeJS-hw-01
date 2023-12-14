// import fs from "fs/promises";
// import path from "path";
// import { nanoid } from "nanoid";

// const contactsPath = path.resolve("db", "contacts.json");

// export const getAllContacts = async () => {
//   const result = await fs.readFile(contactsPath, "utf-8");
//   return JSON.parse(result);
// };

// export const getContactById = async (id) => {
//   const contacts = await getAllContacts();
//   const result = contacts.find((item) => item.id === id);
//   return result || null;
// };

// export const addContact = async ({ name, mail, phone }) => {
//   const contacts = await getAllContacts();
//   const newContact = {
//     id: nanoid(),
//     name,
//     mail,
//     phone,
//   };
//   contacts.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return newContact;
// };
