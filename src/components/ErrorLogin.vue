<template>
    <div>
        <div>Error: {{errorMessage}}</div>
        <div v-if="errorCause != undefined ">Cause: {{ errorCause }}</div>
    </div>
</template>

<script>
export default {
    props: {
        errorMessage: String,
        errorCause: String
    }
}
</script>