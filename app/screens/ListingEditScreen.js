import React from 'react';

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';

function ListingEditScreen(props) {
    return (
        <Screen>
            <AppForm>

                <AppFormPicker />

            </AppForm>
        </Screen>
    );
}

export default ListingEditScreen;