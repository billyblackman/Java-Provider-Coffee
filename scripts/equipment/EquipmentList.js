/*
    This module is responsible for creating the HTML for a list of equipment
*/

import { Equipment } from "./Equipment.js";
import { useEquipment } from "./equipmentDataProvider.js";


/*
    Querying the document for an element that has a class of container and storing that element in a variable called contentTarget
*/
const contentTarget = document.querySelector(".equipmentDiv")

export const EquipmentList = () => {

/*
Invoking the useEquipment function that returns a copy of the equipment data, and storing it in a variable called equipmentArray
*/
   const equipmentArray = useEquipment()

// For..of loop to iterate over the equipmentArray

    for (const equipmentObject of equipmentArray) {
        
// invoking the Equipment() function that returns an HTML representation of an equipment object
   
        const equipmentHTML = Equipment(equipmentObject)

// putting the equipmentHTML on the contentTarget element
   
        contentTarget.innerHTML += equipmentHTML

    }

}