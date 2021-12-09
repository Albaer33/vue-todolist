Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            tasks: [
                {
                    done: false,
                    text: 'fare spesa'
                },
                {
                    done: true,
                    text: 'preparare colazione'
                },
                {
                    done: false,
                    text: 'fare esercizi'
                },
            ] 
        },
        methods: {

        }
    }
);