<template>
    <i
        :class="['theme', theme == 'dark' ? 'icon-moon' : 'icon-sun']"
        v-on:click="toggleTheme()"
    ></i>
</template>

<script>
export default {
    data() {
        return {
            theme: localStorage.getItem('theme'),
        }
    },
    methods: {
        toggleTheme() {
            if (this.theme == 'dark') {
                this.theme = 'light'
                document.body.setAttribute('data-theme', 'light')
                localStorage.setItem('theme', 'light')
            } else {
                this.theme = 'dark'
                document.body.setAttribute('data-theme', 'dark')
                localStorage.setItem('theme', 'dark')
            }
        },
    },
    mounted() {
        // Checks for the color scheme of the device.
        // In this case it checks for anything that is not light theme.
        var media = window.matchMedia(
                'not all and (prefers-color-scheme: light)'
            ),
            body = document.body
        if (localStorage.getItem('theme') == 'dark') {
            body.setAttribute('data-theme', 'dark')
        } else if (localStorage.getItem('theme') == 'light') {
            body.setAttribute('data-theme', 'light')
        } else if (media.matches) {
            body.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        }
        media.addListener(function() {
            if (media.matches) {
                body.setAttribute('data-theme', 'dark')
                localStorage.setItem('theme', 'dark')
            } else {
                body.setAttribute('data-theme', 'light')
                localStorage.setItem('theme', 'light')
            }
        })
    },
}
</script>

<style lang="scss">
body[data-theme*='light'] {
    --background-color: #fff;
    --text-color: #434d4d;
    --icon-color: #434d4d;

    --theme-color: #6adfbe;
}

body[data-theme*='dark'] {
    --background-color: #192424;
    --text-color: #fefefe;

    --theme-color: #6adfbe;
    --icon-color: #6adfbe;
}

body {
    background: var(--background-color);
    color: var(--text-color);
}

.theme {
    position: fixed;
    right: 0;
    margin: 1em;
    color: var(--theme-color);
    font-size: 1.6em;
    opacity: 0.6;
    z-index: 999;

    cursor: pointer;
    transition: all 0.2s ease;

    @media only screen and (max-width: 767.98px) {
        margin: 0.6em;
    }

    &:hover {
        opacity: 0.2;
    }
}
</style>
