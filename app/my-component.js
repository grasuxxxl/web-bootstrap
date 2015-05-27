/**
 * Created by I309184 on 27/05/2015.
 */
import styles from './my-component.css';
import React from 'react';
import { Component } from 'react';

export default class MyComponent extends Component {
    render() {
        return (
            <div className={styles.className}>
                <div>Icon</div>
            </div>
        );
    }
}