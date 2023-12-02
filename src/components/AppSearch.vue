<template>
  <div class=" pt-72 flex flex-col items-center justify-center h-1/2 p-10 bg-white w-full">
    <div class="w-full max-w-md">
      <h1 class="text-2xl mb-4 text-black">Prenez RDV avec un Pro de l'Habitat</h1>
      <div class="flex justify-center items-center">
        <div class="relative">
          <input v-model="type" type="text" placeholder="Que recherchez-vous ?" class="w-30 h-10 p-2 mb-4 border  text-center">
          <div v-if="type && !selectedType" class="absolute z-10 bg-white">
            <div v-for="type in filteredTypes" :key="type" @click="selectType(type)">{{ type }}</div>
          </div>
        </div>
        <div class="relative">
          <input v-model="ville" type="text" placeholder="Ou ?" class="w-30 h-10 p-2 mb-4 text-xl border  text-center">
          <font-awesome-icon icon="map-marker-alt" @click="geolocate" class="w-6 h-6 absolute right-0 bottom-6 text-blue-500 bg-transparent text-xs cursor-pointer tooltip" data-tooltip="Cliquez ici pour vous faire géolocaliser" />
          <div class="tooltip  text-red-500 bg-gray rounded-full p-1 absolute left-40 bottom-10 opacity-0 hover:opacity-100">Géolocalisation</div>
          <div v-if="ville && !selectedVille" class="absolute z-10 bg-white">
            <div v-for="ville in filteredVilles" :key="ville" @click="selectVille(ville)">{{ ville }}</div>
          </div>
        </div>
        <button @click="rechercher" class=" ml-5 mb-5 h-10 border  bg-green-500 text-white w-11/12">Rechercher</button>
      </div>

      <div class="grid grid-cols-1 gap-2">
      
        <div v-for="(prestataire, index) in prestatairesFiltres" :key="index" class="flex flex-col p-4 bg-white rounded shadow">
          <img :src="prestataire.image" alt="" class="mb-4">
          <div>
            <h2>Type :{{ prestataire.type }}</h2>
            <p>Ville: {{ prestataire.ville }}</p>
            <p>Temps d'intervention :{{ prestataire.drive_time }}</p>
            <span class="w-15 h-15">Note:<span class="bg-black border rounded-full text-green-500">{{ prestataire.note }}</span></span>
            <p class="flex items-center justify-center h-50"><button class="bg-yellow-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded-full text-[12px]">Je prends RDV</button></p>
          </div>
        </div>
      </div>
    </div>


    <div class=" h-60   border rounded  black flex flex-col flex-wrap-wrap justify-center items-center bg-violet-100 w-full">
        <h1 class="text-3xl text-indigo-900 ">Un service de Prise de RDV recommandé !</h1><br><br>
        <p class="text-indigo-900  font-bold hover:text-blue-500 cursor-pointer">Pro BJ leader dans la mise en relation depuis 10 ans</p>
        


    </div>
  </div>
</template>



<script>
import info from '../BDD.js';

export default {
  data() {
    return {
      ville: '',
      type: '',
      selectedType: false,
      selectedVille: false,
      showResults: false,
      prestataires: info,
      prestatairesFiltres: [],
      villes: [...new Set(info.map(prestataire => prestataire.ville))],
      types: [...new Set(info.map(prestataire => prestataire.type))],
      placeholderText: '',
      examples: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
      exampleIndex: 0,
    };
  },
  mounted() {
    this.changePlaceholder();
  },
  computed: {
    filteredVilles() {
      return this.villes.filter(ville => ville.toLowerCase().startsWith(this.ville.toLowerCase()));
    },
    filteredTypes() {
      return this.types.filter(type => type.toLowerCase().startsWith(this.type.toLowerCase()));
    },
  },
  methods: {
    changePlaceholder() {
      this.placeholderText = this.examples[this.exampleIndex];
      this.exampleIndex = (this.exampleIndex + 1) % this.examples.length;
      setTimeout(this.changePlaceholder, 2000); // Change every 2 seconds
    },
    rechercher() {
      if (this.villes.includes(this.ville) && this.types.includes(this.type)) {
        if (this.ville !== '' || this.type !== '') {
          this.prestatairesFiltres = this.prestataires.filter(prestataire => {
            const villeMatch = this.ville ? prestataire.ville.toLowerCase().startsWith(this.ville.toLowerCase()) : true;
            const typeMatch = this.type ? prestataire.type.toLowerCase().startsWith(this.type.toLowerCase()) : true;
            return villeMatch && typeMatch;
          });
          this.showResults = true;
        }
      }
    },
    selectVille(ville) {
      this.ville = ville;
      this.selectedVille = true;
    },
    selectType(type) {
      this.type = type;
      this.selectedType = true;
    },
    geolocate() {
  this.selectedVille = true;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${position.coords.longitude},${position.coords.latitude}.json?access_token=pk.eyJ1IjoicGFyYWRpczc3IiwiYSI6ImNscG1sODJ6MTBieTAycXA2YXBlOTBhMHQifQ.WrBtZ4qmolIanVnhQCrxSg`)
        .then(response => response.json())
        .then(data => {
          console.log(data.features); // Afficher la liste complète des résultats
          if (data.features && data.features[0]) {
            const arrondissement = data.features[0].place_name;
            console.log(arrondissement);
            if (arrondissement) {
              this.ville = arrondissement;
            }
          }
        })
        .catch(error => console.error("Geocoder failed due to: " + error));
    });
  }
}
  },
  watch: {
    ville() {
      if (this.ville === '') {
        this.selectedVille = false;
        this.showResults = false;
        this.prestatairesFiltres = [];
      }
    },
    type() {
      if (this.type === '') {
        this.selectedType = false;
        this.showResults = false;
        this.prestatairesFiltres = [];
      }
    },
  },
};
</script>

<style scoped>
.deo {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  color: yellow;
}

.absolute {
  position: absolute;
  overflow-y: auto;

  
}

.absolute div {
  padding: 10px;
  cursor: pointer;
}

.absolute div:hover {
  background-color: #f0f0f0;
}


.tooltip {
  transition: opacity 0.3s;
  white-space: nowrap;
}
</style>