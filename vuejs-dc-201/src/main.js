import Vue from 'vue'
import App from './App'
import Store from './model/Store'

Store.getData()

new Vue({
	el: '#app',
	render: h => h(App)
})
