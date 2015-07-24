/* jshint esnext: true */

import React from 'react';
import PageView  from '../PageView';
import EventEmitter from 'eventemitter3';

export default class TabsDemo extends React.Component {

    render() {
        var activePageEmitter = new EventEmitter();

        var pages = <pages>
            <page title="One">Page One</page>
            <page title="Two">Page Two</page>
            <page title="Three">Page Three</page>
        </pages>;

        var pageContents = pages.props.children;
        var onStepperChange = function(event) { 
            var stepperMax = pageContents.length;
            var stepperValue = parseInt(event.target.value);
            if(stepperValue > stepperMax) {
                event.target.value = stepperValue = stepperMax;
            }
            activePageEmitter.emit('change', stepperValue - 1); 
        };

        return <demo>
            <div><input id="movie" type="number" onChange={onStepperChange}/></div>
            <PageView active={0} pages={pageContents} emitter={activePageEmitter} />
        </demo>
    }

}