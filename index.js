var twelveHourtimeFormat = false;
var previousDate = '';
var hideDate = false;
var hideSec = false;

function printTime(d) {
  document.getElementById('digitaltime').innerHTML = requiredTimeFormat(d, hideSec);
}

function printDate(d) {
  document.getElementById('digitaldate').innerHTML = requiredDateFormat(d);
}

function getCurrentTimeDate() {
  return new Date();
}

function processDateTime() {
  var d = getCurrentTimeDate();
  var currentDate = d.toDateString();
  printTime(d);
  if(currentDate !== previousDate) {
    printDate(d);
    previousDate = currentDate;
  }
}

function startClock() {
  processDateTime();
  setInterval(processDateTime, 1000);
}

function requiredTimeFormat(d, hideSec) {
  var Hr = d.getHours();
  var Min = d.getMinutes();
  var Sec = d.getSeconds();
  var timeSuffix = addAmPm(Hr);
  if (twelveHourtimeFormat) Hr = changeTo12Hr(Hr);
  var nFormat = `${doubleDigit(Hr)}:${doubleDigit(Min)}`;
  nFormat += hideSec ? '' : `:${doubleDigit(Sec)}`;
  nFormat += ` ${timeSuffix}`;
  return nFormat;
}

function requiredDateFormat(d) {
  var day = d.getDay();
  var dat = d.getDate();
  var mon = d.getMonth();
  var year = d.getFullYear();
  var dateArray = {Days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    Months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
  return `${dateArray.Days[day]} ${dateArray.Months[mon]} ${dat}, ${year}`;
}

function doubleDigit(x) {
  if (x <= 9) return `0${x}`;
  return x;
}

function changeTo12Hr(x) {
  if (x > 12 && x < 24 || x===0)
    return Math.abs(x - 12);
  return x;
}

function changeTimeFormat() {
  twelveHourtimeFormat = !twelveHourtimeFormat;
  var buttonText = "12-Hour Mode";
  if (twelveHourtimeFormat) buttonText = "24-Hour Mode";
  changeButtonText(buttonText,"modeButton");
}

function showHideDate() {
  hideDate = !hideDate;
  var buttonText = "Hide Date";
  if (hideDate) {
    buttonText = "Show Date";
    document.getElementById("digitaldate").style.display = "none";
  }
  else {
    document.getElementById("digitaldate").style.display = "block";
  }
  changeButtonText(buttonText, "dateButton");
}

function showHideSec() {
  hideSec = !hideSec;
  var buttonText = "Hide Seconds";
  if (hideSec) buttonText = "Show Seconds";
  changeButtonText(buttonText, "secButton");
}

function changeButtonText(buttonText,idName) {
  document.getElementById(idName).innerHTML = buttonText;
}

function addAmPm(x) {
  if (twelveHourtimeFormat) {
    if (x >= 12) return `PM`;
    return `AM`;
  }
    return '';
}
