<template>
    <div v-if="title" class="heading">
        <h1>
            {{ title }} <strong>{{ message }}</strong>
        </h1>
        <p>{{ body }}</p>

        <div class="button__group">
            <button class="button__icon">
                <i class="icon-appleinc"></i> {{ $t('main[0][3]') }}
                <sub>AppStore</sub>
            </button>

            <button class="button__icon">
                <i class="icon-android"></i> {{ $t('main[0][3]') }}
                <sub>PlayMarket</sub>
            </button>
            <a href="http://123.56.107.208/tbccwallet.apk" target="_blank">
                <button class="button__icon ver">
                    <i class="icon-android"></i> {{ $t('main[0][4]') }}
                    <sub>Android</sub>
                </button>
            </a>
        </div>
    </div>

    <div v-else class="heading">
        <h2>{{ message }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        message: {
            type: String,
            default: '',
        },
        body: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss" scoped>
a {
    color: inherit;
    text-decoration: none;
}
.heading {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 12em auto 6em;
    max-width: 1480px;
    padding: 0 2em;

    @media only screen and (max-width: 767.98px) {
        margin: 2em auto;
    }

    h1 {
        font-weight: 300;
        font-size: 1.8em;
        text-transform: uppercase;
        line-height: 1.6;
        flex: 100%;
        text-align: center;

        strong {
            font-weight: 400;
            font-size: 1.41em !important;
            color: var(--theme-color);
            display: block;
            text-shadow: 16px 16px 4px rgba(83, 138, 122, 0.06);
        }
    }

    h2 {
        font-size: 1.6em;
        line-height: 1.46;
        position: relative;
        text-align: center;

        &::after {
            content: '';

            background: var(--theme-color);
            mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%230c8464%22%20viewBox%3D%220%200%20427.02%20124.38%22%20xml%3Aspace%3D%22preserve%22%3E%3Cdefs%2F%3E%3Cpath%20d%3D%22M26.88%20124.38C12.06%20124.38%200%20112.32%200%2097.5s12.06-26.88%2026.88-26.88S53.76%2082.68%2053.76%2097.5s-12.06%2026.88-26.88%2026.88zm0-43.76C17.57%2080.62%2010%2088.19%2010%2097.5s7.57%2016.88%2016.88%2016.88%2016.88-7.57%2016.88-16.88-7.57-16.88-16.88-16.88zM372.9%2039.44l-24.91-24.91-24.91%2024.91-25.3-25.3-25.29%2025.3-24.91-24.91-24.91%2024.91-25.29-25.3-25.29%2025.3-24.91-24.91L125.8%2035.9l-7.07-7.07L147.18.38l24.91%2024.91L197.38%200l25.29%2025.29L247.58.38l24.91%2024.91L297.78%200l25.3%2025.29L347.99.38l24.91%2024.91L398.19%200l28.83%2028.83-7.07%207.07-21.76-21.76z%22%20class%3D%22st0%22%2F%3E%3C%2Fsvg%3E');
            mask-repeat: no-repeat;

            height: 59px;
            position: absolute;
            right: 0;
            top: 40px;
            width: 200px;

            @media only screen and (max-width: 767.98px) {
                content: none;
            }
        }
    }

    p {
        max-width: 720px;
        text-align: left;
        flex: 100%;
        text-align: center;
    }
}
</style>
