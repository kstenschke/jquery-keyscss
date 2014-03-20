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
        version:    '0.0.4'
    };

    /**
     * @param	{Object}	[config]
     */
    $.fn.keysCss = function(config) {
        var markup      = jQuery(this).html();

        config = typeof config == 'undefined' ? {} : config;
        config.classNames       = 'classNames' in config ? config.classNames.trim() : '';
        config.replaceCursors   = 'replaceCursors' in config ? !!config.replaceCursors : true;
        config.whiteArrows      = 'whiteArrows' in config ? !!config.whiteArrows : false;

        var pattern     = /\[[a-z\s0-9]+\]/gi;
        while( markup.match( pattern ) != null ) {
            markup = markup.replace(
                pattern, function(s){
                    if( config.replaceCursors ) {
                        s = s.replace(/cursor up/gi ,   config.whiteArrows ? "⇧" : "&uarr;");
                        s = s.replace(/cursor down/gi , config.whiteArrows ? "⇩" : "&darr;");
                        s = s.replace(/cursor left/gi , config.whiteArrows ? "⇦" : "&larr;");
                        s = s.replace(/cursor right/gi ,config.whiteArrows ? "⇨" : "&rarr;");
                    }

                    return "<span class=\"kbd key " + config.classNames + "\">" + s.replace("[","").replace("]","") + "</span>";
                }
            );
        }

        jQuery(this).html( markup );
    }
}(jQuery));
