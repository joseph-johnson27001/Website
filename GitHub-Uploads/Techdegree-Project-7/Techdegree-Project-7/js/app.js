/* ---------------------------------------------------
VARIABLES
-----------------------------------------------------*/

// Widget Variables:

const alertBanner = document.getElementById("alert");
const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");

// Messaging Section Variables:

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

// Bell Notification Variables:

const bell = document.getElementById("bell-icon");
const dropdown = document.getElementById("dropdown");
const badge = document.getElementById("badge");

// Local Storage Variables

let emailCheckbox = document.getElementById("email-checkbox");
let profileCheckbox = document.getElementById("profile-checkbox");
let timezone = document.getElementById("timezone");
const save = document.getElementById("save");
const cancel = document.getElementById("cancel");

/* ---------------------------------------------------
BELL NOTIFICATION AREA
-----------------------------------------------------*/

badge.innerHTML = dropdown.children.length;

bell.addEventListener('click', e => {

  const element = e.target;
    if (dropdown.children.length == 0) {
      return;
    }
    if (dropdown.style.display == "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
});


/* ---------------------------------------------------
ALERT BANNER
-----------------------------------------------------*/

alertBanner.innerHTML =
`
  <div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete <button class="alert-banner-close" style="cursor:pointer">X</button></p>
  </div>
`

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
      alertBanner.style.display = "none";
  }
});

/* ---------------------------------------------------
TRAFFIC LINE GRAPH
-----------------------------------------------------*/
let trafficDataMonthly = {
  labels: ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"],
  datasets: [{
    data: [300, 500, 700, 200, 100, 700, 800, 1100, 900, 200, 700, 1200],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let trafficDataWeekly = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
"4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let trafficDataDaily = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [{
    data: [100, 300, 400, 200, 400, 600, 300],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
}

let trafficDataHourly = {
  labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
  datasets: [{
    data: [500, 300, 100, 700, 100, 500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
}

let trafficOptions = {
  aspectRatio: 2.5,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
};

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficDataMonthly,
  options: trafficOptions
});

/* ---------------------------------------------------
BAR GRAPH
-----------------------------------------------------*/
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
}

let daily = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

/* ---------------------------------------------------
MOBILE USERS GRAPH
-----------------------------------------------------*/

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

const mobileOptions = {
  legend: {
    position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
    }
  }
}

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

/* ---------------------------------------------------
MESSAGING SECTION
-----------------------------------------------------*/

send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
      alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
      alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
      alert("Please fill out message field before sending");
    } else {
      alert(`Message successfully sent to: ${user.value}`);
    }
});

/* ---------------------------------------------------
Local Storage Code
-----------------------------------------------------*/

// Local Storage - On Load:

emailStatus = localStorage.getItem('email-checkbox');
  if (emailStatus == "true") {
      emailCheckbox.checked = "true";
}

profileStatus = localStorage.getItem('profile-checkbox');
  if (profileStatus == "true") {
      profileCheckbox.checked = "true";
}

timezoneStatus = localStorage.getItem("timezone");
if(!timezoneStatus) {
  } else {
    timezone.value = timezoneStatus;
  }

  // Local Storage Save Function

  save.onclick = function() {
    if (document.getElementById('email-checkbox').checked) {
      localStorage.setItem('email-checkbox', "true");
  } else {
      localStorage.setItem('email-checkbox', "false");
  }
    if (document.getElementById('profile-checkbox').checked) {
      localStorage.setItem('profile-checkbox', "true");
  } else {
      localStorage.setItem('profile-checkbox', "false");
  }
    localStorage.setItem("timezone", timezone.value); {
      alert("Your Settings Have Been Saved");
    }
  }

// Local Storage Cancel Function

  cancel.onclick = function() {
    emailCheckbox.checked = false;
    profileCheckbox.checked = false;
    timezone.value = "Select a Timezone";
  }

/* ---------------------------------------------------
FUNCTIONS
-----------------------------------------------------*/

function removeNotification(btn){
    ((btn.parentNode).parentNode).removeChild(btn.parentNode);
      if (dropdown.children.length == 0) {
        badge.style.display = "none"
        dropdown.style.display = "none"
      } else {
    badge.innerHTML = dropdown.children.length;
  }
};

// Functions for changing Traffic Graph

function hourlyTraffic() {
  trafficChart.destroy()
   trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataHourly,
    options: trafficOptions
  });
}

function dailyTraffic() {
  trafficChart.destroy()
   trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataDaily,
    options: trafficOptions
  });
}

function weeklyTraffic() {
  trafficChart.destroy()
   trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataWeekly,
    options: trafficOptions
  });
}

function monthlyTraffic() {
  trafficChart.destroy()
   trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataMonthly,
    options: trafficOptions
  });
}
