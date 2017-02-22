import $ from 'jquery';
import './styles.scss';

let body = $('body');
let buttonParent = $("<a>");
buttonParent.html('Click on me!')
$("body").prepend(buttonParent);

if (document.querySelectorAll('a').length) {
    require.ensure(['./Components/Button'], () => {
        const Button = require('./Components/Button').default;
        document.querySelectorAll('a').forEach((each) => {
            let button = new Button($(each));
            button.render('Close me!!!');
        });
    });
}

if (document.querySelectorAll('h1').length) {
    require.ensure(['./Components/Header'], () => {
        const Header = require('./Components/Header');
        new Header().render('h1');
    });
}



