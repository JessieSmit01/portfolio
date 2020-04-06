<template id="cards">
<v-sheet>
    <v-app-bar color="blue" dark>
        <!-- <v-menu offset-y> -->
      <v-btn
        icon
        @click.stop="drawer = !drawer"
        text
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
        <v-toolbar-title id="toolbar"  class="pl-lg-4 pl-md-4 pl-sm-4" >Jessie Smith</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="m-1" href="https://www.linkedin.com/in/jessie-smith-3573a91a0/" depressed color="transparent"  fab  medium ><v-icon dark>mdi-linkedin</v-icon></v-btn>
        <v-divider vertical class="mt-0"></v-divider>
        <v-btn class="m-1" href="https://github.com/JessieSmit01" depressed color="transparent" fab  medium ><v-icon dark>mdi-github-circle</v-icon></v-btn> 
    </v-app-bar>
          <v-sheet>
            <router-view ></router-view>
          </v-sheet>
          <hr style="margin-bottom: 5px">
          <v-footer>
            <v-spacer></v-spacer>
            <div>Created By Jessie Smith, {{ new Date().getFullYear() }}</div>
          </v-footer>

          <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
          >
            <v-list
              dense
              rounded
            >
              <v-list-item
                v-for="item in menuItems"
                :key="item.title"
                link
                @click="handleProjOpt(item.route)"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
          
</v-sheet>  
</template>

<script>
export default {
    
    name: "Home",
    

    data: function()
    {
        return{
            option: 'projects',
            title: "Home",
            on: false,
            drawer: null,
            menuItems:[
              {route: '', title: 'About Me', icon: 'mdi-help'},
              {route: 'projects', title: 'Projects', icon: 'mdi-laptop'},
              {route: 'contact', title: 'Contact Me', icon: 'mdi-email'},
            ]
            
        }
    },

    components: {
      
    },
    methods: {
        handleProjOpt: function(path){
          
          this.$router.replace( '/' + path).catch(err => {return err});

        }
    }

}
</script>

<style>
  
</style>