<template>
    <div>
        <nav class="navbar fixed-top navbar-light bg-light">
            <b-button v-b-toggle.sidebar-backdrop><i class="fas fa-bars"></i></b-button>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active nav-title" href="#" style="font-size: 1.3rem">Kollab</a>
                </li>
            </ul>
            <ul class="nav justify-content-end">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user-circle"></i> Katrina</a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="far fa-bell"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="far fa-question-circle"></i></a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    components: {

    },
    data() {
        return {
            user: "Katrina"
        }
    },
  
}
</script>

<style scoped>
.nav-title{
    font-size: 1.3rem;
    color: #666867;
    font-weight: bolder;
}
.btn-secondary{
    color: #6c757d;
    background-color: #ffffff;
    border-color: #ffffff;
}
.btn-secondary:hover{
    color: #6c757d;
    background-color: #ffffff;
    border-color: #ffffff;
}
.nav-item a{
    color: #000000;
}
a{
   color: #000000 !important; 
}
.nav-item b-nav-dropdown a{
    color: #000000 !important;
}
</style>