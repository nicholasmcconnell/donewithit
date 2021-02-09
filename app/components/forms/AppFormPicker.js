import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';
function AppFormPicker({ items, name, placehodler }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placehodlder}
                selectedItem={values[name]}
            />
            <ErrorMessage error={error[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;