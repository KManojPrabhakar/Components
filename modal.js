$(document).ready(()=> {
    $("#modal").hide();
    $(".close").click(() => {
         $("#modal").hide();
    })
    $("#launch").click(()=> {
        $("#modal").show();

    })
});