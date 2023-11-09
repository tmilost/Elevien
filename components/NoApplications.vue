<template>
    <div class="no-applications">
        <div class="no-applications-center">
            <img src="/Ghost.svg" alt="Ghost" />
            <div class="no-applications-center-text">
                <p>No applications yet</p>
                <p>List of your requests will appear here when you add gymnasts.</p>
            </div>
            <button class="no-applications-center-button" @click="$emit('openModal')">
                <div class="no-applications-center-button-text">Apply gymnasts</div>
            </button>
        </div>
    </div>
</template>

<style scoped>
.no-applications {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
}

.no-applications-center {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.no-applications img {
    display: flex;
    justify-content: center;
    align-items: center;
}

.no-applications-center p:first-child {
    color: var(--text-primary, #080A0F);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    /* Web/H3 */
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    /* 155.556% */
}

.no-applications-center p:nth-child(2) {
    color: var(--text-secondary, #72747E);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    /* Web/text sm */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 142.857% */
}


.no-applications-center-button {
    height: 30px;
    display: inline-flex;
    padding: 1px 14px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 4px;
    background: var(--basic-primary-variant-judge, #FF842B);
    border: 0;
}

.no-applications-center-button-text {
    color: var(--text-on-primary, #FFF);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
}
</style>