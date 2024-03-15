<template>
    <div>
        <LoginWidget/>
        <div class="content">
            <div>
                <h1 class="header">Get Starlight Launcher</h1>
                <div class="dl-list">
                    <DownloadButton name="windows" :icon="mdiMicrosoftWindows">
                        <a>zip x64</a>
                        <a>setup x64</a>
                    </DownloadButton>
                    <DownloadButton name="linux" :icon="mdiLinux">
                        <a>tar x64</a>
                        <a>deb x64</a>
                    </DownloadButton>
                    <DownloadButton name="macos" :icon="mdiFoodApple">
                        <a>dmg x64</a>
                        <a>dmg arm64</a>
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
</style>