// const {createApp} = Vue
Vue.createApp({
    data(){
        return{
            tv_on: false,
            slides: [
                'https://www.youtube.com/embed/Ha8eVdiWgTA', 
                'https://www.youtube.com/embed/0JJ8TpqKUPk',
                'https://www.youtube.com/embed/tRhontdPcvA'  
            ],
            visible: 0
        }
    },
    methods: {
        onOff() {
            this.tv_on = !this.tv_on
        },
        next() {
            if(this.visible >= this.slides.length - 1) {
                this.visible = 0;
            } else {
                this.visible++;
            }
        },
        prev() {
            if(this.visible <= 0) {
                this.visible = this.slides.length -1 ;
            } else {
                this.visible--;
            }
        }
    }
}).mount('#application')