Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            newTask: '',
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
            // elimina un task cliccando su una x
            deleteTask: function(index) {
                this.tasks.splice(index, 1);
            },
            // aggiunge una nuova task in base allo scritto nell'input
            addNewTask: function() {
                if (this.newTask.length > 2) {
                    this.tasks.push({
                        text: this.newTask,
                        done: false
                    });
                    this.newTask = '';
                }
            }
        }
    }
);