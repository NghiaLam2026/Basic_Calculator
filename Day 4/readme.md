# Countdown Timer Application

## Topics Applied

- **DOM Manipulation**: 
  - Used `document.querySelector()` to select and interact with HTML elements like `.start_button`, `.reset_button`, `.five_second`, and `.seconds`. The content of the page is dynamically updated based on user interactions (e.g., countdown, adding seconds).

- **Event Handling**: 
  - Added event listeners with `addEventListener()` to handle button clicks for starting the countdown, adding 5 seconds, and resetting the timer. Each button triggers specific functionality (start countdown, add time, reset timer).

- **Intervals and Timing Functions**:
  - Implemented `setInterval()` to create a countdown timer that decreases the displayed time by 1 every second. The `clearInterval()` function ensures the countdown stops once it reaches 0, preventing it from going into negative numbers.

- **Conditional Logic**: 
  - Used conditional checks to ensure the countdown only continues if the current time is greater than 0. This prevents unnecessary negative values and ensures the interval stops correctly.

## Summary

This project is a simple JavaScript-based countdown timer. It allows the user to:
- Start a countdown that decrements every second.
- Add 5 seconds to the current time.
- Reset the timer to 0.

The project demonstrates key JavaScript concepts such as DOM manipulation, event handling, intervals, and conditional logic, making it a useful practice for building interactive web applications.

---

### Sample Code:

```javascript
const start_button = document.querySelector(".start_button");
const reset_button = document.querySelector(".reset_button");
const five_second_button = document.querySelector(".five_second");
const seconds = document.querySelector(".seconds");
le
