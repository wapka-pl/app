
/**
 *
 * @param text
 * @constructor
 */
function AddMessage(text) {

    var message = new Message({
        'class': 'faas-messages'
    });
    message.add(text);
}

var response = function (xhr) {
    console.log("xhr", xhr);
    // console.log("b", b);
    // console.log("c", c);
    // alert("OK RESPONSE");
    AddMessage(xhr.status);
    AddMessage(xhr.statusText);
    AddMessage(xhr.response);
}

var success = function (data) {
    // console.log('FORM success', data);
    console.table('FORM success', data);

    // var Check = prompt('Geben Sie Ihr Passwort für diese Seite ein', '@');
    // if (Check != '@') {
    //     alert('Du kommst hier nicht rein!');
    // } else {
    //     alert('Sie haben Zutritt');
    // }

};
var error = function (data) {
    console.error('!FORM', data);
}


var form = new RestForm('form', response, error, success);

form.cfg({
    "target": "form",
    "url": "//api.paas.info/index.php",
    "method": "GET",
    "event": "submit"
});

// form.url((window.location.hostname === 'localhost') ? "//localhost:8000/index.php" : "//php.jloads.com/index.php");

form.submit();
