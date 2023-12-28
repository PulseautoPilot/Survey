// Function to generate a unique code
function generateUniqueCode() {
    // Implement your logic to generate a unique code
    return Math.floor(Math.random() * 1000000);
}

// Function to submit employee details
function submitEmployeeDetails() {
    const employeeName = document.getElementById('employeeName').value;
    const employeeCode = document.getElementById('employeeCode').value;
    const uniqueCode = generateUniqueCode();

    // Store data in Google Sheets (Simulated)
    // You can replace this with your logic to save data in Google Sheets
    console.log("Employee Name:", employeeName);
    console.log("Employee Code:", employeeCode);
    console.log("Unique Code:", uniqueCode);

    // Hide Section A and show Section B
    document.getElementById('employeeDetails').classList.add('hidden');
    document.getElementById('companyReview').classList.remove('hidden');

    // Start the 2-minute timer for Section B
    setTimeout(() => {
        proceedToSocialSharing();
    }, 120000); // 2 minutes in milliseconds
}

// Function to proceed to Social Sharing section
function proceedToSocialSharing() {
    // Hide Section B and show Section C
    document.getElementById('companyReview').classList.add('hidden');
    document.getElementById('socialSharing').classList.remove('hidden');
}

// Function to show completion message
function showCompletionMessage() {
    // Hide Section C and show Section D
    document.getElementById('socialSharing').classList.add('hidden');
    document.getElementById('completion').classList.remove('hidden');
}
