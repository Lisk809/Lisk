<script setup lang="ts">
import Date from './Date.vue'
import { data as posts } from './posts.data.js'
import { Calendar } from '@element-plus/icons-vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="divide-y divide-gray-200 dark:divide-slate-200/5">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        {{ frontmatter.title }}
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-white">
        {{ frontmatter.subtext }}
      </p>
    </div>
    <div v-for="post in posts">
      <el-card style="max-width: 480px">
        <template #header>
          <div class="card-header">
            <span>{{ post.title }}</span>
          </div>
          <el-badge v-for="tag in post.tags">
            {{ tag }}
          </el-badge>
        </template>
        <p>{{ post.content }}</p>
        <template #footer
          ><el-icon><Calendar /></el-icon>
          <p>{{ post.date.string }}</p></template
        >
      </el-card>
    </div>
  </div>
</template>
