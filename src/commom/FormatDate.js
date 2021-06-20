const formatDate = (datePicker) => {
  let newDate = new Date(datePicker);
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  newDate =
    year +
    "/" +
    `${month + 1 > 9 ? "" : "0"}` +
    `${month + 1}` +
    "/" +
    `${date > 9 ? "" : "0"}` +
    date;
  // month < 9 && date < 9
  //   ? `${year}-0${month}-0${date}`
  //   : month < 9 && date > 9
  //   ? `${year}-${month}-0${date}`
  //   : month > 9 && date < 9
  //   ? `${year}-0${month}-${date}`
  //   : `${year}-${month}-${date}`;

  return newDate;
};

export { formatDate };
