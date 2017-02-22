import $ from 'jquery';
import './styles.scss';

let body = $('body');
let buttonParent = $("<a>");
buttonParent.html('Click on me!')
$("body").prepend(buttonParent);

document.querySelectorAll('a').forEach((each) => {
    let button = new Button($(each));
    button.render('Close me!!!');
});



