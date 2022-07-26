<template>
    <div class="PageTestsRadio">
      <ul>
        <li v-for="questions of arr">
          <h1>{{questions.question}}</h1>

          <ul class="block-ul">
            <li class="block-ul__li" v-for="(answer, index) of questions.answers">
              <input @click.left="checkAnswer(questions, index)"
                     :name="questions.question"
                     type="radio"
                     v-model="questions.checked"
                     :value="questions.answers[index]"
              >
              <p :class="{answerTrue: questions.active[index] === true, answerFalse: questions.active[index] === false}">{{answer}}</p>
            </li>
          </ul>

        </li>
      </ul>

      <router-link class="link" :to="{name: 'pageNavigation'}">Страница навигации</router-link>
    </div>

</template>

<script>
export default {
  name: "PageTestsRadio",
  data() {
    return {
      arr: [
        {
          question: 'Вопрос 1',
          answers: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
            'Ответ 4',
            'Ответ 5',
          ],
          right: 3, // номер правильного ответа
          checked: {},
          active: [],
        },
        {
          question: 'Вопрос 2',
          answers: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
            'Ответ 4',
            'Ответ 5',
          ],
          right: 1, // номер правильного ответа
          checked: {},
          active: [],
        },
        {
          question: 'Вопрос 3',
          answers: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
            'Ответ 4',
            'Ответ 5',
          ],
          right: 5, // номер правильного ответа
          checked: {},
          active: [],
        },
      ],
    }
  },
  methods: {
    checkAnswer(questions, index) {
      if(index + 1  === questions.right) {
        questions.active[index] = true
      } else {
        questions.active[index] = false
      }
    }
  }
}
</script>

<style scoped>
.PageTestsRadio{
  display: block;
  width: auto;
  margin: 0 150px;

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
  flex-wrap: wrap;
  width: auto;
  justify-content: space-between;
  display: flex;
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
.block-ul{
  display: block;
}
.block-ul__li{
  display: flex;
  flex-wrap: wrap;
}
.block-ul__li p{
  margin: 0;
}
.block-ul__li input{
  width: 50px;
  height: 22px;
  font-size: 20px;
  margin-right: 25px;
}
.answerTrue{
  color: green;
}
.answerFalse{
  color: red;
}
</style>
