import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
];

function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                />
                <AppFormPicker items={categories} name="category" placeholder="Category" />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
export default ListingEditScreen;
//wrap apppicker and errormessage in AppFormPicker
// appFormPicker
    // handle the onSelectItem event of the picker component and 
    //programmatically set the value of the field. 
        //To do that, you should use the setFieldValue function of Formik. Get that from the Formik context.

//to display the selected item in the picker, 
    // to get the values object from Formik context. 
        //This object is similar to the errors and touched objects. It has a key/value pair for every field in the form.

//Validation rules: -
    //Title: A required string, minimum one character long -
    //Price: A number between 1 and 10,000 -
    //Category: A required but nullable object -
    //Description: An optional string 
