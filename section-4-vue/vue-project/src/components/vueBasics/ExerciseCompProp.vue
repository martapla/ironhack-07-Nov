// CLASS EXCERCISE
  <!-- //// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.
  // Creamos una variable reactiva myWatchlist que contenga un array de objetos. Cada objeto representa una serie o película que queráis ver en el futuro, y debería contar con las keys title (string), year (number) y whereToWatch (array de Strings). En el browser deberíais printear, para cada uno de los obejtos, un <h1> con el title, un <h2> con el year y una unordered list para los servicios de streaming (Netflix, HBO, etc.). Después deberíamos tener una variable computada watchOnNetflix que filtre el array de myWatchlist según si la key whereToWatch incluye la string "Netflix". En el template también deberíamos renderizar watchOnNetflix con un título para separar las dos listas. -->

    <template>
        <h1>Exercise Computed Properties</h1>
        <div v-for = "(myWatch,index) in myWatchList" :key ="index">

      <h1>{{myWatch.title}}</h1>
      <h2>{{myWatch.year}}</h2>
      <ul>
        <li v-for = " (streaming,index) in myWatch.whereToWatch" :key="index"> {{streaming}}</li>
      </ul>
    </div>
    </template>
    
    <script setup>
    import {reactive} from "vue"

const myWatchList = reactive([
    {
     title : "IT Crowd",
     year : 2010,
     whereToWatch :["Netflix", "HSBO"],
    },
    {
     title : "Utopia",
     year : 2009,
     whereToWatch :["Filmin", "HSBO"],
    },
    {
     title : "Number 9",
     year : 2020,
     whereToWatch :["Netflix", "Filmin"],
    }

    ])
    
    </script>
    
    <style>
    
    </style>