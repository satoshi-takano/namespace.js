/* =====================================================
Copyright (c) 2012 Satoshi Takano (ikke.co)

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
===================================================== */

new Namespace(namespace_lib_core).use(function() {
	var ns = this;
	
	/** 
	 * creating a Notification
	 * @class Cocoa の NSNotification みたいな役目
	 * @param {String} name 通知名
	 * @param {Object} userData 引き回す用の Object
	 */
	 proto(function Notification() {
	 	init(function(name, userData) {
	 		this.name = name;
	 		this.userData = userData;
	 	});
	 	
	 	def(function getName() {
	 		return this.name;
	 	});
	 	
	 	def(function getUserData() {
	 		return this.userData;
	 	})
	 });
	 
	 
	 /** 
	 * accessing a NotificationCenter object
	 * @class Cocoa の NSNotificationCenter みたいな役目
	 */
	 this.NotificationCenter = {
		targets:{},
		addObserver: function(target, func, notifName) {
			var obj = {target:target, func:func};
			if (!this.targets.hasOwnProperty(notifName))
				this.targets[notifName] = [];
			var list = this.targets[notifName];
			var isAlreadyPushed = false;
			var l = list.length;
			for (var i = 0; i < l; i++)
			{
				if (target == list[i].target)
				{
					isAlreadyPushed = true;
					break;
				}
			}
			if (!isAlreadyPushed)
				list.push(obj);
		},
		removeObserver: function(target, notifName) {
			var list = this.targets[notifName];
			var l = list.length;
			for (var i = 0; i < l; i++) {
				if (target == list[i].target) {
					list.splice(i, 1);
					return;
				}
			}
		},
		postNotification: function(notification) {
			var list = this.targets[notification.name];
			
			if (list == null)
				return;
			var l = list.length;
			for (var i = 0; i < l; i++)
			{
				var obj = list[i];
				obj.func.call(obj.target, notification.object);
			}
		}
	};
	 
	 /** 
	 * creating a Timestamp
	 * @class new された時刻を保持し、そこからの経過時間を出力します
	 */
	 proto(function Timestamp() {
	 	init(function() {
	 		this.created = new Date();
	 	});
	 	
	 	def(function toString() {
	 		var str = "* Timestamp : " + this.stamp() + " msec";
			return str;
	 	});
	 	
	 	def(function stamp() {
	 		return (new Date().getTime() - this.created.getTime());
	 	});
	 });
	 
	 
	 /** 
	 * creating a Identifier
	 * @class ユニークな識別子
	 */
	 proto(function Identifier() {
	 	init(function() {
	 		this.id = null;
	 		this.generate();
	 	});
	 	
		$$.IDs = [];
	 	
	 	def(function generate() {
	 		this.id = (new Date()).getTime();
			while (!this.check())
				this.id = Math.round(this.id * Math.random());
			this.cls.IDs.push(this.id);
	 	});
	 	
	 	def(function check() {
	 		var numIDs = this.cls.IDs.length;
			var res = true;
			for (var i = 0; i < numIDs; i++) {
				if (this.cls.IDs[i] == this.id)
					res = false;
			}
			return res;
	 	});
	 });
	 
	 
	 /** 
	 * creating a Wait
	 * @class 指定時間経過後に指定された関数を実行します
	 */
	 proto(function Wait() {
	 	init(function(time, callback) {
	 		this.timer = setTimeout(function(){
	 			callback.call();
	 		}, time);
	 		callback = callback;
	 	});
	 	
	 	def(function cancel() {
	 		clearTimeout(this.timer);
	 	});
	 });
	
	proto(function Range() {
		init(function(min, max) {
			this.min = min;
			this.max = max;
		});
		
		def(function contains(range) {
			return (this.min <= range.min && range.max <= this.max);
		});
		
		def(function remap(value, range) {
			return range.min + (range.length()) * this.ratio(value);
		})
		
		def(function length() {
			return this.max - this.min;
		})
		
		def(function ratio (val) {
			return (val - this.min) / this.length();
		})
		
	});
	
	/**
	* @archetype Operation
	* 
	**/
	proto(function Operation() {
		// To initialize when the Operation.gen(params) called.
		init(function(scope, func, args) {
			this.scope = scope;
			this.func = func;
			this.args = args;
		})
		
		// execute {replace the description here}.
		def(function execute() {
			this.func.apply(this.scope, this.args);
		})
		
	})
	
	/**
	* @archetype OperationQueue
	* 
	**/
	proto(function OperationQueue() {
		// To initialize when the OperationQueue.gen(params) called.
		init(function() {
			this.operations = [];
		})
		
		// push {replace the description here}.
		def(function push(op) {
			this.operations.push(op);
		})
		
		// pop {replace the description here}.
		def(function pop() {
			return this.operations.pop();
		})
		
		// execute {replace the description here}.
		def(function execute() {
			this.operations.each(function (op) {
				op.execute();
			})
		})
	})
	
	/**
	* @archetype System
	* 
	**/
	singleton(function System() {
		// To initialize when the System.gen(params) called.
		init(function(args) {
			
		})
		
		$$.FPS = 30;
	})
	
	
	/**
	* @archetype OperationRecorder
	* 
	**/
	proto(function Recordable() {
		// To initialize when the OperationRecorder.gen(params) called.
		init(function() {
			this.opq = ns.OperationQueue.gen();
		})
		
		// rec {replace the description here}.
		def(function rec(op) {
			if (!op) {
				var caller = arguments.callee.caller;
				op = ns.Operation.gen(this, caller, caller.arguments);
			}
			this.opq.push(op);
		})
		
		// playback {replace the description here}.
		def(function playback() {
			this.opq.execute();
		})
		
		// clear {replace the description here}.
		def(function clear() {
			this.opq = null;
		})
	})
	
});