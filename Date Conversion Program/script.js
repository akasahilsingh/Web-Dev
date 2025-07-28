const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
   const dateObj = new Date(date)
   const day = dateObj.getDate();
   const month = dateObj.getMonth()+1;
   const year = dateObj.getFullYear();
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

function formatDateLong(date) {
  const dateObj = new Date(date);
  const options = {
    day: "numeric",
    weekend: "long",
    year: "numeric",
    month: "long"
  }
  const formattedDate = dateObj.toLocaleDateString("en-US", options)

  return `Formatted Date (Month Day, Year): ${formattedDate}`;
}


console.log(formatDateMMDDYYYY("Fri Sep 27 2024 16:16:11 GMT+0500 (Indian Standard Time)"));

console.log(formatDateLong("Fri Sep 27 2024 16:16:11 GMT+0500 (Indian Standard Time)"));