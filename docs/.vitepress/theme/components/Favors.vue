<style>
    .container {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .gallery-container {
      background: rgba(255, 255, 255, 0.92);
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(10px);
    }
    
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 20px;
      transition: all 0.5s ease;
    }
    
    .gallery-item {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      aspect-ratio: 1/1;
      background: #f8f9fa;
    }
    
    .gallery-item:hover {
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
    }
    
    .gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: all 0.4s ease;
    }
    
    .gallery-info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
      color: white;
      padding: 20px 15px 15px;
      transform: translateY(40px);
      opacity: 0;
      transition: all 0.3s ease;
    }
    
    .gallery-title {
      font-size: 1.1rem;
      margin-bottom: 5px;
      font-weight: 600;
    }
    
    .gallery-desc {
      font-size: 0.85rem;
      opacity: 0.8;
    }
    
    /* 悬停时的效果 */
    .gallery-item.active {
      grid-column: span 2;
      grid-row: span 2;
      z-index: 10;
      transform: scale(1.05);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
    
    .gallery-item.active .gallery-img {
      filter: brightness(0.9);
    }
    
    .gallery-item.active .gallery-info {
      transform: translateY(0);
      opacity: 1;
    }
    
    .gallery-item.active .gallery-desc {
      display: block;
    }
   
    
    
    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 15px;
      }
      
      h1 {
        font-size: 2rem;
      }
      
    }
  </style>
<template>
    <div class="container">
      <div class="gallery-container">
        <div class="gallery-grid">
          <div 
            v-for="(image, index) in images" 
            :key="image.id"
            class="gallery-item"
            :class="{ active: activeIndex === index }"
            @mouseenter="setActive(index)"
            @mouseleave="clearActive"
          >
            <img :src="image.src" :alt="image.title" class="gallery-img">
            <div class="gallery-info">
              <h3 class="gallery-title">{{ image.title }}</h3>
              <p class="gallery-desc">{{ image.description }}</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
  <script setup>
  import {ref} from 'vue';
        const activeIndex = ref(null)
        
        const images = ref([
          {
            id: 1,
            src: '/asuka.png',
            title: '明日香',
            description: '《新世纪福音战士》'
          },
          {
            id: 2,
            src: '/lm.png',
            title: '博丽灵梦',
            description: '《东方Project》'
          },
          {
            id: 3,
            src: '/liang.png',
            title: '山田凉',
            description: '《孤独摇滚》'
          },
          {
            id: 4,
            src: '/rei.png',
            title: '绫波丽',
            description: '《新世纪福音战士》'
          },
          {
            id: 5,
            src: '/topa.png',
            title: '托帕',
            description: '《崩坏：星穹铁道》'
          },
          {
            id: 6,
            src: '/lys.png',
            title: '磷叶石',
            description: '《宝石之国》'
          },
          {
            id: 7,
            src: '/loxy.png',
            title: '洛琪希',
            description: '《无职转生》'
          },
          {
            id: 8,
            src: '/altly.png',
            title: '阿尔托莉雅',
            description: '《Fate》'
          },
          {
            id: 9,
            src: '/qn.png',
            title: '曲娘',
            description: '《重返未来1999》'
          },
          {
            id: 10,
            src: '/vertin.png',
            title: '维尔汀',
            description: '《重返未来1999》'
          },
          {
            id: 11,
            src: '/qzay.png',
            title: '千早爱音',
            description: '《BanG Dream!》'
          },
          {
            id: 12,
            src: '/kll.png',
            title: '克鲁鲁',
            description: '《终结的炽天使》'
          },
          {
            id: 13,
            src: '/fnn.png',
            title: '芙宁娜',
            description: '《原神》'
          },
        ])
        
        // 设置激活的图片
        const setActive = (index) => {
          activeIndex.value = index
        }
        
        // 清除激活状态
        const clearActive = () => {
          activeIndex.value = null
        }
        
  </script>