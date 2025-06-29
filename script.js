const timelineManager = (event) => {
    let clickedSquare = event.target.id;
    if (clickedSquare === "back-arrow-timeline") {
        document.getElementById("card-container-timeline").style.display = "none";
                document.getElementById("blur-div").style.display = "none";
    } else {
        clickedSquare = clickedSquare.slice(-1);
        document.getElementById("card-timeline").src = `assets/timeline/cards/card${clickedSquare}.svg`;
        document.getElementById("card-container-timeline").style.display = "block";
        document.getElementById("blur-div").style.display = "block";
    };
    
    if (clickedSquare === "square9") {
        
    }
}
