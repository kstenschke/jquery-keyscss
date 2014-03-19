/*
 * jQuery keyscss Plugin v0.0.1
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
 *      jQuery('body').each(function(i, body) {
 *          jQuery(body).keysCss();
 *      });
 */
(function($) {
    $.keyscss = {
        version:    '0.0.2',
        config:     {}
    };

    $.fn.keysCss = function(config) {
        var markup  = jQuery(this).html();

        var patternMatch    = /\[[a-z\s|A-Z\s]+\]/g;
        var patternReplace  = /\[[a-z\s|A-Z\s]+\]/;

        while( markup.match( patternMatch ) != null && markup.match( patternMatch ).length > 0 ) {
            markup = markup.replace(
                patternReplace, function(s,m1,m2){
                    return "<span class=\"kbd key\">"+s.replace("[","").replace("]","")+"</span>";
                }
            );
        }

        jQuery(this).html( markup );
    }
}(jQuery));
