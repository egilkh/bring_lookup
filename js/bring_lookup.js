(function ($){
  Drupal.behaviors.bringLookup = {
    attach: function (context, settings) {
      if (settings.bringLookup && settings.bringLookup.enabled) {
        var invalidInput = Drupal.t('Invalid postcode.');
        var params = { 'country': settings.bringLookup.country };

        $.each(settings.bringLookup.selectors, function(i ,e) {
          var $input = $(e['input']);
          var $output = $(e['output']);

          $input.keyup(function () {
            var val = $input.val();
            console.log(val);
            if (val.length >= settings.bringLookup.triggerLength) {
              params['pnr'] = val;
              $.ajax({
                url: settings.bringLookup.APIUrl + $.param(params),
                dataType: 'jsonp',
                cache: true,
                success: function (data, textStatus, jqXHR) {
                  if (data.valid) {
                    $output.val(data.result);
                  } else {
                    $output.val(invalidInput);
                  }
                }
              });
            }
          });
        });
      }
    }
  };
})(jQuery)
