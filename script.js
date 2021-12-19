// Přístup k fotkám
const slide = document.querySelectorAll(".slide");

// forEach - cyklus procházení pole (fotek "slide")
slide.forEach(function(oneSlide){
    oneSlide.addEventListener("click", function(){
        // smazaní active 
        deleteActiveClass(); 
        // přidá active classe na kterou se klikne
        oneSlide.classList.add("active");
    });
});


// funkce mazaní stylu active u všech
function deleteActiveClass(){
    slide.forEach(function (mySlide){
        mySlide.classList.remove("active");
    })
}