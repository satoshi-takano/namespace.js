var namespace_lib_core="jp.co.imgsrc";var namespace_lib_app="jp.co.imgsrc.application";var namespace_lib_geom="jp.co.imgsrc.geom";var namespace_lib_events="jp.co.imgsrc.events";var namespace_lib_tween="jp.co.imgsrc.tween";var namespace_lib_net="jp.co.imgsrc.net";var namespace_lib_display="jp.co.imgsrc.display";var namespace_lib_ui="jp.co.imgsrc.ui";function trace(){for(var i=0;i<arguments.length;i++)if(window.console)console.log(arguments[i])}function warn(message){alert("Warning : "+message)};var FunctionPrototype=function(){var self=this;function getMethodName(method){var name=method.name;if(name==undefined){name=/function\s*(.*)\s*\(/mgi.exec(method)[1];if(name==null)return}return name}this.getMethodName=getMethodName;function wrap(key,method){var wrapper=method;wrapper.superMethod=self.substance.prototype[key];return wrapper}function parent(){return arguments.callee.caller.superMethod.apply(this,arguments)}this.gen=function(){var obj=new this;if(obj.initialize!=undefined)obj.initialize.apply(obj,
arguments);return obj};this.getInstance=function(){var instance=this.instance;if(!instance){instance=this.instance=new this;if(instance.initialize!=undefined)instance.initialize.apply(instance,arguments)}return this.instance};this.init=function(initialize){if(self.substance.prototype.$super)self.substance.prototype.$super["initialize"]=self.substance.prototype.$super.prototype.initialize;self.substance.prototype.initialize=wrap("initialize",initialize)};this.ex=function(obj){var proto=obj.gen();self.substance.superClass=
obj.prototype;self.substance.prototype=proto;self.substance.prototype.$super=obj;self.substance.prototype.parent=parent};this.def=function(method){var name=getMethodName(method);self.substance.prototype[name]=wrap(name,method)};this.defInObj=function(method){var name=getMethodName(method);this[name]=method}};FunctionPrototype=new FunctionPrototype;
var InternalNamespacePrototype=function(){this.nsName="";var self=this;this.use=function(func){self=this;var oldDef=window.proto;var oldSingleton=window.singleton;window.proto=this.proto;window.singleton=this.singleton;func.call(this);window.proto=oldDef;window.singleton=oldSingleton};this.proto=function(namedFunc){var tmpSelf=self;if(this instanceof Namespace)tmpSelf=this;var name=FunctionPrototype.getMethodName(namedFunc);if(tmpSelf[name]!=undefined)alert("Warning: "+tmpSelf.nsName+"'s "+name+" was overwritten.");
tmpSelf[name]=eval("(function "+name+" () {})");if(tmpSelf[name]==undefined)tmpSelf[name]=new Function;var proto=tmpSelf[name];proto.gen=FunctionPrototype.gen;proto.def=FunctionPrototype.defInObj;var old$=window.$;var old$$=window.$$;var oldInit=window.init;var oldEx=window.ex;var oldMeth=window.def;FunctionPrototype.substance=proto;window.$=namedFunc;window.$$=proto;window.init=namedFunc.init=FunctionPrototype.init;window.ex=namedFunc.ex=FunctionPrototype.ex;window.def=namedFunc.def=FunctionPrototype.def;
namedFunc.call(namedFunc);window.$=old$;window.$$=old$$;window.init=oldInit;window.ex=oldEx;window.def=oldMeth;proto.prototype.proto=proto};this.singleton=function(namedFunc){var tmpSelf=self;if(this instanceof Namespace)tmpSelf=this;var name=namedFunc.name;if(name==undefined){name=/function\s*(.*)\s*\(/mgi.exec(namedFunc)[1];if(name==null)return}if(tmpSelf[name]!=undefined)alert("Warning: "+tmpSelf.nsName+"'s "+name+" was overwritten.");tmpSelf[name]=eval("(function "+name+" () {})");if(tmpSelf[name]==
undefined)tmpSelf[name]=new Function;var proto=tmpSelf[name];proto.getInstance=FunctionPrototype.getInstance;proto.prototype.cls=proto;var oldSub=window[name];var oldInit=window.init;var oldEx=window.ex;var oldMeth=window.def;var oldClsVar=window.clsVar;var oldClsMeth=window.clsMethod;FunctionPrototype.substance=tmpSelf[name];window.init=namedFunc.init=FunctionPrototype.init;window.ex=namedFunc.ex=FunctionPrototype.ex;window.def=namedFunc.def=FunctionPrototype.def;window.clsVar=namedFunc.clsVar=FunctionPrototype.clsVar;
window.clsMethod=namedFunc.clsMethod=FunctionPrototype.clsMethod;var stack=window.$;window.$=namedFunc;namedFunc.call(namedFunc);window.$=stack;window[name]=oldSub;window.init=oldInit;window.ex=oldEx;window.def=oldMeth;window.clsVar=oldClsVar;window.clsMeth=window.clsMethod}};var internalNamespacePrototype=new InternalNamespacePrototype;
Namespace=function(str){var ns=str.split(".");var here=window;if(ns.length==1){if(here[str]!=undefined)return here[str];here[str]=this;this.nsName=str;return this}var name="";for(var i=0,l=ns.length,ll=l-1;i<l;i++){if(typeof here[ns[i]]=="undefined")here[ns[i]]=new Namespace(ns[i]);if(i>0)name+=".";name+=ns[i];here[ns[i]].nsName=name;here=here[ns[i]]}return here};Namespace.prototype=internalNamespacePrototype;
(new Namespace(namespace_lib_core)).use(function(){var ns=this;proto(function Performer(){init(function(target,callback,args){this.target=target;this.callback=callback;this.args=args});def(function perform(){this.callback.apply(this.target,arguments)})});proto(function Utilitie(){def(function listen(target,type,func){if(target.addEventListener)target.addEventListener(type,function(e){func.perform(e)},false);else if(target.attachEvent)target.attachEvent(type,function(e){func.perform(e)})});def(function unlisten(target,
type,func){if(target.removeEventListener)target.removeEventListener(type,func);else if(target.attachEvent)target.detachEvent(type,func)})});singleton(function Main(){init(function(){var util=ns.Utilitie.gen();var isIE=navigator.userAgent.toLowerCase().indexOf("msie")!=-1;util.listen(window,isIE?"onload":"load",ns.Performer.gen(this,function(){util.unlisten(window,isIE?"onload":"load",arguments.callee);if(this.runner)this.runner.call(window)}))});def(function main(runner){this.runner=runner})})});(new Namespace(namespace_lib_core)).use(function(){var ns=this;proto(function UserAgent(){init(function(){this.ua=navigator.userAgent.toLowerCase()});def(function isIE(){return this.ua.indexOf("msie")!=-1});def(function isIE6(){return this.ua.indexOf("msie 6")!=-1});def(function isIE7(){return this.ua.indexOf("msie 7")!=-1});def(function isIE8(){return this.ua.indexOf("msie 8")!=-1});def(function isFireFox(){return this.ua.indexOf("firefox")!=-1});def(function isSaferi(){return this.ua.indexOf("safari")==
-1||this.isChrome()?false:true});def(function isChrome(){return this.ua.indexOf("chrome")!=-1});def(function isOpera(){return this.ua.indexOf("chrome")!=-1});def(function isMobile(){return this.isiPhone()||this.isiPodTouch()||this.isAndroid()});def(function isiPhone(){return this.ua.indexOf("iphone")!=-1});def(function isiPad(){return this.ua.indexOf("ipad")!=-1});def(function isiPodTouch(){return this.ua.indexOf("ipod")!=-1});def(function isAndroid(){return this.ua.indexOf("android")!=-1})});proto(function Notification(){init(function(name,
userData){this.name=name;this.userData=userData});def(function getName(){return this.name});def(function getUserData(){return this.userData})});this.NotificationCenter={targets:{},addObserver:function(target,func,notifName){var obj={target:target,func:func};if(!this.targets.hasOwnProperty(notifName))this.targets[notifName]=[];var list=this.targets[notifName];var isAlreadyPushed=false;var l=list.length;for(var i=0;i<l;i++)if(target==list[i].target){isAlreadyPushed=true;break}if(!isAlreadyPushed)list.push(obj)},
removeObserver:function(target,notifName){var list=this.targets[notifName];var l=list.length;for(var i=0;i<l;i++)if(target==list[i].target){list.splice(i,1);return}},postNotification:function(notification){var list=this.targets[notification.name];if(list==null)return;var l=list.length;for(var i=0;i<l;i++){var obj=list[i];obj.func.call(obj.target,notification.object)}}};proto(function Timestamp(){init(function(){this.created=new Date});def(function toString(){var str="* Timestamp : "+this.stamp()+
" msec";return str});def(function stamp(){return(new Date).getTime()-this.created.getTime()})});proto(function Identifier(){init(function(){this.id=null;this.generate()});$$.IDs=[];def(function generate(){this.id=(new Date).getTime();while(!this.check())this.id=Math.round(this.id*Math.random());this.cls.IDs.push(this.id)});def(function check(){var numIDs=this.cls.IDs.length;var res=true;for(var i=0;i<numIDs;i++)if(this.cls.IDs[i]==this.id)res=false;return res})});proto(function Wait(){init(function(time,
callback){this.timer=setTimeout(function(){callback.call()},time);callback=callback});def(function cancel(){clearTimeout(this.timer)})});proto(function Range(){init(function(min,max){this.min=min;this.max=max});def(function contains(range){return this.min<=range.min&&range.max<=this.max});def(function remap(value,range){return range.min+range.length()*this.ratio(value)});def(function length(){return this.max-this.min});def(function ratio(val){return(val-this.min)/this.length()})})});(new Namespace(namespace_lib_events)).use(function(){var ns=this;var nsi=new Namespace(ns.nsName+".internal");var userAgent=(new Namespace(namespace_lib_core)).UserAgent.gen();nsi.proto(function EventTargetSet(listener){init(function(listener){this.listener=listener})});proto(function EventDispatcher(){init(function(target){this.observers={};this.target=target});def(function addEventListener(type,performer){var list=this.observers[type];var flg=false;if(list){var numTargets=list.length;for(var i=
0;i<numTargets;i++)if(list[i]==performer)flg=true;if(!flg)list.push(performer)}else{this.observers[type]=[];this.observers[type].push(performer)}return flg});def(function ae(type,performer){this.addEventListener(type,performer)});def(function removeEventListener(type,performer){var list=this.observers[type];var numTargets=list.length;for(var i=0;i<numTargets;i++)if(list[i]&&list[i].callback==performer.callback){list.splice(i,1);return}});def(function re(type,performer){this.removeEventListener(type,
performer)});def(function dispatchEvent(event){var list=this.observers[event.type];if(list){var numTargets=list.length;for(var i=0;i<numTargets;i++)list[i].perform()}})});proto(function DOMEvent(){var isIE=userAgent.isIE();if(isIE){$$.INIT="onload";$$.LOAD="onload"}else{$$.INIT="load";$$.LOAD="load"}});proto(function DOMMouseEvent(){var isIE=userAgent.isIE();if(isIE){$$.CLICK="onclick";$$.MOUSE_DOWN="onmousedown";$$.MOUSE_MOVE="onmousemove";$$.MOUSE_OUT="onmouseout";$$.MOUSE_OVER="onmouseover";$$.MOUSE_UP=
"onmouseup";$$.MOSUE_WHEEL="onmousewheel"}else{$$.CLICK="click";$$.MOUSE_DOWN="mousedown";$$.MOUSE_MOVE="mousemove";$$.MOUSE_OUT="mouseout";$$.MOUSE_OVER="mouseover";$$.MOUSE_UP="mouseup";$$.MOSUE_WHEEL="mousewheel"}});proto(function FLEvent(){init(function(type,caller,origin){this.type=type;this.origin=origin;this.currentTarget=caller});def(function preventDefault(){if(this.origin.preventDefault)this.origin.preventDefault();else this.origin.returnValue=false});def(function stopPropagation(){if(this.origin.stopPropagation)this.origin.stopPropagation();
else this.origin.cancelBubbles=true});$$.APP_LAUNCH="appLaunch";$$.COMPLETE="complete"});proto(function FLMouseEvent(){ex(ns.FLEvent);$$.DOUBLE_CLICK="doubleclick";$$.MOUSE_DOWN="mousedown";$$.MOUSE_MOVE="mousemove";$$.MOUSE_OUT="mouseout";$$.MOUSE_OVER="mouseover";$$.MOUSE_UP="mouseup";$$.MOUSE_WHEEL="mousewheel";$$.ROLL_OUT="rollout";$$.ROLL_OVER="rollover"})});(new Namespace(namespace_lib_geom)).use(function(){var ns=this;proto(function Point(){init(function(x,y){this.x=x;this.y=y});def(function add(p){return ns.Point.gen(this.x+p.x,this.y+p.y)});def(function clone(){return ns.Point.gen(this.x,this.y)});def(function distance(p1,p2){var dx=p1.x-p2.x;var dy=p1.y-p2.y;return Math.abs(Math.sqrt(dx*dx+dy*dy))});def(function equals(p){return this.x==p.x&&this.y==p.y});def(function offset(dx,dy){this.x+=dx;this.y+=dy});def(function subtract(p){return ns.Point.gen(this.x-
p.x,this.y-p.y)});def(function getLength(){return Math.sqrt(this.x*this.x+this.y*this.y)});$$.def(function interpolate(p1,p2,f){var dx=p2.x-p1.x;var dy=p2.y-p1.y;var tx=p1.x+dx*(1-f);var ty=p1.y+dy*(1-f);return ns.Point.gen(tx,ty)});$$.def(function polar(length,radian){return ns.Point.gen(length*Math.cos(radian),length*Math.sin(radian))})});proto(function Rectangle(){init(function(x,y,w,h){this.x=x;this.y=y;this.width=w;this.height=h});def(function clone(){return ns.Rectangle.gen(this.x,this.y,this.width,
this.height)});def(function contains(x,y){return this.x<x&&this.x+this.width>x&&this.y<y&&this.y+this.height>y});def(function containsPoint(){return this.contains(p.x,p.y)});def(function containsRect(rect){return this.contains(rect.x,rect.y)&&this.contains(rect.x+rect.width,rect.y+rect.height)});def(function equals(rect){return this.x==rect.x&&this.y==rect.y&&this.width==rect.width&&this.height==rect.height});def(function inflate(dx,dy){this.width+=dx;this.height+=dy});def(function inflatePoint(p){this.width+=
p.x;this.height+=p.y});def(function intersection(rect){var r=ns.Rectangle.gen(0,0,0,0);r.x=Math.max(this.x,rect.x);r.y=Math.max(this.y,rect.y);var w;if(this.getRight()<rect.getRight())w=this.getRight()-rect.x;else w=rect.getRight()-this.x;var h;if(this.getBottom()<rect.getBottom())h=this.getBottom()-rect.y;else h=rect.getBottom()-this.y;r.width=w;r.height=h;if(0<r.width&&0<r.height)return r;else return null});def(function intersect(rect){if(this.intersection)return true;else return false});def(function offset(dx,
dy){this.x+=dx;this.y+=dy});def(function offsetPoint(){this.x+=p.x;this.y+=p.y});def(function union(rect){var intersection=this.intersection(rect);var r=ns.Rectangle.gen(0,0,0,0);r.x=Math.min(this.x,rect.x);r.y=Math.min(this.y,rect.y);r.width=this.width+rect.width-intersection.width;r.height=this.height+rect.height-intersection.height;return r});def(function getBottom(){return this.y+this.height});def(function getBottomRight(){return ns.Point.gen(this.getRight(),this.getBottom())});def(function getRight(){return this.x+
this.width});def(function getSize(){return ns.Point.gen(this.width,this.height)});def(function getTopLeft(){return ns.Point.gen(this.x,this.y)})});proto(function Matrix(){init(function(a,b,c,d,tx,ty){this.a=a;this.b=b;this.c=c;this.d=d;this.tx=tx;this.ty=ty});def(function clone(){return ns.Matrix.gen(this.a,this.b,this.c,this.d,this.tx,this.ty)});def(function cancat(m){var a=this.a,b=this.b,c=this.c,d=this.d,tx=this.tx,ty=this.ty;this.a=a*m.a+c*m.b;this.c=a*m.c+c*m.d;this.tx=a*m.tx+c*m.ty+tx;this.b=
b*m.a+d*m.b;this.d=b*m.c+d*m.d;this.ty=b*m.tx+d*m.ty+ty});def(function detailTransformPoint(){var x=p.x,y=p.y;var retVal=ns.Point.gen(0,0);retVal.x=x*this.a+y*this.c;retVal.y=x*this.b+y*this.d;return retVal});def(function identity(){this.a=this.d=1;this.b=this.c=this.tx=this.ty=0});def(function rotate(radian){var rot=ns.Matrix.gen(0,0,0,0,0,0);var s=Math.sin(radian);var c=Math.cos(radian);rot.a=c;rot.b=s;rot.c=-s;rot.d=c;this.concat(rot)});def(function scale(scl){var s=ns.Matrix.gen(scl,0,0,scl,0,
0);this.concat(s)});def(function translate(dx,dy){this.tx+=dx;this.ty+=dy})})});(new Namespace(namespace_lib_app)).use(function(){var ns=this;singleton(function Application(){var nse=new Namespace(namespace_lib_events);ex(nse.EventDispatcher);init(function(){var self=this;this.mouseX=0;this.mouseY=0;this.userAgent=(new Namespace(namespace_lib_core)).UserAgent.gen();var nscore=new Namespace(namespace_lib_core);var util=nscore.Utilitie.gen();var isIE=this.userAgent.isIE();util.listen(document,isIE?"onmousemove":"mousemove",nscore.Performer.gen(this,function(mouseMove){if(!isIE){this.mouseX=
mouseMove.clientX;this.mouseY=mouseMove.clientY;if(document.body)this.mouseY+=document.body.scrollTop}else{this.mouseX=mouseMove.clientX;this.mouseY=mouseMove.clientY+document.documentElement.scrollTop}}))})})});(new Namespace(namespace_lib_tween)).use(function(){var ns=this;proto(function Interpolator(){init(function(to,from,step,easing){this.values=[];var t=0;var c=to-from;while(t++<step){var v=easing.calculate(t,from,c,step);this.values.push(v)}})});proto(function Animator(){init(function(delay){this.delay=delay;this.next=null});def(function tween(target,style,to,step,easing,delay){var self=this;this.delay+=delay||0;setTimeout(function(){var cnt=0;var styleValue=target[style];var from=parseInt(styleValue);
var interp=ns.Interpolator.gen(to,from,step,easing);var values=interp.values;step=step-1;var timerID=setInterval(function(){target[style]=values[cnt];if(self.upFunc)self.upFunc.call();if(cnt>=step){clearInterval(timerID);if(self.cbFunc)self.cbFunc.call()}if(target.rendering)target.rendering();cnt++},1E3/60)},this.delay);this.next=ns.Animator.gen(this.delay+1E3/60*step);return this})});this.Bounce=function(){};this.Bounce.easeIn=function(){var that={};that.calculate=function(t,b,c,d){if((t=(d-t)/d)<
1/2.75)return c-c*7.5625*t*t+b;if(t<2/2.75)return c-c*(7.5625*(t-=1.5/2.75)*t+0.75)+b;if(t<2.5/2.75)return c-c*(7.5625*(t-=2.25/2.75)*t+0.9375)+b;return c-c*(7.5625*(t-=2.625/2.75)*t+0.984375)+b};return that}();this.Bounce.easeOut=function(){var that={};that.calculate=function(t,b,c,d){if((t/=d)<1/2.75)return c*7.5625*t*t+b;else if(t<2/2.75)return c*(7.5625*(t-=1.5/2.75)*t+0.75)+b;else if(t<2.5/2.75)return c*(7.5625*(t-=2.25/2.75)*t+0.9375)+b;else return c*(7.5625*(t-=2.625/2.75)*t+0.984375)+b};return that}();
this.Bounce.easeInOut=function(){var that={};that.calculate=function(t,b,c,d){var s=1.70158;if((t/=d/2)<1)return c/2*t*t*(((s*=1.525)+1)*t-s)+b;return c/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+b};return that}();this.Circ=function(){};this.Circ.easeIn=function(){var that={};that.calculate=function(t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b};return that}();this.Circ.easeOut=function(){var that={};that.calculate=function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b};return that}();this.Circ.easeInOut=
function(){var that={};that.calculate=function(t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b};return that}();this.Cubic=function(){};this.Cubic.easeIn=function(){var that={};that.calculate=function(t,b,c,d){return c*(t/=d)*t*t+b};return that}();this.Cubic.easeOut=function(){var that={};that.calculate=function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b};return that}();this.Cubic.easeInOut=function(){var that={};that.calculate=function(t,b,c,d){return(t/=
d/2)<1?c/2*t*t*t+b:c/2*((t-=2)*t*t+2)+b};return that}();this.Elastic=function(){};this.Elastic.easeIn=function(){var that={};that.calculate=function(t,b,c,d){var a,p;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*0.3;if(!a||a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*2*Math.PI/p))+b};return that}();this.Elastic.easeOut=function(){var that={};that.calculate=function(t,b,c,d){var a,p;if(t==0)return b;if((t/=d)==1)return b+
c;if(!p)p=d*0.3;if(!a||a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*2*Math.PI/p)+c+b};return that}();this.Elastic.easeInOut=function(){var that={};that.calculate=function(t,b,c,d){var a,p;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*0.3*1.5;if(!a||a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-0.5*a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*2*Math.PI/p)+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*
d-s)*2*Math.PI/p)*0.5+c+b};return that}();this.Expo=function(){};this.Expo.easeIn=function(){var that={};that.calculate=function(t,b,c,d){return t==0?b:c*Math.pow(2,10*(t/d-1))+b};return that}();this.Expo.easeOut=function(){var that={};that.calculate=function(t,b,c,d){return t==d?b+c:c*(-Math.pow(2,-10*t/d)+1)+b};return that}();this.Expo.easeInOut=function(){var that={};that.calculate=function(t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*
(-Math.pow(2,-10*--t)+2)+b};return that}();this.Quad=function(){};this.Quad.easeIn=function(){var that={};that.calculate=function(t,b,c,d){return c*(t/=d)*t+b};return that}();this.Quad.easeOut=function(){var that={};that.calculate=function(t,b,c,d){return-c*(t/=d)*(t-2)+b};return that}();this.Quad.easeInOut=function(){var that={};that.calculate=function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*(--t*(t-2)-1)+b};return that}();this.Quart=function(){};this.Quart.easeIn=function(){var that=
{};that.calculate=function(t,b,c,d){return c*Math.pow(t/d,4)+b};return that}();this.Quart.easeOut=function(){var that={};that.calculate=function(t,b,c,d){return-c*(Math.pow(t/d-1,4)-1)+b};return that}();this.Quart.easeInOut=function(){var that={};that.calculate=function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b};return that}();this.Quintic=function(){};this.Quintic.easeIn=function(){var that={};that.calculate=function(t,b,c,d){return c*Math.pow(t/d,5)+b};return that}();
this.Quintic.easeOut=function(){var that={};that.calculate=function(t,b,c,d){return c*(Math.pow(t/d-1,5)+1)+b};return that}();this.Quintic.easeInOut=function(){var that={};that.calculate=function(t,b,c,d){if((t/=d/2)<1)return c/2*Math.pow(t,5)+b;return c/2*(Math.pow(t-2,5)+2)+b};return that}();this.Sine=function(){};this.Sine.easeIn=function(){var that={};that.calculate=function(t,b,c,d){return c*(1-Math.cos(t/d*(Math.PI/2)))+b};return that}();this.Sine.easeOut=function(){var that={};that.calculate=
function(t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b};return that}();this.Sine.easeInOut=function(){var that={};that.calculate=function(t,b,c,d){return c/2*(1-Math.cos(Math.PI*t/d))+b};return that}()});(new Namespace(namespace_lib_net)).use(function(){var ns=this;proto(function URL(){init(function(url){this.url=url;this.scheme=this.port=this.user=this.pass=this.path=this.query=this.fragment="";this.generate()});def(function generate(){var r=this.reg.exec(this.url);if(r){var value="";for(var f in this.fields){value=r[this.fields[f]];if(value)this[f]=value}}});$$.reg=/^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?([^#]*)/;$$.fields={"scheme":2,"host":6,"port":7,"user":4,
"pass":5,"path":8,"query":9,"fragment":10}});proto(function URLRequest(){init(function(urlString){this.url=urlString;this.httpMethod="GET";this.httpHeader={};this.httpBody=null;this.httpHeader.contentType="application/x-www-form-urlencoded;charset=UTF-8"})});proto(function URLLoader(){var nse=new Namespace(namespace_lib_events);ex(nse.EventDispatcher);init(function(){this.currentXHR=null;this.data=null;var self=this;this.readyStateCallback=function(e){if(self.currentXHR.readyState==ns.URLLoader.DONE){self.data=
self.currentXHR.responseText;self.dispatchEvent(nse.FLEvent.gen(nse.FLEvent.COMPLETE,self,e||null))}}});def(function load(req){var xhr=this.currentXHR=this.generateXHR();xhr.onreadystatechange=this.readyStateCallback;xhr.open(req.httpMethod,req.url,true,null);xhr.setRequestHeader("Content-type",req.httpHeader.contentType);xhr.send(req.httpBody)});def(function generateXHR(){var xhr;if(window.XMLHttpRequest!=undefined)xhr=new XMLHttpRequest;else if(window.ActiveXObject)xhr=new ActiveXObject("Microsoft.XMLHTTP");
return xhr});$$.UNSET=0;$$.OPENED=1;$$.HEADERS_RECEIVED=2;$$.LOADING=3;$$.DONE=4})});(new Namespace(namespace_lib_display)).use(function(){var ns=this;var nsc=new Namespace(namespace_lib_core);var nse=new Namespace(namespace_lib_events);var nsg=new Namespace(namespace_lib_geom);var app=(new Namespace(namespace_lib_app)).Application.getInstance();proto(function DisplayObject(){ex(nse.EventDispatcher);init(function(domElement){this.domElement=domElement;this.parent=null;this.alpha=1});def(function getX(){return this.domElement.style.left.replace("px","")||0});def(function setX(val){this.domElement.style.marginLeft=
val+"px"});def(function getY(){return this.domElement.style.top.replace("px","")||0});def(function setY(val){this.domElement.style.top=val+"px"});def(function getWidth(){return this.domElement.offsetWidth});def(function setWidth(val){this.domElement.style.width=val+"px"});def(function getHeight(){return this.domElement.offsetHeight});def(function setHeight(val){this.domElement.style.height=val+"px"});def(function getMouseX(){return app.mouseX-this.getGlobalX()});def(function getMouseY(){return app.mouseX.mouseY-
this.getGlobalY()});def(function getGlobalX(){var tmpX=0;tmpX=this.domElement.offsetLeft;var pa=this.domElement.offsetParent;while(pa){tmpX+=pa.offsetLeft;pa=pa.offsetParent}return tmpX});def(function getGlobalY(){var tmpY=0;tmpY=this.domElement.offsetTop;var pa=this.domElement.offsetParent;while(pa){tmpY+=pa.offsetTop;pa=pa.offsetParent}return tmpY});def(function getBounds(targetCoordinateSpace){var targetXAtGlobal=targetCoordinateSpace.getGlobalX();var targetYAtGlobal=targetCoordinateSpace.getGlobalY();
var thisXAtGlobal=this.getGlobalX();var thisYAtGlobal=this.getGlobalY();return nsg.Rectangle.gen(thisXAtGlobal-targetXAtGlobal,thisYAtGlobal-targetXAtGlobal)});def(function getRect(targetCoordinateSpace){return this.getBounds(targetCoordinateSpace)});def(function globalToLocal(globalP){return new nsg.Point(this.x+globalP.x,this.y+globalP.y)});def(function paint(){var style=this.domElement.style;var ua=app.userAgent;if(ua.isIE())style.filter="alpha(opacity="+this.alpha*100+")";else style.opacity=this.alpha.toString()});
def(function rendering(){this.paint()});def(function removeFromSuperview(){this.domElement.parentNode.removeChild(this.de)})});proto(function InteractiveObject(){ex(ns.DisplayObject);init(function(domElement){this.domElement=domElement;this.setEvents()});def(function getUseHandCursor(){return this.domElement.style.cursor=="pointer"});def(function setUseHandCursor(val){if(val)this.domElement.style.cursor="pointer";else this.domElement.style.cursor="default"});def(function setEvents(){var self=this;
var g=nsc.Utilitie.gen();var isOvered=false;g.listen(this.domElement,nse.DOMMouseEvent.MOUSE_OVER,function(evt){if(isOvered==false){isOvered=true;self.dispatchEvent(new nse.FLMouseEvent(nse.FLMouseEvent.ROLL_OVER,self))}});g.listen(this.domElement,nse.DOMMouseEvent.MOUSE_OUT,function(evt){if(isOvered){var rect=new geom.Rectangle(self.getGlobalX(),self.getGlobalY(),self.getWidth(),self.getHeight());if(isOvered){isOvered=false;self.dispatchEvent(new nse.FLMouseEvent(nse.FLMouseEvent.ROLL_OUT,self,evt))}}});
g.listen(this.domElement,nse.DOMMouseEvent.MOUSE_OVER,function(evt){var mOver=new nse.FLMouseEvent(nse.FLMouseEvent.MOUSE_OVER,self,evt);mOver.target=evt.target||evt.srcElement;self.dispatchEvent(mOver)});g.listen(this.domElement,nse.DOMMouseEvent.MOUSE_OUT,function(evt){var mOut=new nse.FLMouseEvent(nse.FLMouseEvent.MOUSE_OUT,self,evt);mOut.target=evt.target||evt.srcElement;self.dispatchEvent(mOut)});g.listen(this.domElement,nse.DOMMouseEvent.CLICK,function(evt){var click=new nse.FLMouseEvent(nse.FLMouseEvent.CLICK,
self,evt);click.target=evt.target||evt.srcElement;self.dispatchEvent(click)});g.listen(this.domElement,nse.DOMMouseEvent.MOUSE_DOWN,function(evt){var down=new nse.FLMouseEvent(nse.FLMouseEvent.MOUSE_DOWN,self,evt);down.target=evt.target||evt.srcElement;self.dispatchEvent(down)});g.listen(this.domElement,nse.DOMMouseEvent.MOUSE_UP,function(evt){var up=new nse.FLMouseEvent(nse.FLMouseEvent.MOUSE_UP,self,evt);up.target=evt.target||evt.srcElement;self.dispatchEvent(up)})})})});(new Namespace(namespace_lib_ui)).use(function(){var ns=this;var nsd=new Namespace(namespace_lib_display);proto(function Label(){ex(nsd.DisplayObject);init(function(textElement){ns.Label.superClass.initialize.call(this,textElement);this.hasInnerHTML=true;if(textElement.innerHTML==undefined)this.hasInnerHTML=false;this.text;if(this.hasInnerHTML)this.text=textElement.innerHTML;else this.text=textElement.textContent});def(function rendering(){var box=document.createElement("div");box.style.position=
"absolute";var clone=this.domElement.cloneNode(true);box.appendChild(clone);document.body.appendChild(box);var t=this.text;clone.style.fontSize=this.domElement.style.fontSize;this.setCloneText(t,clone);box.style.width=this.targetWidth+"px";while(box.offsetHeight>this.targetHeight){if(t.length==3){this.setCloneText(t.substring(0,1),clone);return}t=t.substr(0,t.length-2)+"\u2026";this.setCloneText(t,clone)}box.style.width="";while(box.offsetWidth>this.targetWidth){if(t.length==4){this.setCloneText(t.substring(0,
1),clone);return}t=t.substr(0,t.length-4)+"...";this.setCloneText(t,clone)}document.body.removeChild(box);this.setText(t)});def(function setText(val){if(this.hasInnerHTML)this.domElement.innerHTML=val;else this.domElement.textContent=val});def(function setCloneText(val,clone){if(clone.innerHTML==undefined)clone.textContent=val;else clone.innerHTML=val});def(function getText(){if(this.hasInnerHTML)return this.domElement.innerHTML;else return this.domElement.textContent});def(function setWidth(val){this.targetWidth=
val});def(function setHeight(val){this.targetHeight=val})})});Number.prototype.times=function(closure){for(var i=0;i<this;i++)closure.call(this,i)};Number.prototype.upto=function(max,closure){for(var i=this+0;i<=max;i++)closure.call(this,i)};Number.prototype.downto=function(min,closure){for(var i=this+0;min<=i;i--)closure.call(this,i)};Number.prototype.step=function(limit,step,closure){for(var i=this+0;i<=limit;i+=step)closure.call(this,i)};Array.prototype.each=function(closure){for(var i=0,l=this.length;i<l;i++)closure.call(this,this[i])};