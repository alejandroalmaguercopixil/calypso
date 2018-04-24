$(document).ready(function(){
    $("#hehw").click(function(){
      $(".hide-content2").toggle(300);
    });
    $("#hehw2").click(function(){
      $("#ip2").toggle(300);
    });
    $("#hehw3").click(function(){
      $("#ip3").toggle(300);
    });
    $("#hehw4").click(function(){
      $("#ip4").toggle(300);
      $(".hide-content").toggle(300);
    });
    $("#hehw5").click(function(){
      $("#variableContent").toggle(300);
    });

    /*draggable */
    $( ".sortable" ).sortable({
     revert: true,
     items: "> div:not(.ui-state-disabled)"

    });
    

    $( ".sortableworks" ).sortable({
     revert: true,
     items: "> div"

    });

    $( ".sortabletriggers" ).sortable({
     revert: true,
     items: "> div"

    });
});