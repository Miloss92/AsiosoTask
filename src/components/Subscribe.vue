<template>
    <div class="subscribe-div">
        <div class="subscribe-div-submit">
            <h1>Subscribe to our newsletter</h1>
            <input type="text" v-model="userEmail" @blur="$v.userEmail.$touch()">
            <div v-if="$v.userEmail.$error">
                <p v-if="!$v.userEmail.email" class="p-error">Please enter a valid email.</p>
                <p v-if="!$v.userEmail.required" class="p-error">Email is required.</p>
            </div>
            <button :disabled="$v.$invalid" @click="submit()">Subscribe</button>
        </div>
    </div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators';
    
    export default {
        name: "SubscribeComponent",
        data: function(){
            return {
                userEmail: "",
                subscribedUsers: []
            }
        },
        methods: {
            submit(){
                console.log("submited");      
            }
        },
        validations: {
            userEmail: {
                required,
                email
            }
        }
    }
</script>

<style scoped>
    .subscribe-div {
        width: 1760px;
        height: 250px;
        background-image: linear-gradient(to right, #8dbace, #59798f);
    }
    .subscribe-div-submit {
        margin: auto;
        width: 1050px;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h1 {
        color: white;
        margin-right: 20px;
    }
    input {
        height: 30px;
        width: 250px;
        border-radius: 5px;
        border: 1px solid #8dbace;
        margin-right: 10px;
        font-size: 17px;
        padding-left: 10px;
        cursor: pointer;
    }
    button {
        height: 35px;
        border-radius: 5px;
        border: 1px solid #59798f;
        background-color: #59798f;
        color: white;
        cursor: pointer;
    }
    button:hover {
        background-color: #3e5c69;
    }
    button:active {
        background-color: #59798f;
    }
    .p-error {
        color: white;
        margin-right: 5px;
    }
</style>