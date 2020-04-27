(function(){
	'use strict';

	var em = new Vue({
		el: '#app',
		vuetify: new Vuetify(),
		data: {
			newTodo: '',
			aTodo: [{
				title: '入金する',
				expiration: '2020-04-20', 
				isActive: false,
				isDone: false,
				isNoEdit: true
			},{
				title: 'カープをみにいく',
				expiration: '2020-04-20', 
				isActive: false,
				isDone: false,
				isNoEdit: true
			},{
				title: '大きな声でこんにちはって言う',
				expiration: '2020-04-20', 
				isActive: false,
				isDone: false,
				isNoEdit: true
			}],
			aFinishedTodo: [],
			sheet: false,
			overlay: false
		},
		methods: {
			done: function(index){
				this.aTodo[index].isDone = true;
				
				let oFinishedTodo = this.aTodo.filter(function(todo){
					return todo.isDone;
				});
				this.pushToFinished(oFinishedTodo);
				this.aTodo.splice(index, 1);

				if(this.aTodo.length == false){
					this.overlay = true;
				}

			},
			pushToFinished: function (oFinishedTodo){
				this.aFinishedTodo.push(oFinishedTodo);
			},
			toggleActive: function(index){
				this.aTodo[index].isActive = !this.aTodo[index].isActive;
			},
			toggleEdit: function(index){
				this.aTodo[index].isNoEdit = !this.aTodo[index].isNoEdit;
			},
			deleteTodo: function(index){
				this.aTodo.splice(index, 1);
			},
			addTodo: function(){
				let todo = {
					title: this.newTodo,
					isActive: false,
					isDone: false,
					isNoEdit: true
				}

				this.aTodo.push(todo);
				this.newTodo = '';
			},
			nextTodo: function(){
				this.overlay = false;
				this.sheet = true;
			}
		}

	});
})();


