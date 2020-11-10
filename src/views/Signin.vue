<template>
    <section>
        <form @submit.prevent="signin({ username: username, password: password })">
            <h1 v-text="`Telegram receiver`" />

            <p>
                Better tools for delivery messages from telegram client
            </p>

            <input type="text" v-model="username" placeholder="Email" />

            <input type="text" v-model="password" placeholder="Password" />

            <button type="submit" v-text="`Submit`" />
        </form>
    </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        ...mapActions({
            signin: 'Session/signin'
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.on {
    &__mobile {
        section {
            background: #ffffff;
            height: 100%;

            h1 {
                font-size: 2em;
                font-weight: 400;
            }

            p {
                line-height: 1.64;
            }
        }

        form {
            align-items: center;
            justify-content: center;
            text-align: center;
            display: flex;
            flex-direction: column;
            padding: 2em;
            height: 100%;
            box-sizing: border-box;

            input {
                background: var(--main-background);
                border: none;
                border-radius: 50px;
                box-sizing: border-box;
                height: 40px;
                margin: 1em 0 0;
                padding: 0 2em;

                font: 13px var(--main-font-family);
            }

            button {
                background: #eeeeee;
                border: none;
                border-radius: 50px;

                cursor: pointer;

                font: 14px var(--main-font-family);

                margin: 2em 0 0;
                padding: 1em 2em;
            }
        }
    }
    &__desktop {
        section {
            background: #ffffff;
            height: 100%;
            max-width: var(--navbar-width);

            h1 {
                font-size: 2em;
                font-weight: 400;
            }

            p {
                line-height: 1.64;
            }
        }

        form {
            display: flex;
            flex-direction: column;
            padding: 2em;
            height: 100%;
            box-sizing: border-box;

            input {
                background: var(--main-background);
                border: none;
                border-radius: 50px;
                box-sizing: border-box;
                height: 40px;
                margin: 1em 0 0;
                padding: 0 2em;

                font: 13px var(--main-font-family);
            }

            button {
                background: #eeeeee;
                border: none;
                border-radius: 50px;

                cursor: pointer;

                font: 14px var(--main-font-family);

                margin: 2em 0 0;
                padding: 1em 2em;
            }
        }
    }
}
</style>
