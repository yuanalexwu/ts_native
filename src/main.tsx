/*
 * Copyright (c) 2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: Wuyuan Created: 2018-6-20
 */
import * as React from 'react'
import MyFlatList from './test_component/my_flat_list'

class Main extends React.Component {
    render (){
        const data = [
            {id: 'a', title: 'aaa'},
            {id: 'b', title: 'bbb'},
            {id: 'c', title: 'ccc'},
            {id: 'd', title: 'ddd'},
            {id: 'e', title: 'eee'},
        ]

        return (
            <MyFlatList data={data}/>
        )
    }
}

export default Main
