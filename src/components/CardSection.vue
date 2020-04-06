<template>
        <v-container>
            <v-card dark color=blue>
                <h2 style="margin: .3em">Welcome to my Projects!</h2>
            </v-card>
            <v-expansion-panels dark >
                    <v-expansion-panel >
                        <v-expansion-panel-header  color=blue><h2 style="color:white">Click to view projects</h2></v-expansion-panel-header>
                        <v-expansion-panel-content color=white>
                            <v-row class="mb-6"
                            >
                                <v-col
                                    v-for="project in projects"
                                    :key="project.title"
                                    class="d-flex flex-column "
                                >
                                <v-card
                                    style="margin: 0,.3em"
                                    width="95%"
                                    color="blue"
                                    dark
                                    >
                                        <h2 style="margin: .3em">{{project.title}}</h2>
                                        <v-card-subtitle class="title">{{project.subtitle}}</v-card-subtitle>
                                        <v-btn outlined class="ma-1" @click="project.overlay = !project.overlay" color="white">
                                            View Screenshot
                                            <v-overlay :value="project.overlay"
                                                @click="project.overlay = !project.overlay">
                                                <v-img
                                                v-if="project.size === 'small'"
                                                :src="project.src"
                                                width="300">
                                                </v-img>
                                                <v-img
                                                v-if="project.size === 'large'"
                                                :src="project.src"
                                                width="700">
                                                </v-img>
                                            </v-overlay>
                                        </v-btn>
                                        <v-btn outlined @click="OpenGithub(project.git)" width="80%" depressed color="white" class="ma-1" large ><v-icon dark>mdi-github-circle</v-icon>View on Github</v-btn>
                                        <v-expansion-panels v-model='panels' dark multiple>
                                        <v-expansion-panel >
                                            <v-expansion-panel-header color="blue"><h3 style="color: white">Skills</h3></v-expansion-panel-header>
                                            <v-expansion-panel-content  color="blue">  
                                                <br>
                                                <v-col
                                                class="d-flex flex-row flex-wrap"
                                                        
                                                >
                                                    <v-card
                                                    
                                                        v-for="skill in project.skills"
                                                        :key="skill.title"
                                                        
                                                        
                                                        style="margin: 10px"
                                                        color="transparent"
                                                        flat
                                                        >
                                                            <v-icon color="white" size=70>{{skill.image}}</v-icon>
                                                            <h4 class="d-flex justify-center">{{skill.title}}</h4>
                                                    </v-card>
                                                    
                                                </v-col>
                                                </v-expansion-panel-content>
                                            </v-expansion-panel>
                                        </v-expansion-panels>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>     
            </v-expansion-panels>
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
            {
                title: "Workout Tracker",
                detail: false, overlay: false,
                subtitle: "Android App", size:'small',
                src: "https://i.ibb.co/PWnKQXj/Screenshot-20200221-095451-com-jessie-exercisetracker.jpg",
                git: "https://github.com/JessieSmit01/COSC195FInalProject",
                skills: [{title: "Java", image: "mdi-language-java"},{title: "Android Studio", image: "mdi-android-studio"}]
            },
            {
                title: "Reversi Game",detail: false, overlay:false, subtitle: "Android App",
                size:'small',  src: "https://i.ibb.co/F5ZXDQn/Screenshot-20200217-135117-com-example-cst142cst112assign1.jpg",
                git: "https://github.com/JessieSmit01/cst112cst142Assignment2",
                skills: [{title: "Java", image: "mdi-language-java"},{title: "Android Studio", image: "mdi-android-studio"}]
            },
            {
                title: "Weather Web App",detail: false, overlay: false, 
                subtitle: "Vue App", size:'large',  
                src: "https://i.ibb.co/ws0w7Yr/Annotation-2020-03-08-192256.png", 
                git: "https://github.com/JessieSmit01/cst208cst218cst231cweb280a3",
                skills: [{title: "JavaScript",image: "mdi-language-javascript"},
                        {title: "Vue.js", image: "mdi-vuejs"},{title: "JSON-API", image: "mdi-cloud-braces"},
                        {title: "CSS3", image: "mdi-language-css3"},
                        {title: "HTML5", image: "mdi-language-html5"}]
             },


        ]
        }
    },
    methods:{
        OpenGithub: (link) =>
        {
            document.location = link
        }
    },
    created: function () {
       document.getElementById("toolbar").innerText = "Projects";
    }
    
    
}

</script>
<style scoped>

</style>
