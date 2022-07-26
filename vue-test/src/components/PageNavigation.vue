<template>

  <div class="hello" >
      <router-link :to="{name: 'pageUsers'}">Страница с юзерами</router-link>
      <router-link class="link" :to="{name: 'productPage'}">Страница с продуктами</router-link>
      <router-link class="link" :to="{name: 'pageCheckList'}">Чек-лист</router-link>
      <router-link class="link" :to="{name: 'pageOrganizer'}">Органайзер</router-link>
    <router-link class="link" :to="{name: 'pageNotebook'}">Блокнот</router-link>
    <router-link class="link" :to="{name: 'pageTests'}">Тесты</router-link>
    <router-link class="link" :to="{name: 'pageTestsRadio'}">Тесты с радиокнопками </router-link>
    <router-link class="link" :to="{name: 'pageTestsQuestionnaire'}">Опросник</router-link>
    <router-link class="link" :to="{name: 'testPage'}">Тестовая страница </router-link>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
