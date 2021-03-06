# jquery-uploader

JQuery plugin built specifically for easy single inline image uploading in mind.

You can use this as a simple drop-in for:
* HTML5 file uploads
* Single-file uploads per widget
* Drag and Drop and File Input clickthrough
* Pre-upload filtering by file type or image dimensions
* Pre-upload thumbnail/preview
* Progress bar

This plugin has limited support for callbacks and doodads, but is also very compact/straight-forward source so is an easier starting point for modifications. It's <200 [CLOC](http://cloc.sourceforge.net/) and about 3.2KiB minified.

In the [other projects section](#other-projects), I have links to more comprehensive projects, but I wrote this because there was nothing that did exactly what I wanted, customization would have required most of this code anyway (and I didn't think it would take as long as it did, see [reference](#reference)). This lib is useful I think both for someone that has a similar use case (single image upload/preview widget) or as a reasonable starting point for your own solution.

If you are worried about browser compatibility, you will want to check out the polyfill libs also in the [other projects section](#other-projects).

## Usage

You can see the [example.html](http://lhl.github.io/jquery-uploader/example.html) for a complete/live (client-side) implementation.
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
* `fields`
  * You can specify additional fields to be passed by the form submission, passed by reference so can be dynamic if you have a scoped reference
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

Callback Options:
* `onError`
  * You can pass in a custom function to render validation errors if you'd like. This isn't very well thought out, but I don't need callbacks a the moment and I'd like to keep this compact/simple.
  * `error`
    * `error["status"]` - "ok" or other
    * `error["msg"]` - Error message assembled

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
* meta
  * Add distribution stuff like metadata, versioning, etc.
  * grunt building for autominification?
  * bower/requirejs compability
* features
  * Add checks for HTML5 support, polyfill testing
  * Additional validation options
    * min-width
    * min-height
    * filesize

## Other Projects
There are other HTML5 file uploader libs that may be a better fit for what you're looking for:

* [DropzoneJS](http://www.dropzonejs.com/)
  * Doesn't require jQuery
  * Lot's of docs, examples, etc.
  * Lots of options/[customization](http://www.dropzonejs.com/bootstrap.html)
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
* [@remy](https://github.com/remy/)'s implementation
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
