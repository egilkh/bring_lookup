# bring_lookup

This module aims to make Bring.no's Postal Code API accessible for sites without
to much setup or code.

You add a selector (jQuery) in the admin settings for which input element that
should trigger an lookup and an output selector (jQuery) for which element to
fill the result in. When a change happens in the input element a lookup is done
(using only client side AJAX/JSONP) and the result is put into the output
element.

## Supports
* Multiple elements for input and output, one input has one output.
* Bring.no's supported countries: Norway, Denmark, Sweden, Finland, 
  Netherlands, Germany, United States, Belgium

Tested with vanilla Drupal and Commerce, in the commerce checkout form.
Should work for any elements that you can write a jQuery selector for.
