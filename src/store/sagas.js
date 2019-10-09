import getNews from '../pages/NewsList/saga'

export default function* AppSagas() {
    yield [
        getNews()
    ]
}
