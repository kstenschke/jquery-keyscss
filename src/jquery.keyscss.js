/*
 * jQuery keyscss Plugin
 *
 * Finds and replaces texts like [A], [CTRL] or [CURSOR UP] within the given elements
 * and applies a keyboard-like look, using keys.css (https://github.com/michaelhue/keyscss)
 *
 * https://plugins.jquery.com/keyscss/
 * https://github.com/kstenschke/jquery-keyscss
 *
 * Copyright 2014, Kay Stenschke
 * License: GNU General Public License, version 3 (GPL-3.0)
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 * Usage Example:
 *      jQuery('td').each(function(i, container) {
 *          jQuery(container).keysCss({'classNames': 'light'});
 *      });
 */
(function($) {
    $.keyscss = {
        version:    '0.0.3'
    };

    /**
     * @param	{Object}	[config]
     */
    $.fn.keysCss = function(config) {
        var markup      = jQuery(this).html();
        var classNames  = (typeof config != 'undefined' && 'classNames' in config) ? config.classNames.trim() : '';

        while( markup.match( /\[[a-z\s|A-Z\s]+\]/g ) != null ) {
            markup = markup.replace(
                /\[[a-z\s|A-Z\s]+\]/, function(s){
                    return "<span class=\"kbd key " + classNames + "\">" + s.replace("[","").replace("]","") + "</span>";
                }
            );
        }

        jQuery(this).html( markup );
    }
}(jQuery));
