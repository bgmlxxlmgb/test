/**
 * Created by dell on 2016/2/25.
 */
function infoCheck(){
    var text = document.getElementById("text");
    if(text.value=="admin"){
        text.focus();
        alert("admin");
        return false;
    }
    else{
        alert("other");
        return true;
    }
}