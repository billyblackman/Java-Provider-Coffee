import { useContactInfo } from "./contactDataProvider.js";
import { Contact } from "./Contact.js";


export const ContactList = () => {
    const contacts = useContactInfo()

    let allContactsHTML = ""

    for (const contactObject of contacts) {
        allContactsHTML += Contact(contactObject)
    }

    return allContactsHTML
}