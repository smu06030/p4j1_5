


$('#dpMbti').click(async function (){
    $("#cowork").hide();
    $("#power").hide();
    $("#mbti").show();
})

$('#dpPower').click(async function (){
    $("#cowork").hide();
    $("#mbti").hide();
    $("#power").show();
})

$('#dpCowork').click(async function (){
    $("#mbti").hide();
    $("#power").hide();
    $("#cowork").show();
})

$('#dpAll').click(async function (){
    $("#mbti").show();
    $("#power").show();
    $("#cowork").show();
})
