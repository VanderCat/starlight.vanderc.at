<template>
    <div class="dl disable-select">
        <SvgIcon type="mdi" :path="icon" size="128" />
        <div class="text-container">
            <h3>{{name}}</h3>
            <div class="link-list">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style language="scss" scoped>
.dl {
    background-color: rgba(255, 0, 255, 0.125);
    width: 12rem;
    height: 16rem;
    padding-top: 22px;
    padding-left: 2rem;
    padding-right:2rem;
    box-sizing: border-box;
    border-radius: 1rem;
    transition: all 100ms;
}
.dl:hover {
    background-color: rgba(255, 0, 255, 0.2);
}
h3 {
    height: 1.5rem;
    margin: 0;
    width: fit-content;
}
.text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.link-list {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';

const props = defineProps({
  icon: String,
  name: String,
})
</script>