<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <v-card>
        <v-card-title class="headline">
          サンプルプログラム
        </v-card-title>
        <table class="table">
          <tr>
            <th>ID</th>
            <th>タイトル</th>
          </tr>
          <tr v-for="book in books" :key="book.id">
            <td>{{ book.id }}</td>
            <td>{{ book.title }}</td>
            <td>
              <v-btn
                @click.prevent="deleteBook(book)"
              >
                削除する
              </v-btn>
            </td>
          </tr>
        </table>
        <v-card-actions>
          <v-text-field v-model="title" placeholder="タイトル" />
          <v-spacer />
          <v-btn color="primary" @click.prevent="createBook()">
            登録
          </v-btn>
        </v-card-actions>
        <p v-if="error">
          {{ error }}
        </p>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Book from '~/domain/Book/Book'

@Component({
  async asyncData ({ app }) {
    const books = await app.$bookRepository.listBooks()

    return {
      books
    }
  }
})
export default class extends Vue {
  private books: Book[] = []

  private title = ''
  private error = ''

  async createBook () {
    try {
      await this.$bookRepository.createBook(this.title)

      this.books = await this.$bookRepository.listBooks()
      this.title = ''
    } catch (e) {
      this.error = e
    }
  }

  async deleteBook (book: Book) {
    try {
      await this.$bookRepository.deleteBook(book)

      this.books = await this.$bookRepository.listBooks()
    } catch (e) {
      this.error = e
    }
  }
}
</script>
