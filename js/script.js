Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        emails: [],
        totalMails: 10,
    },
    methods: {
        //# generalizziamo una funzione per prendere almeno una mail randomica
        getRandomMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                console.log(res.data.response);

                this.emails.push(res.data.response);
            })
        },

        //# generiamo un TOT mail
        getRandomMails(number) {
            for (i = 0; i < number; i++) {
                this.getRandomMail();
            }
        },
    },

    //# con created invochiamo al caricamento della pagina la nostra funzione
    mounted() {
        // this.getRandomMail();
        this.getRandomMails(this.totalMails);
    },
})



