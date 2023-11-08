txt="";
function update(x){
    txt+=x;
    document.getElementById('answer').value = txt;
}
function clearall(){
    document.getElementById('answer').value = "";
    txt="";
}
function result(){
    try {
        res=eval(txt);
        document.getElementById('answer').value = res;
        txt=res;
    } catch (error) {
        err = 'Error';
        document.getElementById('answer').value = err;
        txt="";
    }
} 
function del(){
    txt=txt.slice(0,-1);
    document.getElementById('answer').value = txt;

} 
function percent(){
    try {
        res=eval(txt)/100;
        document.getElementById('answer').value = res;
        txt=res;
    } catch (error) {
        err = 'Error';
        document.getElementById('answer').value = err;
        txt="";
    }
}