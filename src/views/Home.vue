<template>
  <div class="home">
    <Bar />
    <LightMove />
    <Shine />
  </div>
</template>

<script>
import Bar from "@/components/Bar"
import LightMove from "@/components/LightMove"
import Shine from "@/components/Shine"

export default {
  name: "Home",
  components: {
    Bar,
    LightMove,
    Shine
  },
  data() {
    return {}
  },
  methods: {}
}
</script>