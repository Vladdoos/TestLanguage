<template>
  <div class="PageTestsQuestionnaire">
    <div class="block-arr"
         :class="{displayFlex: actives}">
      <ul v-for="(questions, index) of arr">
        <li v-show="index + 1 === show"
            :class="{display: actives}">
          <h1>{{questions.question}}</h1>

          <ul class="block-ul">
            <li class="block-ul__li" v-for="(answer, index) of questions.answers">
              <input
                v-if="!actives"
                type="checkbox"
                :id="index + questions.question"
                :value="index + questions.question"
                v-model="questions.checked"
                :disabled="questions.checked.length > 2"
              >
              <label :for="index + questions.question"
                :class="{answerTrue: questions.active[index] === true, answerFalse: questions.active[index] === false}"
              >{{answer}}</label>
            </li>
            <button v-if="!actives"
              @click.left="pushAnswer(questions)"
              class="btn-next"
            >{{textBtn}}</button>
          </ul>

        </li>
      </ul>
    </div>
    <router-link class="link"
                 :to="{name: 'pageNavigation'}"
    >Страница навигации</router-link>
  </div>
</template>

<script>
export default {
  name: "PageTestsQuestionnaire",
  data() {
    return{
      arr: [
        {
          id: 0,
          question: 'Вопрос 1',
          answers: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
            'Ответ 4',
            'Ответ 5',
          ],
          right: [3, 2], // номера правильного ответа
          checked: [],
          active: [],
        },
        {
          id: 1,
          question: 'Вопрос 2',
          answers: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
            'Ответ 4',
            'Ответ 5',
          ],
          right: [1, 4], // номера правильного ответа
          checked: [],
          active: [],
        },
        {
          id: 2,
          question: 'Вопрос 3',
          answers: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
            'Ответ 4',
            'Ответ 5',
          ],
          right: [5, 2, 1], // номера правильного ответа
          checked: [],
          active: [],
        },
      ],
      show: 1,
      textBtn: 'Следующий вопрос',
      actives: false,
    }
  },
  methods: {
    pushAnswer(questions) {
      let checkAnswers = questions.checked.map((a) => +a[0])
      if(checkAnswers.length > 0) {
        for(let item of checkAnswers) {
          if(questions.right.find((a) => a === item + 1)) {
            questions.active[item] = true
          } else {
            questions.active[item] = false
          }
        }
      } if(checkAnswers.length === 0) {
        for (let i = 0; i < 5; i++) {
          questions.active[i] = false
        }
      }
      if(this.show < this.arr.length) {
        this.show++
        if (this.show === this.arr.length) {
          this.textBtn = 'Показать результаты'
        }
      }
      else {
        this.actives = true
      }
    }
  }
}
</script>

<style scoped>
.display{
  display: block !important;
}
.block-arr{
  flex-wrap: wrap;
  width: auto;
  justify-content: center;
  display: flex;
}
.displayFlex{
  justify-content: space-around;
}
.PageTestsQuestionnaire{
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
  cursor: pointer;
}
ul{
  list-style-type: none;
  padding: 0;
  flex-wrap: wrap;
  width: auto;
  justify-content: center;
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
  cursor: pointer;
}
label{
  cursor: pointer;
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
.btn-next{
  margin: 50px auto;
  width: 100%;
}
.answerTrue{
  color: green;
}
.answerFalse{
  color: red;
}
</style>
