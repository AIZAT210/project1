// Class for handling keyboard events
class ZikirDisplayKeyEventHandler {
    constructor() {
        // Bind 'this' to the handleKeyDown method to ensure correct context
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    // Method to handle key down events
    handleKeyDown(e: KeyboardEvent) {
        // Prevent default browser behavior for certain key combinations
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 85 || e.keyCode === 67))) {
            e.preventDefault();
        }
    }
}

// Instantiate KeyEventHandler and attach event listener for key down events
const ZikirDisplaykeyEventHandler = new ZikirDisplayKeyEventHandler();
document.addEventListener("keydown", ZikirDisplaykeyEventHandler.handleKeyDown);

// Define a class for managing the copyright year
class ZikirDisplayCopyrightYear {
    startYear: number;
    currentYear: number;

    // Constructor to initialize start year and current year
    constructor(startYear: number) {
        this.startYear = startYear;
        this.currentYear = new Date().getFullYear();
    }
  
    // Method to generate the copyright year range
    generateYearRange(): string {
        // If the start year is the same as the current year, return only the current year
        if (this.startYear === this.currentYear) {
            return `${this.currentYear}`;
        } 
        // Otherwise, return a range from start year to current year
        else {
            return `${this.startYear} - ${this.currentYear}`;
        }
    }
  
    // Method to update the HTML content with the copyright year range
    updateHtmlContent(elementId: string): void {
        // Generate the copyright year range
        const copyYearRange = this.generateYearRange();
        // Update the HTML content with the copyright year range
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = copyYearRange;
        } else {
            console.error(`Element with ID '${elementId}' not found.`);
        }
    }
}
  
// Create an instance of CopyrightYear with the start year (2024 assuming the system was developed in 2024)
const ZikirDisplaycopyright = new ZikirDisplayCopyrightYear(2025);
// Update the HTML content with the copyright year range, specifying the ID of the HTML element ('copyYear')
ZikirDisplaycopyright.updateHtmlContent('copyYear');