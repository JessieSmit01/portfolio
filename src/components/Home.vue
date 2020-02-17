<template>
 <b-container>
    <b-jumbotron
    fluid
    header="Jessie Smith"
    lead="Junior Web Developer"
    variant="outline-secondary"
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
                <h1>Projects and Assignments</h1>
         </b-row>
         <b-row>
                <card-section :option="option"></card-section>

         </b-row>
        </b-container>


 </b-container>
 
    
</template>

<script>
import CardSection from './CardSection.vue'

export default {
    name: "Home",

    data: function()
    {
        return{
            option: 'projects'
        }
    },

    components: {
        CardSection
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