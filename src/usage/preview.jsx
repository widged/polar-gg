/* jshint esnext: true */

import React from 'react';
import ReactDom from 'react-dom';

// import PrimitivesTwo        from '../primitives-twojs/usage/TwoDemo.jsx';
import PrimitivesSvg        from '../primitives-svg/usage/SvgDemo.jsx';
import ReactSvgDemo   from '../gog-react-svg/usage/ReactSvgDemo.jsx';
import VanillaSvgDemo from '../gog-vanilla-svg/usage/VanillaSvgDemo';

import Tabs     from '../components/tabs/Tabs.jsx';
import PageView from '../components/page-view/PageView.jsx';

function main() {

    var pages = (
      <pages>
        <page title="SVG primitives"><PrimitivesSvg /></page>
        <page title="React+SVG"><ReactSvgDemo /></page>
        <page title="Vanilla+SVG"><VanillaSvgDemo /></page>
        <page title="Canvas"><div>No renderer available yet</div></page>
        <page title="Webgl"><div>No renderer available yet</div></page>
      </pages>
    );
    //         <!-- <page title="Twojs primitives"><PrimitivesTwo /></page> -->


    var activePage = 0;
    var activeListeners = [];
    var activePageEmitter = (fn) => {
        if(typeof fn === 'function') {
            activeListeners.push(fn);
        };
    }
    // var activePageEmitter = new EventEmitter();
    var tabTitles    = pages.props.children.map(function(page) { return page.props.title; });
    var pageContents = pages.props.children.map(function(page) { return page.props.children; });
    var onTabChange  = function(active) {
        console.log('[tabchange]', active);
        activeListeners.forEach((fn) => {fn(active);})
    };

    var app = <app>
            <Tabs active={activePage} titles={tabTitles} onChange={onTabChange} />
            <PageView active={activePage} pages={pageContents} onActiveChange={activePageEmitter} />
        </app>;


    var appNode = document.createElement('div');
    document.body.appendChild(appNode);
    ReactDom.render(app, appNode);
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
