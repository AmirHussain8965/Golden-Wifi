window.addEventListener("scroll", function () {
    const header = document.querySelector(".header_section");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Roadmap_Hide_Js=================



// const roadmap_btn = document.querySelector('.roadmap_btn');
// const roadmap_content = document.querySelector('.roadmap_content');

// roadmap_btn.addEventListener('click', () => {
//     const downIcon1 = roadmap_btn.querySelector('.bi-chevron-down');
//     const upIcon1 = roadmap_btn.querySelector('.bi-chevron-up');

//     if (roadmap_content.style.display === 'none') {
//         roadmap_content.style.display = 'block';
//         downIcon1.style.display = 'none';
//         upIcon1.style.display = 'inline-block';
//     } else {
//         roadmap_content.style.display = 'none';
//         downIcon1.style.display = 'inline-block';
//         upIcon1.style.display = 'none';
//     }
// });

// Story_Hide_Js=================

// const story_btn = document.querySelector('.story_btn');
// const story_content = document.querySelector('.story_content');

// story_btn.addEventListener('click', () => {
//     const downIcon2 = story_btn.querySelector('.bi-chevron-down');
//     const upIcon2 = story_btn.querySelector('.bi-chevron-up');

//     if (story_content.style.display === 'none') {
//         story_content.style.display = 'block';
//         downIcon2.style.display = 'none';
//         upIcon2.style.display = 'inline-block';
//     } else {
//         story_content.style.display = 'none';
//         downIcon2.style.display = 'inline-block';
//         upIcon2.style.display = 'none';
//     }
// });

// Works_Hide_Js=================

// const works_btn = document.querySelector('.works_btn');
// const work_content = document.querySelector('.work_content');

// works_btn.addEventListener('click', () => {
//     const downIcon3 = works_btn.querySelector('.bi-chevron-down');
//     const upIcon3 = works_btn.querySelector('.bi-chevron-up');

//     if (work_content.style.display === 'none') {
//         work_content.style.display = 'block';
//         downIcon3.style.display = 'none';
//         upIcon3.style.display = 'inline-block';
//     } else {
//         work_content.style.display = 'none';
//         downIcon3.style.display = 'inline-block';
//         upIcon3.style.display = 'none';
//     }
// });

// Choose_Hide_Js=================

// const choose_btn = document.querySelector('.choose_btn');
// const choose_content = document.querySelector('.choose_content');

// choose_btn.addEventListener('click', () => {
//     const downIcon4 = choose_btn.querySelector('.bi-chevron-down');
//     const upIcon4 = choose_btn.querySelector('.bi-chevron-up');

//     if (choose_content.style.display === 'none') {
//         choose_content.style.display = 'block';
//         downIcon4.style.display = 'none';
//         upIcon4.style.display = 'inline-block';
//     } else {
//         choose_content.style.display = 'none';
//         downIcon4.style.display = 'inline-block';
//         upIcon4.style.display = 'none';
//     }
// });


const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetSelector = btn.dataset.target;
        const content = document.querySelector(targetSelector);

        const downIcon = btn.querySelector('.bi-chevron-down');
        const upIcon = btn.querySelector('.bi-chevron-up');

        const isHidden = window.getComputedStyle(content).display === 'none';

        if (isHidden) {
            content.style.display = 'block';
            downIcon.style.display = 'none';
            upIcon.style.display = 'inline-block';
        } else {
            content.style.display = 'none';
            downIcon.style.display = 'inline-block';
            upIcon.style.display = 'none';
        }
    });
});
