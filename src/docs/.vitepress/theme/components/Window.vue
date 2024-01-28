<template>
  <div class="window" @mouseover="showButton" @mouseleave="hideButton">
    <div class="window-header">
      <span class="lights"></span>
      <div class="window-title">{{ title }}</div>
      <div class="window-buttons">
        <button class="window-button" v-if="showCopyButton" @click="copy">
          {{ buttonText }}
        </button>
      </div>
    </div>
    <div class="window-content">
	<pre><code :class="lan">
      <slot></slot>
	</code></pre>
    </div>
  </div>
</template>

<script>
//import Prism from "prismjs";
//import "prismjs/themes/prism-tomorrow.css";
import hljs from "highlight.js"
import "highlight.js/styles/github.css"

export default {
  name: "Window",
  props: {
    title: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      default: "Copy",
    },
    content: {
      type: String,
      default: "",
    },
    lan: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      showCopyButton: false,
    };
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.content);
      this.buttonText = "Copied";
    },
    showButton() {
      this.showCopyButton = true;
    },
    hideButton() {
      this.showCopyButton = false;
      this.buttonText = "Copy";
    },
    mounted() {
      hljs.highlightAll();
    },
  },
};
</script>

<style>
.window {
  position: relative;
  display: inline-block;
  width: fit-content;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.window-header {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.lights {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 10px;
}
.lights::before {
  content: " ";
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fd6458;
  box-shadow: 20px 0 0 #ffbf2b, 40px 0 0 #24cc3d;
}
.window-title {
  flex: 1;
  font-size: 14px;
  font-weight: bold;
}

.window-buttons {
  display: flex;
  align-items: center;
}
.window-button {
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  background-color: #007aff;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
}
.window-button:hover {
  background-color: #006ae6;
}

.window-content {
  padding: 10px;
  height: calc(100% - 40px);
  overflow-y: auto;
}
</style>
