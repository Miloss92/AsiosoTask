<template>
    <div class="contact-component">
        <div class="form-wrapper">
    
            <div class="contact-us-div">
                <h1>Contact us:</h1>
            </div>
            <form v-on:submit.prevent="submit" class="form">
                
                <div class="form-row">
                    <div>
                        <label class="label">YOUR EMAIL ADRESS:</label>
                    </div>

                    <input type="text" v-model="email" class="input-email" @blur="$v.email.$touch()">
                    
                    <div v-if="$v.email.$error">
                        <p v-if="!$v.email.email" class="p-error">Please enter a valid email</p>
                        <p v-if="!$v.email.required" class="p-error">Email is required</p>
                    </div>
                
                </div>

                <div class="form-row">
                    <div>
                        <label class="label">TOP NEWS PRODUCT (option)</label>
                    </div>

                    <select v-model="product" class="select" @blur="$v.product.$touch()">
                        <option value="">Select product</option>
                        <option value="Sports">Sports</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Health">Health</option>
                    </select>
                    <div v-if="$v.product.$error">
                        <p v-if="!$v.product.required" class="p-error">Please select product</p>
                    </div>
                    
                </div>

                <div class="form-row">
                    <div>
                        <label class="label">ISSUE (option)</label>
                    </div>
                    <select v-model="issue" class="select" @blur="$v.issue.$touch()">
                        <option value="">Select issue</option>
                        <option value="Ask a question">Ask a question</option>
                        <option value="Correction">Correction</option>
                        <option value="Request help">Request help</option>
                        <option value="Other">Other</option>
                    </select>
                    <div v-if="$v.issue.$error">
                        <p v-if="!$v.issue.required" class="p-error">Please select issue</p>
                    </div>
                    
                </div>

                <div class="form-row">
                    <div>
                        <label class="label">DESCRIPTION:</label>
                    </div>
                    <textarea v-model="description" class="description" @blur="$v.description.$touch()"></textarea>
                </div>
                <div v-if="$v.description.$error">
                    <p v-if="!$v.description.required" class="p-description-error">Description is required</p>
                </div>

                <div class="let-us-know-text">
                    <p>Let us know how we can help you. If you are experiencing a technical problem,
                    please be sure to include as many details as possible.</p>
                </div>
                <p v-if="$v.$anyError" class="p-description-error">Please fill out the required fields</p>
                <div class="form-row">
                    <button :disabled="$v.$invalid" @click="submit()" class="submit-button">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import { required, email } from 'vuelidate/lib/validators';

export default {
    name: "ContactComponent",
    data: function(){
        return {
            email: "",
            product: "",
            issue: "",
            description: "",
            usersContactSubmit: [],
        }
    },
    methods: { 
        submit(){
            this.usersContactSubmit.push ({
                email: this.email,
                product: this.product,
                issue: this.issue,
                description: this.description 
            });
        }
    },
    validations: {
        email: {
            required,
            email
        },
        product: {
            required
        },
        issue: {
            required
        },
        description: {
            required
        }
    }

}
</script>

<style scoped>
    .contact-component {
        width: 1055px;
        height: 1200px;
    }
    .form {
        width: 530px;
        margin: auto;
    }
    .contact-us-div {
        margin-left: 10px;
    }
    .form-row {
        padding: 10px;
        margin-bottom: 10px;
    }
    .label {
        font-size: 20px;
        font-style: bold;
    }
    .input-email {
        margin-top: 20px;
        width: 500px;
        height: 40px;
        border-radius: 5px;
        font-size: 20px;
        text-align: center;
        border: 1px solid rgb(165, 165, 165);
        box-shadow: 1px 1px 3px 1px #adadad;
        cursor: pointer;
    }
    .select {
        margin-top: 20px;
        width: 505px;
        height: 45px;
        border-radius: 5px;
        font-size: 20px;
        text-align: center;
        border: 1px solid rgb(165, 165, 165);
        box-shadow: 1px 1px 3px 1px #adadad;
        cursor: pointer;
    }
    .description {
        margin-top: 20px;
        width: 485px;
        height: 250px;
        border: 1px solid rgb(165, 165, 165);
        box-shadow: 1px 1px 3px 1px #adadad;
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;
        max-height: 450px;
        max-width: 485px;
        cursor: pointer;
    }
    .let-us-know-text {
        width: 500px;
        margin-left: 10px;
        font-size: 17px;
    }
    .submit-button {
        margin-top: 10px;
        width: 150px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid gray;
        background-color: #59798f;
        color: white;
        font-size: 17px;
        cursor: pointer;
    }
    .submit-button:hover {
        background-color: #5c7e8d;
    }
    .submit-button:active {
        background-color: #3b5e6d;
    }
    .p-error {
        color: red;
        margin: 5px;
    }
    .p-description-error {
        color: red;
        margin-left: 10px;
        margin-top: 0;
        margin-bottom: 5px;
    }
    
</style>