// loader.js
jlogs('exist?','loader.waitForElementToDisplay');
waitForElementToDisplay('#create', 30, function (i){

    jlogs('waitForElementToDisplay i', i);

    var elem = document.querySelectorAll(i)[0] || document.querySelectorAll(i);
    jlogs('waitForElementToDisplay elem', elem, elem["json"]);

    elem.addEventListener("submit", function (event) {
        event.preventDefault();
        create(elem);
        jlogs("form is submitted");
    });
});

jlogs('exist?','loader');
/**
 * @param form
 * @returns {boolean}
 */
function create(form) {

    jlogs('loader form', form, form["json"]);

    var x = form["json"].value;
    if (x == "") {
        alert("Field JSON must be filled out");
        return false;
    }

    var script = document.createElement('script');
    // script.src = (window.location.hostname === 'localhost') ? "//localhost:8080/load.js" : "//load.jloads.com/load.js";
    // script.src = "//load.jloads.com/load.js";
    var b64 = btoa(x);
    jlogs('loader b64',b64);

    script.src = "//get.wapka.pl/b64/" + b64;
    // script.src = "//localhost:80/b64/" + b64;
    document.head.appendChild(script);

    form["url"].value = script.src;

    return false;
}
