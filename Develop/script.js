$(function () {
  // Display current date and time in the header of the page
  function updateDateTime() {
    var currentDateTime = dayjs().format('dddd, MMMM D, YYYY - HH:mm:ss');
    $('#currentDay').text(currentDateTime);
  }

  // Function to compare the current hour with the hour of each time block
  function updateHourStatus() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      if (blockHour < currentHour) {
        $(this).removeClass('present future').addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }

