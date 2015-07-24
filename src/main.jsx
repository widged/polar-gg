/* jshint esnext: true */

import './main.css';

import React from 'react';
import SvgDemo        from './lib/shapes-svg/usage/SvgDemo';
import ReactSvgDemo   from './lib/renderer-react-svg/usage/ReactSvgDemo';
import VanillaSvgDemo from './lib/renderer-vanilla-svg/usage/VanillaSvgDemo';

import Tabs     from './components/tabs/Tabs';
import PageView from './components/page-view/PageView';
import EventEmitter from 'eventemitter3';

function main() {

    var pages = <pages>
        <page title="SVG primitives"><SvgDemo /></page>
        <page title="React+SVG"><ReactSvgDemo /></page>
        <page title="Vanilla+SVG"><VanillaSvgDemo /></page>
        <page title="Canvas"><div>No renderer available yet</div></page>
        <page title="Famous"><div>No renderer available yet</div></page>
        <page title="Webgl"><div>No renderer available yet</div></page>
    </pages>

    var tabTitles, pageContents, onTabChange, app;

    var activePage = 2;
    var activePageEmitter = new EventEmitter();
    tabTitles    = pages.props.children.map(function(page) { return page.props.title; });
    pageContents = pages.props.children.map(function(page) { return page.props.children; });
    onTabChange = function(active) { activePageEmitter.emit('change', active); };
    
    app = <app>
            <Tabs active={activePage} titles={tabTitles} onChange={onTabChange} />
            <PageView active={activePage} pages={pageContents} emitter={activePageEmitter} />
        </app>;

        
    var appNode = document.createElement('div');
    document.body.appendChild(appNode);
    React.render(app, appNode);
}

main();


/*
    var reactDemo = document.createElement('div');
    document.body.appendChild(reactDemo);
    React.render(<ReactSvgDemo />, reactDemo);


    var vanillaDemo = document.createElement('div');
    document.body.appendChild(vanillaDemo);
    React.render(<VanillaSvgDemo />, vanillaDemo);
*/

        /*
        var activePane = this.state.activePane;
        var panes = this.props.children.reduce(function(acc, item) {
            const {title, children} = item.props;
            acc.push({title: title, content: children});
            return acc;
        }, []);
        var handlePaneChange = this.handlePaneChange.bind(this);
        var Tabs = React.createElement('ul', {}, panes.map(function(pane, i) {
            var isActive = (i === activePane) ? true : false;
            return <li className={isActive ? 'active' : null} data-pane={i} onClick={handlePaneChange}>{pane.title}</li>;
        }));
        */
