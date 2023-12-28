window.onload = function() {
    // Generate a unique alpha-numeric code
    var sessionCode = Math.random().toString(36).substr(2, 5);
    document.getElementById('sessionCode').innerHTML = 'Session Code: ' + sessionCode;

    // Hide submit button for 1 minute after moving to Section 2
    setTimeout(function() {
        document.getElementById('submit1').style.display = 'block';
    }, 60000);

    // Hide submit button for 1 minute after moving to Section 3
    document.getElementById('submit1').onclick = function() {
        document.getElementById('section1').style.display = 'none';
        document.getElementById('section2').style.display = 'block';
        setTimeout(function() {
            document.getElementById('submit2').style.display = 'block';
        }, 60000);
    };

    document.getElementById('submit2').onclick = function() {
        document.getElementById('section2').style.display = 'none';
        document.getElementById('section3').style.display = 'block';
    };
};
