var script = document.createElement('script');
script.src = (window.location.hostname === 'localhost') ? "//localhost:8080/load.js" : "//load.jloads.com/load.js";
// script.src = "//load.jloads.com/load.js";
document.head.appendChild(script);

script.onload = function () {

    var success = function (data) {
        if (typeof data.target !== 'undefined' && typeof data.target.src !== 'undefined') {
            // js
            console.log('SUCCESS loaded', data.target.src);
        } else if (typeof data.responseURL !== 'undefined') {
            // html
            console.log('SUCCESS loaded', data.responseURL);
        } else {
            // others
            console.log('SUCCESS loaded', data);
        }
    };

    var error = function (data) {
        console.error('!loaded', data);
    };


    var media = new Load(document.body, success, error);
    // media.env("//localhost:80/", "local", function () {
    //     return window.location.hostname === 'localhost';
    // })
    media.cacheOff().env("//www.paas.info/", "production", function (self) {
        return window.location.hostname !== 'localhost' && self.cacheOn();
    })

    media.target("#faas-form").html([
        "html/server.html"
    ]);
    media.target("#faas-table").html([
        // "html/server-list.html",
        "html/app-list.html"
    ]);

    function FontSize() {
        // var fonts = new Load(document.body, success, error);
        // fonts.js([
        //     "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        // ]);

        var fonts2 = new Load(document.body, function () {
            var fonts3 = new Load(document.body, success, error);
                fonts3.cacheOff().env("//www.paas.info/", "production", function (self) {
                    return window.location.hostname !== 'localhost' && self.cacheOn();
                })
                fonts3.js([
                "js/flowtype.js",
            ]);
        }, error);
        // jloads.domain("//js.jloads.com/");
        // fonts2.env("//localhost:80/", "local", function () {
        //     return window.location.hostname === 'localhost';
        // })
        fonts2.cacheOff().env("//www.paas.info/", "production", function (self) {
            return window.location.hostname !== 'localhost' && self.cacheOn();
        })

        fonts2.js([
            "cdn/flowtype.js",
        ]);
    }

    var bootstrap = new Load(document.body, success, error);
    bootstrap.css([
        "cdn/bootstrap.min.css"
        // "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    ]);

    var bootstrap2 = new Load(document.body, FontSize, error);
    bootstrap2.js([
        "cdn/jquery-3.3.1.slim.min.js",
        // "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
        "cdn/popper.min.js",
        // "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        "cdn/bootstrap.min.js"
    ]);


    var images = new Load(document.body, success, error);
    // var images = new Load(document.body, success, error, loader);
    images.target("#home-images");

    images.img([
        "//logo.paas.info/2/cover.png"
    ]);

    function Forms() {

    }
    var app = new Load(document.body, success, error);
    // app.domain("//app.paas.info/");
    // app.env("//localhost:80/", "local", function () {
    //     return window.location.hostname === 'localhost';
    // })
    app.cacheOff().env("//www.paas.info/", "production", function (self) {
        return window.location.hostname !== 'localhost' && self.cacheOn();
    })
    app.delay(644).js([
        "js/form.js",
        "js/message.js"
    ]);

    // TODO: succes only after loading all, not each

    var jloads = new Load(document.body, Forms, error);
    jloads.env("//localhost:81/", "local", function (self) {
        return window.location.hostname === 'localhost' && self.cacheOff();
    })
    jloads.cacheOff().env("//js.jloads.com/", "production", function (self) {
        return window.location.hostname !== 'localhost' && self.cacheOn();
    })
    // jloads.domain("//localhost:81/")
    //     .domain("//js.jloads.com/");

// jloads.cache(1).cascade().js([
    jloads.js([
        "load/message.js",
        // "load/e.js",
        "load/formToObject.min.js",
        // "load/response.js",
        "rest/rest.js",
        // "include/include.js",
        // "load/listener.js",
        // "load/router.js",
        "rest/rest-form.js"
    ]);

    // console.log(jloads.cfg);





    // app.style([
    // "css/black.css",
    // "css/mobile.css"
    // ]);
}
