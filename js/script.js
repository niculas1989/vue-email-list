Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        emails: [],
    },
    methods: {
        //# generalizziamo una funzione per prendere almeno una mail randomica
        getRandomMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                return console.table(res.data.response);
            })
        }
    },
    created() {
        this.getRandomMail();
    },
})



