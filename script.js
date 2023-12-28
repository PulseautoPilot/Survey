document.addEventListener('DOMContentLoaded', function () {
    const submitBtnA = document.getElementById('submitBtnA');
    const submitBtnB = document.getElementById('submitBtnB');
    const sessionCodeSpan = document.getElementById('sessionCode');

    // Function to generate a unique session code
    function generateSessionCode() {
        return Math.random().toString(36).substring(2, 10);
    }

    // Event listener for Section A submit button
    submitBtnA.addEventListener('click', function () {
        document.getElementById('companyReview').classList.add('hidden');
        document.getElementById('socialSharing').classList.remove('hidden');

        // Start timer for Section B
        setTimeout(function () {
            submitBtnB.disabled = false;
        }, 60000); // 1 minute delay

        // Display session code
        const sessionCode = generateSessionCode();
        sessionCodeSpan.textContent = sessionCode;
    });

    // Event listener for Section B submit button
    submitBtnB.addEventListener('click', function () {
        document.getElementById('socialSharing').classList.add('hidden');
        document.getElementById('completion').classList.remove('hidden');
    });
});
