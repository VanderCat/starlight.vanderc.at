<template>
    <div>
        <LoginWidget/>
        <div class="content">
            <div class="container">
                <h1 class="header">Get Starlight Launcher</h1>
                <div class="dl-list">
                    <DownloadButton name="windows" :icon="mdiMicrosoftWindows">
                        <a href="#">zip x64</a>
                        <a href="#">setup x64</a>
                    </DownloadButton>
                    <DownloadButton name="linux" :icon="mdiLinux">
                        <a href="#">tar x64</a>
                        <a href="#">deb x64</a>
                    </DownloadButton>
                    <DownloadButton name="macos" :icon="mdiFoodApple">
                        <a href="#">dmg x64</a>
                        <a href="#">dmg arm64</a>
                    </DownloadButton>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script setup>
import LoginWidget from '@/components/LoginWidget.vue';
import Footer from '@/components/Footer.vue';
import DownloadButton from '@/components/DownloadButton.vue';

import { mdiMicrosoftWindows, mdiLinux, mdiFoodApple } from '@mdi/js'
</script>

<style scoped>
.header {
    font-size: 3rem;
    text-align: center;
}

.dl-list {
    display: flex;
    gap: 2rem;
}
.link-list>a{
    color: #fff;
    font-weight: regular;
    font-size: 20px;
}
.link-list>a:any-link {
    text-decoration: none;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
}

@media screen and (max-width: 700px) {
    .dl-list {
        flex-direction: column;
    }
}
</style>