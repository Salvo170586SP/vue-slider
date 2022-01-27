
/*  
scorrere le immagini cliccando sulle freccette.
I pallini in basso devono illuminarsi in base all'immagine che sto visualizzando.
Far si che cliccando i pallini, venga selezionata l'immagine corrispondente.

Note:  scegliamo una delle due seguenti soluzioni per le freccette:
Se stiamo visualizzando la prima immagine, la freccetta di sinistra può:
-scomparire
-passare all'ultima immagine

Se stiamo visualizzando l'ultima immagine, la freccetta  a destra può:
scomparire
passare alla prima immagine


Bonus:
1- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sulle freccette o sui pallini l'autoplay si interrompe
3 - l'autoplay riparte quando il mouse lascia le freccette o i pallini

*/




console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        istrue: true,
        currentIndex: 0,
        images: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg',
        ]
    },

    methods: {

        //*BOTTONE INDIETRO
        prevPic() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.currentIndex.lenght - 1;
            } else {
                this.currentIndex--;
            }
        },

        //*BOTTONE AVANTI
        nextPic() {
            if (this.currentIndex !== 0) {
                this.currentIndex = this.currentIndex;
            } else {
                this.currentIndex++;
            }
        },

        //#FUNZIONE BOTTONE ATTIVO SULL'IMMAGINE CORRENTE
        isActive(index){
            if(this.currentIndex === index){
                return true;
            }else{
                return false
            }
        } 
    }

}); 