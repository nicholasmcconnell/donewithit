import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import AppText from '../components/AppText.js';
import * as Progress from 'react-native-progress';
import colors from '../config/colors.js';


function UploadScreen({ progress = 0, visible = false }) {
    console.log(progress)
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                <Progress.Bar color={colors.primary} progress={progress} width={200} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default UploadScreen;