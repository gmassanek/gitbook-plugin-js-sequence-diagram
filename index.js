module.exports = {
    book: {
        assets: "./book",
        js: [
            "jquery-2.1.1.min.js",
            "underscore-min.js",
            "sequence-diagram-min.js",
            "plugin.js"
        ],
        css: [
          "styles.css"
        ],
        html: {
            "head:end": function() {
                // Required to including this way because raphael is non-AMD compliant
                return "<script src='//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.2/raphael-min.js'></script>";
            }
        }
    }
};
