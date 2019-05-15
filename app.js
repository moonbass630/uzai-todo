(function(){

	'use strict';

	var em = new Vue({

		el: '#app',
		data: {
			newTodo: '',
			aTodo: [{
				title: '入金する',
				isActive: false,
				isDone: false,
				isNoEdit: true
			},{
				title: 'カープをみにいく',
				isActive: false,
				isDone: false,
				isNoEdit: true
			},{
				title: '大きな声でこんにちはって言う',
				isActive: false,
				isDone: false,
				isNoEdit: true
			}],
			aFinishedTodo: []
		},
		methods: {
			done: function(index){
				this.aTodo[index].isDone = true;
				
				let oFinishedTodo = this.aTodo.filter(function(todo){
					return todo.isDone;
				});
				this.pushToFinished(oFinishedTodo);
				this.aTodo.splice(index, 1);
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
			}
		}

	});
})();