<template>
<v-container>
        <v-card>

            <v-expansion-panels dark accordion>
                <v-expansion-panel >
                    <v-expansion-panel-header color="blue"><h1 style="color: white">Hi I'm Jessie!</h1></v-expansion-panel-header>
                    <v-expansion-panel-content color="blue">
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
            <v-tab style="font-color: white;">Web</v-tab>
            <v-tab>Operating Systems</v-tab>
            <v-tab>Other languages and frameworks</v-tab>

            <v-tab-item
            color="indigo lighten-4"
                v-for="n in 3"
                :key="n"
            >
                <v-container v-if="n === 1" fluid>
                    <v-row dense justify="center">
                        <v-col
                        v-for="skill in WebSkills"
                        :key="skill.title">
                        <v-card
                            class=" mx-auto col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3"
                            height="200px"
                            width="100%"
                            color="transparent"
                            flat
                            
                            >
                                <v-icon color="blue" size="70">{{skill.image}}</v-icon>
                                <h3>{{skill.title}}</h3>
                            </v-card>
                        </v-col>
                            
                    </v-row>
                </v-container> 
                <v-container v-if="n === 2" fluid>
                    <v-row dense justify="center">
                        <v-col
                        v-for="skill in AdminSkills"
                        :key="skill.title">
                        <v-card
                            class=" mx-auto col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                            height="auto"
                            width="100%"
                            color="transparent"
                            flat
                            >
                                <v-icon color="blue" size="600%" >{{skill.image}}</v-icon>
                                <v-card-title class=".title "  style="padding: 0; word-wrap: break-word;" >{{skill.title}}</v-card-title>
                                
                            </v-card>
                        </v-col>
                            
                    </v-row>
                </v-container> 
                 <v-container v-if="n === 3" fluid>
                    <v-row dense justify="center">
                        <v-col
                        v-for="skill in ProgrammingLanguageSkills"
                        :key="skill.title">
                        <v-card
                            class=" mx-auto col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                            height="auto"
                            width="100%"
                            color="transparent"
                            flat
                            >
                                <v-icon color="blue" size="600%" >{{skill.image}}</v-icon>
                                <v-card-title class=".title "  style="padding: 0; word-wrap: break-word;" >{{skill.title}}</v-card-title>
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
            WebSkills: [
                {title: "HTML5", image: "mdi-language-html5"},
                {title: "CSS", image: "mdi-language-css3"},
                {title: "JavaScript", image: "mdi-language-javascript"},
                {title: "Php", image: "mdi-language-php"},
                {title: "Vue.js", image: "mdi-vuejs"}
            ],
            AdminSkills: [
                {title: "Windows Server 2016", image: "mdi-windows"},
                {title: "Linux CentOS 7", image: "mdi-centos"},
                {title: "Windows 10", image: "mdi-windows"}

            ],
            ProgrammingLanguageSkills: [
                {title: "Java", image: "mdi-language-java"},
                {title: "Swift", image: "mdi-language-swift"},
                {title: "SQL", image: "mdi-database"},
                {title: ".Net Core", image: "mdi-dot-net"},
                {title: "Android Studio", image: "mdi-android-studio"}
            ]
            
        }
       
    },
    created: function () {
       document.getElementById("toolbar").innerText = "About Me";
    }

}
</script>

