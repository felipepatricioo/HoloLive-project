const btnrandom = document.querySelector("#btn1");

var audio1 = new Audio("./media/mikodayo.mp3");
var audio2 = new Audio("./media/faqqqq.mp3");
var audio3 = new Audio("./media/waterfire.mp3");
var audio4 = new Audio("./media/pekorasoccer.mp3");


btnrandom.addEventListener("click", function (){
    const reactionList = ['Miko Danye', 'FAQ', 'FireWater', 'RonaldinhoPekora'];
    var randomList = reactionList[Math.floor(Math.random() * reactionList.length)];

    if (randomList == 'Miko Danye'){
        document.getElementById("picID").src = "https://cdn.donmai.us/sample/da/4a/__gawr_gura_sakura_miko_35p_and_mikodanye_hololive_and_1_more_drawn_by_potato7192__sample-da4a78ba6f4ee816c61825f70efba208.jpg";
        document.getElementById("imgCap").innerHTML ="MIKO DANYE!!"

        audio1.play();
    } else if (randomList == 'FAQ'){
        document.getElementById("picID").src = "https://i.redd.it/escswfuak4e61.jpg";
        document.getElementById("imgCap").innerHTML ="FAQQ!!"

        audio2.play();
    } else if (randomList == 'FireWater'){
        document.getElementById("picID").src = "https://i.ytimg.com/vi/DHNNRaGQRJg/maxresdefault.jpg";
        document.getElementById("imgCap").innerHTML ="Water in the fire? WHY??";

        audio3.play();
    } else if (randomList == 'RonaldinhoPekora'){
        document.getElementById("picID").src = "https://i.ytimg.com/vi/x4scIpurXdU/hqdefault.jpg";
        document.getElementById("imgCap").innerHTML ="RONALDINHO PEKORA!!"
        
        audio4.play();
    } 

})

