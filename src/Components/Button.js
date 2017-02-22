import $ from 'jquery';
import template from './Button.html';
import Mustache from 'mustache';
import './Button.scss';

export default class Button {

        constructor(node) {
        this.node = node;
    }

    render(text) {
        let innerText = ($(this.node).text() + " (open dialog)") || '\<no text\>';

        // Render our button
        $(this.node).html(
            Mustache.render(template, {innerText})
        );

        // Attach our listeners
        $('.button').click(function (){
            alert(text);
        });
    }
}