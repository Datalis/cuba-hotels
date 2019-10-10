<template>
    <section :id="`commentbox${this.category}`">
        <h3>Deja tu comentario, duda o pregunta</h3>
        <v-form ref="form" :value="valid">
            <v-row class="ma-0" style="width: 100%">
                <v-col cols="12" sm="6" class="pl-0 pb-0">
                    <v-text-field
                            v-model="name"
                            :rules="rules.name"
                            color="#cc983c"
                            label="Nombre"
                            required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="pl-0 pb-0">
                    <v-text-field
                            v-model="email"
                            :rules="rules.email"
                            color="#cc983c"
                            label="Correo"
                            required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" class="pl-0 pt-0">
                    <v-textarea
                            class="pl-0"
                            color="#cc983c"
                            v-model="text"
                            label="Comenario"
                            required
                            :rules="rules.text"
                            :auto-grow="false"
                            no-resize
                    ></v-textarea>

                </v-col>
                <v-col cols="12" class="pl-0 pt-0">
                    <v-alert
                            v-if="state<0"
                            text
                            type="error"
                            icon="mdi-cloud-alert"
                    >
                        Hubo un error al enviar su comentario. Por favor intentelo más tarde.
                    </v-alert>

                    <v-alert
                            v-if="state>0"
                            text
                            type="success"
                            icon="mdi-information"
                    >
                        Su comentario ha sido enviado a moderación, muchas gracias.
                    </v-alert>

                    <div>
                        <v-btn color="#cc983c" :loading="sending" :disabled="sending" tile @click="comment()">
                            Comentar
                            <template v-slot:loader>
                                <span>Enviando...</span>
                            </template>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-form>
        <v-row class="mx-0" style="width:100%">
            <v-col cols="12" class="pl-0 pt-0">
                <div v-if="comments.length > 0" class="mt-8">
                    <template v-for="(comment,i) in comments">
                        <div :key="'comment'+i" class="comment-box pa-4 mt-4">
                            <p>Rosa dijo:</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt eaque
                                earum eius
                                enim
                                expedita explicabo, fuga fugiat ipsum, libero mollitia nisi ratione reprehenderit
                                tempore
                                tenetur!
                                Itaque labore nulla
                            </p>
                        </div>
                    </template>
                </div>
                <div v-else class="message-nocomment mt-8 text-center">
                    No existen comentarios. Sé el primero en comentar.
                </div>
            </v-col>
        </v-row>



    </section>
</template>

<script>
    import {submitComment, getComments} from "@/api/comments";

    export default {
        props: ['category'],
        name: "Comment",
        data() {
            return {
                valid: true,
                state: 0,
                sending: false,
                email: "",
                text: "",
                name: "",
                comments: [],
                errors: [],
                rules: {
                    name: [v => !!v.trim() || 'El nombre es obligatorio'],
                    text: [v => !!v.trim() || 'Escriba su comentario'],
                    email: [
                        v => !!v.trim() || 'El correo es obligatorio y no será compartido',
                        v => /\S+@\S+\.\S+/.test(v) || 'Debe especificar un correo válido'
                    ]
                }
            }
        },
        methods: {
            resetForm() {
                this.name = ""
                this.email = ""
                this.text = ""
                this.errors = []
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
            comment: function () {
                if (this.$refs.form.validate()) {
                    const me = this;
                    me.sending = true

                    submitComment({
                        "nickname": this.name.trim(),
                        "email": this.email.trim(),
                        "content": this.text.trim(),
                        "category": this.category
                    }).then(response => {
                        me.resetForm()
                        me.resetValidation()
                        me.state = 1
                        setTimeout(() => (me.state = 0), 5000)
                    }).catch(error => {
                        console.log(error)
                        me.state = -1
                        setTimeout(() => (me.state = 0), 5000)
                    }).finally(() => {
                        me.sending = false
                    });
                }
            }
        },
        mounted() {
            getComments({'category': this.category})
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
    .comment-box {
        background-color: #f4f2f0;
    }
</style>