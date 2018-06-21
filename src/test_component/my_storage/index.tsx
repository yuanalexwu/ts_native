/*
 * Copyright (c) 2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: Wuyuan Created: 2018-6-21
 */
import * as React from 'react'
import {
    View,
    Text,
} from 'react-native'
import store from 'react-native-simple-store'

class MyStorage extends React.Component {
    async componentDidMount () {
        try {
            await store.save('name', 'asdfad')
            const name = await store.get('name')
            console.log('componentDidMount ', {name})
        } catch (err) {
            console.log(err)
        }
    }

    render () {
        return (
            <View>
                <Text>Test Storage</Text>
            </View>
        )
    }
}

export default MyStorage
