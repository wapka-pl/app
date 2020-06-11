// loader.js
jlogs('exist?','loader.waitForElementToDisplay');
waitForElementToDisplay('#create', 200, function (i){

    jlogs('waitForElementToDisplay i', i);

    var elem = document.querySelectorAll(i)[0] || document.querySelectorAll(i);
    jlogs('waitForElementToDisplay elem', elem, elem["json"]);

    elem.addEventListener("submit", function (event) {
        event.preventDefault();
        loader(elem);
        jlogs("form is submitted");
    });
});

jlogs('exist?','loader');
/**
 * @param elem
 * @returns {boolean}
 */
function loader(elem) {

    jlogs('loader elem', elem, elem["json"]);

    var x = elem["json"].value;
    if (x == "") {
        alert("Field JSON must be filled out");
        return false;
    }

    var script = document.createElement('script');
    // script.src = (window.location.hostname === 'localhost') ? "//localhost:8080/load.js" : "//load.jloads.com/load.js";
    // script.src = "//load.jloads.com/load.js";
    var b64 = btoa(x);
    jlogs(b64);

    script.src = "//get.wapka.pl/b64/" + b64;
    // script.src = "//localhost:80/b64/" + b64;
    document.head.appendChild(script);

    elem["url"].value = script.src;

    return false;
}
