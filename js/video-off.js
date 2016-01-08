//Javascript
//Script source: http://stackoverflow.com/questions/26497707/vimeo-sound-keeps-playing-in-bootstrap-modal-after-closing-the-modal


   $('#michelle-modal').on('hide.bs.modal', function () {

   // get the source of the iframe and save it
     var src = $(this).find('iframe').attr('src');

   // remove the src from the iframe
     $("iframe#michelle-iframe").attr('src','');

   // re-add the 
     $("iframe#michelle-iframe").attr('src', src);

   });

   $('#cnm-modal').on('hide.bs.modal', function () {

   // get the source of the iframe and save it
     var src = $(this).find('iframe').attr('src');

   // remove the src from the iframe
     $("iframe#cnm-iframe").attr('src','');

   // re-add the 
     $("iframe#cnm-iframe").attr('src', src);

   });