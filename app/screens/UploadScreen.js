import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import colors from '../config/colors.js';


function UploadScreen({ onDone, progress = 0, visible = false }) {
    console.log(progress)
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar
                        color={colors.primary}
                        progress={progress}
                        width={200}
                    />
                ) : (
                    <LottieView
                        autoPlay={true}
                        loop={false}
                        onAnimationFinish={onDone}
                        source={require('../assets/animations/done.json')}
                        style={styles.animation}
                    />
                )}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    animation: {
        width: 150,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default UploadScreen;