import './main.css';

import React from 'react';
import ReactSvgDemo   from './lib/renderer-react-svg/usage/ReactSvgDemo';
import VanillaSvgDemo from './lib/renderer-vanilla-svg/usage/VanillaSvgDemo';


class Tabs extends React.Component {

	constructor(props) {
		super();
		this.state = {activePane: parseInt(props.activePane) || 0};
	}

	handlePaneChange(event) {
		var activePane = event.target.dataset.pane;
		this.setState({activePane: parseInt(activePane) });
	}	

  	render() {
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

	    return <app>
	    	<tabs>{Tabs}</tabs>
	    	{panes[activePane].content}
	  	</app>;

	}
}


function main() {
    var app = document.createElement('div');
    document.body.appendChild(app);
    var tabs = <Tabs activePane="0">
    	<pane title="React+SVG"><ReactSvgDemo /></pane>
    	<pane title="Vanilla+SVG"><VanillaSvgDemo /></pane>
    	<pane title="Famous"><div>No renderer available yet</div></pane>
    	<pane title="Webgl"><div>No renderer available yet</div></pane>
    </Tabs>
    React.render(tabs, app);
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
