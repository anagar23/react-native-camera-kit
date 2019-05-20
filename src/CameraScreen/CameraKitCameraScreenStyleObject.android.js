import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default styleObject = {
    cameraContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width, height
    },
    bottomButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 14
    },
    gap: {
        flex: 10,
        flexDirection: 'column'
    },
    mainContainer: {
        flex: 1
    },
    topTitleContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    captureContainer: {
        height: 270,
        backgroundColor: 'transparent',
    },
    containerText: {
        fontSize: 17,
        color: '#FFF'
    },
};