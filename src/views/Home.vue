<template>
  <div class="home">
    <Bar />
    <LightMove />
  </div>
</template>

<script>
import Bar from "@/components/Bar"
import LightMove from "@/components/LightMove"

export default {
  name: "Home",
  components: {
    Bar,
    LightMove
  },
  data() {
    return {}
  },
  methods: {}
}
</script>