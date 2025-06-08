// Ativação Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//Ativação Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Modal
const exampleModalE1 = document.getElementById('modalPortifolio');

exampleModalE1.addEventListener('show.bs.modal', function(event){
    document.getElementById('modalImage').src = event.relatedTarget.getAttribute("data-img");
});

