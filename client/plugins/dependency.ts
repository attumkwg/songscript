import BookRepository from '~/domain/Book/BookRepository'

export default (context: any, inject: any) => {
  const bookRepository: BookRepository = new BookRepository(context.$axios)

  inject('bookRepository', bookRepository)
}
