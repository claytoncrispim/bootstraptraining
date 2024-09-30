/**Bill Calculator (Bootstrap) 1.0
 * By Clayton Crispim
 * 08/2024
 */

import Bill from "./components/Bill.js";
import Total from "./components/Total.js";
import formatter from "./functions/formatter.js";
import sumSetAmounts from "./functions/sumSetAmounts.js";
import sumAmounts from "./functions/sumAmounts.js";
import divideAmounts from "./functions/divideAmounts.js";
import billsArray from "../components/data.js";

// const billsArray = [];
const billsSet = new Set();
const amountAibSet = new Set();
const amountBoiSet = new Set();

// // Generates new Bill objects and store them into their respective arrays
// function createBillObj(type, acc, amount, status) {
//     const aibBillsArray = [];
//     const boiBillsArray = [];
  
//     for (let i = 0; i < 1; i++) {
//       const allBills = new Bill(type, acc, amount, status);
//       allBills.checkEmpty(type);
//       allBills.checkEmpty(acc);
      
//       if (acc === "AIB") {
//         aibBillsArray.push(allBills);
//         billsArray.push(...aibBillsArray);
//       } else {
//         boiBillsArray.push(allBills);
//         billsArray.push(...boiBillsArray);
//       }
//     }
// }

const content = billsArray.map((bill) => {
  //New bill
  let billRow = document.createElement("tr");
  billRow.classList.add("bill");
  billRow.setAttribute("id", bill.id);

  // Set textContet (safer than innerHTML) of billArticle using the bill object
  billRow.textContent = `
    <td> STOPPED HERE!!!!
  
  `;



});