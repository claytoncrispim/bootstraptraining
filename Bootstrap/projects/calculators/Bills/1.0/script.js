/**Bill Calculator (Bootstrap) 1.0
 * By Clayton Crispim
 * 08/2024
 */

import formatter from "./functions/formatter.js";
import billsArray from "./components/data.js";

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
  billRow.innerHTML = `
            <tr>
              <td class="bill__type">${bill.type}</td>
            </tr>
            <tr>
              <td class="bill__type">${formatter("en-US", "EUR", bill.amount)}</td>
            </tr>
            <tr>
              <td class="bill__type">${bill.acc}</td>
            </tr>
            <tr>
              <td class="bill__type">${bill.status ? 
                "<span class= paid> paid </span>" : 
                "<span class= unpaid> not paid </span>"}
              </td>
            </tr>
   `;

   // Find the amount in amount__number class and Calling the newAmoutValue function and pass on the amountValue node list
   //let billType = billRow.querySelectorAll(".bill__type");

   return billRow;

});

// Get the main
const main = document.querySelector(".contents");
// Loop through the content array to append each bill.
content.forEach((bill) => {
  main.append(bill);
});

// Bills sections end here

/**
 * TOTAL
 */
const amountAib = [];
const amountBoi = [];

// Checking if bank is AIB or BOI and saving respectives amounts in the arrays above
billsArray.map((amt) => {  

  if (amt.acc == "AIB" && amt.status == false) {

    amountAib.push(amt.amount);

  } if (amt.acc == "BOI" && amt.status == false) {

    amountBoi.push(amt.amount);
    
  }
});


// This function sums specific values of the array separately
function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {

    sum += array[i];
  }

  console.log("sumArray result: ", sum);

  return sum;
}

const totalAib = sumArray(amountAib);
const totalBoi = sumArray(amountBoi);
const subTotal = totalAib + totalBoi;
console.log("Sub-total", subTotal);
const finalBalance = totalAib + totalBoi;

/**
 * The Total Object to be appended at the end of the bills
 * 
 * 
 * 
 * const totalAmount = new Total(
  "bill-total",
  "Totals:",
  totalAib,
  totalBoi,
  subTotal,
  finalBalance
);

 */

//I created this array to use map and set the totals on the table correctly like I did with the bills
const totalsArr = [finalBalance, totalAib, totalBoi, totalAib/3 - totalBoi/3, totalBoi/3, totalAib/3 + totalBoi/3];
const totalArrTitles = ["Total", "Total AIB", "Total BOI", "Total due to Clayton", "Total due to Francisco", "Total due to Adrian"];
let i = 0;

const totalSummary = totalsArr.map((total) =>{
  // New bill
  let finalBal = document.createElement("tr");
  finalBal.classList.add("final-balance");

// Set div ID to the bill.id property
finalBal.setAttribute("id", totalArrTitles[i].replaceAll(' ',""));


// Sets the innerHTML of billRow using the bill object
finalBal.innerHTML = `
      <tr>
          <th>${totalArrTitles[i++]}</th>
          <td class="bill__total">${formatter("en-US", "EUR", total)}</td>
      </tr>
`;
return finalBal;
});

const total = document.querySelector(".totals");

//Loops through each content
totalSummary.forEach((t) => {
  total.append(t)
});


console.log("AIB & BOI Arrays themselves:", amountAib, amountBoi);

console.log(billsArray);
console.log(total);
console.log(totalsArr[0]);