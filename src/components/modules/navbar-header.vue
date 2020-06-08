<template>
    <nav class="row">
        <ul class="col-sm-12 col-md-3">
            <li class="logotype">
                <router-link class="icon-tbcc" tag="i" to="/"></router-link>
            </li>
            <li>TBCC <small>PAY PURSE</small></li>
        </ul>

        <ul class="col-sm-12 col-md-9">
            <li class="dropdown__button" v-on:click="active = !active">
                <i :class="active ? 'icon-clear' : 'icon-menu'"></i>
            </li>
            <ul
                :class="[
                    'dropdown__menu',
                    { 'dropdown__menu--active': active },
                ]"
            >
                <li v-on:click="active = false">
                    <router-link to="/blog">{{
                        $t('navbar[0][0]')
                    }}</router-link>
                </li>
                <li v-on:click="active = false">
                    <router-link to="/token">{{
                        $t('navbar[0][1]')
                    }}</router-link>
                </li>
                <li v-on:click="active = false">
                    <router-link to="/wallet">{{
                        $t('navbar[0][2]')
                    }}</router-link>
                </li>
                <li v-on:click="active = false">
                    <router-link to="/team">{{
                        $t('navbar[0][3]')
                    }}</router-link>
                </li>
                <li v-on:click="active = false">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSck5hNFGX-iEBGzmj7PEc581fiKP5033GSXuIgj3AItKtLemg/viewform"
                        target="_blank"
                        >{{ $t('navbar[0][4]') }}</a
                    >
                </li>

                <li
                    class="dropdown__locale"
                    v-on:click="active_dropdown = !active_dropdown"
                >
                    <span>{{ $i18n.locale }}</span>
                    <i
                        :class="[
                            active_dropdown
                                ? 'icon-chevron-up'
                                : 'icon-chevron-down',
                        ]"
                    ></i>
                    <ul v-if="active_dropdown">
                        <li
                            v-for="l in locales"
                            :key="l.id"
                            v-on:click="
                                sessionLocale(l),
                                    ($i18n.locale = l),
                                    active_dropdown == false
                            "
                        >
                            {{ l }}
                        </li>
                    </ul>
                </li>
            </ul>
        </ul>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            active: false,
            active_dropdown: false,
        }
    },
    computed: {
        locales: self =>
            self.$i18n.availableLocales.filter(l => l !== self.$i18n.locale),
    },

    methods: {
        ...mapActions('Session', ['sessionLocale']),
    },
}
</script>

<style lang="scss" scoped>
nav {
    align-items: center;
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    max-width: 1480px;
    padding: 1em 2em;

    small {
        display: block;
        opacity: 0.6;
        white-space: nowrap;
    }

    ul {
        align-items: center;
        display: flex;
        margin: 0;
        padding: 0;

        @media only screen and (max-width: 767.98px) {
            flex-direction: column;
            text-align: center;
        }

        li {
            list-style: none;

            a {
                border-bottom: 3px solid transparent;
                color: inherit;
                text-decoration: none;
                transition: all 0.2s ease;
                &:hover {
                    border-bottom: 3px solid var(--theme-color);
                }
            }
        }

        &:last-child {
            justify-content: flex-end;
        }
    }
}

.logotype {
    margin: 0 1em 0 0;

    i {
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            color: var(--theme-color);
        }
    }

    @media only screen and (max-width: 767.98px) {
        margin: 0 0 1em;
    }
}

body[data-theme*='dark'] {
    .logotype {
        i {
            &:hover {
                color: var(--text-color);
            }
        }
    }
}

.dropdown__button {
    cursor: pointer;
    display: none;

    @media only screen and (max-width: 767.98px) {
        display: inherit;
        margin: 2em 0 1em;
    }
}

.dropdown__menu {
    @media only screen and (max-width: 767.98px) {
        display: none;
        margin: 0 0 2em;
    }
    li {
        margin: 0 0 0 2em;
        position: relative;

        @media only screen and (max-width: 767.98px) {
            margin: 1em 0 0;
        }
    }
}

.dropdown__menu--active {
    @media only screen and (max-width: 767.98px) {
        display: inherit;
    }
}

.dropdown__locale {
    span {
        border-bottom: 3px solid transparent;
        cursor: pointer;
        margin: 0 5px 0 0;
        text-transform: capitalize;
        transition: all 0.2s ease;
        &:hover {
            border-bottom: 3px solid var(--theme-color);
        }
    }
    i {
        line-height: initial;
    }
    ul {
        margin: 10px 0;
        position: absolute;
        left: 0;
        display: flex;
        flex-direction: column;

        @media only screen and (max-width: 767.98px) {
            align-items: baseline;
            position: relative;
        }

        li {
            border-bottom: 3px solid transparent;
            line-height: initial;
            margin: 0 0 10px;

            cursor: pointer;
            text-transform: capitalize;
            transition: all 0.2s ease;
            &:hover {
                border-bottom: 3px solid var(--theme-color);
            }
        }
    }
}
</style>
