      // Get the toggle switch element
      const toggleSwitch = document.getElementById('language-toggle');
      // Add a click event listener to the toggle switch
      toggleSwitch.addEventListener('click', function() {
        // Check if the toggle switch is checked
        if (toggleSwitch.checked) {
          // Navigate to the English page
          window.location.href = 'indexFR.html';
        } else {
          // Navigate to the French page
          window.location.href = 'index.html';
        }
      });