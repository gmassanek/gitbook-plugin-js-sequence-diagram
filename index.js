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
                return "<script src='../gitbook/plugins/gitbook-plugin-js-sequence-diagram/raphael-min.js'></script>";
            }
        }
    }
};
