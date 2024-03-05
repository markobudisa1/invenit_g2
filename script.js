// function showDiv(event, divNumber){
//     event.preventDefault();
//     var contentDivs = document.querySelectorAll('.link-content');
//     contentDivs.forEach(function(div){
//         div.computedStyleMap.display='none';
//     });

//     var selectedDiv = document.getElementById('div'+divNumber);
//     if(selectedDiv)
//     {
//         selectedDivDiv.style.display='flex';
//     }
// }

function selectJob(){
    let select = document.getElementById('job-select');
    console.log({select});
    console.log('selected value',select.value);

    var allDivs = document.querySelectorAll(".select-content");
    allDivs.forEach(function(div) {
        div.style.display = "none";
    });
    let job = document.getElementById(select.value);
    job.style.display = 'block';
}
//     console.log('selected job', job.classList);

//     let unselect = document.getElementById('job-select');
//     console.log({select});
//     console.log('selected value',select.value);

//     let hide = document.getElementById(select.value);
//     job.style.display = 'none';
//     console.log('hide', job.classList);

//     // let return = document.getElementById('job-select');
//     console.log({select});
//     console.log('selected value',select.value);

//     let set = document.getElementById(select.value);
//     job.style.display = 'block';
//     console.log('selected job', job.classList);
// }

// var previousSelectedValue = console.log('selected value',select.value);

// selectJob();

document.addEventListener('DOMContentLoaded', function () {
    var slider = document.querySelector('.slider');
    var slides = document.querySelectorAll('.slide');
    
    var currentIndex = 0;
    
    function showSlide(index) {
        slider.style.transform = 'translateX(' + (-index * 100) + '%)';
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }
    
    setInterval(nextSlide, 3000);
    
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    });