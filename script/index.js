let numberOfButtons=document.querySelectorAll(".drum").length;

for( let i=0; i< numberOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        this.style.color = "yellow"
        /*let audio = new Audio("sounds/tom-1.mp3");
        audio.play().then(r =>"sounds/tom-1.mp3" );
*/
    });
}
$('audio#pop')[0].play()


$(".set" ).click(function() {
    let mediaFile = $(this).attr('class');
    console.log(mediaFile);
    let clickedInstrument = ("sounds/" + mediaFile +".mp3");
    console.log(clickedInstrument);
    //let clickedInstrument = ("sounds/" +$(this).attr('class'+".mp3"));

});

/*
document.querySelector("button").addEventListener("click", buttonClick)

function buttonClick(){
    alert("i got clicked");


}
 */

function buttonAnimation(){

}








