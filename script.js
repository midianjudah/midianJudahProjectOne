window.addEventListener("load", function() {
    setTimeout (
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        4000
    )
});

document.querySelector("#okayButton").addEventListener ("click", function(){
    console.log("wtf is going on?!?");
    document.querySelector(".popup").style.display = "none";
});