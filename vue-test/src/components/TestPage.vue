<template>
<div class="testPage">
  <p :title="date | dateNow">555</p>
  <p style="width: 100%">Девушка: {{fullName}}</p>
  <div class="block-enter">
    <a @click.left="newMessage = 'left'" @click.right="newMessage = 'right'" @click.middle="newMessage = 'middle'">Ссылка</a>
    <p>{{newMessage}}</p>

  </div>

  <input name="radio" type="radio" v-model="type" value="один">
  <input name="radio" type="radio" v-model="type" value="два">
  <input name="radio" type="radio" v-model="type" value="три">
  <p>Вы выбрали: {{ type }}</p>


  <router-link class="link" :to="{name: 'pageNavigation'}">Страница навигации</router-link>
</div>
</template>

<script>
import testFiles from '../components/TestFileTutorial'

export default {
  name: "TestPage",
  data () {
    return {
      date: '2022-05-25',
      name: 'Ванда',
      surname: 'Дуба',
      patronymic: 'Анатольевна',
      number: '12345678',
      show: false,
      text: 'Hi, I Vue-JS',
      message: '',
      newMessage: '',
      type: '',
    }
  },
  methods: {
    doThis() {
      this.newMessage = "Я твой друг"
    },
    warn: function (message, event) {
      // Теперь у нас есть доступ к нативному событию:
      event.preventDefault();

      alert(message);
    }
  },
  filters: {
    dateNow(date) {
      return date.split('-').reverse().join('.')
    },
  },
  computed: {
    fullName() {
      return this.surname + ' ' +this.name + ' ' + this.patronymic
    },
    numberMath() {
       let arr = this.number.toString().split('').splice(0)
      let result = []
      for(let i = 0; i<this.number.length; i++){
        if(arr.length){
        result.push(arr.splice(0, 3).splice(0, 3))
      }
      }
      return result = result.map((i) => i.join('')).join(' ')

    }
  }
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
.testPage{
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
</style>
