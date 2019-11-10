import _ from 'lodash'

export default class Book {
  private properties: any

  constructor (properties: { [key: string]: any }) {
    this.properties = properties
  }

  get id (): string {
    return _.get(this.properties, 'id')
  }

  get title (): string {
    return _.get(this.properties, 'title')
  }
}
