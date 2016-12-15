/* jshint esnext: true */

import React from 'react';
import Tabs  from '../Tabs';

export default class TabsDemo extends React.Component {

    render() {
        var tabTitles, onTabChange;

        tabTitles    = 'One,Two,Three'.split(',');
        onTabChange = function(active) {  console.log('[TAB CHANGE]', active); };

        return <Tabs active={0} titles={tabTitles} onChange={onTabChange} />
    }

}