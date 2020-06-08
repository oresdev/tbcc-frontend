<template>
    <main>
        <section class="c">
            <main-heading :message="$t('team[0][0]')" />

            <div class="container row">
                <div class="col-sm-12 col-md-6">
                    <main-card
                        :id="$t('team[1][0]')"
                        :message="$t('team[1][1]')"
                        :body="$t('team[1][2]')"
                    />
                </div>

                <div class="col-sm-12 col-md-6">
                    <main-card
                        :id="$t('team[2][0]')"
                        :message="$t('team[2][1]')"
                        :body="$t('team[2][2]')"
                    />
                </div>

                <div class="col-sm-12 col-md-6">
                    <main-card
                        :id="$t('team[3][0]')"
                        :message="$t('team[3][1]')"
                        :body="$t('team[3][2]')"
                    />
                </div>
            </div>
        </section>

        <section>
            <main-heading :message="$t('team[4][0]')" />

            <div class="container row">
                <div class="col-sm-12 col-md-4">
                    <ul>
                        <li>
                            <span>{{ $t('team[4][1]') }}</span
                            >hr@tbcc.tech
                        </li>
                        <li>
                            <span>{{ $t('team[4][2]') }}</span
                            >media@tbcc.tech
                        </li>
                        <li>
                            <span>{{ $t('team[4][3]') }}</span
                            >invest@tbcc.tech
                        </li>
                    </ul>
                </div>

                <div class="col-sm-12 col-md-4">
                    <ul>
                        <li>
                            <span>{{ $t('team[4][4]') }}</span
                            >pos@tbcc.tech
                        </li>
                        <li>
                            <span>{{ $t('team[4][5]') }}</span
                            >wallet@tbcc.tech
                        </li>
                        <li>
                            <span>{{ $t('team[4][6]') }}</span
                            >account@tbcc.tech
                        </li>
                    </ul>
                </div>

                <div class="col-sm-12 col-md-4">
                    <figure></figure>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
main {
    section {
        .container {
            margin: 1em auto;
            max-width: 1480px;
        }
    }
}

.heading {
    justify-content: start !important;
    margin: 2em auto 6em !important;

    @media only screen and (max-width: 767.98px) {
        margin: 0em auto !important;
    }
}

.c {
    &::before {
        content: '';
        background: var(--theme-color);
        mask-image: url('~@/assets/c.svg');
        mask-repeat: no-repeat;
        mask-size: 780px;
        mask-position: right top;
        position: absolute;
        width: 100%;
        height: 100%;
    }
}

figure {
    height: 100%;
    padding: 0 2em;

    &::before {
        content: '';

        background: var(--theme-color);
        mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20viewBox%3D%220%200%20315%20272%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20d%3D%22M0.0276952%20135.553C0.412768%20142.035%204.71274%20147.491%2010.9381%20149.352L126.203%20184.201L130.439%20263.654C130.631%20266.799%20132.749%20269.559%20135.766%20270.586C136.6%20270.906%20137.499%20271.035%20138.333%20271.035C140.579%20271.035%20142.697%20270.136%20144.237%20268.403L184.991%20223.286L242.752%20263.269C245.319%20265.066%20248.335%20266.029%20251.48%20266.029C258.732%20266.029%20265.022%20260.895%20266.562%20253.707L314.504%209.37794C315.081%206.55407%20313.99%203.60185%20311.808%201.80484C309.562%20-0.0563403%20306.546%20-0.505593%20303.85%200.585447L9.26944%20120.471C3.30081%20123.167%20-0.357377%20129.071%200.0276952%20135.553ZM145.072%20243.951L142.44%20193.828L171.963%20214.237L145.072%20243.951ZM251.223%20250.048L146.099%20177.27L293.517%2034.6644L251.223%20250.048ZM277.344%2028.3749L131.594%20169.376L16.4575%20134.591L277.344%2028.3749Z%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fsvg%3E');
        mask-repeat: no-repeat;
        mask-position: left center;
        mask-size: contain;

        opacity: 0.2;

        height: 100%;
        position: absolute;
        width: 100%;
        max-width: 180px;

        @media only screen and (max-width: 767.98px) {
            content: none;
        }
    }
}

ul {
    list-style: none;
    li {
        margin: 0 0 2em;
        span {
            display: block;
        }
    }
}

h1,
h2,
h3,
h4 {
    font-weight: 300;
    text-transform: uppercase;
}

h1 {
    font-size: 36px;
}

h2 {
    font-size: 28px;
}

h3 {
    font-size: 24px;
}

h4 {
    font-size: 18px;
}

span {
    color: var(--theme-color);
    text-transform: uppercase;
}
</style>
