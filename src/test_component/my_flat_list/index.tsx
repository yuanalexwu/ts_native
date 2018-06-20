/*
 * Copyright (c) 2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: Wuyuan Created: 2018-6-20
 */
import * as React from 'react'
import {
    FlatList,
    View,
    Text,
} from 'react-native'
import MyListItem, {
    onPressItemType,
} from "./my_list_item";

interface MyFlatListProps {
    data: dataItemType[]
}
interface dataItemType {
    id: string,
    title: string,
}

interface MyFlatListState {
    selectedMap: selectedMapType
}
interface selectedMapType {[propName: string]: boolean}

class MyFlatList extends React.Component<MyFlatListProps, MyFlatListState> {
    state: MyFlatListState  = {
        selectedMap: {},
    }

    render (){
        const {
            data = [],
        } = this.props

        return (
            <View>
                <FlatList
                    keyExtractor={this.keyExtrator}
                    data={data}
                    extraData={this.state}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }

    keyExtrator = (item: dataItemType, index: number) => {
        return item.id
    }

    handleOnPress = (id: string): void => {
        this.setState((state) => {
            const {
                selectedMap = {},
            } = state
            return {
                selectedMap: {...selectedMap, [id]: !selectedMap[id]}
            }
        })
    }

    renderItem = ({item}: {item: dataItemType}) => {
        const {
            selectedMap
        } = this.state
        const {
            id,
            title,
        } = item
        const selected = selectedMap[id]

        return (
            <MyListItem
                id={id}
                title={title}
                selected={this.state.selectedMap[id]}
                onPressItem={this.handleOnPress}
            />
        )
    }
}

export default MyFlatList
