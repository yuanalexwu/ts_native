/*
 * Copyright (c) 2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: Wuyuan Created: 2018-6-21
 */
declare module 'react-native-simple-store' {
    function get(s: string | string[]): Promise<void>
    function save(key: string | string[], value: any): Promise<void>
    function update(key: string, value: string | object): Promise<void>
    // function delete(key: string): Promise<void>
    function keys(): Promise<string[]>
    function push(key: string, value: any): any
}
