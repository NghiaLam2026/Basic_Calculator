# Counter Application

## Topics Applied

- **DOM Manipulation**: 
  - Used `document.querySelector()` to select HTML elements (`.counter_button` and `.number`) and dynamically update the content of the page.
  
- **Closures**: 
  - Implemented a closure by defining the `increment_number` function inside the `increment` function. This allows the inner function to access the `counter` variable even after the outer function has returned, maintaining the state of `counter` across button clicks.
  
- **Event Handling**: 
  - Added an event listener using `addEventListener()` to trigger the counter increment functionality when the button is clicked.

## Summary

This project demonstrates basic JavaScript concepts such as DOM manipulation, event handling, and closures by creating a simple counter that increments with each button click.
