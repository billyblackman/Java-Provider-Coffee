/*
    This module's responsibility is to represent a single piece of contact info in HTML
*/

export const Contact = () => {
    return `
        <p>
            ${contactObject.infoType}: ${contactObject.info}
        </p>
    `
}