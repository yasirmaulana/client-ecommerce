<template>

<div class="navbar">
  <div>
  </div>
    <nav class="navbar navbar-icon-top navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Kreasi-PaperCraft</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a @click="getall" style="cursor: pointer">All Categories</a>
                        <!-- <router-link to="/">All Categories</router-link> -->
                    </li>
                    <li>
                        <a @click="getPepakuro" style="cursor: pointer">Pepakuro</a>
                        <!-- <router-link to="/pepakuro">Pepakuro</router-link> -->
                    </li>
                    <li>
                        <a @click="getReplika" style="cursor: pointer">Replika</a>
                        <!-- <router-link to="/replika">Paper Replika</router-link> -->
                    </li>
                    <li>
                        <a @click="getAutomata" style="cursor: pointer">Automata</a>
                        <!-- <router-link to="/automata">Paper Automata</router-link> -->
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#">
                            <router-link to="/cart">
                                <i class="fa fa-shopping-cart"  style="font-size:24px">
                                    <span class="badge badge-danger">3</span>
                                </i>
                            </router-link>
                        </a>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</div>

</template>

<script>
export default {
  name: 'Navbar',
  methods: {
      getall () {
          this.$store.dispatch('getItems')
      },
      getPepakuro() {
          this.$store.dispatch('getItemsPepakuro')
      },
      getReplika() {
          this.$store.dispatch('getItemsReplika')
      },
      getAutomata() {
          this.$store.dispatch('getItemsAutomata')
      },
  }
}
</script>

<style lang="sass" scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.badge-default{background-color: #777; }
.badge-primary{background-color: #337ab7;}
.badge-success{background-color: #5cb85c;}
.badge-info{background-color: #5bc0de;}
.badge-warning{background-color: #f0ad4e;}
.badge-danger{background-color: #d9534f;}
.navbar-icon-top .navbar-nav>li>a>.fa, .navbar-icon-top .navbar-nav>li>a>.glyphicon {position: relative;  width: 36px;  font-size: 24px;}

.navbar-icon-top .navbar-nav>li>a>.fa>.badge, .navbar-icon-top .navbar-nav>li>a>.glyphicon>.badge {    position: absolute;right: 0;font-family: sans-serif;}
.navbar-icon-top .navbar-nav>li>a>.fa {    top: 3px;    line-height: 12px;}
.navbar-icon-top .navbar-nav>li>a>.fa>.badge {    top: -10px;}
.navbar-icon-top .navbar-nav>li>a>.glyphicon {    top: 6px;    line-height: 6px;}
.navbar-icon-top .navbar-nav>li>a>.glyphicon>.badge {    top: -16px;}

@media (min-width: 768px) {      .navbar-icon-top .navbar-brand {        padding: 25px 15px;    }  .navbar-icon-top .navbar-text {        margin-top: 25px;        margin-bottom: 25px;    }  .navbar-icon-top .navbar-btn, .navbar-icon-top .navbar-form {        margin-top: 18px;        margin-bottom: 18px;    }    .navbar-icon-top .navbar-nav>li>a {        text-align: center;        display: table-cell;        height: 70px;        vertical-align: middle;        padding-top: 0;        padding-bottom: 0;    }    .navbar-icon-top .navbar-nav>li>a>.fa, .navbar-icon-top .navbar-nav>li>a>.glyphicon {        display: block;        width: 48px;        margin: 2px auto 4px auto;        top: 0;        line-height: 24px;    }    .navbar-icon-top .navbar-nav>li>a>.fa>.badge, .navbar-icon-top .navbar-nav>li>a>.glyphicon>.badge {        top: -7px;    }}

</style>
