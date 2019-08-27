const productItem = {
    props: ['img', 'item'],
    template: `<div class="product">
                        <img :src="img" alt="Some img">
                        <div class="desc">
                            <h3> {{ item.product_name }}</h3>
                            <p> {{ item.price }} $</p>
                            <button class="buy-btn" @click="$root.$refs.cart.addProduct(item)">Купить</button>
                        </div>
                </div>`
}

const products = {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            userSearch: '',
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
            API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        }
    },
    components: {
        'productItem': productItem
    },
    mounted () {
        this.$parent.getJSON (this.API_URL + this.catalogUrl)
			.then (data => {
				for (let el of data) {
                    this.products.push (el)
                    this.filtered.push (el)
				}
			})
    },
    template: `<div class="products">
                <productItem
                v-for="product of filtered"
                :key="product.id_product"
                :img="imgCatalog"
                :item="product"
                ></productItem>
                </div>`
}

export default products