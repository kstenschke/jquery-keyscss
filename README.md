jquery-keyscss
=================

Screenshot
----------
![jquery-keyscss](https://github.com/kstenschke/jquery-keyscss/blob/master/screenshot.png?raw=true)


What is it?
-----------

A jQuery plugin that finds texts representing keyboard key names and applies a CSS styling to make them look like images of keys.

__jQuery Plugin Registry:__ https://plugins.jquery.com/keyscss/


Thanks
------
Thanks and regards go to Michael Hüneburg for sharing his keys.css stylesheet. 


Requirements
------------
This plugin applies the CSS styles from keys.css by Michael Hüneburg.
You can download keys.css from: https://github.com/michaelhue/keyscss

You need jQuery, of course. jquery-addcaption is actively supported from jQuery 1.9 but may work with older versions.


Installation
------------

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/jquery.keyscss.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.


Usage Example
-------------

```javascript
jQuery('td').each(function(i, container) {
        jQuery(container).keysCss({
		'classNames': 'white'	// e.g. 'dark' or 'white'
	});
});
```

Author
------

**Kay Stenschke**
+ http://github.com/kstenschke


Version History
---------------
* **0.0.4** *2014-03-20*
    - Added conversion of "cursor up", "cursor right", etc. to arrow letter
* **0.0.3** *2014-03-20*
    - Added configuration
* **0.0.2** *2014-03-19*
    - Minor Cleanups
* **0.0.1** *2014-03-19*
    - Initial release


MIT LICENSE
---

Copyright (c) 2014 Kay Stenschke
http://opensource.org/licenses/MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
