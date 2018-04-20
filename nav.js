$(document).ready(()=> {
    $("#menu-content").hide();
    let menuDisplay = true;
    $("#menu").click(() => {
        if(menuDisplay) {
            $("#menu-content").show();
            menuDisplay = false;
        }
        else {
            $("#menu-content").hide();
            menuDisplay = true;

        }
    })
});