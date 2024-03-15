<template>
    <div>
        <div class="content">
            by logging in you accept that starlight glimmer is the best pony.<br/>
            <br/>
            Username: <input type="text"/><br/>
            Password: <input type="password"/><br/>
            <br/>
            [<a href="#">ok</a>]
        </div>
        <Footer/>
    </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
</script>

<style>
.content {
    width: 100%;
}
</style>