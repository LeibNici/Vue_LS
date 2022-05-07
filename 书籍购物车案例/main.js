const app = new Vue({
    el: '#app',
    data: {
        books: [{
            id: 1,
            name: '算法导论',
            date: '2006-9',
            price: 85.00,
            count: 1
        }, {
            id: 2,
            name: '算法导论1',
            date: '2006-9',
            price: 85.00,
            count: 1
        }, {
            id: 3,
            name: '算法导论2',
            date: '2006-9',
            price: 85.00,
            count: 1
        }
        ]
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    },
    methods: {
        removeHandler(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            return this.books.reduce(function (preVlue, book) {
                return preVlue + book.count * book.price
            }, 0)
        }
    }
})