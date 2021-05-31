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

$(function() {
    if ($('select').length > 0) {
        $('select').selectpicker();
    }
})

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
    if ($('input[name="daterange"]').length > 0) {
        $('input[name="daterange"]').daterangepicker({
            opens: 'left'
        }, function(start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });
    }
});



$(function() {
    $('.verification-item').on('click', '.btn-select-file', function() {
        $(this).closest('.verification-item').find('.file-upload-input').click();
    });

    $('.file-upload-input').on('change', function(e) {
        var fileName = e.target.files[0].name;

        var fileNameElem = $(this).closest('.verification-item').find('.file-name');
        var uploadStatusElem = $(this).closest('.verification-item').find('.upload-status');
        
        fileNameElem.text(fileName);
        fileNameElem.removeClass('d-none');
        uploadStatusElem.text('Uploaded')
    })
})