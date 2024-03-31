import ContactForm from "./components/ContactForm.jsx";
import SearchBox from "./components/SearchBox.jsx";
import ContactList from "./components/ContactList.jsx";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setContacts } from "./redux/contactsSlice";
// import { INITIAL_STATE } from "./redux/initialState";

// import { useState, useEffect } from "react";
// import { nanoid } from "nanoid";
// import { getContacts } from "./redux/selectors.js";
// import { useDispatch, useSelector } from "react-redux";
// import { addTask } from "./redux/contactsSlice.js";
// import { INITIAL_STATE } from "./redux/initialState.js";
// const firstState = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];
function App() {
  // const dispatch = useDispatch();
  // const productData = useSelector(getContacts);

  // const [filter, setFilter] = useState("");
  // useEffect(() => {
  //   const storedState = localStorage.getItem("contacts");
  //   const contacts = storedState
  //     ? JSON.parse(storedState)
  //     : INITIAL_STATE.contacts;

  // Ensure that each contact's name is a string
  // const formattedContacts = contacts.map((contact) => ({
  //   ...contact,
  //   name: typeof contact.name === "function" ? "" : contact.name,
  // }));

  // Dispatch an action with the formatted contacts
  //   dispatch(addTask(formattedContacts));
  // }, [dispatch]);
  // const addContact = (newContact) => {
  //   const finalContact = {
  //     ...newContact,
  //     id: nanoid(),
  //   };
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, finalContact];
  //   });
  // };
  // dispatch(
  //   addTask(() => {
  //     const storedState = localStorage.getItem("contacts");
  //     return storedState ? JSON.parse(storedState) : INITIAL_STATE.contacts;
  //   })
  // );
  // const visibleContacts = productData.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  // console.log(productData);
  // const dispatch = useDispatch();
  // const contacts = useSelector((state) => state);

  // useEffect(() => {
  //   const storedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (storedContacts) {
  //     dispatch(setContacts(storedContacts));
  //   } else {
  //     dispatch(setContacts(INITIAL_STATE.contacts));
  //   }
  // }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
