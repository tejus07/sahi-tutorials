<template>
    <div class="typing-container">
        <span class="typing-text">{{ displayText }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const words = ["Self confidence", "A bright future"];
const displayText = ref('');
const currentWordIndex = ref(0);
const currentCharIndex = ref(0);
const isDeleting = ref(false);
const showCursor = ref(true);

const typingEffect = () => {
    const currentWord = words[currentWordIndex.value];
    if (isDeleting.value) {
        if (currentCharIndex.value > 0) {
            currentCharIndex.value--;
            displayText.value = currentWord.substring(0, currentCharIndex.value);
        } else {
            isDeleting.value = false;
            currentWordIndex.value = (currentWordIndex.value + 1) % words.length;
        }
    } else {
        if (currentCharIndex.value < currentWord.length) {
            currentCharIndex.value++;
            displayText.value = currentWord.substring(0, currentCharIndex.value);
        } else {
            isDeleting.value = true;
        }
    }
    setTimeout(typingEffect, isDeleting.value ? 100 : 200);
};

onMounted(() => {
    typingEffect();
    setInterval(() => {
        showCursor.value = !showCursor.value;
    }, 500);
});
</script>

<style scoped>
.typing-container {
    display: inline-block;
}

.typing-text {
    display: inline-block;
}

.cursor {
    display: inline-block;
    background-color: black;
    width: 10px;
    margin-left: 2px;
    animation: blink 1s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

.typing-text {
    color: #fff;
    padding: 5px 16px;
    overflow: hidden;
    min-height: 78px;
    vertical-align: middle;
    display: inline-block;
    border-radius: 4px;
    line-height: 1.3076923077em;
    background-color: #6A307D;
}

@media (max-width:480px) {
    .typing-text {
        min-height: 60px;
        line-height: 50px;
        font-size: rem(30);
    }
}
</style>