// Class for handling keyboard events
var IstighfarDisplayKeyEventHandler = /** @class */ (function () {
    function IstighfarDisplayKeyEventHandler() {
        // Bind 'this' to the handleKeyDown method to ensure correct context
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    // Method to handle key down events
    IstighfarDisplayKeyEventHandler.prototype.handleKeyDown = function (e) {
        // Prevent default browser behavior for certain key combinations
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 85 || e.keyCode === 67))) {
            e.preventDefault();
        }
    };
    return IstighfarDisplayKeyEventHandler;
}());
// Instantiate KeyEventHandler and attach event listener for key down events
var IstighfarDisplaykeyEventHandler = new IstighfarDisplayKeyEventHandler();
document.addEventListener("keydown", IstighfarDisplaykeyEventHandler.handleKeyDown);
// Define a class for managing the copyright year
var IstighfarDisplayCopyrightYear = /** @class */ (function () {
    // Constructor to initialize start year and current year
    function IstighfarDisplayCopyrightYear(startYear) {
        this.startYear = startYear;
        this.currentYear = new Date().getFullYear();
    }
    // Method to generate the copyright year range
    IstighfarDisplayCopyrightYear.prototype.generateYearRange = function () {
        // If the start year is the same as the current year, return only the current year
        if (this.startYear === this.currentYear) {
            return "".concat(this.currentYear);
        }
        // Otherwise, return a range from start year to current year
        else {
            return "".concat(this.startYear, " - ").concat(this.currentYear);
        }
    };
    // Method to update the HTML content with the copyright year range
    IstighfarDisplayCopyrightYear.prototype.updateHtmlContent = function (elementId) {
        // Generate the copyright year range
        var copyYearRange = this.generateYearRange();
        // Update the HTML content with the copyright year range
        var element = document.getElementById(elementId);
        if (element) {
            element.textContent = copyYearRange;
        }
        else {
            console.error("Element with ID '".concat(elementId, "' not found."));
        }
    };
    return IstighfarDisplayCopyrightYear;
}());
// Create an instance of CopyrightYear with the start year (2024 assuming the system was developed in 2024)
var IstighfarDisplaycopyright = new IstighfarDisplayCopyrightYear(2025);
// Update the HTML content with the copyright year range, specifying the ID of the HTML element ('copyYear')
IstighfarDisplaycopyright.updateHtmlContent('copyYear');
