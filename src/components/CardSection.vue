<template>
        <v-container>
            <!-- Page title -->
            
            <h1 style="color: #2196f3">Welcome to my Projects</h1>
            
            <!-- Projects displayed in a card element -->
            <v-row class="mb-6">
                <v-col
                    v-for="project in projects"
                    :key="project.title"
                    class="d-flex flex-column "
                >
                <v-card
                    style="margin: 0,.3em"
                    width="100%"

                    height="100%"
                    color="blue"
                    dark
                    >
                        <h4 style="margin: .3em">{{project.title}}</h4>
                        <v-card-subtitle class="title">{{project.subtitle}}</v-card-subtitle>
                        <v-btn v-if="project.size !== 'none'" outlined class="ma-1" @click="project.overlay = !project.overlay" color="white">
                            <span v-if="project.size === 'demo'">
                                View Live Demo
                            </span>
                            <span v-else>
                                View Screenshot
                            </span>
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
                                <iframe v-if="project.size === 'demo'" height="330px" width="350px" src="https://cosc295assign2cst231.jessiesmith.repl.run/" ></iframe>
                            </v-overlay>
                        </v-btn>
                        <v-btn outlined @click="OpenGithub(project.git)" width="80%" depressed color="white" class="ma-1" large ><v-icon dark>mdi-github-circle</v-icon>View on Github</v-btn>
                        <!--Possible future implementation, didnt like the look of this-->
                        <!-- <v-expansion-panels dark multiple>
                        <v-expansion-panel style="">
                            <v-expansion-panel-header color="blue"><h3 style="color: white">Skills</h3></v-expansion-panel-header>
                            <v-expansion-panel-content color="blue">  
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
                                            <v-icon color="white" size=40>{{skill.image}}</v-icon>
                                            <p class="d-flex justify-center">{{skill.title}}</p>
                                    </v-card>
                                    
                                </v-col>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        </v-expansion-panels> -->
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
            //each project will be placed here for dynamic card creation on in the HTML code
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
                subtitle: "Vue.js and Node.js Project", size:'large',  
                src: "https://i.ibb.co/ws0w7Yr/Annotation-2020-03-08-192256.png", 
                git: "https://github.com/JessieSmit01/simple-weather",
                skills: [{title: "Vue.js", image: "mdi-vuejs"},{title: "JSON", image: "mdi-cloud-braces"},
                        {title: "CSS3", image: "mdi-language-css3"},
                        {title: "HTML5", image: "mdi-language-html5"}, {title: "JavaScript",image: "mdi-language-javascript"},]
             },
            {
                title: "Swift Battleship",detail: false, overlay:false, subtitle: "Swift Console Game",
                size:'demo',  src: "https://cosc295assign2cst231.jessiesmith.repl.run/",
                git: "https://github.com/JessieSmit01/SwiftBattleShip",
                skills: [{title: "Swift", image: "mdi-language-swift"}]
            },
            {
                title: "C File IO",detail: false, overlay:false, subtitle: "File IO and Bit Manipulation Using C",
                size:'none',
                git: "https://github.com/JessieSmit01/COSC292Assign2",
                skills: [{title: "", image: "mdi-language-c"}]
            },
            {
                title: "PHP Databases",detail: false, overlay:false, subtitle: "SQLite3 Database Creation Using Entities and PHP",
                size:'none',
                git: "https://github.com/JessieSmit01/PHPSQLite3Databases",
                skills: [{title: "PHP", image: "mdi-language-php"}]
            },
        ]
        }
    },
    methods:{
        OpenGithub: (link) =>
        {
            document.location = link
        }
    }
    
    
}

</script>
<style scoped>

</style>
