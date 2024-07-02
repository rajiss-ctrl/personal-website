

document.addEventListener('DOMContentLoaded', function() {
    const menuDot = document.querySelector('.mobile-toggle img');
    const navItem = document.querySelector('.nav-item ul');
    

    if (menuDot) {
        console.log('menuDot found');
        menuDot.addEventListener('click', function() {
            console.log('menuDot clicked');
            navItem.classList.toggle('hidden');
        });
    } else {
        console.error('menuDot not found');
    }
    
    
    
 

    // Display current time in UTC
    function updateTime() {
        const utcTimeElement = document.getElementById('utc-time');
        const now = new Date();
        const utcString = now.toUTCString().split(' ')[4];
        utcTimeElement.textContent = utcString;
    }

    // Display current day
    function updateDay() {
        const dayElement = document.getElementById('current-day');
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        const dayString = days[now.getUTCDay()];
        dayElement.textContent = dayString;
    }

    // Populate Slack info
    // function populateSlackInfo() {
    //     document.getElementById('slack-name').textContent = 'HackyRaji'; 
    //     document.getElementById('slack-email').textContent = 'hackyraji02@gmail.com'; // Replace with actual Slack email

    //     const profilePicture = document.getElementById('profile-picture');
    //     profilePicture.src = 'https://res.cloudinary.com/dldhps3ku/image/upload/v1719844310/hackyraji-mobile_ncsscw.jpg';
    //     profilePicture.width = profilePicture.naturalWidth;
    //     profilePicture.height = profilePicture.naturalHeight;
    // }

    // Initial call
    updateTime();
    updateDay();
    // populateSlackInfo();

    // Update time every second
    setInterval(updateTime, 1000);
});
