/*
    This module's responsibility is to represent a single piece of equipment in HTML
*/

export const Equipment = (equipmentObject) => {
    return `
    <section class="equipmentSection">
        <h4>${equipmentObject.model}</h4>
        <ul>
            <li>ID: ${equipmentObject.id}</li>
            <li>Serial Number: ${equipmentObject.serialNumber}</li>
            <li>Functional: ${equipmentObject.isFunctional}</li>
            <li>Under Warranty: ${equipmentObject.isUnderWarranty}</li>
        </ul>
    </section>
    `
}
