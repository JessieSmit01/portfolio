<template id="cards">
 <b-container>
    <b-jumbotron
    fluid
    header="Jessie Smith"
    lead="Computer Systems Technology Student, Saskatchewan Polytechnic"
    border-variant="dark"
    >
        <b-container fluid>
            <b-row>
                <b-col>
                    <b-button class="mr-1" href="https://github.com/JessieSmit01" variant="outline-dark"><i class="fab fa-github"></i> Github</b-button>
                    <b-button class="mr-1" href="https://www.linkedin.com/in/jessie-smith-3573a91a0/" variant="outline-primary"><i class="fab fa-linkedin"></i> LinkedIn</b-button>
                </b-col>
            </b-row>
         </b-container>
       
    </b-jumbotron>
     <b-container>
         <b-row align-h="center">
                <h1><b>Projects and Assignments</b></h1>
         </b-row>
         <b-row>
                <card-section :option="option"></card-section>

         </b-row>
        </b-container>
        <!-- <hr style="margin-bottom: 5px">
        <email-form></email-form> -->

        <hr style="margin-bottom: 5px">
        <b-container class="bg-light" style="height: 50px">

          <footer class="text-right" >
              <p class="align-middle"><em>Created by Jessie Smith, 2020.</em></p>
          </footer>
        </b-container>

 </b-container>
 
    
</template>

<script>
import CardSection from './CardSection.vue'
// import EmailForm from './EmailForm.vue'

export default {
    name: "Home",

    data: function()
    {
        return{
            option: 'projects'
        }
    },

    components: {
        CardSection,
        // EmailForm
    },
    methods: {
        handleProjOpt: function(){
            this.option = "projects"
        }
    }

}
</script>

<style>
  
</style>