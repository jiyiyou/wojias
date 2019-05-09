<template>
    <div class="supplierAllBack">
    </div>
</template>

<script>
    export default {
        name: "supplierAllBack",
        data() {
            return {}
        },
        mounted() {
            this.gotonews()
        },
        methods: {
            gotonews() {
                alert(123)
                //this.$router.replace({path: 'news', query: {'id': this.$route.query.id}})
            }
        },
    }

</script>

<style>
</style>