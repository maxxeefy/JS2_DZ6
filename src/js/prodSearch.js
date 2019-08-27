
const search = {
    data() {
        return {
            userSearch: ''
        }
    },

    template: `<form action="#" class="search-form" v-on:keydown.enter="app.filter(userSearch)">
        <input type="text" class="search-field" v-model="userSearch">
        <button class="btn-search" type="submit" v-on:click="app.filter(userSearch)">
            <i class="fas fa-search"></i>
        </button>
        </form>`                 
}


export default search