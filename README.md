# jquery-uploader

JQuery plugin built for easy inline image uploading in mind:

* Drag and Drop and File Input clickthrough
* Single-file uploads per widget
* Pre-upload filtering by file type or image dimensions
* Progress bar
* Easy to customize code

This is not the most comprehensive code available, but I'm making it available because the existing libraries I found were hard for me to customize to do exactly what I wanted, so this might be useful for someone looking for something more like a single-upload widget.


## Usage

See the example.html for a complete (client-side) implementation 

### Markup

### Calling

### Options

### Styling

## Notes
Browser Requirements:
* [Drag and Drop](http://caniuse.com/#feat=dragndrop)
* [File API](http://caniuse.com/#feat=fileapi)
* [FileReader](http://caniuse.com/#feat=filereader)
* [Progress](http://caniuse.com/#feat=progressmeter)
* [XHR2](http://caniuse.com/#feat=xhr2)

## TODO
* Add distribution stuff like license, versioning, etc.
* bower/requirejs compability
* Add checks for HTML5 features
* Build callback for more customizable error reporting
* Add callback for customizing

## Other Projects
There are other HTML5 file uploader libs that may be a better fit for what you're looking for:

* [DropzoneJS](http://www.dropzonejs.com/)
  * Doesn't require jQuery
  * Lot's of docs, examples, etc.
  * Lots of options/configurability
  * Hard to add contingent checks
  * May not be the right thing for single upload instances
* [JQuery File Uploader](https://github.com/danielm/uploader)
  * Pretty decent/customizable
  * Didn't function like I wanted w/o actually customizing everything

Also there are also some [file upload polyfill libs](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#file-api):

* [mOxie](https://github.com/moxiecode/moxie)
  * Simple set of XHR2 and File API polyfills
* [mail.ru FileAPI](http://mailru.github.io/FileAPI/)
  * A robust set of tools for dealing w/ files; big

## Reference
* jQuery plugin best practices
  * https://github.com/jquery-boilerplate/jquery-patterns/blob/master/patterns/jquery.basic.plugin-boilerplate.js
* @rem's implementation
  * http://html5doctor.com/drag-and-drop-to-server/
  * http://html5demos.com/dnd-upload
  * https://github.com/remy/html5demos/blob/master/demos/dnd-upload.html
* input type="file" onclick
  * https://github.com/enyo/dropzone/blob/master/lib/dropzone.js#L525
* Checking image properties
  * http://stackoverflow.com/questions/12570834/how-to-preview-image-get-file-size-image-height-and-width-before-upload
* XHR2 info
  * http://www.html5rocks.com/en/tutorials/file/xhr2/
* FileReader info
  * http://www.sitepoint.com/html5-javascript-open-dropped-files/

## License
