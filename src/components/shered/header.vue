<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #563f7a"
  >
    <router-link to="/" tag="a" class="navbar-brand">
      Ürün Listesi
    </router-link>

    <!--   <a class="navbar-brand" href="#">Ürün Listesi</a> -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          to="/urun-islemleri"
          tag="li"
          class="nav-link"
          active-class="active"
          exact >
          <a class="nav-link">Ürün İşlemleri</a>
        </router-link>

        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Ürün İşlemleri</a>
        </li> -->

        <router-link
          to="/urun-cikisi"
          tag="li"
          class="nav-link"
          active-class="active" >
          <a class="nav-link">Ürün Çıkışı</a>
        </router-link>

        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Ürün Çıkışı</a>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>