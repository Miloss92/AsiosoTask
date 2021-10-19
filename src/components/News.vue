<template>
    <div class="news-component">
        <div class="search-div">
            <select v-model="selectedCategory" class="select-category">
                <option disabled value="" class="option">Please select one</option>
                <option selected class="option">General</option>
                <option class="option">Sports</option>
                <option class="option">Entertainment</option>
                <option class="option">Health</option>
            </select>

            <button @click="callApi()" class="btn-search">Search news</button>
        </div>
        
        <div class="news-wrapper">
            <div v-for="article in articles" :key="article.message" class="news-div">
                <img v-bind:src="article.urlToImage" class="news-image">
                <h3 class="news-title">{{ article.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsComponent",
        data: function(){
            return {
                articles: [],
                selectedCategory: 'General'
            }
        },
        methods: {
            callApi(){
                var that = this;
                
                var url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.selectedCategory}&apiKey=ca3f421c33334c9493e41bf51e6a7bf3`;

                var req = new Request(url);

                fetch(req)
                    .then(function(response){
                        return response.json();
                    })
                    .then(function(data){
                        that.articles = data.articles;
                        console.log(data);
                    })
            },
            
        },
        mounted: function(){
            this.callApi()
        }
    }
</script>

<style scoped>
    .news-component {
        padding-top: 30px;
        width: 1055px;
        height: 600px;
    }
    .news-wrapper {
        margin-top: 30px;
        height: 400px;
        width: 1055px;
        overflow-x: scroll;
        display: flex;
        justify-items: start;
    }
    .news-div {
        width: 404px;
        height: 340px;
        margin-right: 10px;  
        text-align: center;
    }
    .news-image {
        width: 342px;
        height: 250px;
    }
    .search-div {
        height: 50px;
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
    }
    .select-category {
        height: 40px;
        width: 400px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 20px;
        text-align: center;
    }
    .btn-search {
        height: 40px;
        width: 100px;
        border: 1px solid gray;
        border-radius: 5px;
        margin-left: 10px;
        cursor: pointer;
        background-color: #59798f;
        color: white;
    }
    .btn-search:hover {
        background-color: #4c687a;
    }
    .btn-search:active {
        background-color: #59798f;
    }
    
</style>