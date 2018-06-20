/*
 * Copyright (c) 2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: Wuyuan Created: 2018-6-20
 */
import * as React from 'react'
import {
    View,
    Text,
} from 'react-native'
import FadeInView from './fadein_view'

class MyAnimate extends React.Component {
    render () {
        const wrapperStyle = {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'powderblue',
        }
        const textStyle = {
            fontSize: 28,
            margin: 10,
            paddingHorizontal: 30,
        }

        return (
            <View>
                <FadeInView style={wrapperStyle}>
                    <Text style={textStyle}>Fading in</Text>
                </FadeInView>
            </View>
        )
    }
}

export default MyAnimate
