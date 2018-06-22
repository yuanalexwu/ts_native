/*
 * Copyright (c) 2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: Wuyuan Created: 2018-6-21
 */
import * as React from 'react'
import {
    View,
    Text,
} from 'react-native'
const deviceStorage = require('react-native-simple-store')

class MyStorage extends React.Component {
    async componentDidMount () {
        try {
            await deviceStorage.save('name', 'asdfad')
            const name = await deviceStorage.get('name')
            console.log('componentDidMount ', {name})
            await deviceStorage.save('obj', {name: 'tom', age: 12})
            const obj = await deviceStorage.get('obj')
            console.log('componentDidMount ', {obj})
            await deviceStorage.update('obj', {name: 'alex'})
            const obj2 = await deviceStorage.get('obj')
            console.log('componentDidMount ', {obj2})
            const deletedName = await deviceStorage.delete('name')
            console.log('componentDidMount ', {deletedName})
            const unexistedName = await deviceStorage.delete('aaa')
            console.log('componentDidMount ', {unexistedName})
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
