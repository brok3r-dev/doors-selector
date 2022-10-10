// HEADER
const search = document.querySelector('.search');
const searchInput = search.querySelector('input');

search.addEventListener('click', function () {
    searchInput.focus();
});

searchInput.addEventListener('focus', function () {
    search.classList.add('focused');
    searchInput.setAttribute('placeholder', 'do you need help?');
});

searchInput.addEventListener('blur', function() {
    search.classList.remove('focused');
    searchInput.setAttribute('placeholder', '');
});

// BADGE
const badges = document.querySelector('header .badges');

window.addEventListener('scroll', function () {
    if (this.scrollY > 500) {
        gsap.to(badges, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        gsap.to(badges, .6, {
            opacity: 1,
            display: 'block'
        });
    }
});

// BODY
const doors = document.querySelectorAll('.idol');

doors.forEach(function(door, index) {
    door.classList.add('order-${index}');
    door.addEventListener('click', function () {
        switch (index) {
            case 0:
                alert(door.textContent);
                break;
            case 1:
                alert(door, index);
                break;
            case 2:
                alert(index);
                break;
            case 3:
                let text;
                let person = prompt("Please enter your name:", "");
                if (person == null || person == "") {
                    text = "User cancelled the prompt.";
                } else {
                    text = "Hello " + person + "! How are you today?";
                }
                alert(text);
                break;
            default:
                console.log("wrong index");
        }
    });
});