# jquery-uploader

JQuery plugin built for easy inline image uploading in mind:

* Drag and Drop and File Input clickthrough
* Single-file uploads per widget
* Pre-upload filtering by file type or image dimensions
* Progress bar
* Easy to customize code

This is not the most comprehensive code available, but I'm making it available because the existing libraries I found were hard for me to customize to do exactly what I wanted, so this might be useful for someone looking for something more like a single-upload widget.

## Usage

You can see the the [example.html](http://lhl.github.io/jquery-uploader/example.html) for a complete/live (client-side) implementation.
I've also checked in some images in samples for testing.

### Markup
Markup can be any element. Widget items are appended so there can safely be additional items placed within if you'd like.

```
<div id="example" class="uploader"></div>
``` 

### Calling
Calling is straightforward:

```
$(".uploader").uploader(options);
```

You can also assign global options via `$.fn.uploader.options` if you'd like.

### Options
Options:
* `url`
  * Upload destination. This must be set in the options.
* `method`
  * Defaults to "POST"
* `name`
  * File parameter name, defaults to "file" 
* `accept` 
  * Acceptable file types for uploads
  * Defaults to support PNG, GIF, and JPEG
  * `{"mime/type": "format name"}`
    * format name is used for error messages
* `size`
  * Specify size/dimension restrictions
    * `width`
    * `height`
    * `max-width`
    * `max-height`
* `instructions`
  * If you want instructions to show up in an overlay, write the string here
* `thumbnail`
  * If you want to prepopulate the preview image, include the URL

### Styling
The example.html has a sample of how you might want to style the uploader.  Here are the relevant selectors:
* `.uploader`
  * recommended container class
* `.uploader-fileinput`
  * this should usually always be hidden and not styled
* `.uploader-instructions`
  * optional instructions overlay
* `.uploader-preview`
  * where the preview/thumbnail image goes
* `.uploader-preview .thumbnail`
  * the actual thumbnail image
* `.uploader-progress`
  * progress bar element (max=100)

## Notes
Thanks to [@remy](https://github.com/remy) for a clear example to work from.

Browser Requirements:
* [Drag and Drop](http://caniuse.com/#feat=dragndrop)
* [File API](http://caniuse.com/#feat=fileapi)
* [FileReader](http://caniuse.com/#feat=filereader)
* [Progress](http://caniuse.com/#feat=progressmeter)
* [XHR2](http://caniuse.com/#feat=xhr2)

## TODO
* Add distribution stuff like metadata, versioning, etc.
* bower/requirejs compability
* Add checks for HTML5 features
* Build callback for more customizable error reporting
* Add callback for customizing
* Additional checks
  * min-width
  * min-height
  * filesize

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
* [Plupload](http://www.plupload.com/)
  * Lots and lots of features
  * Lots of polyfills
  * Good separation of concerns
  * If you don't like the Widgets and use the API, you will have to write your own drag and drop, previews
  * No built-in dimension checks

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
* git push local to multiple remote branches in `.git/config`
  * variation of http://stackoverflow.com/a/7472481
  * Add to `[remote "origin"]`

    ```
    push = refs/heads/master:refs/heads/gh-pages
    push = refs/heads/master:refs/heads/master
    ```
* How to have code in a bulleted list in Github MarkDown
  * https://gist.github.com/clintel/1155906/

## License
This code is MIT licensed and you're free to do with it as you please.
