alert('Use "w" "s" "a" "d" to lose the game ')

rat = document.getElementById('ratwrapper');
work = document.getElementById('work');
home = document.getElementById('home');
school = document.getElementById('school');
rat.top = getComputedStyle(rat).top;
rat.left = getComputedStyle(rat).left;
ht = rat.top;
hl= rat.left;
low = getComputedStyle(school).top;
low = "70vh"
right = getComputedStyle(school).left;
right = "70vw"
setInterval(function(){
    alert("You lose: You lived too long!")
    location.reload()
},3000);
document.body.addEventListener('keypress',function (k) {
    idChar(k.key);
})
function idChar(ch){
    console.log(ch);
    console.log(low+" "+right);
    console.log(ht+" rat top is "+rat.style.top);
    if(ch == 'w' &&(rat.style.top == low)){
        rat.animate({top:ht},5000);
        rat.style.top=ht;
        alert("You lose: your house was robbed!")
        location.reload()
    }
    else if(ch=='s' && (rat.top != low)){
        rat.animate({top:low},5000);
        rat.style.top=low;
        alert("You lose: You missed too many classes!")
        location.reload()
    }
    else if(ch=='a' && (rat.style.left != hl)){
        rat.animate({left:hl},5000); 
        rat.style.left=hl;  
        alert("You lose: You got fired!")
        location.reload()
    }
    else if(ch=='d' && (rat.style.left != right)){
        rat.animate({left:right},5000); 
        rat.style.left=right;  
        alert("You lose: your house was robbed!")
        location.reload()
    }
    else{
        alert("You lose: you tried to get out of the rat race");
        location.reload()
    }
}