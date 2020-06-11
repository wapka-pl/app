// loader.js
log('exist?','loader.waitForElementToDisplay');
waitForElementToDisplay('#submit', 200, function (i){

    console.log('waitForElementToDisplay i', i);

    var elem = document.querySelectorAll(i)[0] || document.querySelectorAll(i);
    console.log('waitForElementToDisplay elem', elem, elem["json"]);

    elem.addEventListener("click", function (event) {
        event.preventDefault();
        loader(elem);
        console.log("form is submitted");
    });
});

log('exist?','loader');
/**
 * @param elem
 * @returns {boolean}
 */
function loader(elem) {

    console.log('loader elem', elem, elem["json"]);

    var x = elem["json"].value;
    if (x == "") {
        alert("Field JSON must be filled out");
        return false;
    }

    var script = document.createElement('script');
    // script.src = (window.location.hostname === 'localhost') ? "//localhost:8080/load.js" : "//load.jloads.com/load.js";
    // script.src = "//load.jloads.com/load.js";
    var b64 = btoa(x);
    console.log(b64);

    script.src = "//get.wapka.pl/b64/" + b64;
    // script.src = "//localhost:80/b64/" + b64;
    document.head.appendChild(script);

    elem["url"].value = script.src;

    return false;
}
