<template>
  <div class="hello" >
    <div class="ulStyle">
      <ul>
        <p> Name</p>

        <li
          v-for="(product, index) in products"
          v-on:click="showProduct(product, 1)"
        >{{ product.name }}
          <div v-if="product.show && product.showCells.includes(1)">
            <input v-model="upProductName" placeholder="Новое имя продукта">
            <button  @click="pushUpProductName(product, index)">Изменить</button>
          </div>
        </li>
      </ul>
      <ul>
        <p> price</p>
        <li
          v-for="(product, index) in products"
          :key="index"
          v-on:click="showProduct(product, 2)">
          {{ product.price }}
          <div v-if="product.show && product.showCells.includes(2)">
            <input  v-model="upProductPrice" placeholder="Новая цена продукта">
            <button v-if="product.show && product.showCells.includes(2)"
                    @click="pushUpProductPrice(index)"
            >Изменить</button>
          </div>
        </li>
      </ul>
      <ul>
        <p> quantity</p>
        <li v-for="(product, index) in products"
            v-on:click="showProduct(product, 3)"
        >{{ product.quantity }}
          <div v-if="product.show && product.showCells.includes(3)">
            <input
              v-if="product.show && product.showCells.includes(3)"
              v-model="upProductQuantity"
              placeholder="Кол-во продуктов"
            >
            <button v-if="product.show && product.showCells.includes(3)" @click="pushUpProductQuantity(index)">Изменить</button>
          </div>
        </li>
      </ul>
      <ul>
        <p> allPrice</p>
        <li v-for="(product) in products">{{ product.quantity * product.price }}</li>
      </ul>
      <ul>
        <p>delete</p>
        <li v-for="(product, index) in products" v-on:click="deleteProduct(index)">Удалить</li>
      </ul>
    </div>



    <div class="block-push">
      <p class="p-all">All: {{sumProduct}}</p>
      <div class="block-push__inp">
        <input v-model="productName" placeholder="Название продукта">
        <input v-model="productPrice" placeholder="Цена продукта">
        <input v-model="productQuantity" placeholder="Кол-во продуктов">
      </div>
      <button @click="pushProduct()">Push</button>
    </div>
    <router-link class="link" :to="{name: 'pageNavigation'}">Страница навигации</router-link>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showName: true,
      products: [
        {show: false, name: 'product1', price: 100, quantity: 4, showCells: []},
        {show: false, name: 'product2', price: 200, quantity: 5, showCells: []},
        {show: false, name: 'product3', price: 300, quantity: 6, showCells: []},
      ],
      productName: '',
      productPrice: '',
      productQuantity: '',
      sum: 0,
      obj: {},
      upProductName: '',
      upProductPrice: '',
      upProductQuantity: '',
    }
  },

  methods:{
    // Добавление продуктов
    pushProduct() {
      this.products.push({
        show: false,
        name: this.productName, price:
        this.productPrice,
        quantity: this.productQuantity,
        showCells: []})
    },
    // Удаление продуктов
    deleteProduct(index) {
      this.products.splice(index, 1)
    },
    // Показ инпутов изменения продуктов
    showProduct(product, showCellNum) {
      product.show = true
      product.showCells.push(showCellNum)
    },
    // Изменение названия продуктов
    pushUpProductName(product, index) {
      this.products[index].name = this.upProductName
      this.upProductName = ''
    },
    // Изменение цены продуктов
    pushUpProductPrice(index) {
      this.products[index].price = this.upProductPrice
      this.upProductPrice = ''
    },
    //  Изменение кол-ва продуктов
    pushUpProductQuantity(index) {
      this.products[index].quantity = this.upProductQuantity
      this.upProductQuantity = ''
    }
  },
  computed: {
    // Общая сумма продуктов
    sumProduct() {
      this.sum = 0
      let allSum = 0
      for(let summ of this.products) {
        allSum = summ.price * summ.quantity
        this.sum = allSum + this.sum
      }
      return this.sum
    },
  }
}
</script>

<style scoped>
.ulStyle{
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  width: 100%;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  border: 2px solid;
}
li {
  display: block;
  margin: 0px;
  border-top: 3px solid;
}
a {
  color: #42b983;
  width: 100%;
  margin-top: 50px;
  font-size: 25px;
}
.hello{
  font-size: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
button{
  width: 200px;
  height: 36px;
  border-radius: 20px;
  color: red;
  background: aquamarine;
  font-size: 18px;
  display: block;
  margin: auto;
}
.p-all{
  width: 100%;
  text-align: left;
}
.block-push{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.block-push__inp{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
}
.block-push__inp input{
  width: 30%;
  height: 25px;
}
</style>
