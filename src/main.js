// La siguiente aplicación carga unos colores en base a una petición que se hace a un API Rest. Se hizo con VueJS
var vue_det = new Vue({
   el: '#principal', // Nombre de la aplicación para definir el nodo principal
   vuetify: new Vuetify(), // Se inicializan Vuetify que sirve para usar controles con material design
   data: {
      title: 'Colores', // Título de la página en la parte de arriba
      info: {
         data : []
      },
      selectedColor: {},
      cardView: true,
      page: 1, // Página donde se encuentra el usuario la cual cambia con los botones de navegación para saber qué enviar en el API Rest que obtiene los colores
      activeBtn: 0, // Se inicializa el botón anterior      
      getData(){
         // Petición para obtener los colores
         axios
            .get('https://reqres.in/api/colors?page=' + this.page)
            .then(response => (this.info = response));
      }
   },
   methods: {
      reloadData(page) {
         // Carga los colores según la página
         this.page = page + 1;
         this.activeBtn = page;
         this.getData();
      },
      copySelectedColor (item) {
         this.selectedColor = item;
         this.cardView = false;
         let selectedColorToCopy = document.querySelector('#selected-color')
         selectedColorToCopy.setAttribute('type', 'text');
         selectedColorToCopy.setAttribute('value', item.color);
         selectedColorToCopy.select();
         try {
           var successful = document.execCommand('copy');
           var msg = successful ? 'successful' : 'unsuccessful';
         } catch (err) {
            this.cardView = true;
            alert('No se pudo copiar el color');
         }
         /* unselect the range */
         selectedColorToCopy.setAttribute('type', 'hidden')
         window.getSelection().removeAllRanges()
       },
   },
   mounted() {
      // Método al inicializar la página web
      this.getData();
   }
});