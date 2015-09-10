/**
 * Created by maximilian on 03.09.2015.
 */
import React from 'react';
import style from './search_bar.css';

export default React.createClass({
    render: function () {
        return (
            <input type="text" placeholder="Search terms..." className={style['search-bar']} />
        );
    }
});