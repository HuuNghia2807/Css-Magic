<template>
    <div class="container-loading">
        <div class="content">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
        </div>
        <div class="loading">
            <span class="loading-text">{{ textLoading }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {

            const textLoading = 'LOADING...'

            return {
                textLoading,
            }
        }
    }
</script>

<style lang="scss" scoped>
.container-loading {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: var(--black-color);

    // cac ham animation
    @keyframes animate {
        0% {
            transform: rotate(0deg);
        } 
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes animate2 {
        0% {
            transform: rotate(360deg);
        } 
        100% {
            transform: rotate(0deg);
        }
    }

    .content {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--black-color);
    }

    .ring {
        position: relative;
        width: 250px;
        height: 250px;
        margin: -40px;
        border-radius: 50%;
        border: 0.6rem solid transparent;
        border-top: 0.6rem solid #24ecff;
        animation: animate linear 2s infinite;
    }

    .ring::before {
        content: '';
        position: absolute;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        background-color: #24ecff;
        box-shadow: 0 0 0 10px #24ecff33, 0 0 0 20px #24ecff22, 0 0 0 30px #24ecff11;
        right: 10px;
        top: 20px;
    }

    .ring:nth-child(2) {
        animation-delay: -1s;
        animation: animate2 linear 2s infinite;
        border-top: 0.6rem solid transparent;
        border-left: 0.6rem solid #93ff2d;
    }

    .ring:nth-child(2)::before {
        content: '';
        position: absolute;
        bottom: 20px;
        top: initial;
        left: 12px;
        width: 30px;
        height: 30px;
        background: #93ff2d;
        border-radius: 50%;
        box-shadow: 0 0 0 10px #93ff2d33, 0 0 0 20px #93ff2d22, 0 0 0 30px #93ff2d11,
        0 0 20px #93ff2d,
        0 0 50px #93ff2d;
    }

    .ring:nth-child(3) {
        position: absolute;
        top: -150px;
        animation: animate2 2s linear infinite;
        animation-delay: -3s;
        border-top: 8px solid transparent;
        border-left: 8px solid #e41cf8;
    }

    .ring:nth-child(3)::before {
        content: '';
        position: absolute;
        bottom: 20px;
        top: initial;
        left: 12px;
        width: 30px;
        height: 30px;
        background: #e41cf8;
        border-radius: 50%;
        box-shadow: 0 0 0 10px #e41cf833, 0 0 0 20px #e41cf822, 0 0 0 30px #e41cf811,
        0 0 20px #e41cf8,
        0 0 50px #e41cf8;
    }

    .loading {
        margin-top: 100px;

        .loading-text {
            font-size: 2rem;
            color: var(--white-color);
        }
    }

}
</style>
