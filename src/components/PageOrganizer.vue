<template>
  <div class="organizer">
    <div class="block-calendar">

      <div class="month">
        <ul>
          <li @click="decrease()" class="prev">&#10094;</li>
          <li class="month__text">{{this.month | getMonth}}<br><span style="font-size:18px">{{this.year}}</span></li>
          <li @click="increase()" class="next">&#10095;</li>
        </ul>
      </div>

      <ul class="block-weeks">
        <li v-for="d of day">{{d}}</li>
      </ul>

      <ul class="block-data__ul" v-for="week of arrCalendar">
        <li v-for="(day, index) in week">
          <span @click="showList(day, index)"
                :class="{active: day.index === date.getDate() && month === date.getMonth() , activeSpan: day.index === indexWeek}"
          >{{day.index}}
          </span>
        </li>
      </ul>

    </div>
    <div v-if="show" class="block-list">
      <organizerList
      :lists = lists
      @list = 'dataList'
      />
    </div>
    <router-link class="link" :to="{name: 'pageNavigation'}">Страница навигации</router-link>

  </div>

</template>

<script>
import organizerList from "./unitComponents/organizerList";
export default {
  components: {
    name: "PageOrganizer",
    organizerList
  },
  data() {
    return {
      day: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
      date: new Date(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      lists: [],
      dateList: [],
      show: false,
      arrCalendar: [],
      indexWeek: 0,
      indexDay: 0,
    }
  },
  mounted() {
    this.calendar()
  },
  methods: {
    // Заполнение календаря
    calendar(){
      let days = [];
      let week = 0;
      days[week] = [];
      let dlast = new Date(this.year, this.month + 1, 0).getDate();
      for (let i = 1; i <= dlast; i++) {
        if (new Date(this.year, this.month, i).getDay() != 1) {
          days[week].push({index:i, list: []});
        } else {
          week++;
          days[week] = [];
          days[week].push({index:i, list: []});
        }
      }
      if (days[0].length > 0) {
        for (let i = days[0].length; i < 7; i++) {
          days[0].unshift('');
        }
      }
      this.arrCalendar = days
      return this.arrCalendar;
    },
    // Кнопка назад
    decrease() {
      this.month--;
      if (this.month < 0) {
        this.month = 12;
        this.month--;
        this.year--;
      }
    },
    //кнопка вперед
    increase() {
      this.month++;
      if (this.month > 11) {
        this.month = -1;
        this.month++;
        this.year++;
      }
    },
    // Показать задачи дня
    showList(day, index) {
      this.lists = day.list
      this.indexWeek = day.index
      this.indexDay = index
      this.show = true
    },
    //получение массива из списка
    dataList (data) {
      let now = this.arrCalendar.findIndex((a) => a.find((b) => b.index === this.indexWeek));
      this.arrCalendar[now][this.indexDay].list.push(data);
    },
  },
  filters: {
    //вывод месяца
    getMonth(month) {
      let monthRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',]
    return monthRu[month];
    }
  }

}
</script>

<style scoped>
.block-calendar{
  width: 500px;
}
.month {
  text-align: center;
  font-size: 25px;
  color: blue;
  background: aqua;
  padding: 17px 30px;
}

/* Month list */
.month ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.month ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

/* Previous button inside month header */
.month .prev {
  float: left;
  padding-top: 10px;
  cursor: pointer;
}

/* Next button */
.month .next {
  float: right;
  padding-top: 10px;
  cursor: pointer;
}
.month__text{
  width: 145px;
  padding: 0 125px;
}
.organizer{
  display: flex;
  flex-wrap: wrap;
  width: auto;
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
.link{
  width: 100%;
  font-size: 20px;
  color: blue;
  margin-top: 300px;
}

ul{
  list-style-type: none;

}
.block-weeks{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 20px;
  background: chartreuse;
  margin: 0;
  padding: 15px 22px;
}

.block-data__ul {
  padding: 15px 0;
  background: #eee;
  margin: 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}

.block-data__ul li {
  list-style-type: none;
  width: 14.28%;
  margin-bottom: 20px;
  font-size: 20px;
  color: #777;
  cursor: pointer;
}

.block-data__ul li .active{
  padding: 10px;
  background: chartreuse;
  color: white !important;
  border: 1px solid aqua;
}

li span:hover,
.block-data__ul li .activeSpan{
  padding: 10px;
  background: aqua;
}
.block-list{
  margin-top: 6%;
}
</style>
