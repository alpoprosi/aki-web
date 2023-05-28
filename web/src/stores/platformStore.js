import { defineStore } from "pinia";
import axios from 'axios'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const imgs = [
  'https://design-zavod.ru/storage/app/media/banka/2023-03-13%2016.27.44.jpg',
  'https://design-zavod.ru/storage/app/media/banka/%206.jpg',
  'https://design-zavod.ru/storage/app/media/banka/1.jpg',
  'https://design-zavod.ru/storage/app/media/banka/%201.JPG.webp',
  'https://design-zavod.ru/storage/app/media/banka/2023-03-13%2016.27.44.jpg',
  'https://design-zavod.ru/storage/app/media/banka/%206.jpg',
  'https://design-zavod.ru/storage/app/media/banka/1.jpg',
  'https://design-zavod.ru/storage/app/media/banka/%201.JPG.webp',
  'https://design-zavod.ru/storage/app/media/banka/2023-03-13%2016.27.44.jpg',
  'https://design-zavod.ru/storage/app/media/banka/%206.jpg',
  'https://design-zavod.ru/storage/app/media/banka/1.jpg',
  'https://design-zavod.ru/storage/app/media/banka/%201.JPG.webp',
]

export const usePlatformStore = defineStore('user', {
  state: () => ({
    list: [],
    platform: {},
    total: 0,
    activeCategoryIndex: 0,
    categories: [
      { value: 'All', label: 'Все площадки' },
      { value: 'landlordType1', label: 'Киностудии' },
      { value: 'landlordType5', label: 'Дизайн студии' },
      { value: 'landlordType2', label: 'Галереи' },
      { value: 'landlordType3', label: 'Издательства' },
      { value: 'landlordType4', label: 'Книжные магазины' },
      { value: 'landlordType7', label: 'Кинотеатры' },
      { value: 'landlordType8', label: 'Звукозаписывающие студии' },
      { value: 'landlordType6', label: 'Креативные пространства' },
      { value: 'landlordType9', label: 'AR/VR студии' },
    ]
  }),
  actions: {
    getPlatforms(page = 1, itemsPerPage = 12) {
      // MOCK
      if (page === 1) {
        this.list = []
      }

      const isLastPage = this.total < this.list.length + itemsPerPage
      const limit = isLastPage ? this.total - ((page - 1) * itemsPerPage) : itemsPerPage

      for (let i = 0; i < limit; i++) {
        this.list.push(this.createPlatform(i))
      }
    },
    getPlatformById(id) {
      return this.list.find(item => item.id === id) || this.createPlatform(id)
    },
    createPlatform(id) {
      const randomIndex = Math.floor(Math.random() * (this.categories.length - 1)) + 1
      const type = this.categories[this.activeCategoryIndex || randomIndex]

      return {
        id,
        name: 'Flacon space - ' + id,
        type,
        logoImageUrl: 'https://placehold.jp/ffffff/ffffff/30x30.png',
        imageUrl: imgs[randomIndex],
        raiting: (getRandomInt(50) + 1) / 10,
        price: getRandomInt(10000),
        reserve: 'за 2 часа',
        location: 'ул. Большая Новодмитровская, 36',
        isFavorite: false
      }
    },
    getTotal() {
      this.total = getRandomInt(100)
    },
    setCategory(val = 0) {
      this.list = []
      this.activeCategoryIndex = val
      this.getTotal()
      this.getPlatforms(1)
    },
    async getDescription(id) {
      const url = `https://jsonplaceholder.org/posts/${id}`
      const res = await axios.get(url)
      if (res?.data) {
        return res.data
      }
    },
    toggleFavorite(id) {
      const platform = this.getPlatformById(id)
      platform.isFavorite = !platform.isFavorite
    }
  },
  getters: {

  }
})