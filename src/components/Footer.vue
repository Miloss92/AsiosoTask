<template>
    <div class="footer-wrapper">
        <div class="footer-div">
            <div>
                <h1>Contact us</h1>
                <h1>Let's talk</h1>
            </div>
            <div>
                <h4>RESOURCE</h4>
                    <router-link to="/about" style="text-decoration: none">
                        <p class="p-router-link"><font-awesome-icon :icon="['fas', 'question-circle']" class="fa-icon"/>About us</p>
                    </router-link>
                    <router-link to="/contact" style="text-decoration: none">
                        <p class="p-router-link"> <font-awesome-icon :icon="['fas', 'id-badge']" class="fa-icon"/>Contact us</p>
                    </router-link>
            </div>
            <div>
                <h4>WHERE WE ARE</h4>
                <p> <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="fa-icon"/>Bulevar revolucije 27. Vrčin</p>
                <p> <font-awesome-icon :icon="['fas', 'globe-europe']" class="fa-icon"/>Belgrade, Serbia</p>
            </div>
            <div>
                <h4>OUR CONTACT INFO</h4>
                <p><font-awesome-icon :icon="['fas', 'envelope']" class="fa-icon"/>Email adress: milosristic252@gmail.com</p>
                <p><font-awesome-icon :icon="['fas', 'phone-square-alt']" class="fa-icon"/>Phone number: +381 69 542 3363</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "FooterComponent"
}

</script>

<style scoped>
    .footer-wrapper {
        width: 1760px;
    }
    .footer-div {
        margin: auto;
        height: 200px;
        width: 1050px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .p-router-link {
        text-decoration: underline;
        color: black;
    }
    .fa-icon {
        margin-right: 10px;
    }
    h1 {
        font-style: bold;
    }
    h4 {
        font-style: bold;
    }
</style>
