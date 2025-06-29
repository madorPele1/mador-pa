let square9 = 9;
const start = () => {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("timeline-page").style.display = "block";
};

const backHome = () => {
    document.getElementById("timeline-page").style.display = "none";
    document.getElementById("start-page").style.display = "block";
};

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
    
    if (clickedSquare === "9") {
        if (square9 === 9) {
            document.getElementById("side-arrow-forwards").style.display = "block";
            document.getElementById("side-arrow-backwards").style.display = "none";
        } else if (square9 === 11) {
            document.getElementById("side-arrow-backwards").style.display = "block";
            document.getElementById("side-arrow-forwards").style.display = "none";
        } else {
            document.getElementById("side-arrow-forwards").style.display = "block";
            document.getElementById("side-arrow-backwards").style.display = "block";
        };
        document.getElementById("card-timeline").src = `assets/timeline/cards/card${square9}.svg`;
    } else {
        document.getElementById("side-arrow-forwards").style.display = "none";
        document.getElementById("side-arrow-backwards").style.display = "none";
    };
};

const square9Manager = (event) => {
    let clickedArrow = event.target.id;
    if (clickedArrow === "side-arrow-forwards") {
        square9++;
    } else {
        square9--;
    };

    if (square9 === 9) {
        document.getElementById("side-arrow-backwards").style.display = "none";
    } else if (square9 === 11) {
        document.getElementById("side-arrow-forwards").style.display = "none";
    } else {
        document.getElementById("side-arrow-forwards").style.display = "block";
        document.getElementById("side-arrow-backwards").style.display = "block";
    };
    document.getElementById("card-timeline").src = `assets/timeline/cards/card${square9}.svg`;
};
