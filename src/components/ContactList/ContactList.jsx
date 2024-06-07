import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const conto = useSelector((state) => state.contacts);
  console.log(conto);

  return (
    <ul>
      {conto.items.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
