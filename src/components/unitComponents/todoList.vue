<template>
  <div>

    <div>
      <input class="inp-list" v-model="value" placeholder="Введите задачу" id="search" />
      <button v-on:click="todo()">Добавить задачу</button>
      <p class="text-valid" v-if="showValidation">Введите задачу</p>
    </div>

    <div class="block-list" v-for="(todo, index) in setFilter">
      <input
        v-model="todo.active"
        class="checkbox"
        type="checkbox"
      >
      <p class="todo-text" :class="{'text-list' : todo.active}">{{ todo.text }}</p>
      <div class="remove" v-on:click="remove(index)"></div>
    </div>

    <div class="block-filter">
      <span v-on:click="getFilter('active')">Активные</span>
      <span v-on:click="getFilter('all')">Все</span>
      <span v-on:click="getFilter('completed')">Завершенные</span>
    </div>


    <router-link class="link" :to="{name: 'pageNavigation'}">Страница навигации</router-link>
  </div>


</template>

<script>
export default {
  name: "todoList",
  data () {
    return {
      innerData: {
        zadachi: [],
        activeFilter: 'all'
      },
      value: '',
      showValidation: false
    }
  },
  methods: {
    // Добавление новой задачи
    todo() {
      if(this.value) {
        this.innerData.zadachi.push({id:this.innerData.zadachi.length + 1, text:this.value, active: false })
        this.value = ''
        this.showValidation = false
      }
      else this.showValidation = true
    },
    // Удаление элемента из списка задач;
    remove(i) {
      this.innerData.zadachi.splice(i, 1)
    },
    // Получение значения фильтра
    getFilter(filter) {
      this.innerData.activeFilter = filter
    }
  },
  computed:{
    // Фильтрация задач по статусу
    setFilter () {
      let filter = this.innerData.activeFilter;
      return this.innerData.zadachi.filter(function (elem) {

        if(filter === 'active') return elem.active === false;
        if(filter === 'completed') return elem.active === true;
        else return true
      })
    }
  },
  created() {
    //Получение задач из удалённого хранилища при инициализации приложения
    fetch("https://my-json-server.typicode.com/falk20/demo/todos")
      .then(response => response.json())
      .then(data => {return this.innerData.zadachi = data});
  },

}
</script>

<style scoped>
.block-filter{
  display: flex;
  width: 33%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: space-around;
  margin: 50px auto;
}
.block-filter span{
  font-size: 20px;
  color: green;
  cursor: pointer;
}
.block-filter span:hover{
  color: royalblue;
  cursor: pointer;
}
.block-list{
  display: flex;
  flex-wrap: wrap;
  width: auto;
  justify-content: center;
}
.text-list{
  text-decoration: line-through;
  color: blue;
}
.link{
  width: 100%;
  font-size: 20px;
  color: blue;
  margin-top: 300px;
}

.remove {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  margin: 19px 0;
}
.remove:before {
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
.remove:after {
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
.remove:hover:after {
  transform: scale(1);
}
.remove:hover:before {
  transform: scale(0.8) rotate(45deg);
  color: #fff;
}
.todo-text{
  margin: auto 40px;
  font-size: 20px;
}
.checkbox{
  margin: auto 25px;
  width: 20px;
  height: 20px;
}
.inp-list{
  width: 240px;
  height: 25px;
  border-radius: 5px;
  padding-left: 15px;
}
button{
  width: 180px;
  height: 36px;
  border-radius: 11px;
  color: white;
  background: dodgerblue;
  font-size: 18px;
  margin: auto;
  border: none;
  cursor: pointer;
}
button:hover{
  color: dodgerblue;
  background: white;
  border: 1px solid dodgerblue;
}
.text-valid{
  color: red;
  font-size: 13px;
  margin: 0 auto;
}
</style>
