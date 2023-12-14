import { program } from "commander";

import * as contactService from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.getAllContacts();
      return console.table(allContacts);
    case "getById":
      const oneContact = await contactService.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contactService.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);
    case "updateById":
      const updateContact = await contactService.updateContactById(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);
    case "deleteById":
      const deleteContact = await contactService.deleteById(id);
      return console.log(deleteContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();
invokeAction(options);

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "Adam Perry",
//   mail: "a.perry@gmail.com",
//   phone: "(294) 840-6689",
// });
// invokeAction({
//       action: "updateById",
//       id: "cVtgW2xMCZ5pB1FnKQ_ub",
//       name: "Tony Perry",
//       mail: "a.perry@gmail.com",
//       phone: "(294) 840-6689",
//     });
// invokeAction({ action: "deleteById", id: "cVtgW2xMCZ5pB1FnKQ_ub" });
