<template>
    <main>
        <section class="c">
            <main-heading :message="$t('post[4][0]')" />

            <div class="container row">
                <div class="col-sm-12 col-md-6">
                    <p>
                        {{ $t('post[4][1]') }}
                    </p>
                    <p>
                        {{ $t('post[4][2]') }}
                    </p>
                    <h4>{{ $t('post[4][3]') }}</h4>
                    <p>
                        {{ $t('post[4][4]') }}
                    </p>
                    <p>
                        {{ $t('post[4][5]') }}
                    </p>
                    <blockquote>
                        {{ $t('post[4][6]') }}
                    </blockquote>
                    <p>
                        {{ $t('post[4][7]') }}
                    </p>
                    <p>
                        {{ $t('post[4][8]') }}
                    </p>
                    <p>
                        {{ $t('post[4][9]') }}
                    </p>
                    <h4>
                        {{ $t('post[4][10]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][11]') }}
                    </p>
                    <ul>
                        <li>
                            {{ $t('post[4][12]') }}
                        </li>
                        <li>
                            {{ $t('post[4][13]') }}
                        </li>
                        <li>
                            {{ $t('post[4][14]') }}
                        </li>
                        <li>
                            {{ $t('post[4][15]') }}
                        </li>
                        <li>
                            {{ $t('post[4][16]') }}
                        </li>
                    </ul>
                    <p>
                        {{ $t('post[4][17]') }}
                    </p>
                    <p>
                        {{ $t('post[4][18]') }}
                    </p>
                    <ul>
                        <li>
                            {{ $t('post[4][19]') }}
                        </li>
                        <li>
                            {{ $t('post[4][20]') }}
                        </li>
                        <li>
                            {{ $t('post[4][21]') }}
                        </li>
                        <li>
                            {{ $t('post[4][22]') }}
                        </li>
                    </ul>
                </div>

                <div class="col-sm-12 col-md-6">
                    <h4>
                        {{ $t('post[4][23]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][24]') }}
                    </p>
                    <p>
                        {{ $t('post[4][25]') }}
                    </p>
                    <blockquote>
                        {{ $t('post[4][26]') }}
                    </blockquote>
                    <h4>
                        {{ $t('post[4][27]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][28]') }}
                    </p>
                    <h4>
                        {{ $t('post[4][29]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][30]') }}
                    </p>
                    <h4>
                        {{ $t('post[4][31]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][32]') }}
                    </p>
                    <h4>
                        {{ $t('post[4][33]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][34]') }}
                    </p>
                    <h4>
                        {{ $t('post[4][35]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][36]') }}
                    </p>
                    <h4>
                        {{ $t('post[4][37]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][38]') }}
                    </p>
                    <h4>
                        {{ $t('post[4][39]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][40]') }}
                    </p>
                    <h4>
                        {{ $t('post[4][41]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][42]') }}
                    </p>
                    <h4>
                        {{ $t('post[4][43]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][44]') }}
                    </p>
                    <h4>
                        {{ $t('post[4][45]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][46]') }}
                    </p>
                    <h4>
                        {{ $t('post[4][47]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][48]') }}
                    </p>
                    <h4>
                        {{ $t('post[4][49]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][50]') }}
                    </p>
                    <h4>
                        {{ $t('post[4][51]') }}
                    </h4>
                    <p>
                        {{ $t('post[4][52]') }}
                    </p>
                    <p>
                        {{ $t('post[4][53]') }}
                    </p>
                </div>

                <div class="col-sm-12 col-md-6">
                    <figure>
                        <img :src="require('@/assets/blank.svg')" alt="" />
                    </figure>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
main {
    section {
        .container {
            margin: 1em auto;
            max-width: 1480px;
        }
    }

    p {
        padding: 0 2em 1em;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0 2em;

        li {
            margin: 1em 0;
            position: relative;

            &::before {
                color: var(--theme-color);
                content: '';
                left: -25px;
                position: absolute;
                top: 11px;
                border: 2px solid;
                width: 18px;
            }
        }
    }
}

.heading {
    justify-content: start !important;
    margin: 2em auto 6em !important;

    @media only screen and (max-width: 767.98px) {
        margin: 2em auto !important;
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
    margin: 0 2em;
    img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
}

blockquote {
    background: var(--theme-color);
    margin: 2em 2em 1.6em;
    padding: 2em;
    position: relative;
    z-index: 0;

    &::before {
        content: '”';
        font-size: 12em;
        line-height: 0;
        position: absolute;
        top: -45px;
        left: 0;
        transform: rotate(180deg);
        z-index: -1;
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
    color: var(--theme-color);
    font-size: 18px;
    margin: 0 2em 1em;
}

span {
    color: var(--theme-color);
    text-transform: uppercase;
}
</style>
