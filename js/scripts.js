$(document).ready(function() {

    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
    });

});

$(document).ready(function() {
    $('.toggle-button').on('click', function() {

        $('.animated-icon').toggleClass('open');
    });
});

$('select').selectpicker();

//--------------------------//
//      Clipboard utils     //
//--------------------------//
var ClipboardUtils = ClipboardUtils || {}
ClipboardUtils.copyToClipboard = function(text) {
    if (!text) {
        return false;
    }
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
    return text;
}

//--------------------------//
//          Daterange       //
//--------------------------//

$(function() {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});