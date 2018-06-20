/*
 * Copyright (c) 2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: Wuyuan Created: 2018-6-20
 */
import * as React from 'react'
import {
    Animated,
    View,
    Text,
} from 'react-native'

interface Props {
    style: object,
}
interface State {
    fadeAnim: Animated.Value,
}

class FadeInView extends React.Component<Props, State> {
    state = {
        fadeAnim: new Animated.Value(0)
    }

    componentDidMount() {
        const {fadeAnim} = this.state
        Animated
            .timing(fadeAnim, {toValue: 1, duration: 10 * 1000})
            .start()
    }

    render() {
        const {fadeAnim} = this.state
        const {style} = this.props
        const viewStyle = {
            ...style,
            opacity: fadeAnim,
        }

        return (
            <Animated.View
                style={viewStyle}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}

export default FadeInView
