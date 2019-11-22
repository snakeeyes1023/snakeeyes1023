var lettre;
var res;
var photo;
var compteur = 0;
var l = [];
var cl;
var bg;
var click="0";
var src;
var url;
var arr;
var section;
var i;
var c;
var nv;
var selection;
var s;
// $("#carouselle").hide();
// nombre de mot erreur
$("#text").keyup( function () {
    if ($(this).val().length < 2 || $(this).val().length > 12) {
        $("#erreur").addClass("red");
        $("#erreur").removeClass("green");
    }
    if ($(this).val().length <= 12 && $(this).val().length >= 3) {
        $("#erreur").addClass("green");
        $("#erreur").removeClass("red");
    }
    if ($(this).val().length === 0) {
        $("#erreur").removeClass("red");
        $("#erreur").removeClass("green");
    }
});
// execution de la functio par click
$("#go").click(function () {
go();
});
// le enter
$("#text").keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        go();
    }
});
// la fonction pour afficher les image
function go() {
    lettre = $("#text").val();
    res = lettre.toUpperCase();
    if(res.length>=3 && res.length <=12)
    {
        $('.rev').empty();
        $('.rev').removeClass("img-fluid col-4 col-3 col-2 col-1 offset-2");

    }
    if (res.length === 3) {cl = "col-4"}
    if (res.length === 4) {cl = "col-3"}
    if (res.length === 5) {cl = "col-2"}
    if (res.length === 6) {cl = "col-2"}
    if (res.length >= 7) {cl = "col-1"}
    if (res.length >= 3 && res.length <= 12) {
        for (compteur = 0; compteur < res.length; compteur++) {
            l[compteur] = res.charAt(compteur);
            if(res.charAt(compteur)==="*") {l[compteur]="cs";}
            photo = "img/Letters/" + l[compteur] + "/" + l[compteur] + "1.jpg";
            $('#sec' + compteur).prepend('<img  class="img-fluid" src="' + photo + '">');
            $('#sec' + compteur).addClass(cl);

        }
    } else {alert("vous devez indiquer un nombre entre 3 et 12 caractere");}
}
// fonction pour changer le background
$( "select" ).change(function () {
        $( "select option:selected" ).each(function() {
            bg = $( this ).val();
            if(bg==="0") {$(".bg0").css("background-image", "url(img/background/blanc.jpg)");}
            if(bg==="1") {$(".bg0").css("background-image", "url(img/background/bleu.jpg)");}
            if(bg==="2") {$(".bg0").css("background-image", "url(img/background/bleuFonce.jpg)");}
            if(bg==="3") {$(".bg0").css("background-image", "url(img/background/gris.jpg)");}
            if(bg==="4") {$(".bg0").css("background-image", "url(img/background/noir.jpg)");}
            if(bg==="5") {$(".bg0").css("background-image", "url(img/background/rose.jpg)");}
            if(bg==="6") {$(".bg0").css("background-image", "url(img/background/rouge.jpg)");}
        });
    });
// le carouselle ouverture des images
$(document).on('click', '.img-fluid',function(){
    url = $(this).attr('src');
    $(this).attr('id','elle');
    arr = url.split('/');
    section=arr[2];
    nv=$(".active").attr("src");

    for (i=1;i<=5;i++)
    {$('#car' + i).attr("src","img/Letters/"+section+"/"+section+i+".jpg");}
    $("#carouselle").modal('show');
});
// changer l'image '
$(document).on('click', '#button',function(){
    for(c=1;c<=5;c++) {
        if ($("#check"+c).hasClass("carousel-item active")){
            selection = c;
            console.log(selection);
            c=10;
        }
    }
    $("#elle").attr("src","img/Letters/"+section+"/"+section+selection+".jpg" );
    removed();
});
function removed() {
    $( ".img-fluid" ).removeAttr( "id" )
}





















