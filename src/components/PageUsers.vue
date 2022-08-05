<template>
  <div class="pageUsers">
    <ul>
      <li v-for="(user, index) of users">
        <p class="pageUsers-p">Имя: {{user.name}}, Возраст: {{user.age}}</p>
        <p @click="showInput(index)">Редактировать</p>
      </li>
    </ul>
    <div v-if="show" class="pageUsers-block-inp">
      <input placeholder="Введите имя" v-model="upName">
      <input placeholder="Введите возраст" v-model="upAge">
      <button @click="pushUser()">Push</button>
    </div>
    <router-link class="link" :to="{name: 'pageNavigation'}">Страница навигации</router-link>
  </div>
</template>

<script>
export default {
  name: "pageUSers",
  data () {
    return {
      users: [
        {name: 'Коля', age: 30},
        {name: 'Вася', age: 40},
        {name: 'Петя', age: 50},
      ],
      upName: '',
      upAge: '',
      show: '',
      index: 0
    }
  },
  methods: {
    showInput(index) {
      this.show = !this.show
      this.index = index
    },
    pushUser() {
      if(this.upName.length > 0 && this.upAge.length > 0) {
        this.users[this.index].name = this.upName
        this.users[this.index].age = this.upAge
        this.upName = ''
        this.upAge = ''
        this.show = false
      }
      if(this.upName.length > 0) {
        this.users[this.index].name = this.upName
        this.upName = ''
        this.show = false
      }
      if(this.upAge.length > 0) {
        this.users[this.index].age = this.upAge
        this.upAge = ''
        this.show = false
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style scoped>
.pageUsers{
  display: flex;
  flex-wrap: wrap;
  width: auto;
  justify-content: center;
}
.pageUsers img {
  width: 30%;
}
ul {
  list-style-type: none;
  padding: 0;
  display: block;
}
li {
  font-size: 25px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pageUsers-p{
  margin-right: 50px;
}
button{
  padding: 6px 75px;
  height: 36px;
  border-radius: 20px;
  color: red;
  background: aquamarine;
  font-size: 18px;
  display: block;
}
.pageUsers-block-inp{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pageUsers-block-inp input{
  margin-right: 20px;
}
.link{
  width: 100%;
  font-size: 20px;
  color: blue;
  margin-top: 120px;
}
</style>
