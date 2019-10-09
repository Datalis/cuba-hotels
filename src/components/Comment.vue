<template>
    <section class="box-comment" :id="`commentbox${this.category}`">
        <h3>Deja tu comentario, duda o pregunta</h3>

        <form class="needs-validation" novalidate>
            <v-row class="ma-0" style="width: 100%">
                <v-col cols="12" sm="6" class="pl-0 pb-0">
                    <v-text-field
                            v-model="nombre"
                            color="#cc983c"
                            label="Nombre"
                            required
                            id="validationTooltip01"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="pl-0 pb-0">
                    <v-text-field
                            v-model="nombre"
                            color="#cc983c"
                            label="Correo"
                            required
                            id="validationTooltipUsername"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" class="pl-0 pt-0">
                    <v-textarea
                            class="pl-0"
                            color="#cc983c"
                            v-model="comentario"
                            label="Comenario"
                            required
                            :auto-grow="false"
                            no-resize
                    ></v-textarea>
                </v-col>
            </v-row>
        </form>

        <div class="send text-right">
            <v-btn
                    v-model="fab"
                    class="ma-2"
                    color="#cc983c"
                    :loading="loading2"
                    :disabled="loading2"
                    tile
                    @click="comment()">
               Comentar

                <template v-slot:loader>
                    <span>Loading...</span>
                </template>
            </v-btn>
        </div>

        <div class="template">
            <p>Fulano dijo:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, fuga fugiat hic ipsam iste minus pariatur quisquam quos sed sit suscipit, voluptate voluptatum. Ad corporis, deserunt eaque esse facere <voluptatem class=""></voluptatem></p>

        </div>

        <div class="list-comments">
            <div v-if="comments.length>0">
                <template v-for="comment in comments">
                    <div class="author">{{comment.nickname}}:</div>
                    <div class="comments">{{comment.content}}</div>
                </template>
            </div>
<!--            <div class="message-nocomment text-center" v-else>-->
<!--                No existen comentarios. Sé el primero en comentar.-->
<!--            </div>-->
        </div>

    </section>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faPaperPlane, faAd} from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(faPaperPlane)
    library.add(faAd)
    import axios from 'axios';

    export default {
        components: {
            FontAwesomeIcon
        },
        props: ['category'],
        name: "Comment",
        data() {
            return {
                loading2: false,
                fab: false,
                correo: "",
                comentario: "",
                nombre: "",
                comments: []
            }
        },
        methods: {
            comment: function () {
                var me = this;
                axios.post('https://rssblog.herokuapp.com/comment', {
                    "nickname": this.nombre,
                    "email": this.correo,
                    "content": this.comentario,
                    "category": this.category
                })
                    .then(function (response) {
                        console.log(response.status)
                        if (response.status == 200) {
                            me.$toast.open({
                                message: 'Comentario enviado!',
                                position: 'is-bottom',
                                type: 'is-success',
                            })
                            me.nombre = "";
                            me.correo = "";
                            me.comentario = "";
                        } else {
                            me.$toast.open({
                                message: 'Ocurrió un error al enviar el comentario!',
                                position: 'is-bottom',
                                type: 'is-error'
                            })
                        }

                    })
                    .catch(function (error) {
                        me.$toast.open({
                            message: 'Ocurrió un error al enviar el comentario!',
                            position: 'is-bottom',
                            type: 'is-error'
                        })
                    });
            }
        },
        created() {
            axios.get(`https://rssblog.herokuapp.com/comment?category=${this.category}`)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.comments = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>

<style scoped>

    /*@media (max-width: 800px) {*/
    /*    .box-comment {*/
    /*        padding: 40px 5% !important;*/
    /*    }*/
    /*}*/

    /*.icon {*/
    /*    color: red;*/
    /*}*/

    /*.send {*/
    /*    margin-top: -80px;*/
    /*}*/

    /*.box-comment {*/
    /*    padding: 40px 20%;*/
    /*    background-color: #f2f2f2;*/

    /*}*/

    /*.list-comments {*/
    /*    max-height: 300px;*/
    /*    overflow-y: scroll;*/
    /*}*/

    /*.message-nocomment {*/
    /*    font-family: TradeGothicLTStd-Bold;*/
    /*    font-size: 21px;*/
    /*    color: #a09e9e;*/
    /*    padding-bottom: 20px;*/
    /*    text-transform: uppercase;*/
    /*}*/

    /*.author {*/
    /*    font-family: TradeGothicLTStd;*/
    /*    font-size: 21px;*/
    /*    font-weight: normal;*/
    /*    font-style: normal;*/
    /*    font-stretch: normal;*/
    /*    line-height: normal;*/
    /*    letter-spacing: 0.5px;*/
    /*    text-align: left;*/
    /*    color: #ec2d45;*/
    /*}*/

    /*.comments {*/
    /*    padding-bottom: 15px;*/
    /*    font-family: TradeGothicLTStd;*/
    /*    font-size: 18px;*/
    /*    font-weight: normal;*/
    /*    font-style: normal;*/
    /*    font-stretch: normal;*/
    /*    line-height: normal;*/
    /*    letter-spacing: normal;*/
    /*    margin: 0px 10px 0px 0px;*/
    /*    text-align: justify;*/
    /*    color: rgba(64, 62, 62, 0.85);*/
    /*}*/

    /*h3 {*/
    /*    padding: 10px 0px;*/

    /*    font-family: TradeGothicLTStd-Bold;*/
    /*    text-transform: uppercase;*/
    /*    font-size: 24px;*/
    /*    font-weight: bold;*/
    /*    font-style: normal;*/
    /*    font-stretch: normal;*/
    /*    line-height: normal;*/
    /*    letter-spacing: 2px;*/
    /*    text-align: center;*/
    /*    color: #ec2c44;*/
    /*}*/

    /*input {*/
    /*    height: 36px;*/
    /*}*/

    /*input::placeholder, textarea::placeholder {*/
    /*    color: rgba(255, 0, 0, .5);*/
    /*    font-size: 16px;*/

    /*}*/

    /*input, textarea {*/
    /*    border-radius: 0px;*/
    /*    border: 0px;*/
    /*    margin: 5px;*/
    /*    font-size: 16px;*/
    /*    color: red;*/
    /*}*/

    /*.text-comment {*/
    /*    height: 100px;*/
    /*}*/
</style>