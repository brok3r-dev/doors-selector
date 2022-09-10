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
                window.location.href = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=카리나";
                break;
            default:
                console.log("wrong index");
        }
    });
});