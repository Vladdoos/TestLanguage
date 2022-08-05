<template>
  <div class="pageTests">
    <ul>
      <li v-for="(item, index) of arr">
        <p>{{item.question}}</p>
        <p> {{item.right}} </p>
        <input :id="index"
               @keyup.enter="checkAnswer(item, index)"
               v-model="userAnswer[index]"
                :class="{answerTrue: item.right === true, answerFalse: item.right === false}"
        >
      </li>

    </ul>

    <router-link class="link" :to="{name: 'pageNavigation'}">Страница навигации</router-link>
  </div>
</template>

<script>
export default {
  name: "PageTests",
  data() {
    return{
      arr: [
        {
          question: 'Вопрос 1',
          answer: 'Ответ 1',
          right: ''
        },
        {
          question: 'Вопрос 2',
          answer: 'Ответ 2',
          right: ''
        },
        {
          question: 'Вопрос 3',
          answer: 'Ответ 3',
          right: ''
        },
      ],
      userAnswer: [],
    }
  },
  methods: {
    checkAnswer(item, index) {
      if(this.userAnswer[index] === item.answer) {
         item.right = true
      } else {
        item.right = false
      }
    }
  }
}
</script>

<style scoped>
.pageTests{
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
ul{
  list-style-type: none;
  padding: 0;
  display: block;
}
li{
  font-size: 25px;
  display: block;
  margin-bottom: 20px;
}
input{
  width: 250px;
  height: 22px;
  font-size: 20px;
}
.answerTrue{
  border: 2px solid green;
}
.answerFalse{
  border: 2px solid red;
}
</style>
