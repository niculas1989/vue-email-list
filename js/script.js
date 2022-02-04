Vue.config.devtools = true;

/*
Descrizione: //! assegnazione odierna
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Evitare i doppioni nella lista delle mail //! ?
*/

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
                //! effettivo "riempimento" dell'array
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



