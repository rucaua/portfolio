<template>
  <div id="chat" class="px-4 md:px-10">
    <div class="max-w-3xl mx-auto p-4 md:p-10 bg-dark-diagonal shadow-[0_0_60px_15px_rgba(0,0,0,0.3)] shadow-main-dark/50 rounded-md">
      <h2>Chat with My AI Assistant</h2>
      <div class="my-4 md:my-8 p-0 overflow-hidden">
        <div ref="chatContainer" class="p-0 md:p-4 flex flex-col gap-4 h-[300px] md:h-[400px] overflow-y-auto custom-scrollbar">
          <div
              v-for="(message, i) in displayMessages"
              :key="i"
              :class="[
                'p-2 md:p-3 rounded-lg max-w-[90%] md:max-w-[80%] bg-dark/50',
                message.role === 'assistant'
                  ? ' self-start'
                  : 'self-end'
              ]"
          >
            {{ message.content }}
          </div>
          <div v-if="loading" class="self-start p-2 md:p-3 bg-dark/50 rounded-md">
              <span class="loading-dots">
                Thinking<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
              </span>
          </div>
        </div>
        <div class="px-2 md:px-4 pt-4 md:pt-10 border-t-4 border-dark/50">
          <form @submit.prevent="sendMessage" class="flex gap-2">
            <textarea
                v-model="newMessage"
                placeholder="Type your message..."
                class="flex-1 border rounded-md p-2 text-dark resize-none focus:outline-none focus:ring-0 focus:border-main-dark"
                :rows="1"
                :disabled="loading"
                @keydown="handleKeyDown"
            />
            <button
                type="submit"
                class="bg-main-dark text-white px-1 md:px-4 py-2 rounded-md"
                :disabled="!newMessage.trim() || loading"
            >
              <font-awesome icon="paper-plane"/>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AIChat',
  data() {
    return {
      displayMessages: [
        {
          role: 'assistant',
          content: "Hi there! I'm the AI assistant. How can I help you learn more about my experience, skills, or projects today?"
        }
      ],
      newMessage: '',
      loading: false,
      threadId: null
    }
  },
  mounted() {
    this.threadId = localStorage.getItem('chat_thread_id');
    this.$nextTick(() => {
      this.scrollToBottom();
    });
  },
  methods: {
    handleKeyDown(event) {
      // If Enter is pressed without Shift, submit the form
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Prevent the default action (new line)
        if (this.newMessage.trim() && !this.loading) {
          this.sendMessage();
        }
      }
    },

    /**
     *
     * Sends a message to the AI assistant API, handles the response,
     * and updates the chat thread accordingly.
     * TODO implement streaming instead of waiting for the response to be ready
     */
    async sendMessage() {
      if (!this.newMessage.trim()) return;

      this.displayMessages.push({
        role: 'user',
        content: this.newMessage
      });

      await this.$nextTick(() => {
        this.scrollToBottom();
      });

      const userQuery = this.newMessage;
      this.newMessage = '';
      this.loading = true;

      try {
        const response = await fetch('/api/assistant', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            thread_id: this.threadId,
            message: userQuery
          })
        });

        if (!response.ok) {
          console.error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();

        this.threadId = data.thread_id;
        localStorage.setItem('chat_thread_id', this.threadId);

        if (data.messages && data.messages.length > 0) {
          const assistantMessages = data.messages.filter(msg => msg.role === 'assistant');
          if (assistantMessages.length > 0) {
            const lastMessage = assistantMessages[0];
            this.typeMessage(lastMessage.content[0]?.text?.value || "I couldn't generate a response.");
          }
        }

        await this.$nextTick(() => {
          this.scrollToBottom();
        });
      } catch (error) {
        this.displayMessages.push({
          role: 'assistant',
          content: "Sorry, I encountered an error. Please try again later."
        });
      } finally {
        this.loading = false;
      }
    },

    /**
     * Animates the assistant's response to appear as if it's being typed
     * TODO must be removed after switching to get stream from openAI
     * @param text
     */
    typeMessage(text) {
      const key = this.displayMessages.length;
      this.displayMessages.push({
        role: 'assistant',
        content: '',
      });

      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          this.displayMessages[key].content += text[currentIndex];
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 20);

    },

    scrollToBottom() {
      if (this.$refs.chatContainer) {
        this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
      }
    }
  }
}
</script>

<style scoped>
.loading-dots {
  display: inline-block;
}

.dot {
  animation: pulse 1.5s infinite;
  display: inline-block;
  opacity: 0;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.5s;
}

.dot:nth-child(3) {
  animation-delay: 1s;
}

@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>