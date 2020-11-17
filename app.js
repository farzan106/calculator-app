function clickbtn(num){
 
    var output=document.getElementById("output")
    output.value+=num

}

function clearBtn(){
    var output=document.getElementById("output")
    output.value=""

}

function equalbtn(){
    var output=document.getElementById("output")
    var count=0
    for(var i=0; i < output.value.length; i++)
    {
        if(output.value[i]==="+" || output.value[i]==="*" || output.value[i]==="-" )
        {
            if(output.value[i]===output.value[i+1] || output.value[i+1]==="*" )
            {
            count++
            break
            }
        }
    }
    if(count===0)
    {
    output.value=eval(output.value)
    }
    else{
          alert("PLEASE GIVE CORRECT VALUE")

    }

}