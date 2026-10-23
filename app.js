Vue.createApp({
  data() {
    return {
      books: [
        
      ],
      detailsOuverts: [],      
      seulementFavoris: false
    };
  },
  computed: {
    // 5. Compteur de favoris
    nombreFavoris() {
      return this.books.filter(b => b.isFav).length;
    },
    // 6. Liste filtrée (utilisée par le v-for)
    livresAffiches() {
      return this.seulementFavoris
        ? this.books.filter(b => b.isFav)
        : this.books;
    },
    
    booksTriesParAnnee() {
      return [...this.books].sort((a, b) => b.year - a.year);
    }
  },
  methods: {
    basculerDetails(id) {
      const i = this.detailsOuverts.indexOf(id);
      if (i === -1) this.detailsOuverts.push(id);
      else this.detailsOuverts.splice(i, 1);
    }
  }
}).mount('#app');