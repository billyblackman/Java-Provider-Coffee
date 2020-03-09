import { ContactList } from "./contact/ContactList.js"


const contentTarget = document.querySelector("#java__footer")

export const Footer = () => {
    const contactListHTML = ContactList()


    contentTarget.innerHTML += `
        ${contactListHTML}
        
    `
}

