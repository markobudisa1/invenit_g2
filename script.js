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

    let job = document.getElementById(select.value);
    job.style.display = 'block'
    console.log('selected job', job.classList);

    let unselect = document.getElementById('job-select');
    console.log({select});
    console.log('selected value',select.value);

    let hide = document.getElementById(select.value);
    job.style.display = 'none'
    console.log('selected job', job.classList);

    let return = document.getElementById('job-select');
    console.log({select});
    console.log('selected value',select.value);

    let set = document.getElementById(select.value);
    job.style.display = 'block'
    console.log('selected job', job.classList);
}

var previousSelectedValue = document.getElementById('job-select');

selectJob();