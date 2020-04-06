<template>
<v-container fluid>
        <v-card>

            <v-expansion-panels v-model="panels" dark multiple>
                <v-expansion-panel >
                    <v-expansion-panel-header color="blue"><h1 style="color: white">Hi I'm Jessie!</h1></v-expansion-panel-header>
                    <v-expansion-panel-content  color="blue">
                        <h2 >
                            I'm a Computer Systems Technology Student at Saskatchewan Polytechnic
                                <v-icon size="60">mdi-school</v-icon>
                        </h2>  
                        <br>
                        <h3>
                            Through my studies, I have learned many great skills! Please view my skills below.
                        </h3>               
                        </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            
            <h2 style="padding-left: 1em; padding-top: 10px;"></h2>
            
        </v-card>


        <v-card dark color="indigo">
            <v-card-title ><h1>My Skills <v-icon size="60" style="padding-left: 10px">mdi-console</v-icon></h1></v-card-title>
            <v-tabs
            background-color="indigo"
            dark
            show-arrows
            centered
            grow
            >
            <v-tab style="font-color: white;">Web UI</v-tab>
            <v-tab>Operating Systems</v-tab>
            <v-tab>Server-Side Programming</v-tab>
            <v-tab>Programming Languages</v-tab>
            <v-tab>IDE's</v-tab>

            <v-tab-item
            color="indigo lighten-4"
                v-for="n in 5"
                :key="n"
            >
                 <v-container  fluid> <!--v-if="n === 1" -->
                    <v-row dense justify="center">
                        <v-col
                        fluid
                        v-for="skill in n===1? WebSkills : n===2 ? AdminSkills : n===3 ? ServerSideSkills : n==4 ? ProgrammingLanguages : IDESkills"
                        :key="skill.title">
                        <v-card
                            class="d-flex flex-column justify-center "
                            
                            
                            color="transparent"
                            flat
                            >
                                <v-icon color="blue" size="70">{{skill.image}}</v-icon>
                                <h4 class="d-flex justify-center">{{skill.title}}</h4>
                            </v-card>
                        </v-col>
                            
                    </v-row>
                </v-container> 
                
            </v-tab-item>
            </v-tabs>
        </v-card>
        
</v-container>
</template>
<script>
export default {
    name: "about-me",
    data: () => {
        return{
            panels: [0],
            WebSkills: [
                {title: "HTML5", image: "mdi-language-html5"},
                {title: "CSS3", image: "mdi-language-css3"},
                {title: "JavaScript", image: "mdi-language-javascript"},
                {title: "Vue.js", image: "mdi-vuejs"},
                {title: "JSON-API", image: "mdi-cloud-braces"}

            ],
            AdminSkills: [
                {title: "Windows Server 2016", image: "mdi-windows"},
                {title: "Linux CentOS 7", image: "mdi-centos"},
                {title: "Windows 10", image: "mdi-windows"}

            ],
            ServerSideSkills: [
                
                {title: "SQL", image: "mdi-database"},
                {title: ".Net Core", image: "mdi-dot-net"},
                {title: "Php", image: "mdi-language-php"},

                
            ],
            ProgrammingLanguages:[
                {title: "Java", image: "mdi-language-java"},
                {title: "Swift", image: "mdi-language-swift"},
                {title: "C#", image: "mdi-language-csharp"},

            ],
            IDESkills:[
                {title: "Android Studio", image: "mdi-android-studio"},
                {title: "Visual Studio", image: "mdi-visual-studio"}

            ]
            

            
        }
       
    },
    created: function () {
       document.getElementById("toolbar").innerText = "About Me";
    }

}
</script>

