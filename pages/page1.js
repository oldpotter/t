import React, { Component } from 'react'
import {Image} from 'react-native'
//hao 阿斯顿发生地方
export default class XJ extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (<Image source={pic} style={{width: 193, height: 110}}/>)
    }
}