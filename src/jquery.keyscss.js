/*
 * jQuery keyscss Plugin
 *
 * Finds and replaces texts like [CTRL] or [A] or [CURSOR UP]
 * within the given element and applies a keyboard-like look, using keys.css (https://github.com/michaelhue/keyscss)
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
        var pattern     = /\[[a-z\s0-9]+\]/gi;
        while( markup.match( pattern ) != null ) {
            markup = markup.replace(
                pattern, function(s){
                    s = s.replace(/cursor up/gi ,   "&uarr;");
                    s = s.replace(/cursor down/gi , "&darr;");
                    s = s.replace(/cursor left/gi , "&larr;");
                    s = s.replace(/cursor right/gi ,"&rarr;");

                    return "<span class=\"kbd key " + classNames + "\">" + s.replace("[","").replace("]","") + "</span>";
                }
            );
        }

        jQuery(this).html( markup );
    }
}(jQuery));
