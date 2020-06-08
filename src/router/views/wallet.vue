<template>
    <main>
        <section class="c">
            <div class="container row align-items-center">
                <div class="col-sm-12 col-md-6 qr">
                    <figure>
                        <img :src="require('@/assets/qr-code.svg')" alt="" />
                    </figure>
                    <h1>
                        <span>{{ $t('wallet[0][0]') }}</span>
                        {{ $t('wallet[0][1]') }}
                    </h1>
                </div>
                <div class="col-sm-12 col-md-6">
                    <figure>
                        <img
                            :src="require('@/assets/phone-wallet.png')"
                            alt=""
                        />
                    </figure>
                </div>
            </div>
        </section>

        <section>
            <div class="container row align-items-center">
                <div class="col-sm-12 col-md-6 order">
                    <figure>
                        <img
                            :src="require('@/assets/phone-wallet2.png')"
                            alt=""
                        />
                    </figure>
                </div>
                <div class="col-sm-12 col-md-6">
                    <h1>
                        <span>{{ $t('wallet[1][0]') }}</span>
                        {{ $t('wallet[1][1]') }}
                    </h1>
                    <p>
                        {{ $t('wallet[1][2]') }}
                    </p>
                </div>
            </div>
        </section>

        <section class="e">
            <main-heading :message="$t('wallet[2][0]')" />

            <div class="container row">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :pic="require('@/assets/205.svg')"
                        :message="$t('wallet[2][1]')"
                        :body="$t('wallet[2][2]')"
                    />
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :pic="require('@/assets/206.svg')"
                        :message="$t('wallet[2][3]')"
                        :body="$t('wallet[2][4]')"
                    />
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :pic="require('@/assets/207.svg')"
                        :message="$t('wallet[2][5]')"
                        :body="$t('wallet[2][6]')"
                    />
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :pic="require('@/assets/208.svg')"
                        :message="$t('wallet[2][7]')"
                        :body="$t('wallet[2][8]')"
                    />
                </div>
            </div>
        </section>

        <section>
            <div class="container row align-items-center">
                <div class="col-sm-12 col-md-6">
                    <h1>
                        <span>{{ $t('wallet[3][0]') }}</span>
                        {{ $t('wallet[3][1]') }}
                    </h1>
                    <p>
                        {{ $t('wallet[3][2]') }}
                    </p>
                </div>
                <div class="col-sm-12 col-md-6">
                    <figure>
                        <img :src="require('@/assets/209.svg')" alt="" />
                    </figure>
                </div>
            </div>
        </section>

        <section class="c">
            <div class="container row align-items-center">
                <div class="col-sm-12 col-md-6 order">
                    <figure>
                        <img :src="require('@/assets/210.svg')" alt="" />
                    </figure>
                </div>
                <div class="col-sm-12 col-md-6">
                    <h1>
                        <span>{{ $t('wallet[4][0]') }}</span>
                        {{ $t('wallet[4][1]') }}
                    </h1>
                    <p>
                        {{ $t('wallet[4][2]') }}
                    </p>
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

figure {
    margin: 2em;
    text-align: center;
    img {
        max-width: 480px;
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
}
.qr {
    display: flex;
    flex-direction: column;

    figure {
        text-align: left;
        @media only screen and (max-width: 767.98px) {
            align-self: center;
            order: 1;
        }
        img {
            max-width: 200px;
        }
    }
}
.order {
    @media only screen and (max-width: 767.98px) {
        order: 2;
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

.e {
    &::before {
        content: '';
        background: var(--theme-color);
        mask-image: url('~@/assets/e.svg');
        mask-repeat: no-repeat;
        mask-size: contain;
        position: absolute;
        width: 100%;
        height: 100%;
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
    letter-spacing: 1px;

    padding: 0 1em 0.2em;
    text-shadow: 16px 16px 4px rgba(83, 138, 122, 0.06);
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
p {
    padding: 0 2em;
}

span {
    font-weight: 300;
    color: var(--theme-color);
    display: block;
    font-size: 0.86em;
    text-transform: uppercase;
    text-shadow: none;
}
</style>
