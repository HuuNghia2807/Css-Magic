<template>
    <div class="container-loading-2">
        <div class="ring">
            <span class="text">Loading</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-loading-2 {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: var(--black-color);

    // hàm animation

    @keyframes rotateEvenly {
        0% {
            transform: rotate(0deg);
        } 
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .ring {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: 0.6rem solid var(--white-color);
        border-right-color: transparent;
        animation: rotateEvenly 3s linear infinite;
    }

    .text {
        font-size: 4.5rem;
        color: var(--loading-1-color);
        z-index: 2;
        animation-delay: -2s;
        animation: rotateEvenly 5s linear infinite;
    }
}
</style>
