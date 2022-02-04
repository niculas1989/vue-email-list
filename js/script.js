console.log('Vue ok', Vue);
console.log('axios ok', axios);


Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        emails: [],
    },
    methods: {
        getRandomMail() {

        }
    },
})