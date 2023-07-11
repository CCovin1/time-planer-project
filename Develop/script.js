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
  // Load saved events from local storage
  function loadEvents() {
    $('.time-block').each(function () {
      var blockId = $(this).attr('id');
      var event = localStorage.getItem(blockId);

      if (event) {
        $(this).find('textarea').val(event);
      }
    });
  }

  // Save event when save button is clicked
  $('.saveBtn').on('click', function () {
    var blockId = $(this).parent().attr('id');
    var event = $(this).siblings('.description').val();
    localStorage.setItem(blockId, event);
  });

  // Call the necessary functions
  updateDateTime();
  updateHourStatus();
  loadEvents();

  // Update the current time every second
  setInterval(function () {
    updateDateTime();
    updateHourStatus();
  }, 1000);
});