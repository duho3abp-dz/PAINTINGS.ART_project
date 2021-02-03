In this project, I wrote only js code!

## Technical task

Good day, developer. You have received an archive with the sources of our project. You have a bare-metal layout without interactivity. The archive contains everything you need to complete it: HTML layout, styles written in the LESS preprocessor and converted to regular CSS, all the necessary images and fonts (already included). Note that some elements will need to set display (flex) to hide / show them.

You have the right to change the project as you need to achieve the goal - add the necessary ids, classes, styles, animations, include additional styles (for example, animate.css)

But there are also several conditions:
- JavaScript code must be native, without using libraries, frameworks or plugins (e.g. JQuery)
- The console should be clear of any errors
- All variable / class names should not contain Cyrillic or transliteration. No peremennaya
- The final version should be built on any modular structure. We plan to expand in the future.
- Operability in all modern browsers (Chrome, Firefox, Opera, IE11, Edge, Safari)
- Animations are very welcome, but are also left to discretion (you can change the installed classes from animate.css as you like)
- Using ES6

List of tasks for implementation:

- The first screen should have a slider. Arrows are optional. Should turn over automatically at adequate intervals. Swipe animation: top to bottom.

- By clicking on these buttons: Order, Order a portrait, Order a portrait design. A modal window (class popup-design) should be called. When you click on a cross or background, it disappears.

- When you click on these buttons: More about the service. A modal window should be called (class popup-consultation) When you click on a cross or background - disappear.

- All modals have a form inside. It should be sent via ajax (without reloading the page) and capture all the input. It is also necessary to notify the user about the sending status (sending, sent, error). In the last two states, it is necessary to replace the content of the modal window with a notification.
A mask or phone number validation is required (required number of numbers, country code).
Filling in the name and comment - only in Russian.

- When you click on a gift, a popup-gift should appear and the gift itself completely disappears from the page. When you click on the cross or background, the window disappears.

- On clicking the button: View more styles. Additional styles (blocks) should be loaded (shown). The button itself disappears.

- Calculator implementation. Set your prices, preferably multiples of 1000 (or 500). The result is displayed in the lower, colored box.
Mandatory for selection - the first 2 select. Only when they are selected - the cost is shown. If you select 1 mandatory and "Additional services" - the total amount is not displayed. Also, the logic must persist across selection changes.
If IWANTPOPART (from gift modal) is entered in the “Promo code” field, then the total amount is reduced by 30%. Also, the logic must persist across selection changes.

- Implementation of filtering elements. Classes of photos by which filtering is already set (in HTML). If the last 2 items are selected, we show the portfolio-no block. Also, there is a switching of the active tab and its style.

- When you hover the mouse over blocks with the sizes of pictures, they should change to pictures. Pictures are prepared and are in the img folder with postfixes “-1”. Pay attention to the layout - there are stubs for these pictures. When the mouse is removed from the block, everything returns to its place.

- Slider implementation. Arrows are required, must turn over the slides. Should turn over automatically at adequate intervals. Swipe animation: horizontal.

- Implement an accordion. When you click on an element, a text with a hint smoothly appears under it. The active element has a different style.

- If the user has scrolled to the end of the page, but did not click any button, a modal window (popup-gift) should appear and the gift itself completely disappears from the page. When you click on the cross or background, the window disappears.

- If the user is on the page for more than 60 seconds, a modal window (popup-consultation) should appear. When you click on the cross or background, the window disappears. It is not interrupted by any actions, but if any modal window is already open, nothing happens.

- On the tablet version (width 992 or less), when you click on a hamburger, a submenu should be displayed. If a person unfolds the tablet and the width becomes larger, it is hidden.

-  A modular project structure is required, the assembly (bundle) must be connected.

- No code duplication. You don't need to bind separate actions to each button. Use a function or loops.