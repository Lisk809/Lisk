<template>
  <div>
    <p id="yiyan">{{ hitokoto }}</p>
  </div>
  <div id="test"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const hitokoto = ref("");

    const fetchData = async () => {
      try {
        const response = await axios.get("https://v1.hitokoto.cn/?encode=text");
        hitokoto.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      hitokoto,
    };
  },
});
</script>
<style>
#yiyan {
	  font-size:30px;
	  font-weight:bolder;
	  background-image:linear-gradient(to bottom right, blue, pink);
	  -webkit-background-clip:text;
	  -webkit-text-fill-color:transparent;
}
#yiyan:hover {
	  filter: drop-shadow(0 0 2em blue);
}
</style>
