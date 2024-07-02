document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('testimonialcardcontainer');
    const scrollLeftButton = document.getElementById('scrollLeft');
    const scrollRightButton = document.getElementById('scrollRight');

    scrollLeftButton.addEventListener('click', () => {
        scrollContainer.scrollLeft -= 200; // Adjust based on your card width
    });

    scrollRightButton.addEventListener('click', () => {
        scrollContainer.scrollLeft += 200; // Adjust based on your card width
    });
});


// for menu/nabar open  and close
let close= document.getElementsByClassName('fa-circle-xmark')
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const barIcon = document.getElementById('BarIcon');
    const closeSidebar = document.getElementById('closeSidebar');

    barIcon.addEventListener('click', function () {
        sidebar.classList.add('sidebar-show');
        overlay.classList.add('overlay-show');
    });

    closeSidebar.addEventListener('click', function () {
        sidebar.classList.remove('sidebar-show');
        overlay.classList.remove('overlay-show');
    });

    overlay.addEventListener('click', function () {
        sidebar.classList.remove('sidebar-show');
        overlay.classList.remove('overlay-show');
    });
});

// for scrolling icons in contact page


