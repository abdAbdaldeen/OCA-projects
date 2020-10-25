let name= localStorage.getItem('n');
if (name==null){
    name= sessionStorage.getItem('n');
    if (name != null) {
        $("#welcomeAndName").html(function(i,old) {
            return old+ name;
        })
    }
}
else{
    $("#welcomeAndName").html(function(i,old) {
        return old+ name;
    })
}
// -------------------------------------

function getallLocal() {
    var obj = Object.keys(localStorage).reduce(function(obj, key) {
        obj[key] = localStorage.getItem(key);
        return obj
    }, {});
    return obj;
}
function show() {
    $("#localTable tbody").html("");
    let allLocal = getallLocal();
    
    for (x in allLocal) {
        if(x !="n" && x !="u"&& x !="ph"&& x !="d"&& x !="pa" && x != "id"){
        let json=allLocal[x];
        let obj= JSON.parse(json);
            if(!obj.isDone){
                
        $("tbody").html(function(i,old) {
            return old+ `<tr  style="background-color:${obj.bcolor} ; color:${obj.tcolor};" id="${parseInt(x)}"><td>${parseInt(x)}</td><td>${obj.task}</td><td>${obj.h}:${obj.m}</td></tr>`;
        })
    }
    else{
        
        $("tbody").html(function(i,old) {
            return old+ `<tr  style="text-decoration: line-through;background-color:${obj.bcolor} ; color:${obj.tcolor};" id="${parseInt(x)}"><td>${parseInt(x)}</td><td>${obj.task}</td><td>${obj.h}:${obj.m}</td></tr>`;
        })
    }
    }
    }

    $("tbody tr").click(function(){
            let id = $(this).attr("id");
            let json= localStorage.getItem(id);
            let obj= JSON.parse(json);
            if(!obj.isDone){
            obj.isDone=true;
            localStorage.setItem(id, JSON.stringify(obj));
            show();
        }
        //اذا مضغوط قبل هلمرة بحذفو
        else{
            localStorage.removeItem(""+id);
            show(); 
        }
        });
        //to removeItem
}
// ----------------------------------



// ----------------------------------


$(document).ready(function(){
    show();

});


function clearr() {
    var r = confirm("Are you sure?");
    if (r == true) {
        localStorage.setItem("id",0);
        // $("#localTable tbody").html("");
        let allLocal = getallLocal();
    
    for (x in allLocal) {
        if(x !="n" && x !="u"&& x !="ph"&& x !="d"&& x !="pa" && x != "id"){
            localStorage.removeItem(x);
        }
    }
    show();
    }
}
function localSubmit() {
    let id = localStorage.getItem("id");
    localStorage.setItem("id",++id);
    let uvalue = $("#value").val();
    let h = $("#h").val();
    let m = $("#m").val();
    let bcolor = $("#bcolor").val();
    let tcolor = $("#tcolor").val();
    let obj ={'task' : uvalue, 'h':h,'m':m,'bcolor':bcolor,'tcolor':tcolor,'isDone':false}
    localStorage.setItem(id, JSON.stringify(obj));

    show();
}
