$(function () {
  // Display current date and time in the header of the page
  function updateDateTime() {
    var currentDateTime = dayjs().format('dddd, MMMM D, YYYY - HH:mm:ss');
    $('#currentDay').text(currentDateTime);
  }

}