// **Time and Date Update Functions**

function updateTime() {
  const selectedTimezone = localStorage.getItem('selectedTimezone') || Intl.DateTimeFormat().resolvedOptions().timeZone;
  document.getElementById('timezone').textContent = selectedTimezone;

  const options = { 
    hour: 'numeric', minute: 'numeric', second: 'numeric', 
    timeZone: selectedTimezone 
  };
  document.getElementById('time').textContent = new Intl.DateTimeFormat([], options).format(new Date());

  const dateOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    timeZone: selectedTimezone
  };
  document.getElementById('date').textContent = new Intl.DateTimeFormat([], dateOptions).format(new Date());
}

// **Update time every second**
setInterval(updateTime, 1000);

// **Modal and Timezone Handling Functions**

window.addEventListener('load', () => {
    // Initialize the modal
    MicroModal.init();
    
    // Open the modal when the timezone button is clicked
    const timezoneButton = document.getElementById('timezone-button');

    // **Timezone Selection Logic**

    // Handle timezone selection
    const timezoneSelect = document.getElementById('timezone-select');
    if (timezoneSelect) {
        timezoneSelect.addEventListener('change', function() {
            const selectedTimezone = this.value;
            localStorage.setItem('selectedTimezone', selectedTimezone);
            updateTime();
            MicroModal.close();
        });
        
        // Populate timezone dropdown on load
        const timezones = Intl.supportedValuesOf('timeZone');
        timezones.forEach(timezone => {
            const option = document.createElement('option');
            option.value = timezone;
            option.text = timezone;
            timezoneSelect.appendChild(option);
        });
        
        // Set selected timezone from localStorage
        const storedTimezone = localStorage.getItem('selectedTimezone');
        if (storedTimezone) {
            timezoneSelect.value = storedTimezone;
        }
    } else {
        console.error("Timezone select element not found!");
    }
});
