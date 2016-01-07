//Javascript

$(window).load(function(){
jQuery('#cnm-modal').on('hidden.bs.modal', function (e) {
jQuery('#cnm-modal video').attr("src", jQuery("#cnm-modal video").removeAttr("src"));
});
});