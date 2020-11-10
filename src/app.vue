<template>
    <body id="app">
        <router-view />
    </body>
</template>

<script>
export default {
    created() {
        this.$socketClient.onMessage = msg => {
            this.$store.commit('Data/responseData', JSON.parse(msg.data))
        }
    },
    mounted() {
        const device = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent)
        if (device) {
            document.body.classList.add('on__mobile')
        } else {
            document.body.classList.add('on__desktop')
        }
    }
}
</script>

<style lang="scss">
@font-face {
    font-family: 'Roboto';
    src: url('./assets/fonts/Roboto-Regular.ttf');
}

:root {
    --main-font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
    --main-color: hsl(180, 7%, 28%);
    --main-background: hsl(0, 0%, 96%);
    --navbar-width: 320px;
    --sidebar-width: 320px;
}

::-webkit-scrollbar {
    width: 0px;
}

html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    user-select: none;
}

body {
    background: var(--main-background);
    color: var(--main-color);

    font: 14px var(--main-font-family);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    color: inherit;
    text-decoration: none;

    &.router-link-exact-active {
        color: #42b983;
    }

    &.router-link-active {
        color: #42b983;
    }
}

ul {
    margin: 0;
    padding: 0;

    li {
        list-style: none;
    }
}

button,
input,
a,
svg {
    -webkit-tap-highlight-color: transparent;
    outline: none;
}

svg {
    cursor: pointer;

    fill: currentColor;
    stroke: none;
    vertical-align: middle;
}
</style>
