<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section about">
                <h2>Your Tuition Name</h2>
                <p>
                    Providing quality education for over 20 years. Helping students from
                    class 1 to 12 achieve their academic goals.
                </p>
            </div>
            <div class="footer-section contact">
                <h3>Contact Us</h3>
                <p>Email: contact@tuitionexample.com</p>
                <p>Phone: +1 (234) 567-8901</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© {{ currentYear }} Sahi Tutorials. All rights reserved.</p>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FooterComponent',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
});
</script>

<style scoped>
.footer {
    padding: 20px 0;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
}

.footer-section {
    flex: 1;
    margin: 10px;
}
</style>