<template>
    <body id="app">
        <main-theme />
        <header>
            <navbar-header />
        </header>

        <router-view />

        <footer>
            <navbar-footer />
        </footer>
    </body>
</template>

<style lang="scss">
*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

footer {
    margin: 6em 0 0;
}

::selection {
    background: var(--theme-color);
    color: var(--background-color);
    height: 1em;
}
</style>
