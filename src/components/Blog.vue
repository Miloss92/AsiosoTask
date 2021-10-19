<template>
    <div class="blog-component">
        <div>
            <h1>Blog content:</h1>
        </div>
        <div class="blog-wrapper">
            <div class="blog-content">
                <form>
                    <div class="label-div">
                        <label>Your email adress:</label>
                    </div>
                    <div>
                        <input type="text" class="input" v-model="userEmail" @blur="$v.userEmail.$touch()">
                        <div v-if="$v.userEmail.$error">
                            <p v-if="!$v.userEmail.email" class="p-error">Please enter a valid email.</p>
                            <p v-if="!$v.userEmail.required" class="p-error">Email is required.</p>
                        </div>
                    </div>
                    <div class="label-div">
                        <label>Blog title:</label>
                    </div>
                    <div>
                        <input class="input" type="text" v-model="blogTitle" @blur="$v.blogTitle.$touch()">
                        <div v-if="$v.blogTitle.$error">
                            <p v-if="!$v.blogTitle.required" class="p-error">Please enter blog title.</p>
                        </div>
                    </div>
                    <div class="label-div">
                        <label>Blog text:</label>
                    </div>
                    <div>
                        <textarea class="text-area" v-model="blogText" @blur="$v.blogText.$touch()"></textarea>
                        <div v-if="$v.blogText.$error">
                            <p v-if="!$v.blogText.required" class="p-error">Please enter blog text.</p>
                        </div>
                    </div>
                    <div class="btn-div">
                        <button :disabled="$v.$invalid" @click="submit()" class="btn-submit">Submit</button>
                    </div>    
                </form>
            </div>

        </div>
        
    
        <div class="blog-div-wrapper">
            <div v-for="blog in allBlogs" :key="blog.index" class="blog-div">
                <div>
                    <h3>{{ blog.blogTitle }}</h3>
                </div>
                {{ blog.blogText }}
                <div class="blog-user-email">
                    <h5>{{ blog.userEmail}}</h5>
                </div> 
            </div>
        </div>

    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
    name: "BlogComponent",
    data: function(){
        return {
            userEmail: "",
            blogTitle: "",
            blogText: "",
            allBlogs: [
                { 
                    userEmail: 'james@gmail.com',
                    blogTitle: 'LOREM IPSUM',
                    blogText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non sem dignissim, vulputate massa sed, finibus ligula. Praesent efficitur enim in nunc fermentum accumsan.'
                },
                { 
                    userEmail: 'alex2524@gmail.com',
                    blogTitle: 'LOREM IPSUM DOLOR SIT AMET',
                    blogText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non sem dignissim, vulputate massa sed, finibus ligula. Praesent efficitur enim in nunc fermentum accumsan. Nulla facilisi. Cras auctor augue tellus, laoreet pellentesque purus lobortis eget.'
                },
                { 
                    userEmail: 'alex2524@gmail.com',
                     blogTitle: 'LOREM IPSUM DOLOR',
                    blogText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non sem dignissim, vulputate massa sed, finibus ligula. Praesent efficitur enim in nunc fermentum accumsan. Nulla facilisi. Cras auctor augue tellus, laoreet pellentesque purus lobortis eget.'
                }
            ]
        }
    },
    validations: {
        userEmail: {
            required,
            email
        },
        blogTitle: {
            required
        },
        blogText: {
            required
        }

    },
    methods: {
        submit(){
            this.allBlogs.unshift({
                userEmail: this.userEmail,
                blogTitle: this.blogTitle,
                blogText: this.blogText
            });
        }
    }
}
</script>

<style scoped>
    .blog-component {
        width: 1055px;
        height: 1200px;
    }
    .blog-content {
        width: 500px;
        margin: auto;
    }
    .label-div {
        text-align: center;
        height: 25px;
        font-size: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .input {
        width: 492px;
        height: 40px;
        cursor: pointer;
        text-align: center;
        font-size: 18px;
        border-radius: 5px;
        box-shadow: 1px 1px 3px 1px #adadad;
        border: 1px solid rgb(165, 165, 165);
    }
    .text-area {
        width: 456px;
        max-width: 456px;
        min-width: 456px;
        height: 200px;
        max-height: 230px;
        min-height: 200;
        padding: 20px;
        font-size: 16px;
        overflow-y: scroll;
        cursor: pointer;
        border: 1px solid rgb(165, 165, 165);
        border-radius: 5px;
        box-shadow: 1px 1px 3px 1px #adadad;
    }
    .btn-submit {
        float: right;
        height: 30px;
        width: 100px;
        border: 1px solid rgb(168, 168, 168);
        border-radius: 5px;
        margin-top: 20px;
        margin-bottom: 30px;
        cursor: pointer;
        box-shadow: 1px 1px 3px 1px #adadad;
    }
    .btn-submit:hover {
        background-color: rgb(221, 221, 221);
    }
    .btn-submit:active {
        background-color: rgb(212, 212, 212); ;
    }
    .blog-div-wrapper {
        height: 620px;
        width: 1050px;
        overflow-x: scroll;
        margin-top: 30px;
    }
    .blog-div {
        border-radius: 5px;
        padding: 20px;
        width: 985px;
        margin-bottom: 15px;
        background-color: #f2f6f8;
        box-shadow: 1px 1px 2px 1px #d3d3d3;
    }
    .blog-user-email {
        margin-top: 20px;
        margin-left: 800px;
        text-decoration: underline;
    }
    .p-error {
        color: red;
        margin: 5px;
    }
</style>