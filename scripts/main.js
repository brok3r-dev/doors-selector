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
})

// 
const doors = document.querySelectorAll('.idol');

doors.forEach(function(door, index) {
    door.classList.add('order-${index}');
    door.addEventListener('click', function () {
        switch (index) {
            case 0:
                console.log(door.textContent);
                break;
            case 1:
                console.log(door, index);
                break;
            case 2:
                console.log(index);
                break;
            case 3:
                window.location.href = "/karina";
                break;
            default:
                console.log("wrong index");
        }
    });
});