<template>
        <v-container>
            <v-row dense justify="center">
                <v-col
                v-for="project in projects"
                :key="project.title"
                class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <v-card
                    class="mx-auto m-xs-3 m-sm-3"
                    max-width="95%"
                    color="cyan lighten-4"
                    
                    >
                        <v-img
                        :src="project.src"
                        width="80%"
                        class="ma-2"
                        >
                        </v-img>
                        <v-card-title class="display-1 no-overflow">{{project.title}}</v-card-title>
                        <v-card-subtitle class="title">{{project.subtitle}}</v-card-subtitle>
                        <v-btn outlined @click="OpenGithub(project.git)" width="80%" depressed color="black" class="ma-1" large ><v-icon dark>mdi-github-circle</v-icon>View on Github</v-btn>

                    </v-card>
                </v-col>
                    
            </v-row>
        </v-container>    
</template>
<script>
// eslint-disable-next-line
export default {
    
    name: "CardSection",
    props:{
        option: String
    },
    data: () => {
        return{
             projects: [
            {title: "Workout Tracker", subtitle: "Android App", src: "https://i.ibb.co/vwNGdnV/Screenshot-20200221-095451-com-jessie-exercisetracker.jpg", git: "https://github.com/JessieSmit01/COSC195FInalProject"},
            {title: "Reversi Game", subtitle: "Android App", src: "https://i.ibb.co/F5ZXDQn/Screenshot-20200217-135117-com-example-cst142cst112assign1.jpg", git: "https://github.com/JessieSmit01/cst112cst142Assignment2"}

        ]
        }
       
    },
    methods:{
        OpenGithub: (link) =>
        {
            document.location = link
        }
    },
    mounted () {
        this.$emit("titleChange", "Projects");
    }
    
    
}

</script>
<style scoped>

</style>
