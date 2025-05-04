<template>
  <div>
    <button class="btn btn-primary" @click="openModal">登入</button>

    <!-- Modal -->
    <div class="modal fade" ref="modalRef" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">登入</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <input type="text" class="form-control mb-2" placeholder="帳號" v-model="username" />
            <input type="password" class="form-control" placeholder="密碼" v-model="password" />
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="closeModal">取消</button>
            <button class="btn btn-primary" @click="login">登入</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="LoginBtn">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { Modal } from 'bootstrap'
  import { useApiStore } from '../stores/apiStore'

  const modalRef = ref(null)
  let modalInstance = null
  const username = ref('')
  const password = ref('')
  const apiStore = useApiStore()

  // Modal 初始化
  onMounted(() => {
    modalInstance = new Modal(modalRef.value, {
      backdrop: 'static',
      keyboard: false
    })
    // 監聽鍵盤事件：按下 Enter 鍵觸發登入
    window.addEventListener('keydown', handleKeyDown)
  })

  onBeforeUnmount(() => {
    // 移除鍵盤事件監聽
    window.removeEventListener('keydown', handleKeyDown)
  })

  // 處理鍵盤按下事件
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      login()
    }
  }

  // 登入邏輯
  function login() {
    apiStore.loginApi('https://ec-course-api.hexschool.io/v2/admin/signin', {
      username: username.value,
      password: password.value
    }).then(() => {
      if (!apiStore.error) {
        closeModal()
      }
    })
  }

  // --------------------------- Modal 開關
  function openModal() {
    modalInstance?.show()
  }

  function closeModal() {
    modalInstance?.hide()
  }
</script>

<style scoped>
</style>
