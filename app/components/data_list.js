/**
 * Created by maximilian on 05.09.2015.
 */
import React from 'react';
import style from './data_list.css';
import R from 'ramda';
import ring from '../structs/ring.js';

const click = 'tap';
const move = 'touchmove';
const start = 'touchstart';
const end = 'touchend';

var rafRunning = false,
    highPerf = document.getElementById('highPerf'),
    rand = () => Math.floor(Math.random() * (80 - 40)) + 40,
    customDiv = document.createElement('div');

const getCoordinatesFromEvent = function (e) {
    return {
        x: e.targetTouches[0].screenX,
        y: e.targetTouches[0].screenY
    };
};

var nextRingItems = undefined;
var getRecyclingContesters = function (list) {
    if (!nextRingItems) {
        nextRingItems = ring({sequence: list});
    }

    return nextRingItems(2);
};

var totalHeight = 0,
    visibleHeight = 0;
var scrollList = function (initialY, innerList, initialCoordinates, e) {
    var currentCoordinates = getCoordinatesFromEvent(e);

    var differenceY = initialCoordinates.y - currentCoordinates.y;

    var negativeY = differenceY * (-1);

    var newY = (initialY + negativeY);
    if (newY > 0) newY = 0;


    innerList.style.transform = 'translateY(' + (newY) + 'px)';


    if (totalHeight - visibleHeight < (newY * (-1) + 30)) {
        var recyclingContesters = getRecyclingContesters(innerList.children);

        // write
        recyclingContesters.forEach(function (recyclingNode) {
            recyclingNode.style.height = rand() + 'px';
        });

        // read
        var heights = R.map(R.prop('offsetHeight'), recyclingContesters);

        // translate
        heights.forEach(function (newHeight, index) {
            var recyclingContester = recyclingContesters[index];
            recyclingContester.style.transform = 'translateY(' + (totalHeight) + 'px)';
            totalHeight += newHeight;
        });
    }

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

        totalHeight = R.reduce((memo, domElement) =>  memo + domElement.offsetHeight, 0, innerList.children);
        visibleHeight = list.offsetHeight;
        list.addEventListener(start, mouseDownHandler(list, innerList));
    },

    getListItems () {
        var range = R.range(1, 10),
            rand = () => Math.floor(Math.random() * (60 - 40)) + 40;

        return R.map((rangeItem, index) => <div key={rangeItem} className={style.dataList_item} style={{height: rand() + 'px'}}>{rangeItem}</div>, range);
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