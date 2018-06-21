import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';
import {AppLoading} from 'expo';
import Main from './src/main'

interface Props {}
interface State {
    isLoaded: boolean,
}

export default class App extends React.Component<Props, State> {
    state = {
        isLoaded: false
    }

    render() {
        const {isLoaded = false} = this.state
        if (!isLoaded) {
            return (
                <AppLoading
                    startAsync={this.handleLoadResource}
                    onFinish={this.handleLoadFinished}
                    onError={this.handleLoadError}
                />
            )
        }

        return (
            <View style={styles.container}>
                <StatusBar />
                <Main />
            </View>
        );
    }

    handleLoadResource = async () => {
        // TODO Load resources from server
        await new Promise((resolve) => setTimeout(() => resolve(), 4 * 1000))
    }

    handleLoadFinished = () => {
        // TODO Load resources from server successfully
        this.setState({
            isLoaded: true,
        })
    }

    handleLoadError = (e: Event): void => {
        // TODO Load resources from server failed
        console.log('handleLoadError ')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
