<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/shered/header.vue";
import Footer from "./components/shered/footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  created() {
    this.$store.dispatch("getTradeResult");  // footer daki bilgilerin sayfa açıldığında firebaseden çekmek için
    this.$store.dispatch("initApp");  // ürün listesindeki bilgilerin sayfa açıldığında firebaseden çekmek için
  },
};
</script>

<style>
body{
  background: #e2e2e7;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease;
}

.fade-leave {
}
.fade-leave-active {
  transition: opacity 0.3s ease;
  opacity: 0;
}
</style>
