<script>
    function validateSectionA() {
        // Add logic to validate Name and Employee Code
        // For simplicity, assuming the validation is successful
        document.getElementById('sectionB').style.display = 'block';
    }

    function enableSectionC() {
        document.getElementById('sectionC').style.display = 'block';
    }

    function validateSectionC() {
        var likedSharedValue = document.getElementById('likedShared').value;
        if (likedSharedValue.toLowerCase() === 'yes') {
            document.getElementById('sectionD').style.display = 'block';
            generateUniqueCode();
        } else {
            alert('Please like and share the page to proceed to Section D.');
        }
    }

    function generateUniqueCode() {
        // Add logic to generate a unique code for the user
        // For simplicity, generating a random code here
        var uniqueCode = Math.random().toString(36).substr(2, 8);
        document.getElementById('uniqueCode').innerText = uniqueCode;
    }
</script>
