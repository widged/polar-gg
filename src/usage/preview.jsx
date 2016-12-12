/* jshint esnext: true */

import React from 'react';
import ReactDom from 'react-dom';

// import PrimitivesTwo        from '../primitives-twojs/usage/TwoDemo.jsx';
import GeomsDemos     from '../shapes/usage/PrimitiveDemo.jsx';
import ReactSvgDemo   from '../renderer/gog-react-svg/usage/ReactSvgDemo.jsx';
import VanillaSvgDemo from '../renderer/gog-vanilla-svg/usage/VanillaSvgDemo';

import Tabs     from '../components/tabs/Tabs.jsx';
import PageView from '../components/page-view/PageView.jsx';
import svgSurface    from '../surface/svg-surface/svgSurface.jsx';
import canvasSurface from '../surface/canvas-surface/canvasSurface.jsx';
import webglSurface  from '../surface/webgl-surface/webglSurface.jsx';

function main() {

    var pages = (
      <pages>
        <page title="Canvas surface / primitives"><GeomsDemos surface={canvasSurface} /></page>
        <page title="SVG surface / primitives"><GeomsDemos surface={svgSurface} /></page>
        <page title="Webgl surface / primitives"><GeomsDemos surface={webglSurface} /></page>
        <page title="React+SVG"><ReactSvgDemo /></page>
        <page title="Vanilla+SVG"><VanillaSvgDemo /></page>
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
