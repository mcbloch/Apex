<template>
    <v-app>
        <!--<v-navigation-drawer app>-->
        <!--</v-navigation-drawer>-->
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>apex  </span>
                <span class="font-weight-light">api explorer</span>
            </v-toolbar-title>
            <v-spacer>

            </v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn color="primary"
                           dark
                           v-on="on">
                        Routes
                    </v-btn>
                </template>
                <v-list>
                    <v-list-tile v-for="(item, index) in items"
                                 :key="index"
                                 @click="goToPage(item.path)">
                        <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-spacer>

            </v-spacer>
            <span>
                A work in progress
            </span>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <router-view :key="$route.path"/>
            </v-container>
        </v-content>
        <v-footer app></v-footer>
    </v-app>
</template>

<script>
    import {api} from './api';
    export default {
        name: "App",
        data() {
            return {
                items: api
            };
        },
        methods: {
            goToPage: function(path){
                this.$router.push(path)
            }
        }
    };
</script>
