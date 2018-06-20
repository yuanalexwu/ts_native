/*
 * Copyright (c) 2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: Wuyuan Created: 2018-6-20
 */
import * as React from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    GestureResponderEvent,
} from 'react-native'
import styled from 'styled-components'

export interface onPressItemType {
    (id: string): void
}
interface MyListProps {
    id: string,
    selected: boolean
    title: string
    onPressItem: onPressItemType
}
interface MyListState {}

class MyListItem extends React.PureComponent<MyListProps, MyListState> {
    render (){
        const {
            selected = false,
            title = '',
            id,
        } = this.props

        const textStyle = {
            color: selected ? 'red' : 'black',
        }

        return (
            <TouchableOpacity onPress={this.handlePress}>
                <View>
                    <Text style={textStyle}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    handlePress = (e: GestureResponderEvent): void => {
        const {id} = this.props
        this.props.onPressItem(id)
    }
}

export default MyListItem
