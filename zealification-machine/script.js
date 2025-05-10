function activate(){
    var ptexto = document.getElementById("ptext");
    var plaintxt = ptexto.value;
    var zealtxt = "";
    
    for (let i=0;i<plaintxt.length;i++){
        if (plaintxt[i]=="i"){
            zealtxt=zealtxt+"u";
        }
        else if (plaintxt[i]=="a"){
            zealtxt=zealtxt+"e";
        }
        else if (plaintxt[i]=="e"){
            zealtxt=zealtxt+"i";
        }
        else if (plaintxt[i]=="u"){
            zealtxt=zealtxt+"a";
        }
        else if (plaintxt[i]=="I"){
            zealtxt=zealtxt+"U";
        }
        else if (plaintxt[i]=="A"){
            zealtxt=zealtxt+"E";
        }
        else if (plaintxt[i]=="E"){
            zealtxt=zealtxt+"I";
        }
        else if (plaintxt[i]=="U"){
            zealtxt=zealtxt+"A";
        }
        else{
            zealtxt=zealtxt+plaintxt[i];
        }
    } 
    ptexto=('<input type="text" class="mb-3 p-1 form-control w-auto" id="name" placeholder="'+zealtxt+'">');
    
    document.getElementById("ptext").value=zealtxt;
    document.getElementById("ptext").class="zeal mb-3 p-1 form-control w-auto";
    
    return false
}
