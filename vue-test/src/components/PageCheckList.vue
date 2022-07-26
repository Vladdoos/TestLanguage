<template>
  <div class="checkPage">
    <ul v-if="lists.length">
      <li v-for="(value, index) of lists">
        <input
          v-if="!value.show"
          v-model="value.show"
          class="checkbox"
          type="checkbox"
          :id="index"
        >

        <p :class="{'text-list' : value.show}"
          v-if="value.showItem"
          @dblclick="showInp(value)"
        >{{value.title}}</p>

        <input
          class="text-inp"
          v-if="!value.showItem"
          v-model="newTitle"
          @keyup.enter="upTitle(value)"
          placeholder="Введите новое имя">

        <div
          class="cl-btn-7"
          @click="deleteItem(index)"></div>
      </li>
    </ul>

    <div class="block-inp">
      <input class="inp-list"
             @keyup.enter="addList()"
             v-model="listItem"
             placeholder="Добавьте задачу"
      >
    </div>
    <router-link class="link" :to="{name: 'pageNavigation'}">Страница навигации</router-link>
  </div>
</template>

<script>
export default {
  name: "PageCheckList",
  data() {
    return {
      lists: [],
      listItem: '',
      newTitle: ''
    }
  },
  methods: {
    //Добавление списка
    addList() {
      this.lists.push({title:this.listItem, show: false, showItem: true})
      this.listItem = ''
    },
  //  Удаление элемента списка
    deleteItem(index) {
      this.lists.splice(index, 1)
    },
    //Показать инпут вместо теста
    showInp(value) {
      value.showItem = false
      console.log(this.lists)
    },
    // Обновить название
    upTitle(value){
      value.title = this.newTitle
      value.showItem = true
      this.newTitle = ''
    }
  },
}
</script>

<style scoped>
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
.text-list{
  text-decoration: line-through;
  color: blue;
}
ul{
  padding: 0;
}
li{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.block-inp{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.checkbox{
  margin: auto 25px;
  width: 20px;
  height: 20px;
}
.text-inp{
  height: 25px;
  margin: auto;
}
.inp-list{
  width: 240px;
  height: 25px;
}
p{
  margin-right: 20px;
  font-size: 25px;
}
.checkPage{
  display: flex;
  flex-wrap: wrap;
  width: auto;
  justify-content: center;
}
.link{
  width: 100%;
  font-size: 20px;
  color: blue;
  margin-top: 300px;
}
/*Стили крестика*/
.cl-btn-7 {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  margin: 19px 0;
}
.cl-btn-7:before {
  content: '+';
  color: #337AB7;
  position: absolute;
  z-index: 2;
  transform: rotate(45deg);
  font-size: 50px;
  line-height: 1;
  top: -5px;
  left: 5px;
  transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
}
.cl-btn-7:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: #337AB7;
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
  transform: scale(0.01);
}
.cl-btn-7:hover:after {
  transform: scale(1);
}
.cl-btn-7:hover:before {
  transform: scale(0.8) rotate(45deg);
  color: #fff;
}
</style>
