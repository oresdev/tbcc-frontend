<template>
    <nav class="row">
        <ul class="row col-sm-12 col-md-4">
            <li class="logotype">
                <router-link class="icon-tbcc" tag="i" to="/"></router-link>
            </li>
            <li>TBCC <small>PAY PURSE</small></li>

            <ul class="col-sm-12 social">
                <li>
                    <a
                        class="icon-twitter"
                        href="https://twitter.com/TbccW"
                        target="_blank"
                    ></a>
                </li>
                <li>
                    <a
                        class="icon-instagram"
                        href="https://www.instagram.com/TBCC_Wallet/"
                        target="_blank"
                    ></a>
                </li>
                <li>
                    <a
                        class="icon-facebook"
                        href="https://www.facebook.com/TbccWallet1/"
                        target="_blank"
                    ></a>
                </li>
                <li>
                    <a
                        class="icon-telegram-plane"
                        href="https://t.me/tbcc_china"
                        target="_blank"
                    ></a>
                </li>
            </ul>
        </ul>

        <ul class="col-sm-12 col-md-4">
            <li>
                <router-link to="/blog">{{ $t('navbar[0][0]') }}</router-link>
            </li>
            <li>
                <router-link to="/token">{{ $t('navbar[0][1]') }}</router-link>
            </li>
            <li>
                <router-link to="/wallet">{{ $t('navbar[0][2]') }}</router-link>
            </li>
            <li>
                <router-link to="/team">{{ $t('navbar[0][3]') }}</router-link>
            </li>
        </ul>

        <ul class="col-sm-12 col-md-4">
            <li>{{ $t('navbar[1][0]') }}</li>
            <li>{{ $t('navbar[1][1]') }}</li>
            <li>{{ $t('navbar[1][2]') }}</li>
            <li>{{ $t('navbar[1][3]') }}</li>
        </ul>

        <ul class="col-sm-12 copy">
            <li>&copy; 2018-2020 TBCC Inc. {{ $t('navbar[1][4]') }}</li>
        </ul>
    </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
    margin: 0 auto;
    max-width: 1480px;
    padding: 2em;

    small {
        display: block;
        opacity: 0.6;
        white-space: nowrap;
    }

    ul {
        align-items: center;
        margin: 0;
        padding: 0;

        li {
            list-style: none;
            margin: 0 0 1em;

            a {
                color: inherit;
                text-decoration: none;
                transition: all 0.2s ease;

                &:hover {
                    color: var(--theme-color);
                }
            }
        }
        &:first-child {
            li {
                margin: 0 1em 0 0;
                @media only screen and (max-width: 767.98px) {
                    margin: 0;
                }
            }
        }
        @media only screen and (max-width: 767.98px) {
            flex-direction: column;
            justify-content: center;
            text-align: center;
            margin: 0 0 1em;
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
        margin: 0 0 1em !important;
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

.social {
    display: flex;
    margin: 2em 0 1em;
    li {
        margin: 0 1em !important;
        &:first-child {
            margin: 0 1em 0 0 !important;
        }
        @media only screen and (max-width: 767.98px) {
        }
    }
    @media only screen and (max-width: 767.98px) {
        flex-direction: row;
    }
}

.copy {
    margin: 2em 0 0;
}
</style>
