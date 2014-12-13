;(function ( $, window, document, undefined ) {


  /* Uploader Plugin */
  $.fn.uploader = function(options) {
    // Self (tracking uploader instance)
    var uploader;

    // Options
    var opts = $.extend( {}, $.fn.uploader.options, options );

    // Status
    var r = {"status": "ok", "msg": ""};

    // Build Widget
    /*
      * File Input (hidden, called only virtually onclick)
      * Preview (+ Thumbnail if included; useful for replacing existing files )
      * Instructions Overlay
      * Progress Bar
    */
    var html = "";
    html += "<input type='file' class='uploader-fileinput' style='position: absolute; visibility: hidden; height: 0; width: 0; top: 0; left: 0'>";
    if(opts["thumbnail"]) {
      html += "<div class='uploader-preview'><img class='thumbnail' src='" + opts["thumbnail"] + "'></div>";
      $(".uploader-preview", uploader).html("<img class='thumbnail' src='" + image.src + "'>");
    } else {
      html += "<div class='uploader-preview'></div>";
    }
    if(opts["instructions"]) {
      html += "<div class='uploader-instructions'>" + opts["instructions"] + "</div>";
    }
    html += "<progress class='uploader-progress' max='100'></progress>";
    this.append(html);

    // File Input Events
    $(".uploader-fileinput", this).on("change", function(e) {
      if(this.files.length) {
        process(this.files[0]);
      }
    });

    // Uploader Events
    this.on("click", function(e) {
      uploader = this;
      $(".uploader-fileinput", uploader)[0].click()
    });

    // Drag and Drop
    this.on({
      dragover: function(e) {
        e.preventDefault();
        e.stopPropagation();
      },
      dragenter: function(e) {
        e.preventDefault();
        e.stopPropagation();
      },
      drop: function(e) {
        uploader = this;
        e.preventDefault();
        e.stopPropagation();
        drop(e.originalEvent.dataTransfer.files); // http://api.jquery.com/category/events/event-object/
      }
    });


    function error(err) {
      if(err) {
        r = err;
      }
      if(r["status"] == "ok") {
        return false;
      } else {
        // Only display error when passed in
        if(err && err["msg"]) {
          alert(err["msg"]);
        }
        return true;
      }
    }


    function drop(files) {
      if(!files.length) {
        return;
      }

      // Check for Errors & Create Thumbnail & Upload
      r = process(files[0]);

    }


    function process(file) {
      // File Type
      if(!opts["accept"][file.type]) {
        error({
          "status": "filetypecheck",
          "msg": "The file must be of the type: " + $.map(opts["accept"], function(value) { return value; }).join(", ")
        });
        return;
      }

      // Image Check + Thumbnail
      var reader = new FileReader();
      reader.onload = function(event) {
        var image = new Image();
        image.src = event.target.result;
        image.onload = function() {
          var w = this.width,
              h = this.height,
              t = file.type,
              n = file.name,
              s = ~~(file.size/1024) + "KB";

          // Size Checks
          if(opts["size"]["width"]) {
            if(w != opts["size"]["width"]) {
              error({
                "status": "sizecheck",
                "msg": "The file width must be: " + opts["size"]["width"]
              });
              return;
            }
          }

          if(opts["size"]["height"]) {
            if(h != opts["size"]["height"]) {
              error({
                "status": "sizecheck",
                "msg": "The file height must be: " + opts["size"]["height"]
              });
              return;
            }
          }

          if(opts["size"]["max-width"]) {
            if(w >= opts["size"]["max-width"]) {
              error({
                "status": "sizecheck",
                "msg": "The file width must not exceed: " + opts["size"]["max-width"]
              });
              return;
            }
          }

          if(opts["size"]["max-height"]) {
            if(h > opts["size"]["max-height"]) {
              error({
                "status": "sizecheck",
                "msg": "The file height must not exceed: " + opts["size"]["max-height"]
              });
              return;
            }
          }

          /*
          Additional Checks:
          * min-width
          * min-height
          * filesize
          */

          // If we passed all the checks:

          // Make Thumbnail
          $(".uploader-preview", uploader).html("<img class='thumbnail' src='" + image.src + "'>");

          // Upload the File
          upload(file);
        }
      }
      reader.readAsDataURL(file);
    }


    function upload(file) {
      // Progress Bar
      progress = $("progress", uploader)[0];
      progress.value = 0;
      $(progress).slideDown();

      // Make Form
      var form = new FormData();
      form.append(opts["name"], file);

      // Add additional fields
      for(k in opts["fields"]) {
        form.append(k, opts["fields"][k]);
      }

      // Upload
      var xhr = new XMLHttpRequest();
      xhr.open(opts["method"], opts["url"]);

      xhr.onload = function() {
        // console.log("done uploading");
        progress.value = 100;
        $(progress).slideUp();
      };

      xhr.upload.onprogress = function(event) {
        if(event.lengthComputable) {
          progress.value = (event.loaded / event.total * 100 | 0);
          // console.log("progress:", progress.value);
        }
      }

      xhr.send(form);
    }


  };


  /* Uploader Options */
  $.fn.uploader.options = {
    url: null,
    method: "POST",
    fields: {},
    name: "file",
    accept: {
      "image/png": "PNG",
      "image/gif": "GIF",
      "image/jpeg": "JPEG"
    },
    size: {},
    instructions: "Drag and Drop or Click",
    thumbnail: null
  }

})( jQuery, window, document );
