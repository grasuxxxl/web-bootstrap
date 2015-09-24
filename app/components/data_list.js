/**
 * Created by maximilian on 05.09.2015.
 */
import React from 'react';
import style from './data_list.css';
import R from 'ramda';

const click = 'tap';
const move = 'touchmove';
const start = 'touchstart';
const end = 'touchend';

var rafRunning = false,
    highPerf = document.getElementById('highPerf'),
    rand = () => Math.floor(Math.random() * (40 - 20)) + 20,
    customDiv = document.createElement('div');

const getCoordinatesFromEvent = function (e) {
    return {
        x: e.targetTouches[0].screenX,
        y: e.targetTouches[0].screenY
    };
};


var scrollList = function (initialY, innerList, initialCoordinates, e) {
    var currentCoordinates = getCoordinatesFromEvent(e);

    var differenceY = initialCoordinates.y - currentCoordinates.y;

    var negativeY = differenceY * (-1);

    var newY = (initialY + negativeY);
    if (newY > 0) newY = 0;

    innerList.style.transform = 'translateY(' + newY + 'px)';

    // Do I recycle the DOM Node?

    // Create a div, of x height, measure it, log height to console


    customDiv.style.height = rand() + 'px';


    highPerf.contentDocument.body.appendChild(customDiv);
    console.log(customDiv.offsetHeight);
    highPerf.contentDocument.body.removeChild(customDiv);
    rafRunning = false;
};

const mouseMoveHandler = R.curry(function (initialY, innerList, initialCoordinates, e) {
    if (rafRunning) return;
    rafRunning = true;
    requestAnimationFrame(scrollList.bind(null, initialY, innerList, initialCoordinates, e));
});

const mouseDownHandler = R.curry(function (list, innerList, e) {
    var initialCoordinates = getCoordinatesFromEvent(e);
    var currentY = new WebKitCSSMatrix(window.getComputedStyle(innerList).transform).m42 || 0;

    var mouseMoveHandlerWithArgs = mouseMoveHandler(currentY, innerList, initialCoordinates);
    list.addEventListener(end, function () {
        document.body.removeEventListener(move, mouseMoveHandlerWithArgs);
    });



    document.body.addEventListener(move, mouseMoveHandlerWithArgs);
});

export default React.createClass({
    componentDidMount () {
        var list = React.findDOMNode(this.refs.list),
            innerList = React.findDOMNode(this.refs.innerList);

        list.addEventListener(start, mouseDownHandler(list, innerList));
    },

    getListItems () {
        var range = R.range(1, 10),
            rand = () => Math.floor(Math.random() * (40 - 20)) + 20;

        return R.map((rangeItem, index) => <div key={rangeItem} style={{height: rand() + 'px', backgroundColor: 'green'}}>{rangeItem}</div>, range);
    },

    render () {
        return (
            <div ref="list" className={style.dataList}>
                <div ref="innerList" className={style.innerList} >
                    {this.getListItems()}
                </div>
            </div>
        );
    }
});