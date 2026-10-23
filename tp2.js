const { createApp } = Vue;

function livreVide() {
  return { title: '', author: '', year: 2024, genre: 'Roman', isFav: false, keywords: [] };
}

createApp({
  data() {
    return {
      books: [ /* vos livres existants, chacun avec un id */ ],
      newBook: livreVide(),
      nouveauMotCle: ''
    };
  },
  computed: {
    // 2. Valider avant d'ajouter
    formulaireValide() {
      return this.newBook.title.trim() !== '' && this.newBook.author.trim() !== '';
    }
  },
  methods: {
    // 1. Ajouter un livre
    ajouterLivre() {
      if (!this.formulaireValide) return;
      this.books.push({
        ...this.newBook,
        keywords: [...this.newBook.keywords], // copie du tableau, sinon il serait partagé
        id: Date.now()
      });
      this.newBook = livreVide();
      this.nouveauMotCle = '';
    },
    // 3. Supprimer (on compare les id)
    supprimerLivre(book) {
      this.books = this.books.filter(b => b.id !== book.id);
    },
    // 4. Favori
    toggleFavori(book) {
      book.isFav = !book.isFav;
    },
    // 5. Mots-clés
    ajouterMotCle() {
      const mot = this.nouveauMotCle.trim();
      if (mot && !this.newBook.keywords.includes(mot)) {
        this.newBook.keywords.push(mot);
      }
      this.nouveauMotCle = '';
    },
    retirerMotCle(mot) {
      this.newBook.keywords = this.newBook.keywords.filter(k => k !== mot);
    }
  }
}).mount('#app');