<template id="cards">
<v-container>
    <v-app-bar color="cyan lighten-4">
        <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list color="cyan lighten-4">
        <v-list-item @click="handleProjOpt('projects')"><v-list-item-content>Projects</v-list-item-content></v-list-item>
        <v-list-item @click="handleProjOpt('contact')" >Contact Me</v-list-item>
      </v-list>
    </v-menu>
        
        <v-toolbar-title  class="pl-lg-4 pl-md-4 pl-sm-4" >Jessie Smith</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="m-1" href="https://www.linkedin.com/in/jessie-smith-3573a91a0/" depressed color="cyan lighten-4"  fab  medium ><v-icon color="blue darken-3">mdi-linkedin</v-icon></v-btn>
        <v-divider vertical class="mt-0"></v-divider>
        <v-btn class="m-1" href="https://github.com/JessieSmit01" depressed color="cyan lighten-4" fab  medium ><v-icon dark>mdi-github-circle</v-icon></v-btn>
    
    </v-app-bar>
    
         
            <router-view @titleChange="handleTitleChange" ></router-view>


        <hr style="margin-bottom: 5px">
        

          <footer class="text-right" >
              <p class="align-middle"><em>Created by Jessie Smith, 2020.</em></p>
          </footer>
</v-container>  


 
    
</template>

<script>
export default {
    
    name: "Home",
    

    data: function()
    {
        return{
            option: 'projects',
            title: "Home"
        }
    },

    components: {
      
    },
    methods: {
        handleProjOpt: function(path){
            this.$router.push( '/' + path);
        }
    },
    mounted(){
        this.$router.push( '/projects');
    }

}
</script>

<style>
  
</style>