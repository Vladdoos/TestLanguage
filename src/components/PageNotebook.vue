<template>
  <div class="pageNotebook">
  <ul>
    <li v-for="(list, index) of textNotebook">
      <p @click="showText(list)">{{list.date}}</p>
    </li>
  </ul>
  <textarea
    rows="10"
    cols="40"
    name="text"
    v-model="textArea"
    @click="deleteText"
  >
  </textarea>
    <div class="btn-block">
      <button @click="addList">Добавить запись</button>
    </div>
    <router-link class="link" :to="{name: 'pageNavigation'}">Страница навигации</router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotebook",
  data() {
    return {
      textArea: '',
      textNotebook: [],
      date: '',
    }
  },
  methods: {
    addList() {
      this.textNotebook.push({text: this.textArea, date: this.dateNow(), id: this.textNotebook.length });
      this.textArea = ''
      console.log(this.textNotebook)
    },
    dateNow() {
      let newDate = new Date()
      let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
      return this.date = newDate.getDate()+ ' ' + month[newDate.getMonth()] + ' ' + newDate.getFullYear() + ' года ' + newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds()
    },
    showText(list) {
      this.textArea = list.text
    },
    deleteText() {
      this.textArea = ''
    }
  }
}
</script>

<style scoped>
.pageNotebook{
  display: flex;
  flex-wrap: wrap;
  width: auto;
  justify-content: center;
}
.link{
  width: 100%;
  font-size: 20px;
  color: blue;
  margin-top: 120px;
}
button{
  padding: 0 30px;
  height: 45px;
  border-radius: 20px;
  color: red;
  background: aquamarine;
  font-size: 18px;
  display: block;
}
.btn-block{
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
ul{
  margin-right: 150px;
  list-style-type: none;
  padding: 0;
  display: block;
}
li{
  font-size: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}
p{
  margin: 0;
  cursor: pointer;
}
.active,
p:hover{
  color: blue;
}
textarea{
  font-size: 20px;
}
</style>
