// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t18986 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18986 = (function (f,fn_handler,meta18987){
this.f = f;
this.fn_handler = fn_handler;
this.meta18987 = meta18987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18986.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t18986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t18986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18988){
var self__ = this;
var _18988__$1 = this;
return self__.meta18987;
});

cljs.core.async.t18986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18988,meta18987__$1){
var self__ = this;
var _18988__$1 = this;
return (new cljs.core.async.t18986(self__.f,self__.fn_handler,meta18987__$1));
});

cljs.core.async.t18986.cljs$lang$type = true;

cljs.core.async.t18986.cljs$lang$ctorStr = "cljs.core.async/t18986";

cljs.core.async.t18986.cljs$lang$ctorPrWriter = (function (this__9673__auto__,writer__9674__auto__,opt__9675__auto__){
return cljs.core._write.call(null,writer__9674__auto__,"cljs.core.async/t18986");
});

cljs.core.async.__GT_t18986 = (function __GT_t18986(f__$1,fn_handler__$1,meta18987){
return (new cljs.core.async.t18986(f__$1,fn_handler__$1,meta18987));
});

}

return (new cljs.core.async.t18986(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),15,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mariano/src/notas/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__18990 = buff;
if(G__18990){
var bit__9767__auto__ = null;
if(cljs.core.truth_((function (){var or__9086__auto__ = bit__9767__auto__;
if(cljs.core.truth_(or__9086__auto__)){
return or__9086__auto__;
} else {
return G__18990.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__18990.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18990);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18990);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18991 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18991);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18991,ret){
return (function (){
return fn1.call(null,val_18991);
});})(val_18991,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__9973__auto___18992 = n;
var x_18993 = (0);
while(true){
if((x_18993 < n__9973__auto___18992)){
(a[x_18993] = (0));

var G__18994 = (x_18993 + (1));
x_18993 = G__18994;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__18995 = (i + (1));
i = G__18995;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t18999 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18999 = (function (flag,alt_flag,meta19000){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19000 = meta19000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18999.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t18999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t18999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19001){
var self__ = this;
var _19001__$1 = this;
return self__.meta19000;
});})(flag))
;

cljs.core.async.t18999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19001,meta19000__$1){
var self__ = this;
var _19001__$1 = this;
return (new cljs.core.async.t18999(self__.flag,self__.alt_flag,meta19000__$1));
});})(flag))
;

cljs.core.async.t18999.cljs$lang$type = true;

cljs.core.async.t18999.cljs$lang$ctorStr = "cljs.core.async/t18999";

cljs.core.async.t18999.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9673__auto__,writer__9674__auto__,opt__9675__auto__){
return cljs.core._write.call(null,writer__9674__auto__,"cljs.core.async/t18999");
});})(flag))
;

cljs.core.async.__GT_t18999 = ((function (flag){
return (function __GT_t18999(flag__$1,alt_flag__$1,meta19000){
return (new cljs.core.async.t18999(flag__$1,alt_flag__$1,meta19000));
});})(flag))
;

}

return (new cljs.core.async.t18999(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),135,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),130,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mariano/src/notas/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t19005 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19005 = (function (cb,flag,alt_handler,meta19006){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19006 = meta19006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19005.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19007){
var self__ = this;
var _19007__$1 = this;
return self__.meta19006;
});

cljs.core.async.t19005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19007,meta19006__$1){
var self__ = this;
var _19007__$1 = this;
return (new cljs.core.async.t19005(self__.cb,self__.flag,self__.alt_handler,meta19006__$1));
});

cljs.core.async.t19005.cljs$lang$type = true;

cljs.core.async.t19005.cljs$lang$ctorStr = "cljs.core.async/t19005";

cljs.core.async.t19005.cljs$lang$ctorPrWriter = (function (this__9673__auto__,writer__9674__auto__,opt__9675__auto__){
return cljs.core._write.call(null,writer__9674__auto__,"cljs.core.async/t19005");
});

cljs.core.async.__GT_t19005 = (function __GT_t19005(cb__$1,flag__$1,alt_handler__$1,meta19006){
return (new cljs.core.async.t19005(cb__$1,flag__$1,alt_handler__$1,meta19006));
});

}

return (new cljs.core.async.t19005(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),143,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),138,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mariano/src/notas/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19008_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19008_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19009_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19009_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9086__auto__ = wport;
if(cljs.core.truth_(or__9086__auto__)){
return or__9086__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19010 = (i + (1));
i = G__19010;
continue;
}
} else {
return null;
}
break;
}
})();
var or__9086__auto__ = ret;
if(cljs.core.truth_(or__9086__auto__)){
return or__9086__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__9074__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__9074__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__9074__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__19011){
var map__19013 = p__19011;
var map__19013__$1 = ((cljs.core.seq_QMARK_.call(null,map__19013))?cljs.core.apply.call(null,cljs.core.hash_map,map__19013):map__19013);
var opts = map__19013__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

};
var alts_BANG_ = function (ports,var_args){
var p__19011 = null;
if (arguments.length > 1) {
  p__19011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__19011);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19014){
var ports = cljs.core.first(arglist__19014);
var p__19011 = cljs.core.rest(arglist__19014);
return alts_BANG___delegate(ports,p__19011);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t19022 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19022 = (function (ch,f,map_LT_,meta19023){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19023 = meta19023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19022.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19022.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19022.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19022.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19025 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19025 = (function (fn1,_,meta19023,map_LT_,f,ch,meta19026){
this.fn1 = fn1;
this._ = _;
this.meta19023 = meta19023;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19026 = meta19026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19025.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19025.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19015_SHARP_){
return f1.call(null,(((p1__19015_SHARP_ == null))?null:self__.f.call(null,p1__19015_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19027){
var self__ = this;
var _19027__$1 = this;
return self__.meta19026;
});})(___$1))
;

cljs.core.async.t19025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19027,meta19026__$1){
var self__ = this;
var _19027__$1 = this;
return (new cljs.core.async.t19025(self__.fn1,self__._,self__.meta19023,self__.map_LT_,self__.f,self__.ch,meta19026__$1));
});})(___$1))
;

cljs.core.async.t19025.cljs$lang$type = true;

cljs.core.async.t19025.cljs$lang$ctorStr = "cljs.core.async/t19025";

cljs.core.async.t19025.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9673__auto__,writer__9674__auto__,opt__9675__auto__){
return cljs.core._write.call(null,writer__9674__auto__,"cljs.core.async/t19025");
});})(___$1))
;

cljs.core.async.__GT_t19025 = ((function (___$1){
return (function __GT_t19025(fn1__$1,___$2,meta19023__$1,map_LT___$1,f__$1,ch__$1,meta19026){
return (new cljs.core.async.t19025(fn1__$1,___$2,meta19023__$1,map_LT___$1,f__$1,ch__$1,meta19026));
});})(___$1))
;

}

return (new cljs.core.async.t19025(fn1,___$1,self__.meta19023,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),220,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),214,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mariano/src/notas/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__9074__auto__ = ret;
if(cljs.core.truth_(and__9074__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__9074__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t19022.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19022.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19022.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19024){
var self__ = this;
var _19024__$1 = this;
return self__.meta19023;
});

cljs.core.async.t19022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19024,meta19023__$1){
var self__ = this;
var _19024__$1 = this;
return (new cljs.core.async.t19022(self__.ch,self__.f,self__.map_LT_,meta19023__$1));
});

cljs.core.async.t19022.cljs$lang$type = true;

cljs.core.async.t19022.cljs$lang$ctorStr = "cljs.core.async/t19022";

cljs.core.async.t19022.cljs$lang$ctorPrWriter = (function (this__9673__auto__,writer__9674__auto__,opt__9675__auto__){
return cljs.core._write.call(null,writer__9674__auto__,"cljs.core.async/t19022");
});

cljs.core.async.__GT_t19022 = (function __GT_t19022(ch__$1,f__$1,map_LT___$1,meta19023){
return (new cljs.core.async.t19022(ch__$1,f__$1,map_LT___$1,meta19023));
});

}

return (new cljs.core.async.t19022(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),226,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),205,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mariano/src/notas/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19031 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19031 = (function (ch,f,map_GT_,meta19032){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19032 = meta19032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19031.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19031.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19031.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19031.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19031.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19031.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19033){
var self__ = this;
var _19033__$1 = this;
return self__.meta19032;
});

cljs.core.async.t19031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19033,meta19032__$1){
var self__ = this;
var _19033__$1 = this;
return (new cljs.core.async.t19031(self__.ch,self__.f,self__.map_GT_,meta19032__$1));
});

cljs.core.async.t19031.cljs$lang$type = true;

cljs.core.async.t19031.cljs$lang$ctorStr = "cljs.core.async/t19031";

cljs.core.async.t19031.cljs$lang$ctorPrWriter = (function (this__9673__auto__,writer__9674__auto__,opt__9675__auto__){
return cljs.core._write.call(null,writer__9674__auto__,"cljs.core.async/t19031");
});

cljs.core.async.__GT_t19031 = (function __GT_t19031(ch__$1,f__$1,map_GT___$1,meta19032){
return (new cljs.core.async.t19031(ch__$1,f__$1,map_GT___$1,meta19032));
});

}

return (new cljs.core.async.t19031(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),241,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),232,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mariano/src/notas/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19037 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19037 = (function (ch,p,filter_GT_,meta19038){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19038 = meta19038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19037.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19037.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19037.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19037.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19039){
var self__ = this;
var _19039__$1 = this;
return self__.meta19038;
});

cljs.core.async.t19037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19039,meta19038__$1){
var self__ = this;
var _19039__$1 = this;
return (new cljs.core.async.t19037(self__.ch,self__.p,self__.filter_GT_,meta19038__$1));
});

cljs.core.async.t19037.cljs$lang$type = true;

cljs.core.async.t19037.cljs$lang$ctorStr = "cljs.core.async/t19037";

cljs.core.async.t19037.cljs$lang$ctorPrWriter = (function (this__9673__auto__,writer__9674__auto__,opt__9675__auto__){
return cljs.core._write.call(null,writer__9674__auto__,"cljs.core.async/t19037");
});

cljs.core.async.__GT_t19037 = (function __GT_t19037(ch__$1,p__$1,filter_GT___$1,meta19038){
return (new cljs.core.async.t19037(ch__$1,p__$1,filter_GT___$1,meta19038));
});

}

return (new cljs.core.async.t19037(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),262,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),250,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mariano/src/notas/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14391__auto___19122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto___19122,out){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto___19122,out){
return (function (state_19101){
var state_val_19102 = (state_19101[(1)]);
if((state_val_19102 === (7))){
var inst_19097 = (state_19101[(2)]);
var state_19101__$1 = state_19101;
var statearr_19103_19123 = state_19101__$1;
(statearr_19103_19123[(2)] = inst_19097);

(statearr_19103_19123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19102 === (1))){
var state_19101__$1 = state_19101;
var statearr_19104_19124 = state_19101__$1;
(statearr_19104_19124[(2)] = null);

(statearr_19104_19124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19102 === (4))){
var inst_19083 = (state_19101[(7)]);
var inst_19083__$1 = (state_19101[(2)]);
var inst_19084 = (inst_19083__$1 == null);
var state_19101__$1 = (function (){var statearr_19105 = state_19101;
(statearr_19105[(7)] = inst_19083__$1);

return statearr_19105;
})();
if(cljs.core.truth_(inst_19084)){
var statearr_19106_19125 = state_19101__$1;
(statearr_19106_19125[(1)] = (5));

} else {
var statearr_19107_19126 = state_19101__$1;
(statearr_19107_19126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19102 === (6))){
var inst_19083 = (state_19101[(7)]);
var inst_19088 = p.call(null,inst_19083);
var state_19101__$1 = state_19101;
if(cljs.core.truth_(inst_19088)){
var statearr_19108_19127 = state_19101__$1;
(statearr_19108_19127[(1)] = (8));

} else {
var statearr_19109_19128 = state_19101__$1;
(statearr_19109_19128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19102 === (3))){
var inst_19099 = (state_19101[(2)]);
var state_19101__$1 = state_19101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19101__$1,inst_19099);
} else {
if((state_val_19102 === (2))){
var state_19101__$1 = state_19101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19101__$1,(4),ch);
} else {
if((state_val_19102 === (11))){
var inst_19091 = (state_19101[(2)]);
var state_19101__$1 = state_19101;
var statearr_19110_19129 = state_19101__$1;
(statearr_19110_19129[(2)] = inst_19091);

(statearr_19110_19129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19102 === (9))){
var state_19101__$1 = state_19101;
var statearr_19111_19130 = state_19101__$1;
(statearr_19111_19130[(2)] = null);

(statearr_19111_19130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19102 === (5))){
var inst_19086 = cljs.core.async.close_BANG_.call(null,out);
var state_19101__$1 = state_19101;
var statearr_19112_19131 = state_19101__$1;
(statearr_19112_19131[(2)] = inst_19086);

(statearr_19112_19131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19102 === (10))){
var inst_19094 = (state_19101[(2)]);
var state_19101__$1 = (function (){var statearr_19113 = state_19101;
(statearr_19113[(8)] = inst_19094);

return statearr_19113;
})();
var statearr_19114_19132 = state_19101__$1;
(statearr_19114_19132[(2)] = null);

(statearr_19114_19132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19102 === (8))){
var inst_19083 = (state_19101[(7)]);
var state_19101__$1 = state_19101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19101__$1,(11),out,inst_19083);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto___19122,out))
;
return ((function (switch__14326__auto__,c__14391__auto___19122,out){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_19118 = [null,null,null,null,null,null,null,null,null];
(statearr_19118[(0)] = state_machine__14327__auto__);

(statearr_19118[(1)] = (1));

return statearr_19118;
});
var state_machine__14327__auto____1 = (function (state_19101){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_19101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e19119){if((e19119 instanceof Object)){
var ex__14330__auto__ = e19119;
var statearr_19120_19133 = state_19101;
(statearr_19120_19133[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19134 = state_19101;
state_19101 = G__19134;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_19101){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_19101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto___19122,out))
})();
var state__14393__auto__ = (function (){var statearr_19121 = f__14392__auto__.call(null);
(statearr_19121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto___19122);

return statearr_19121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto___19122,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__14391__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto__){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto__){
return (function (state_19300){
var state_val_19301 = (state_19300[(1)]);
if((state_val_19301 === (7))){
var inst_19296 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
var statearr_19302_19343 = state_19300__$1;
(statearr_19302_19343[(2)] = inst_19296);

(statearr_19302_19343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (20))){
var inst_19266 = (state_19300[(7)]);
var inst_19277 = (state_19300[(2)]);
var inst_19278 = cljs.core.next.call(null,inst_19266);
var inst_19252 = inst_19278;
var inst_19253 = null;
var inst_19254 = (0);
var inst_19255 = (0);
var state_19300__$1 = (function (){var statearr_19303 = state_19300;
(statearr_19303[(8)] = inst_19254);

(statearr_19303[(9)] = inst_19277);

(statearr_19303[(10)] = inst_19253);

(statearr_19303[(11)] = inst_19255);

(statearr_19303[(12)] = inst_19252);

return statearr_19303;
})();
var statearr_19304_19344 = state_19300__$1;
(statearr_19304_19344[(2)] = null);

(statearr_19304_19344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (1))){
var state_19300__$1 = state_19300;
var statearr_19305_19345 = state_19300__$1;
(statearr_19305_19345[(2)] = null);

(statearr_19305_19345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (4))){
var inst_19241 = (state_19300[(13)]);
var inst_19241__$1 = (state_19300[(2)]);
var inst_19242 = (inst_19241__$1 == null);
var state_19300__$1 = (function (){var statearr_19306 = state_19300;
(statearr_19306[(13)] = inst_19241__$1);

return statearr_19306;
})();
if(cljs.core.truth_(inst_19242)){
var statearr_19307_19346 = state_19300__$1;
(statearr_19307_19346[(1)] = (5));

} else {
var statearr_19308_19347 = state_19300__$1;
(statearr_19308_19347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (15))){
var state_19300__$1 = state_19300;
var statearr_19312_19348 = state_19300__$1;
(statearr_19312_19348[(2)] = null);

(statearr_19312_19348[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (21))){
var state_19300__$1 = state_19300;
var statearr_19313_19349 = state_19300__$1;
(statearr_19313_19349[(2)] = null);

(statearr_19313_19349[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (13))){
var inst_19254 = (state_19300[(8)]);
var inst_19253 = (state_19300[(10)]);
var inst_19255 = (state_19300[(11)]);
var inst_19252 = (state_19300[(12)]);
var inst_19262 = (state_19300[(2)]);
var inst_19263 = (inst_19255 + (1));
var tmp19309 = inst_19254;
var tmp19310 = inst_19253;
var tmp19311 = inst_19252;
var inst_19252__$1 = tmp19311;
var inst_19253__$1 = tmp19310;
var inst_19254__$1 = tmp19309;
var inst_19255__$1 = inst_19263;
var state_19300__$1 = (function (){var statearr_19314 = state_19300;
(statearr_19314[(8)] = inst_19254__$1);

(statearr_19314[(10)] = inst_19253__$1);

(statearr_19314[(11)] = inst_19255__$1);

(statearr_19314[(14)] = inst_19262);

(statearr_19314[(12)] = inst_19252__$1);

return statearr_19314;
})();
var statearr_19315_19350 = state_19300__$1;
(statearr_19315_19350[(2)] = null);

(statearr_19315_19350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (22))){
var state_19300__$1 = state_19300;
var statearr_19316_19351 = state_19300__$1;
(statearr_19316_19351[(2)] = null);

(statearr_19316_19351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (6))){
var inst_19241 = (state_19300[(13)]);
var inst_19250 = f.call(null,inst_19241);
var inst_19251 = cljs.core.seq.call(null,inst_19250);
var inst_19252 = inst_19251;
var inst_19253 = null;
var inst_19254 = (0);
var inst_19255 = (0);
var state_19300__$1 = (function (){var statearr_19317 = state_19300;
(statearr_19317[(8)] = inst_19254);

(statearr_19317[(10)] = inst_19253);

(statearr_19317[(11)] = inst_19255);

(statearr_19317[(12)] = inst_19252);

return statearr_19317;
})();
var statearr_19318_19352 = state_19300__$1;
(statearr_19318_19352[(2)] = null);

(statearr_19318_19352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (17))){
var inst_19266 = (state_19300[(7)]);
var inst_19270 = cljs.core.chunk_first.call(null,inst_19266);
var inst_19271 = cljs.core.chunk_rest.call(null,inst_19266);
var inst_19272 = cljs.core.count.call(null,inst_19270);
var inst_19252 = inst_19271;
var inst_19253 = inst_19270;
var inst_19254 = inst_19272;
var inst_19255 = (0);
var state_19300__$1 = (function (){var statearr_19319 = state_19300;
(statearr_19319[(8)] = inst_19254);

(statearr_19319[(10)] = inst_19253);

(statearr_19319[(11)] = inst_19255);

(statearr_19319[(12)] = inst_19252);

return statearr_19319;
})();
var statearr_19320_19353 = state_19300__$1;
(statearr_19320_19353[(2)] = null);

(statearr_19320_19353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (3))){
var inst_19298 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19300__$1,inst_19298);
} else {
if((state_val_19301 === (12))){
var inst_19286 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
var statearr_19321_19354 = state_19300__$1;
(statearr_19321_19354[(2)] = inst_19286);

(statearr_19321_19354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (2))){
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19300__$1,(4),in$);
} else {
if((state_val_19301 === (23))){
var inst_19294 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
var statearr_19322_19355 = state_19300__$1;
(statearr_19322_19355[(2)] = inst_19294);

(statearr_19322_19355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (19))){
var inst_19281 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
var statearr_19323_19356 = state_19300__$1;
(statearr_19323_19356[(2)] = inst_19281);

(statearr_19323_19356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (11))){
var inst_19266 = (state_19300[(7)]);
var inst_19252 = (state_19300[(12)]);
var inst_19266__$1 = cljs.core.seq.call(null,inst_19252);
var state_19300__$1 = (function (){var statearr_19324 = state_19300;
(statearr_19324[(7)] = inst_19266__$1);

return statearr_19324;
})();
if(inst_19266__$1){
var statearr_19325_19357 = state_19300__$1;
(statearr_19325_19357[(1)] = (14));

} else {
var statearr_19326_19358 = state_19300__$1;
(statearr_19326_19358[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (9))){
var inst_19288 = (state_19300[(2)]);
var inst_19289 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19300__$1 = (function (){var statearr_19327 = state_19300;
(statearr_19327[(15)] = inst_19288);

return statearr_19327;
})();
if(cljs.core.truth_(inst_19289)){
var statearr_19328_19359 = state_19300__$1;
(statearr_19328_19359[(1)] = (21));

} else {
var statearr_19329_19360 = state_19300__$1;
(statearr_19329_19360[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (5))){
var inst_19244 = cljs.core.async.close_BANG_.call(null,out);
var state_19300__$1 = state_19300;
var statearr_19330_19361 = state_19300__$1;
(statearr_19330_19361[(2)] = inst_19244);

(statearr_19330_19361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (14))){
var inst_19266 = (state_19300[(7)]);
var inst_19268 = cljs.core.chunked_seq_QMARK_.call(null,inst_19266);
var state_19300__$1 = state_19300;
if(inst_19268){
var statearr_19331_19362 = state_19300__$1;
(statearr_19331_19362[(1)] = (17));

} else {
var statearr_19332_19363 = state_19300__$1;
(statearr_19332_19363[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (16))){
var inst_19284 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
var statearr_19333_19364 = state_19300__$1;
(statearr_19333_19364[(2)] = inst_19284);

(statearr_19333_19364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (10))){
var inst_19253 = (state_19300[(10)]);
var inst_19255 = (state_19300[(11)]);
var inst_19260 = cljs.core._nth.call(null,inst_19253,inst_19255);
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19300__$1,(13),out,inst_19260);
} else {
if((state_val_19301 === (18))){
var inst_19266 = (state_19300[(7)]);
var inst_19275 = cljs.core.first.call(null,inst_19266);
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19300__$1,(20),out,inst_19275);
} else {
if((state_val_19301 === (8))){
var inst_19254 = (state_19300[(8)]);
var inst_19255 = (state_19300[(11)]);
var inst_19257 = (inst_19255 < inst_19254);
var inst_19258 = inst_19257;
var state_19300__$1 = state_19300;
if(cljs.core.truth_(inst_19258)){
var statearr_19334_19365 = state_19300__$1;
(statearr_19334_19365[(1)] = (10));

} else {
var statearr_19335_19366 = state_19300__$1;
(statearr_19335_19366[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto__))
;
return ((function (switch__14326__auto__,c__14391__auto__){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_19339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19339[(0)] = state_machine__14327__auto__);

(statearr_19339[(1)] = (1));

return statearr_19339;
});
var state_machine__14327__auto____1 = (function (state_19300){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_19300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e19340){if((e19340 instanceof Object)){
var ex__14330__auto__ = e19340;
var statearr_19341_19367 = state_19300;
(statearr_19341_19367[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19368 = state_19300;
state_19300 = G__19368;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_19300){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_19300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto__))
})();
var state__14393__auto__ = (function (){var statearr_19342 = f__14392__auto__.call(null);
(statearr_19342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto__);

return statearr_19342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto__))
);

return c__14391__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__14391__auto___19463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto___19463){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto___19463){
return (function (state_19439){
var state_val_19440 = (state_19439[(1)]);
if((state_val_19440 === (7))){
var inst_19435 = (state_19439[(2)]);
var state_19439__$1 = state_19439;
var statearr_19441_19464 = state_19439__$1;
(statearr_19441_19464[(2)] = inst_19435);

(statearr_19441_19464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19440 === (1))){
var state_19439__$1 = state_19439;
var statearr_19442_19465 = state_19439__$1;
(statearr_19442_19465[(2)] = null);

(statearr_19442_19465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19440 === (4))){
var inst_19418 = (state_19439[(7)]);
var inst_19418__$1 = (state_19439[(2)]);
var inst_19419 = (inst_19418__$1 == null);
var state_19439__$1 = (function (){var statearr_19443 = state_19439;
(statearr_19443[(7)] = inst_19418__$1);

return statearr_19443;
})();
if(cljs.core.truth_(inst_19419)){
var statearr_19444_19466 = state_19439__$1;
(statearr_19444_19466[(1)] = (5));

} else {
var statearr_19445_19467 = state_19439__$1;
(statearr_19445_19467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19440 === (13))){
var state_19439__$1 = state_19439;
var statearr_19446_19468 = state_19439__$1;
(statearr_19446_19468[(2)] = null);

(statearr_19446_19468[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19440 === (6))){
var inst_19418 = (state_19439[(7)]);
var state_19439__$1 = state_19439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19439__$1,(11),to,inst_19418);
} else {
if((state_val_19440 === (3))){
var inst_19437 = (state_19439[(2)]);
var state_19439__$1 = state_19439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19439__$1,inst_19437);
} else {
if((state_val_19440 === (12))){
var state_19439__$1 = state_19439;
var statearr_19447_19469 = state_19439__$1;
(statearr_19447_19469[(2)] = null);

(statearr_19447_19469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19440 === (2))){
var state_19439__$1 = state_19439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19439__$1,(4),from);
} else {
if((state_val_19440 === (11))){
var inst_19428 = (state_19439[(2)]);
var state_19439__$1 = state_19439;
if(cljs.core.truth_(inst_19428)){
var statearr_19448_19470 = state_19439__$1;
(statearr_19448_19470[(1)] = (12));

} else {
var statearr_19449_19471 = state_19439__$1;
(statearr_19449_19471[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19440 === (9))){
var state_19439__$1 = state_19439;
var statearr_19450_19472 = state_19439__$1;
(statearr_19450_19472[(2)] = null);

(statearr_19450_19472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19440 === (5))){
var state_19439__$1 = state_19439;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19451_19473 = state_19439__$1;
(statearr_19451_19473[(1)] = (8));

} else {
var statearr_19452_19474 = state_19439__$1;
(statearr_19452_19474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19440 === (14))){
var inst_19433 = (state_19439[(2)]);
var state_19439__$1 = state_19439;
var statearr_19453_19475 = state_19439__$1;
(statearr_19453_19475[(2)] = inst_19433);

(statearr_19453_19475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19440 === (10))){
var inst_19425 = (state_19439[(2)]);
var state_19439__$1 = state_19439;
var statearr_19454_19476 = state_19439__$1;
(statearr_19454_19476[(2)] = inst_19425);

(statearr_19454_19476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19440 === (8))){
var inst_19422 = cljs.core.async.close_BANG_.call(null,to);
var state_19439__$1 = state_19439;
var statearr_19455_19477 = state_19439__$1;
(statearr_19455_19477[(2)] = inst_19422);

(statearr_19455_19477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto___19463))
;
return ((function (switch__14326__auto__,c__14391__auto___19463){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_19459 = [null,null,null,null,null,null,null,null];
(statearr_19459[(0)] = state_machine__14327__auto__);

(statearr_19459[(1)] = (1));

return statearr_19459;
});
var state_machine__14327__auto____1 = (function (state_19439){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_19439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e19460){if((e19460 instanceof Object)){
var ex__14330__auto__ = e19460;
var statearr_19461_19478 = state_19439;
(statearr_19461_19478[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19479 = state_19439;
state_19439 = G__19479;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_19439){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_19439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto___19463))
})();
var state__14393__auto__ = (function (){var statearr_19462 = f__14392__auto__.call(null);
(statearr_19462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto___19463);

return statearr_19462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto___19463))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__14391__auto___19580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto___19580,tc,fc){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto___19580,tc,fc){
return (function (state_19555){
var state_val_19556 = (state_19555[(1)]);
if((state_val_19556 === (7))){
var inst_19551 = (state_19555[(2)]);
var state_19555__$1 = state_19555;
var statearr_19557_19581 = state_19555__$1;
(statearr_19557_19581[(2)] = inst_19551);

(statearr_19557_19581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (1))){
var state_19555__$1 = state_19555;
var statearr_19558_19582 = state_19555__$1;
(statearr_19558_19582[(2)] = null);

(statearr_19558_19582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (4))){
var inst_19532 = (state_19555[(7)]);
var inst_19532__$1 = (state_19555[(2)]);
var inst_19533 = (inst_19532__$1 == null);
var state_19555__$1 = (function (){var statearr_19559 = state_19555;
(statearr_19559[(7)] = inst_19532__$1);

return statearr_19559;
})();
if(cljs.core.truth_(inst_19533)){
var statearr_19560_19583 = state_19555__$1;
(statearr_19560_19583[(1)] = (5));

} else {
var statearr_19561_19584 = state_19555__$1;
(statearr_19561_19584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (13))){
var state_19555__$1 = state_19555;
var statearr_19562_19585 = state_19555__$1;
(statearr_19562_19585[(2)] = null);

(statearr_19562_19585[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (6))){
var inst_19532 = (state_19555[(7)]);
var inst_19538 = p.call(null,inst_19532);
var state_19555__$1 = state_19555;
if(cljs.core.truth_(inst_19538)){
var statearr_19563_19586 = state_19555__$1;
(statearr_19563_19586[(1)] = (9));

} else {
var statearr_19564_19587 = state_19555__$1;
(statearr_19564_19587[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (3))){
var inst_19553 = (state_19555[(2)]);
var state_19555__$1 = state_19555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19555__$1,inst_19553);
} else {
if((state_val_19556 === (12))){
var state_19555__$1 = state_19555;
var statearr_19565_19588 = state_19555__$1;
(statearr_19565_19588[(2)] = null);

(statearr_19565_19588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (2))){
var state_19555__$1 = state_19555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19555__$1,(4),ch);
} else {
if((state_val_19556 === (11))){
var inst_19532 = (state_19555[(7)]);
var inst_19542 = (state_19555[(2)]);
var state_19555__$1 = state_19555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19555__$1,(8),inst_19542,inst_19532);
} else {
if((state_val_19556 === (9))){
var state_19555__$1 = state_19555;
var statearr_19566_19589 = state_19555__$1;
(statearr_19566_19589[(2)] = tc);

(statearr_19566_19589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (5))){
var inst_19535 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19536 = cljs.core.async.close_BANG_.call(null,fc);
var state_19555__$1 = (function (){var statearr_19567 = state_19555;
(statearr_19567[(8)] = inst_19535);

return statearr_19567;
})();
var statearr_19568_19590 = state_19555__$1;
(statearr_19568_19590[(2)] = inst_19536);

(statearr_19568_19590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (14))){
var inst_19549 = (state_19555[(2)]);
var state_19555__$1 = state_19555;
var statearr_19569_19591 = state_19555__$1;
(statearr_19569_19591[(2)] = inst_19549);

(statearr_19569_19591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (10))){
var state_19555__$1 = state_19555;
var statearr_19570_19592 = state_19555__$1;
(statearr_19570_19592[(2)] = fc);

(statearr_19570_19592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (8))){
var inst_19544 = (state_19555[(2)]);
var state_19555__$1 = state_19555;
if(cljs.core.truth_(inst_19544)){
var statearr_19571_19593 = state_19555__$1;
(statearr_19571_19593[(1)] = (12));

} else {
var statearr_19572_19594 = state_19555__$1;
(statearr_19572_19594[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto___19580,tc,fc))
;
return ((function (switch__14326__auto__,c__14391__auto___19580,tc,fc){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_19576 = [null,null,null,null,null,null,null,null,null];
(statearr_19576[(0)] = state_machine__14327__auto__);

(statearr_19576[(1)] = (1));

return statearr_19576;
});
var state_machine__14327__auto____1 = (function (state_19555){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_19555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e19577){if((e19577 instanceof Object)){
var ex__14330__auto__ = e19577;
var statearr_19578_19595 = state_19555;
(statearr_19578_19595[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19596 = state_19555;
state_19555 = G__19596;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_19555){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_19555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto___19580,tc,fc))
})();
var state__14393__auto__ = (function (){var statearr_19579 = f__14392__auto__.call(null);
(statearr_19579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto___19580);

return statearr_19579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto___19580,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__14391__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto__){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto__){
return (function (state_19643){
var state_val_19644 = (state_19643[(1)]);
if((state_val_19644 === (7))){
var inst_19639 = (state_19643[(2)]);
var state_19643__$1 = state_19643;
var statearr_19645_19661 = state_19643__$1;
(statearr_19645_19661[(2)] = inst_19639);

(statearr_19645_19661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (6))){
var inst_19629 = (state_19643[(7)]);
var inst_19632 = (state_19643[(8)]);
var inst_19636 = f.call(null,inst_19629,inst_19632);
var inst_19629__$1 = inst_19636;
var state_19643__$1 = (function (){var statearr_19646 = state_19643;
(statearr_19646[(7)] = inst_19629__$1);

return statearr_19646;
})();
var statearr_19647_19662 = state_19643__$1;
(statearr_19647_19662[(2)] = null);

(statearr_19647_19662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (5))){
var inst_19629 = (state_19643[(7)]);
var state_19643__$1 = state_19643;
var statearr_19648_19663 = state_19643__$1;
(statearr_19648_19663[(2)] = inst_19629);

(statearr_19648_19663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (4))){
var inst_19632 = (state_19643[(8)]);
var inst_19632__$1 = (state_19643[(2)]);
var inst_19633 = (inst_19632__$1 == null);
var state_19643__$1 = (function (){var statearr_19649 = state_19643;
(statearr_19649[(8)] = inst_19632__$1);

return statearr_19649;
})();
if(cljs.core.truth_(inst_19633)){
var statearr_19650_19664 = state_19643__$1;
(statearr_19650_19664[(1)] = (5));

} else {
var statearr_19651_19665 = state_19643__$1;
(statearr_19651_19665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (3))){
var inst_19641 = (state_19643[(2)]);
var state_19643__$1 = state_19643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19643__$1,inst_19641);
} else {
if((state_val_19644 === (2))){
var state_19643__$1 = state_19643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19643__$1,(4),ch);
} else {
if((state_val_19644 === (1))){
var inst_19629 = init;
var state_19643__$1 = (function (){var statearr_19652 = state_19643;
(statearr_19652[(7)] = inst_19629);

return statearr_19652;
})();
var statearr_19653_19666 = state_19643__$1;
(statearr_19653_19666[(2)] = null);

(statearr_19653_19666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__14391__auto__))
;
return ((function (switch__14326__auto__,c__14391__auto__){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_19657 = [null,null,null,null,null,null,null,null,null];
(statearr_19657[(0)] = state_machine__14327__auto__);

(statearr_19657[(1)] = (1));

return statearr_19657;
});
var state_machine__14327__auto____1 = (function (state_19643){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_19643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e19658){if((e19658 instanceof Object)){
var ex__14330__auto__ = e19658;
var statearr_19659_19667 = state_19643;
(statearr_19659_19667[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19668 = state_19643;
state_19643 = G__19668;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_19643){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_19643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto__))
})();
var state__14393__auto__ = (function (){var statearr_19660 = f__14392__auto__.call(null);
(statearr_19660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto__);

return statearr_19660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto__))
);

return c__14391__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__14391__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto__){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto__){
return (function (state_19742){
var state_val_19743 = (state_19742[(1)]);
if((state_val_19743 === (7))){
var inst_19724 = (state_19742[(2)]);
var state_19742__$1 = state_19742;
var statearr_19744_19767 = state_19742__$1;
(statearr_19744_19767[(2)] = inst_19724);

(statearr_19744_19767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19743 === (1))){
var inst_19718 = cljs.core.seq.call(null,coll);
var inst_19719 = inst_19718;
var state_19742__$1 = (function (){var statearr_19745 = state_19742;
(statearr_19745[(7)] = inst_19719);

return statearr_19745;
})();
var statearr_19746_19768 = state_19742__$1;
(statearr_19746_19768[(2)] = null);

(statearr_19746_19768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19743 === (4))){
var inst_19719 = (state_19742[(7)]);
var inst_19722 = cljs.core.first.call(null,inst_19719);
var state_19742__$1 = state_19742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19742__$1,(7),ch,inst_19722);
} else {
if((state_val_19743 === (13))){
var inst_19736 = (state_19742[(2)]);
var state_19742__$1 = state_19742;
var statearr_19747_19769 = state_19742__$1;
(statearr_19747_19769[(2)] = inst_19736);

(statearr_19747_19769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19743 === (6))){
var inst_19727 = (state_19742[(2)]);
var state_19742__$1 = state_19742;
if(cljs.core.truth_(inst_19727)){
var statearr_19748_19770 = state_19742__$1;
(statearr_19748_19770[(1)] = (8));

} else {
var statearr_19749_19771 = state_19742__$1;
(statearr_19749_19771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19743 === (3))){
var inst_19740 = (state_19742[(2)]);
var state_19742__$1 = state_19742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19742__$1,inst_19740);
} else {
if((state_val_19743 === (12))){
var state_19742__$1 = state_19742;
var statearr_19750_19772 = state_19742__$1;
(statearr_19750_19772[(2)] = null);

(statearr_19750_19772[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19743 === (2))){
var inst_19719 = (state_19742[(7)]);
var state_19742__$1 = state_19742;
if(cljs.core.truth_(inst_19719)){
var statearr_19751_19773 = state_19742__$1;
(statearr_19751_19773[(1)] = (4));

} else {
var statearr_19752_19774 = state_19742__$1;
(statearr_19752_19774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19743 === (11))){
var inst_19733 = cljs.core.async.close_BANG_.call(null,ch);
var state_19742__$1 = state_19742;
var statearr_19753_19775 = state_19742__$1;
(statearr_19753_19775[(2)] = inst_19733);

(statearr_19753_19775[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19743 === (9))){
var state_19742__$1 = state_19742;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19754_19776 = state_19742__$1;
(statearr_19754_19776[(1)] = (11));

} else {
var statearr_19755_19777 = state_19742__$1;
(statearr_19755_19777[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19743 === (5))){
var inst_19719 = (state_19742[(7)]);
var state_19742__$1 = state_19742;
var statearr_19756_19778 = state_19742__$1;
(statearr_19756_19778[(2)] = inst_19719);

(statearr_19756_19778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19743 === (10))){
var inst_19738 = (state_19742[(2)]);
var state_19742__$1 = state_19742;
var statearr_19757_19779 = state_19742__$1;
(statearr_19757_19779[(2)] = inst_19738);

(statearr_19757_19779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19743 === (8))){
var inst_19719 = (state_19742[(7)]);
var inst_19729 = cljs.core.next.call(null,inst_19719);
var inst_19719__$1 = inst_19729;
var state_19742__$1 = (function (){var statearr_19758 = state_19742;
(statearr_19758[(7)] = inst_19719__$1);

return statearr_19758;
})();
var statearr_19759_19780 = state_19742__$1;
(statearr_19759_19780[(2)] = null);

(statearr_19759_19780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto__))
;
return ((function (switch__14326__auto__,c__14391__auto__){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_19763 = [null,null,null,null,null,null,null,null];
(statearr_19763[(0)] = state_machine__14327__auto__);

(statearr_19763[(1)] = (1));

return statearr_19763;
});
var state_machine__14327__auto____1 = (function (state_19742){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_19742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e19764){if((e19764 instanceof Object)){
var ex__14330__auto__ = e19764;
var statearr_19765_19781 = state_19742;
(statearr_19765_19781[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19782 = state_19742;
state_19742 = G__19782;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_19742){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_19742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto__))
})();
var state__14393__auto__ = (function (){var statearr_19766 = f__14392__auto__.call(null);
(statearr_19766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto__);

return statearr_19766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto__))
);

return c__14391__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj19784 = {};
return obj19784;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__9074__auto__ = _;
if(and__9074__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__9074__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__9730__auto__ = (((_ == null))?null:_);
return (function (){var or__9086__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9730__auto__)]);
if(or__9086__auto__){
return or__9086__auto__;
} else {
var or__9086__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__9086__auto____$1){
return or__9086__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj19786 = {};
return obj19786;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__9074__auto__ = m;
if(and__9074__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__9074__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__9730__auto__ = (((m == null))?null:m);
return (function (){var or__9086__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9730__auto__)]);
if(or__9086__auto__){
return or__9086__auto__;
} else {
var or__9086__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__9086__auto____$1){
return or__9086__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__9074__auto__ = m;
if(and__9074__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__9074__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__9730__auto__ = (((m == null))?null:m);
return (function (){var or__9086__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9730__auto__)]);
if(or__9086__auto__){
return or__9086__auto__;
} else {
var or__9086__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__9086__auto____$1){
return or__9086__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__9074__auto__ = m;
if(and__9074__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__9074__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__9730__auto__ = (((m == null))?null:m);
return (function (){var or__9086__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9730__auto__)]);
if(or__9086__auto__){
return or__9086__auto__;
} else {
var or__9086__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__9086__auto____$1){
return or__9086__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t20008 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20008 = (function (cs,ch,mult,meta20009){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20009 = meta20009;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20008.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20008.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20008.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20008.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20008.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20008.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20008.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20010){
var self__ = this;
var _20010__$1 = this;
return self__.meta20009;
});})(cs))
;

cljs.core.async.t20008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20010,meta20009__$1){
var self__ = this;
var _20010__$1 = this;
return (new cljs.core.async.t20008(self__.cs,self__.ch,self__.mult,meta20009__$1));
});})(cs))
;

cljs.core.async.t20008.cljs$lang$type = true;

cljs.core.async.t20008.cljs$lang$ctorStr = "cljs.core.async/t20008";

cljs.core.async.t20008.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9673__auto__,writer__9674__auto__,opt__9675__auto__){
return cljs.core._write.call(null,writer__9674__auto__,"cljs.core.async/t20008");
});})(cs))
;

cljs.core.async.__GT_t20008 = ((function (cs){
return (function __GT_t20008(cs__$1,ch__$1,mult__$1,meta20009){
return (new cljs.core.async.t20008(cs__$1,ch__$1,mult__$1,meta20009));
});})(cs))
;

}

return (new cljs.core.async.t20008(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),443,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),436,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mariano/src/notas/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14391__auto___20229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto___20229,cs,m,dchan,dctr,done){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto___20229,cs,m,dchan,dctr,done){
return (function (state_20141){
var state_val_20142 = (state_20141[(1)]);
if((state_val_20142 === (7))){
var inst_20137 = (state_20141[(2)]);
var state_20141__$1 = state_20141;
var statearr_20143_20230 = state_20141__$1;
(statearr_20143_20230[(2)] = inst_20137);

(statearr_20143_20230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (20))){
var inst_20042 = (state_20141[(7)]);
var inst_20052 = cljs.core.first.call(null,inst_20042);
var inst_20053 = cljs.core.nth.call(null,inst_20052,(0),null);
var inst_20054 = cljs.core.nth.call(null,inst_20052,(1),null);
var state_20141__$1 = (function (){var statearr_20144 = state_20141;
(statearr_20144[(8)] = inst_20053);

return statearr_20144;
})();
if(cljs.core.truth_(inst_20054)){
var statearr_20145_20231 = state_20141__$1;
(statearr_20145_20231[(1)] = (22));

} else {
var statearr_20146_20232 = state_20141__$1;
(statearr_20146_20232[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (27))){
var inst_20089 = (state_20141[(9)]);
var inst_20013 = (state_20141[(10)]);
var inst_20082 = (state_20141[(11)]);
var inst_20084 = (state_20141[(12)]);
var inst_20089__$1 = cljs.core._nth.call(null,inst_20082,inst_20084);
var inst_20090 = cljs.core.async.put_BANG_.call(null,inst_20089__$1,inst_20013,done);
var state_20141__$1 = (function (){var statearr_20147 = state_20141;
(statearr_20147[(9)] = inst_20089__$1);

return statearr_20147;
})();
if(cljs.core.truth_(inst_20090)){
var statearr_20148_20233 = state_20141__$1;
(statearr_20148_20233[(1)] = (30));

} else {
var statearr_20149_20234 = state_20141__$1;
(statearr_20149_20234[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (1))){
var state_20141__$1 = state_20141;
var statearr_20150_20235 = state_20141__$1;
(statearr_20150_20235[(2)] = null);

(statearr_20150_20235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (24))){
var inst_20042 = (state_20141[(7)]);
var inst_20059 = (state_20141[(2)]);
var inst_20060 = cljs.core.next.call(null,inst_20042);
var inst_20022 = inst_20060;
var inst_20023 = null;
var inst_20024 = (0);
var inst_20025 = (0);
var state_20141__$1 = (function (){var statearr_20151 = state_20141;
(statearr_20151[(13)] = inst_20025);

(statearr_20151[(14)] = inst_20022);

(statearr_20151[(15)] = inst_20023);

(statearr_20151[(16)] = inst_20059);

(statearr_20151[(17)] = inst_20024);

return statearr_20151;
})();
var statearr_20152_20236 = state_20141__$1;
(statearr_20152_20236[(2)] = null);

(statearr_20152_20236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (39))){
var state_20141__$1 = state_20141;
var statearr_20156_20237 = state_20141__$1;
(statearr_20156_20237[(2)] = null);

(statearr_20156_20237[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (4))){
var inst_20013 = (state_20141[(10)]);
var inst_20013__$1 = (state_20141[(2)]);
var inst_20014 = (inst_20013__$1 == null);
var state_20141__$1 = (function (){var statearr_20157 = state_20141;
(statearr_20157[(10)] = inst_20013__$1);

return statearr_20157;
})();
if(cljs.core.truth_(inst_20014)){
var statearr_20158_20238 = state_20141__$1;
(statearr_20158_20238[(1)] = (5));

} else {
var statearr_20159_20239 = state_20141__$1;
(statearr_20159_20239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (15))){
var inst_20025 = (state_20141[(13)]);
var inst_20022 = (state_20141[(14)]);
var inst_20023 = (state_20141[(15)]);
var inst_20024 = (state_20141[(17)]);
var inst_20038 = (state_20141[(2)]);
var inst_20039 = (inst_20025 + (1));
var tmp20153 = inst_20022;
var tmp20154 = inst_20023;
var tmp20155 = inst_20024;
var inst_20022__$1 = tmp20153;
var inst_20023__$1 = tmp20154;
var inst_20024__$1 = tmp20155;
var inst_20025__$1 = inst_20039;
var state_20141__$1 = (function (){var statearr_20160 = state_20141;
(statearr_20160[(13)] = inst_20025__$1);

(statearr_20160[(14)] = inst_20022__$1);

(statearr_20160[(15)] = inst_20023__$1);

(statearr_20160[(17)] = inst_20024__$1);

(statearr_20160[(18)] = inst_20038);

return statearr_20160;
})();
var statearr_20161_20240 = state_20141__$1;
(statearr_20161_20240[(2)] = null);

(statearr_20161_20240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (21))){
var inst_20063 = (state_20141[(2)]);
var state_20141__$1 = state_20141;
var statearr_20165_20241 = state_20141__$1;
(statearr_20165_20241[(2)] = inst_20063);

(statearr_20165_20241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (31))){
var inst_20089 = (state_20141[(9)]);
var inst_20093 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_20094 = cljs.core.async.untap_STAR_.call(null,m,inst_20089);
var state_20141__$1 = (function (){var statearr_20166 = state_20141;
(statearr_20166[(19)] = inst_20093);

return statearr_20166;
})();
var statearr_20167_20242 = state_20141__$1;
(statearr_20167_20242[(2)] = inst_20094);

(statearr_20167_20242[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (32))){
var inst_20083 = (state_20141[(20)]);
var inst_20081 = (state_20141[(21)]);
var inst_20082 = (state_20141[(11)]);
var inst_20084 = (state_20141[(12)]);
var inst_20096 = (state_20141[(2)]);
var inst_20097 = (inst_20084 + (1));
var tmp20162 = inst_20083;
var tmp20163 = inst_20081;
var tmp20164 = inst_20082;
var inst_20081__$1 = tmp20163;
var inst_20082__$1 = tmp20164;
var inst_20083__$1 = tmp20162;
var inst_20084__$1 = inst_20097;
var state_20141__$1 = (function (){var statearr_20168 = state_20141;
(statearr_20168[(20)] = inst_20083__$1);

(statearr_20168[(22)] = inst_20096);

(statearr_20168[(21)] = inst_20081__$1);

(statearr_20168[(11)] = inst_20082__$1);

(statearr_20168[(12)] = inst_20084__$1);

return statearr_20168;
})();
var statearr_20169_20243 = state_20141__$1;
(statearr_20169_20243[(2)] = null);

(statearr_20169_20243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (40))){
var inst_20109 = (state_20141[(23)]);
var inst_20113 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_20114 = cljs.core.async.untap_STAR_.call(null,m,inst_20109);
var state_20141__$1 = (function (){var statearr_20170 = state_20141;
(statearr_20170[(24)] = inst_20113);

return statearr_20170;
})();
var statearr_20171_20244 = state_20141__$1;
(statearr_20171_20244[(2)] = inst_20114);

(statearr_20171_20244[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (33))){
var inst_20100 = (state_20141[(25)]);
var inst_20102 = cljs.core.chunked_seq_QMARK_.call(null,inst_20100);
var state_20141__$1 = state_20141;
if(inst_20102){
var statearr_20172_20245 = state_20141__$1;
(statearr_20172_20245[(1)] = (36));

} else {
var statearr_20173_20246 = state_20141__$1;
(statearr_20173_20246[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (13))){
var inst_20032 = (state_20141[(26)]);
var inst_20035 = cljs.core.async.close_BANG_.call(null,inst_20032);
var state_20141__$1 = state_20141;
var statearr_20174_20247 = state_20141__$1;
(statearr_20174_20247[(2)] = inst_20035);

(statearr_20174_20247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (22))){
var inst_20053 = (state_20141[(8)]);
var inst_20056 = cljs.core.async.close_BANG_.call(null,inst_20053);
var state_20141__$1 = state_20141;
var statearr_20175_20248 = state_20141__$1;
(statearr_20175_20248[(2)] = inst_20056);

(statearr_20175_20248[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (36))){
var inst_20100 = (state_20141[(25)]);
var inst_20104 = cljs.core.chunk_first.call(null,inst_20100);
var inst_20105 = cljs.core.chunk_rest.call(null,inst_20100);
var inst_20106 = cljs.core.count.call(null,inst_20104);
var inst_20081 = inst_20105;
var inst_20082 = inst_20104;
var inst_20083 = inst_20106;
var inst_20084 = (0);
var state_20141__$1 = (function (){var statearr_20176 = state_20141;
(statearr_20176[(20)] = inst_20083);

(statearr_20176[(21)] = inst_20081);

(statearr_20176[(11)] = inst_20082);

(statearr_20176[(12)] = inst_20084);

return statearr_20176;
})();
var statearr_20177_20249 = state_20141__$1;
(statearr_20177_20249[(2)] = null);

(statearr_20177_20249[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (41))){
var inst_20100 = (state_20141[(25)]);
var inst_20116 = (state_20141[(2)]);
var inst_20117 = cljs.core.next.call(null,inst_20100);
var inst_20081 = inst_20117;
var inst_20082 = null;
var inst_20083 = (0);
var inst_20084 = (0);
var state_20141__$1 = (function (){var statearr_20178 = state_20141;
(statearr_20178[(20)] = inst_20083);

(statearr_20178[(21)] = inst_20081);

(statearr_20178[(27)] = inst_20116);

(statearr_20178[(11)] = inst_20082);

(statearr_20178[(12)] = inst_20084);

return statearr_20178;
})();
var statearr_20179_20250 = state_20141__$1;
(statearr_20179_20250[(2)] = null);

(statearr_20179_20250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (43))){
var state_20141__$1 = state_20141;
var statearr_20180_20251 = state_20141__$1;
(statearr_20180_20251[(2)] = null);

(statearr_20180_20251[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (29))){
var inst_20125 = (state_20141[(2)]);
var state_20141__$1 = state_20141;
var statearr_20181_20252 = state_20141__$1;
(statearr_20181_20252[(2)] = inst_20125);

(statearr_20181_20252[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (44))){
var inst_20134 = (state_20141[(2)]);
var state_20141__$1 = (function (){var statearr_20182 = state_20141;
(statearr_20182[(28)] = inst_20134);

return statearr_20182;
})();
var statearr_20183_20253 = state_20141__$1;
(statearr_20183_20253[(2)] = null);

(statearr_20183_20253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (6))){
var inst_20073 = (state_20141[(29)]);
var inst_20072 = cljs.core.deref.call(null,cs);
var inst_20073__$1 = cljs.core.keys.call(null,inst_20072);
var inst_20074 = cljs.core.count.call(null,inst_20073__$1);
var inst_20075 = cljs.core.reset_BANG_.call(null,dctr,inst_20074);
var inst_20080 = cljs.core.seq.call(null,inst_20073__$1);
var inst_20081 = inst_20080;
var inst_20082 = null;
var inst_20083 = (0);
var inst_20084 = (0);
var state_20141__$1 = (function (){var statearr_20184 = state_20141;
(statearr_20184[(20)] = inst_20083);

(statearr_20184[(29)] = inst_20073__$1);

(statearr_20184[(21)] = inst_20081);

(statearr_20184[(11)] = inst_20082);

(statearr_20184[(30)] = inst_20075);

(statearr_20184[(12)] = inst_20084);

return statearr_20184;
})();
var statearr_20185_20254 = state_20141__$1;
(statearr_20185_20254[(2)] = null);

(statearr_20185_20254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (28))){
var inst_20081 = (state_20141[(21)]);
var inst_20100 = (state_20141[(25)]);
var inst_20100__$1 = cljs.core.seq.call(null,inst_20081);
var state_20141__$1 = (function (){var statearr_20186 = state_20141;
(statearr_20186[(25)] = inst_20100__$1);

return statearr_20186;
})();
if(inst_20100__$1){
var statearr_20187_20255 = state_20141__$1;
(statearr_20187_20255[(1)] = (33));

} else {
var statearr_20188_20256 = state_20141__$1;
(statearr_20188_20256[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (25))){
var inst_20083 = (state_20141[(20)]);
var inst_20084 = (state_20141[(12)]);
var inst_20086 = (inst_20084 < inst_20083);
var inst_20087 = inst_20086;
var state_20141__$1 = state_20141;
if(cljs.core.truth_(inst_20087)){
var statearr_20189_20257 = state_20141__$1;
(statearr_20189_20257[(1)] = (27));

} else {
var statearr_20190_20258 = state_20141__$1;
(statearr_20190_20258[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (34))){
var state_20141__$1 = state_20141;
var statearr_20191_20259 = state_20141__$1;
(statearr_20191_20259[(2)] = null);

(statearr_20191_20259[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (17))){
var state_20141__$1 = state_20141;
var statearr_20192_20260 = state_20141__$1;
(statearr_20192_20260[(2)] = null);

(statearr_20192_20260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (3))){
var inst_20139 = (state_20141[(2)]);
var state_20141__$1 = state_20141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20141__$1,inst_20139);
} else {
if((state_val_20142 === (12))){
var inst_20068 = (state_20141[(2)]);
var state_20141__$1 = state_20141;
var statearr_20193_20261 = state_20141__$1;
(statearr_20193_20261[(2)] = inst_20068);

(statearr_20193_20261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (2))){
var state_20141__$1 = state_20141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20141__$1,(4),ch);
} else {
if((state_val_20142 === (23))){
var state_20141__$1 = state_20141;
var statearr_20194_20262 = state_20141__$1;
(statearr_20194_20262[(2)] = null);

(statearr_20194_20262[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (35))){
var inst_20123 = (state_20141[(2)]);
var state_20141__$1 = state_20141;
var statearr_20195_20263 = state_20141__$1;
(statearr_20195_20263[(2)] = inst_20123);

(statearr_20195_20263[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (19))){
var inst_20042 = (state_20141[(7)]);
var inst_20046 = cljs.core.chunk_first.call(null,inst_20042);
var inst_20047 = cljs.core.chunk_rest.call(null,inst_20042);
var inst_20048 = cljs.core.count.call(null,inst_20046);
var inst_20022 = inst_20047;
var inst_20023 = inst_20046;
var inst_20024 = inst_20048;
var inst_20025 = (0);
var state_20141__$1 = (function (){var statearr_20196 = state_20141;
(statearr_20196[(13)] = inst_20025);

(statearr_20196[(14)] = inst_20022);

(statearr_20196[(15)] = inst_20023);

(statearr_20196[(17)] = inst_20024);

return statearr_20196;
})();
var statearr_20197_20264 = state_20141__$1;
(statearr_20197_20264[(2)] = null);

(statearr_20197_20264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (11))){
var inst_20022 = (state_20141[(14)]);
var inst_20042 = (state_20141[(7)]);
var inst_20042__$1 = cljs.core.seq.call(null,inst_20022);
var state_20141__$1 = (function (){var statearr_20198 = state_20141;
(statearr_20198[(7)] = inst_20042__$1);

return statearr_20198;
})();
if(inst_20042__$1){
var statearr_20199_20265 = state_20141__$1;
(statearr_20199_20265[(1)] = (16));

} else {
var statearr_20200_20266 = state_20141__$1;
(statearr_20200_20266[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (9))){
var inst_20070 = (state_20141[(2)]);
var state_20141__$1 = state_20141;
var statearr_20201_20267 = state_20141__$1;
(statearr_20201_20267[(2)] = inst_20070);

(statearr_20201_20267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (5))){
var inst_20020 = cljs.core.deref.call(null,cs);
var inst_20021 = cljs.core.seq.call(null,inst_20020);
var inst_20022 = inst_20021;
var inst_20023 = null;
var inst_20024 = (0);
var inst_20025 = (0);
var state_20141__$1 = (function (){var statearr_20202 = state_20141;
(statearr_20202[(13)] = inst_20025);

(statearr_20202[(14)] = inst_20022);

(statearr_20202[(15)] = inst_20023);

(statearr_20202[(17)] = inst_20024);

return statearr_20202;
})();
var statearr_20203_20268 = state_20141__$1;
(statearr_20203_20268[(2)] = null);

(statearr_20203_20268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (14))){
var state_20141__$1 = state_20141;
var statearr_20204_20269 = state_20141__$1;
(statearr_20204_20269[(2)] = null);

(statearr_20204_20269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (45))){
var inst_20131 = (state_20141[(2)]);
var state_20141__$1 = state_20141;
var statearr_20205_20270 = state_20141__$1;
(statearr_20205_20270[(2)] = inst_20131);

(statearr_20205_20270[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (26))){
var inst_20073 = (state_20141[(29)]);
var inst_20127 = (state_20141[(2)]);
var inst_20128 = cljs.core.seq.call(null,inst_20073);
var state_20141__$1 = (function (){var statearr_20206 = state_20141;
(statearr_20206[(31)] = inst_20127);

return statearr_20206;
})();
if(inst_20128){
var statearr_20207_20271 = state_20141__$1;
(statearr_20207_20271[(1)] = (42));

} else {
var statearr_20208_20272 = state_20141__$1;
(statearr_20208_20272[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (16))){
var inst_20042 = (state_20141[(7)]);
var inst_20044 = cljs.core.chunked_seq_QMARK_.call(null,inst_20042);
var state_20141__$1 = state_20141;
if(inst_20044){
var statearr_20209_20273 = state_20141__$1;
(statearr_20209_20273[(1)] = (19));

} else {
var statearr_20210_20274 = state_20141__$1;
(statearr_20210_20274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (38))){
var inst_20120 = (state_20141[(2)]);
var state_20141__$1 = state_20141;
var statearr_20211_20275 = state_20141__$1;
(statearr_20211_20275[(2)] = inst_20120);

(statearr_20211_20275[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (30))){
var state_20141__$1 = state_20141;
var statearr_20212_20276 = state_20141__$1;
(statearr_20212_20276[(2)] = null);

(statearr_20212_20276[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (10))){
var inst_20025 = (state_20141[(13)]);
var inst_20023 = (state_20141[(15)]);
var inst_20031 = cljs.core._nth.call(null,inst_20023,inst_20025);
var inst_20032 = cljs.core.nth.call(null,inst_20031,(0),null);
var inst_20033 = cljs.core.nth.call(null,inst_20031,(1),null);
var state_20141__$1 = (function (){var statearr_20213 = state_20141;
(statearr_20213[(26)] = inst_20032);

return statearr_20213;
})();
if(cljs.core.truth_(inst_20033)){
var statearr_20214_20277 = state_20141__$1;
(statearr_20214_20277[(1)] = (13));

} else {
var statearr_20215_20278 = state_20141__$1;
(statearr_20215_20278[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (18))){
var inst_20066 = (state_20141[(2)]);
var state_20141__$1 = state_20141;
var statearr_20216_20279 = state_20141__$1;
(statearr_20216_20279[(2)] = inst_20066);

(statearr_20216_20279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (42))){
var state_20141__$1 = state_20141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20141__$1,(45),dchan);
} else {
if((state_val_20142 === (37))){
var inst_20013 = (state_20141[(10)]);
var inst_20100 = (state_20141[(25)]);
var inst_20109 = (state_20141[(23)]);
var inst_20109__$1 = cljs.core.first.call(null,inst_20100);
var inst_20110 = cljs.core.async.put_BANG_.call(null,inst_20109__$1,inst_20013,done);
var state_20141__$1 = (function (){var statearr_20217 = state_20141;
(statearr_20217[(23)] = inst_20109__$1);

return statearr_20217;
})();
if(cljs.core.truth_(inst_20110)){
var statearr_20218_20280 = state_20141__$1;
(statearr_20218_20280[(1)] = (39));

} else {
var statearr_20219_20281 = state_20141__$1;
(statearr_20219_20281[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20142 === (8))){
var inst_20025 = (state_20141[(13)]);
var inst_20024 = (state_20141[(17)]);
var inst_20027 = (inst_20025 < inst_20024);
var inst_20028 = inst_20027;
var state_20141__$1 = state_20141;
if(cljs.core.truth_(inst_20028)){
var statearr_20220_20282 = state_20141__$1;
(statearr_20220_20282[(1)] = (10));

} else {
var statearr_20221_20283 = state_20141__$1;
(statearr_20221_20283[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto___20229,cs,m,dchan,dctr,done))
;
return ((function (switch__14326__auto__,c__14391__auto___20229,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_20225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20225[(0)] = state_machine__14327__auto__);

(statearr_20225[(1)] = (1));

return statearr_20225;
});
var state_machine__14327__auto____1 = (function (state_20141){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_20141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e20226){if((e20226 instanceof Object)){
var ex__14330__auto__ = e20226;
var statearr_20227_20284 = state_20141;
(statearr_20227_20284[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20285 = state_20141;
state_20141 = G__20285;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_20141){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_20141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto___20229,cs,m,dchan,dctr,done))
})();
var state__14393__auto__ = (function (){var statearr_20228 = f__14392__auto__.call(null);
(statearr_20228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto___20229);

return statearr_20228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto___20229,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj20287 = {};
return obj20287;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__9074__auto__ = m;
if(and__9074__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__9074__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9730__auto__ = (((m == null))?null:m);
return (function (){var or__9086__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9730__auto__)]);
if(or__9086__auto__){
return or__9086__auto__;
} else {
var or__9086__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__9086__auto____$1){
return or__9086__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__9074__auto__ = m;
if(and__9074__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__9074__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__9730__auto__ = (((m == null))?null:m);
return (function (){var or__9086__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9730__auto__)]);
if(or__9086__auto__){
return or__9086__auto__;
} else {
var or__9086__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__9086__auto____$1){
return or__9086__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__9074__auto__ = m;
if(and__9074__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__9074__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__9730__auto__ = (((m == null))?null:m);
return (function (){var or__9086__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9730__auto__)]);
if(or__9086__auto__){
return or__9086__auto__;
} else {
var or__9086__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__9086__auto____$1){
return or__9086__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__9074__auto__ = m;
if(and__9074__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__9074__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__9730__auto__ = (((m == null))?null:m);
return (function (){var or__9086__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9730__auto__)]);
if(or__9086__auto__){
return or__9086__auto__;
} else {
var or__9086__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__9086__auto____$1){
return or__9086__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__9074__auto__ = m;
if(and__9074__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__9074__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__9730__auto__ = (((m == null))?null:m);
return (function (){var or__9086__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9730__auto__)]);
if(or__9086__auto__){
return or__9086__auto__;
} else {
var or__9086__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__9086__auto____$1){
return or__9086__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t20407 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20407 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20408){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20408 = meta20408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20407.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20407.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20407.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20407.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20407.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20407.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20407.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20407.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20409){
var self__ = this;
var _20409__$1 = this;
return self__.meta20408;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20409,meta20408__$1){
var self__ = this;
var _20409__$1 = this;
return (new cljs.core.async.t20407(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20408__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20407.cljs$lang$type = true;

cljs.core.async.t20407.cljs$lang$ctorStr = "cljs.core.async/t20407";

cljs.core.async.t20407.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9673__auto__,writer__9674__auto__,opt__9675__auto__){
return cljs.core._write.call(null,writer__9674__auto__,"cljs.core.async/t20407");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20407 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20407(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20408){
return (new cljs.core.async.t20407(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20408));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20407(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),545,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),534,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mariano/src/notas/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__14391__auto___20526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto___20526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto___20526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20479){
var state_val_20480 = (state_20479[(1)]);
if((state_val_20480 === (7))){
var inst_20423 = (state_20479[(7)]);
var inst_20428 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20423);
var state_20479__$1 = state_20479;
var statearr_20481_20527 = state_20479__$1;
(statearr_20481_20527[(2)] = inst_20428);

(statearr_20481_20527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (20))){
var inst_20438 = (state_20479[(8)]);
var state_20479__$1 = state_20479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20479__$1,(23),out,inst_20438);
} else {
if((state_val_20480 === (1))){
var inst_20413 = (state_20479[(9)]);
var inst_20413__$1 = calc_state.call(null);
var inst_20414 = cljs.core.seq_QMARK_.call(null,inst_20413__$1);
var state_20479__$1 = (function (){var statearr_20482 = state_20479;
(statearr_20482[(9)] = inst_20413__$1);

return statearr_20482;
})();
if(inst_20414){
var statearr_20483_20528 = state_20479__$1;
(statearr_20483_20528[(1)] = (2));

} else {
var statearr_20484_20529 = state_20479__$1;
(statearr_20484_20529[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (24))){
var inst_20431 = (state_20479[(10)]);
var inst_20423 = inst_20431;
var state_20479__$1 = (function (){var statearr_20485 = state_20479;
(statearr_20485[(7)] = inst_20423);

return statearr_20485;
})();
var statearr_20486_20530 = state_20479__$1;
(statearr_20486_20530[(2)] = null);

(statearr_20486_20530[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (4))){
var inst_20413 = (state_20479[(9)]);
var inst_20419 = (state_20479[(2)]);
var inst_20420 = cljs.core.get.call(null,inst_20419,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20421 = cljs.core.get.call(null,inst_20419,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20422 = cljs.core.get.call(null,inst_20419,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20423 = inst_20413;
var state_20479__$1 = (function (){var statearr_20487 = state_20479;
(statearr_20487[(11)] = inst_20420);

(statearr_20487[(7)] = inst_20423);

(statearr_20487[(12)] = inst_20421);

(statearr_20487[(13)] = inst_20422);

return statearr_20487;
})();
var statearr_20488_20531 = state_20479__$1;
(statearr_20488_20531[(2)] = null);

(statearr_20488_20531[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (15))){
var state_20479__$1 = state_20479;
var statearr_20489_20532 = state_20479__$1;
(statearr_20489_20532[(2)] = null);

(statearr_20489_20532[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (21))){
var inst_20431 = (state_20479[(10)]);
var inst_20423 = inst_20431;
var state_20479__$1 = (function (){var statearr_20490 = state_20479;
(statearr_20490[(7)] = inst_20423);

return statearr_20490;
})();
var statearr_20491_20533 = state_20479__$1;
(statearr_20491_20533[(2)] = null);

(statearr_20491_20533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (13))){
var inst_20475 = (state_20479[(2)]);
var state_20479__$1 = state_20479;
var statearr_20492_20534 = state_20479__$1;
(statearr_20492_20534[(2)] = inst_20475);

(statearr_20492_20534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (22))){
var inst_20473 = (state_20479[(2)]);
var state_20479__$1 = state_20479;
var statearr_20493_20535 = state_20479__$1;
(statearr_20493_20535[(2)] = inst_20473);

(statearr_20493_20535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (6))){
var inst_20477 = (state_20479[(2)]);
var state_20479__$1 = state_20479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20479__$1,inst_20477);
} else {
if((state_val_20480 === (25))){
var state_20479__$1 = state_20479;
var statearr_20494_20536 = state_20479__$1;
(statearr_20494_20536[(2)] = null);

(statearr_20494_20536[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (17))){
var inst_20453 = (state_20479[(14)]);
var state_20479__$1 = state_20479;
var statearr_20495_20537 = state_20479__$1;
(statearr_20495_20537[(2)] = inst_20453);

(statearr_20495_20537[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (3))){
var inst_20413 = (state_20479[(9)]);
var state_20479__$1 = state_20479;
var statearr_20496_20538 = state_20479__$1;
(statearr_20496_20538[(2)] = inst_20413);

(statearr_20496_20538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (12))){
var inst_20453 = (state_20479[(14)]);
var inst_20434 = (state_20479[(15)]);
var inst_20439 = (state_20479[(16)]);
var inst_20453__$1 = inst_20434.call(null,inst_20439);
var state_20479__$1 = (function (){var statearr_20497 = state_20479;
(statearr_20497[(14)] = inst_20453__$1);

return statearr_20497;
})();
if(cljs.core.truth_(inst_20453__$1)){
var statearr_20498_20539 = state_20479__$1;
(statearr_20498_20539[(1)] = (17));

} else {
var statearr_20499_20540 = state_20479__$1;
(statearr_20499_20540[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (2))){
var inst_20413 = (state_20479[(9)]);
var inst_20416 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20413);
var state_20479__$1 = state_20479;
var statearr_20500_20541 = state_20479__$1;
(statearr_20500_20541[(2)] = inst_20416);

(statearr_20500_20541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (23))){
var inst_20464 = (state_20479[(2)]);
var state_20479__$1 = state_20479;
if(cljs.core.truth_(inst_20464)){
var statearr_20501_20542 = state_20479__$1;
(statearr_20501_20542[(1)] = (24));

} else {
var statearr_20502_20543 = state_20479__$1;
(statearr_20502_20543[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (19))){
var inst_20461 = (state_20479[(2)]);
var state_20479__$1 = state_20479;
if(cljs.core.truth_(inst_20461)){
var statearr_20503_20544 = state_20479__$1;
(statearr_20503_20544[(1)] = (20));

} else {
var statearr_20504_20545 = state_20479__$1;
(statearr_20504_20545[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (11))){
var inst_20438 = (state_20479[(8)]);
var inst_20444 = (inst_20438 == null);
var state_20479__$1 = state_20479;
if(cljs.core.truth_(inst_20444)){
var statearr_20505_20546 = state_20479__$1;
(statearr_20505_20546[(1)] = (14));

} else {
var statearr_20506_20547 = state_20479__$1;
(statearr_20506_20547[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (9))){
var inst_20431 = (state_20479[(10)]);
var inst_20431__$1 = (state_20479[(2)]);
var inst_20432 = cljs.core.get.call(null,inst_20431__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20433 = cljs.core.get.call(null,inst_20431__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20434 = cljs.core.get.call(null,inst_20431__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20479__$1 = (function (){var statearr_20507 = state_20479;
(statearr_20507[(17)] = inst_20433);

(statearr_20507[(15)] = inst_20434);

(statearr_20507[(10)] = inst_20431__$1);

return statearr_20507;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20479__$1,(10),inst_20432);
} else {
if((state_val_20480 === (5))){
var inst_20423 = (state_20479[(7)]);
var inst_20426 = cljs.core.seq_QMARK_.call(null,inst_20423);
var state_20479__$1 = state_20479;
if(inst_20426){
var statearr_20508_20548 = state_20479__$1;
(statearr_20508_20548[(1)] = (7));

} else {
var statearr_20509_20549 = state_20479__$1;
(statearr_20509_20549[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (14))){
var inst_20439 = (state_20479[(16)]);
var inst_20446 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20439);
var state_20479__$1 = state_20479;
var statearr_20510_20550 = state_20479__$1;
(statearr_20510_20550[(2)] = inst_20446);

(statearr_20510_20550[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (26))){
var inst_20469 = (state_20479[(2)]);
var state_20479__$1 = state_20479;
var statearr_20511_20551 = state_20479__$1;
(statearr_20511_20551[(2)] = inst_20469);

(statearr_20511_20551[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (16))){
var inst_20449 = (state_20479[(2)]);
var inst_20450 = calc_state.call(null);
var inst_20423 = inst_20450;
var state_20479__$1 = (function (){var statearr_20512 = state_20479;
(statearr_20512[(7)] = inst_20423);

(statearr_20512[(18)] = inst_20449);

return statearr_20512;
})();
var statearr_20513_20552 = state_20479__$1;
(statearr_20513_20552[(2)] = null);

(statearr_20513_20552[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (10))){
var inst_20438 = (state_20479[(8)]);
var inst_20439 = (state_20479[(16)]);
var inst_20437 = (state_20479[(2)]);
var inst_20438__$1 = cljs.core.nth.call(null,inst_20437,(0),null);
var inst_20439__$1 = cljs.core.nth.call(null,inst_20437,(1),null);
var inst_20440 = (inst_20438__$1 == null);
var inst_20441 = cljs.core._EQ_.call(null,inst_20439__$1,change);
var inst_20442 = (inst_20440) || (inst_20441);
var state_20479__$1 = (function (){var statearr_20514 = state_20479;
(statearr_20514[(8)] = inst_20438__$1);

(statearr_20514[(16)] = inst_20439__$1);

return statearr_20514;
})();
if(cljs.core.truth_(inst_20442)){
var statearr_20515_20553 = state_20479__$1;
(statearr_20515_20553[(1)] = (11));

} else {
var statearr_20516_20554 = state_20479__$1;
(statearr_20516_20554[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (18))){
var inst_20433 = (state_20479[(17)]);
var inst_20434 = (state_20479[(15)]);
var inst_20439 = (state_20479[(16)]);
var inst_20456 = cljs.core.empty_QMARK_.call(null,inst_20434);
var inst_20457 = inst_20433.call(null,inst_20439);
var inst_20458 = cljs.core.not.call(null,inst_20457);
var inst_20459 = (inst_20456) && (inst_20458);
var state_20479__$1 = state_20479;
var statearr_20517_20555 = state_20479__$1;
(statearr_20517_20555[(2)] = inst_20459);

(statearr_20517_20555[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20480 === (8))){
var inst_20423 = (state_20479[(7)]);
var state_20479__$1 = state_20479;
var statearr_20518_20556 = state_20479__$1;
(statearr_20518_20556[(2)] = inst_20423);

(statearr_20518_20556[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto___20526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14326__auto__,c__14391__auto___20526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_20522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20522[(0)] = state_machine__14327__auto__);

(statearr_20522[(1)] = (1));

return statearr_20522;
});
var state_machine__14327__auto____1 = (function (state_20479){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_20479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e20523){if((e20523 instanceof Object)){
var ex__14330__auto__ = e20523;
var statearr_20524_20557 = state_20479;
(statearr_20524_20557[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20558 = state_20479;
state_20479 = G__20558;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_20479){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_20479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto___20526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14393__auto__ = (function (){var statearr_20525 = f__14392__auto__.call(null);
(statearr_20525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto___20526);

return statearr_20525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto___20526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj20560 = {};
return obj20560;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__9074__auto__ = p;
if(and__9074__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__9074__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__9730__auto__ = (((p == null))?null:p);
return (function (){var or__9086__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9730__auto__)]);
if(or__9086__auto__){
return or__9086__auto__;
} else {
var or__9086__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__9086__auto____$1){
return or__9086__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__9074__auto__ = p;
if(and__9074__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__9074__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__9730__auto__ = (((p == null))?null:p);
return (function (){var or__9086__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9730__auto__)]);
if(or__9086__auto__){
return or__9086__auto__;
} else {
var or__9086__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__9086__auto____$1){
return or__9086__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__9074__auto__ = p;
if(and__9074__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__9074__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9730__auto__ = (((p == null))?null:p);
return (function (){var or__9086__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9730__auto__)]);
if(or__9086__auto__){
return or__9086__auto__;
} else {
var or__9086__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__9086__auto____$1){
return or__9086__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__9074__auto__ = p;
if(and__9074__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__9074__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__9730__auto__ = (((p == null))?null:p);
return (function (){var or__9086__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9730__auto__)]);
if(or__9086__auto__){
return or__9086__auto__;
} else {
var or__9086__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__9086__auto____$1){
return or__9086__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__9086__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__9086__auto__)){
return or__9086__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9086__auto__,mults){
return (function (p1__20561_SHARP_){
if(cljs.core.truth_(p1__20561_SHARP_.call(null,topic))){
return p1__20561_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20561_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9086__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20676 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20676 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20677){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20677 = meta20677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20676.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20676.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20676.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t20676.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20676.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20676.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20676.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20678){
var self__ = this;
var _20678__$1 = this;
return self__.meta20677;
});})(mults,ensure_mult))
;

cljs.core.async.t20676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20678,meta20677__$1){
var self__ = this;
var _20678__$1 = this;
return (new cljs.core.async.t20676(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20677__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20676.cljs$lang$type = true;

cljs.core.async.t20676.cljs$lang$ctorStr = "cljs.core.async/t20676";

cljs.core.async.t20676.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9673__auto__,writer__9674__auto__,opt__9675__auto__){
return cljs.core._write.call(null,writer__9674__auto__,"cljs.core.async/t20676");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20676 = ((function (mults,ensure_mult){
return (function __GT_t20676(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20677){
return (new cljs.core.async.t20676(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20677));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20676(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),638,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),626,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mariano/src/notas/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__14391__auto___20790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto___20790,mults,ensure_mult,p){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto___20790,mults,ensure_mult,p){
return (function (state_20746){
var state_val_20747 = (state_20746[(1)]);
if((state_val_20747 === (7))){
var inst_20742 = (state_20746[(2)]);
var state_20746__$1 = state_20746;
var statearr_20748_20791 = state_20746__$1;
(statearr_20748_20791[(2)] = inst_20742);

(statearr_20748_20791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (20))){
var state_20746__$1 = state_20746;
var statearr_20749_20792 = state_20746__$1;
(statearr_20749_20792[(2)] = null);

(statearr_20749_20792[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (1))){
var state_20746__$1 = state_20746;
var statearr_20750_20793 = state_20746__$1;
(statearr_20750_20793[(2)] = null);

(statearr_20750_20793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (4))){
var inst_20681 = (state_20746[(7)]);
var inst_20681__$1 = (state_20746[(2)]);
var inst_20682 = (inst_20681__$1 == null);
var state_20746__$1 = (function (){var statearr_20751 = state_20746;
(statearr_20751[(7)] = inst_20681__$1);

return statearr_20751;
})();
if(cljs.core.truth_(inst_20682)){
var statearr_20752_20794 = state_20746__$1;
(statearr_20752_20794[(1)] = (5));

} else {
var statearr_20753_20795 = state_20746__$1;
(statearr_20753_20795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (15))){
var inst_20723 = (state_20746[(2)]);
var state_20746__$1 = state_20746;
var statearr_20754_20796 = state_20746__$1;
(statearr_20754_20796[(2)] = inst_20723);

(statearr_20754_20796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (21))){
var inst_20729 = (state_20746[(8)]);
var inst_20737 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20729);
var state_20746__$1 = state_20746;
var statearr_20755_20797 = state_20746__$1;
(statearr_20755_20797[(2)] = inst_20737);

(statearr_20755_20797[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (13))){
var inst_20705 = (state_20746[(9)]);
var inst_20707 = cljs.core.chunked_seq_QMARK_.call(null,inst_20705);
var state_20746__$1 = state_20746;
if(inst_20707){
var statearr_20756_20798 = state_20746__$1;
(statearr_20756_20798[(1)] = (16));

} else {
var statearr_20757_20799 = state_20746__$1;
(statearr_20757_20799[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (22))){
var inst_20739 = (state_20746[(2)]);
var state_20746__$1 = (function (){var statearr_20758 = state_20746;
(statearr_20758[(10)] = inst_20739);

return statearr_20758;
})();
var statearr_20759_20800 = state_20746__$1;
(statearr_20759_20800[(2)] = null);

(statearr_20759_20800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (6))){
var inst_20681 = (state_20746[(7)]);
var inst_20729 = (state_20746[(8)]);
var inst_20729__$1 = topic_fn.call(null,inst_20681);
var inst_20730 = cljs.core.deref.call(null,mults);
var inst_20731 = cljs.core.get.call(null,inst_20730,inst_20729__$1);
var inst_20732 = cljs.core.async.muxch_STAR_.call(null,inst_20731);
var state_20746__$1 = (function (){var statearr_20760 = state_20746;
(statearr_20760[(8)] = inst_20729__$1);

return statearr_20760;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20746__$1,(19),inst_20732,inst_20681);
} else {
if((state_val_20747 === (17))){
var inst_20705 = (state_20746[(9)]);
var inst_20714 = cljs.core.first.call(null,inst_20705);
var inst_20715 = cljs.core.async.muxch_STAR_.call(null,inst_20714);
var inst_20716 = cljs.core.async.close_BANG_.call(null,inst_20715);
var inst_20717 = cljs.core.next.call(null,inst_20705);
var inst_20691 = inst_20717;
var inst_20692 = null;
var inst_20693 = (0);
var inst_20694 = (0);
var state_20746__$1 = (function (){var statearr_20761 = state_20746;
(statearr_20761[(11)] = inst_20716);

(statearr_20761[(12)] = inst_20693);

(statearr_20761[(13)] = inst_20692);

(statearr_20761[(14)] = inst_20691);

(statearr_20761[(15)] = inst_20694);

return statearr_20761;
})();
var statearr_20762_20801 = state_20746__$1;
(statearr_20762_20801[(2)] = null);

(statearr_20762_20801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (3))){
var inst_20744 = (state_20746[(2)]);
var state_20746__$1 = state_20746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20746__$1,inst_20744);
} else {
if((state_val_20747 === (12))){
var inst_20725 = (state_20746[(2)]);
var state_20746__$1 = state_20746;
var statearr_20763_20802 = state_20746__$1;
(statearr_20763_20802[(2)] = inst_20725);

(statearr_20763_20802[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (2))){
var state_20746__$1 = state_20746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20746__$1,(4),ch);
} else {
if((state_val_20747 === (19))){
var inst_20734 = (state_20746[(2)]);
var state_20746__$1 = state_20746;
if(cljs.core.truth_(inst_20734)){
var statearr_20764_20803 = state_20746__$1;
(statearr_20764_20803[(1)] = (20));

} else {
var statearr_20765_20804 = state_20746__$1;
(statearr_20765_20804[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (11))){
var inst_20705 = (state_20746[(9)]);
var inst_20691 = (state_20746[(14)]);
var inst_20705__$1 = cljs.core.seq.call(null,inst_20691);
var state_20746__$1 = (function (){var statearr_20766 = state_20746;
(statearr_20766[(9)] = inst_20705__$1);

return statearr_20766;
})();
if(inst_20705__$1){
var statearr_20767_20805 = state_20746__$1;
(statearr_20767_20805[(1)] = (13));

} else {
var statearr_20768_20806 = state_20746__$1;
(statearr_20768_20806[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (9))){
var inst_20727 = (state_20746[(2)]);
var state_20746__$1 = state_20746;
var statearr_20769_20807 = state_20746__$1;
(statearr_20769_20807[(2)] = inst_20727);

(statearr_20769_20807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (5))){
var inst_20688 = cljs.core.deref.call(null,mults);
var inst_20689 = cljs.core.vals.call(null,inst_20688);
var inst_20690 = cljs.core.seq.call(null,inst_20689);
var inst_20691 = inst_20690;
var inst_20692 = null;
var inst_20693 = (0);
var inst_20694 = (0);
var state_20746__$1 = (function (){var statearr_20770 = state_20746;
(statearr_20770[(12)] = inst_20693);

(statearr_20770[(13)] = inst_20692);

(statearr_20770[(14)] = inst_20691);

(statearr_20770[(15)] = inst_20694);

return statearr_20770;
})();
var statearr_20771_20808 = state_20746__$1;
(statearr_20771_20808[(2)] = null);

(statearr_20771_20808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (14))){
var state_20746__$1 = state_20746;
var statearr_20775_20809 = state_20746__$1;
(statearr_20775_20809[(2)] = null);

(statearr_20775_20809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (16))){
var inst_20705 = (state_20746[(9)]);
var inst_20709 = cljs.core.chunk_first.call(null,inst_20705);
var inst_20710 = cljs.core.chunk_rest.call(null,inst_20705);
var inst_20711 = cljs.core.count.call(null,inst_20709);
var inst_20691 = inst_20710;
var inst_20692 = inst_20709;
var inst_20693 = inst_20711;
var inst_20694 = (0);
var state_20746__$1 = (function (){var statearr_20776 = state_20746;
(statearr_20776[(12)] = inst_20693);

(statearr_20776[(13)] = inst_20692);

(statearr_20776[(14)] = inst_20691);

(statearr_20776[(15)] = inst_20694);

return statearr_20776;
})();
var statearr_20777_20810 = state_20746__$1;
(statearr_20777_20810[(2)] = null);

(statearr_20777_20810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (10))){
var inst_20693 = (state_20746[(12)]);
var inst_20692 = (state_20746[(13)]);
var inst_20691 = (state_20746[(14)]);
var inst_20694 = (state_20746[(15)]);
var inst_20699 = cljs.core._nth.call(null,inst_20692,inst_20694);
var inst_20700 = cljs.core.async.muxch_STAR_.call(null,inst_20699);
var inst_20701 = cljs.core.async.close_BANG_.call(null,inst_20700);
var inst_20702 = (inst_20694 + (1));
var tmp20772 = inst_20693;
var tmp20773 = inst_20692;
var tmp20774 = inst_20691;
var inst_20691__$1 = tmp20774;
var inst_20692__$1 = tmp20773;
var inst_20693__$1 = tmp20772;
var inst_20694__$1 = inst_20702;
var state_20746__$1 = (function (){var statearr_20778 = state_20746;
(statearr_20778[(12)] = inst_20693__$1);

(statearr_20778[(13)] = inst_20692__$1);

(statearr_20778[(14)] = inst_20691__$1);

(statearr_20778[(16)] = inst_20701);

(statearr_20778[(15)] = inst_20694__$1);

return statearr_20778;
})();
var statearr_20779_20811 = state_20746__$1;
(statearr_20779_20811[(2)] = null);

(statearr_20779_20811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (18))){
var inst_20720 = (state_20746[(2)]);
var state_20746__$1 = state_20746;
var statearr_20780_20812 = state_20746__$1;
(statearr_20780_20812[(2)] = inst_20720);

(statearr_20780_20812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20747 === (8))){
var inst_20693 = (state_20746[(12)]);
var inst_20694 = (state_20746[(15)]);
var inst_20696 = (inst_20694 < inst_20693);
var inst_20697 = inst_20696;
var state_20746__$1 = state_20746;
if(cljs.core.truth_(inst_20697)){
var statearr_20781_20813 = state_20746__$1;
(statearr_20781_20813[(1)] = (10));

} else {
var statearr_20782_20814 = state_20746__$1;
(statearr_20782_20814[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto___20790,mults,ensure_mult,p))
;
return ((function (switch__14326__auto__,c__14391__auto___20790,mults,ensure_mult,p){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_20786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20786[(0)] = state_machine__14327__auto__);

(statearr_20786[(1)] = (1));

return statearr_20786;
});
var state_machine__14327__auto____1 = (function (state_20746){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_20746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e20787){if((e20787 instanceof Object)){
var ex__14330__auto__ = e20787;
var statearr_20788_20815 = state_20746;
(statearr_20788_20815[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20816 = state_20746;
state_20746 = G__20816;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_20746){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_20746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto___20790,mults,ensure_mult,p))
})();
var state__14393__auto__ = (function (){var statearr_20789 = f__14392__auto__.call(null);
(statearr_20789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto___20790);

return statearr_20789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto___20790,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__14391__auto___20953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto___20953,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto___20953,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20923){
var state_val_20924 = (state_20923[(1)]);
if((state_val_20924 === (7))){
var state_20923__$1 = state_20923;
var statearr_20925_20954 = state_20923__$1;
(statearr_20925_20954[(2)] = null);

(statearr_20925_20954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20924 === (1))){
var state_20923__$1 = state_20923;
var statearr_20926_20955 = state_20923__$1;
(statearr_20926_20955[(2)] = null);

(statearr_20926_20955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20924 === (4))){
var inst_20887 = (state_20923[(7)]);
var inst_20889 = (inst_20887 < cnt);
var state_20923__$1 = state_20923;
if(cljs.core.truth_(inst_20889)){
var statearr_20927_20956 = state_20923__$1;
(statearr_20927_20956[(1)] = (6));

} else {
var statearr_20928_20957 = state_20923__$1;
(statearr_20928_20957[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20924 === (15))){
var inst_20919 = (state_20923[(2)]);
var state_20923__$1 = state_20923;
var statearr_20929_20958 = state_20923__$1;
(statearr_20929_20958[(2)] = inst_20919);

(statearr_20929_20958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20924 === (13))){
var inst_20912 = cljs.core.async.close_BANG_.call(null,out);
var state_20923__$1 = state_20923;
var statearr_20930_20959 = state_20923__$1;
(statearr_20930_20959[(2)] = inst_20912);

(statearr_20930_20959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20924 === (6))){
var state_20923__$1 = state_20923;
var statearr_20931_20960 = state_20923__$1;
(statearr_20931_20960[(2)] = null);

(statearr_20931_20960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20924 === (3))){
var inst_20921 = (state_20923[(2)]);
var state_20923__$1 = state_20923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20923__$1,inst_20921);
} else {
if((state_val_20924 === (12))){
var inst_20909 = (state_20923[(8)]);
var inst_20909__$1 = (state_20923[(2)]);
var inst_20910 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20909__$1);
var state_20923__$1 = (function (){var statearr_20932 = state_20923;
(statearr_20932[(8)] = inst_20909__$1);

return statearr_20932;
})();
if(cljs.core.truth_(inst_20910)){
var statearr_20933_20961 = state_20923__$1;
(statearr_20933_20961[(1)] = (13));

} else {
var statearr_20934_20962 = state_20923__$1;
(statearr_20934_20962[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20924 === (2))){
var inst_20886 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20887 = (0);
var state_20923__$1 = (function (){var statearr_20935 = state_20923;
(statearr_20935[(7)] = inst_20887);

(statearr_20935[(9)] = inst_20886);

return statearr_20935;
})();
var statearr_20936_20963 = state_20923__$1;
(statearr_20936_20963[(2)] = null);

(statearr_20936_20963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20924 === (11))){
var inst_20887 = (state_20923[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20923,(10),Object,null,(9));
var inst_20896 = chs__$1.call(null,inst_20887);
var inst_20897 = done.call(null,inst_20887);
var inst_20898 = cljs.core.async.take_BANG_.call(null,inst_20896,inst_20897);
var state_20923__$1 = state_20923;
var statearr_20937_20964 = state_20923__$1;
(statearr_20937_20964[(2)] = inst_20898);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20923__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20924 === (9))){
var inst_20887 = (state_20923[(7)]);
var inst_20900 = (state_20923[(2)]);
var inst_20901 = (inst_20887 + (1));
var inst_20887__$1 = inst_20901;
var state_20923__$1 = (function (){var statearr_20938 = state_20923;
(statearr_20938[(7)] = inst_20887__$1);

(statearr_20938[(10)] = inst_20900);

return statearr_20938;
})();
var statearr_20939_20965 = state_20923__$1;
(statearr_20939_20965[(2)] = null);

(statearr_20939_20965[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20924 === (5))){
var inst_20907 = (state_20923[(2)]);
var state_20923__$1 = (function (){var statearr_20940 = state_20923;
(statearr_20940[(11)] = inst_20907);

return statearr_20940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20923__$1,(12),dchan);
} else {
if((state_val_20924 === (14))){
var inst_20909 = (state_20923[(8)]);
var inst_20914 = cljs.core.apply.call(null,f,inst_20909);
var state_20923__$1 = state_20923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20923__$1,(16),out,inst_20914);
} else {
if((state_val_20924 === (16))){
var inst_20916 = (state_20923[(2)]);
var state_20923__$1 = (function (){var statearr_20941 = state_20923;
(statearr_20941[(12)] = inst_20916);

return statearr_20941;
})();
var statearr_20942_20966 = state_20923__$1;
(statearr_20942_20966[(2)] = null);

(statearr_20942_20966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20924 === (10))){
var inst_20891 = (state_20923[(2)]);
var inst_20892 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20923__$1 = (function (){var statearr_20943 = state_20923;
(statearr_20943[(13)] = inst_20891);

return statearr_20943;
})();
var statearr_20944_20967 = state_20923__$1;
(statearr_20944_20967[(2)] = inst_20892);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20923__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20924 === (8))){
var inst_20905 = (state_20923[(2)]);
var state_20923__$1 = state_20923;
var statearr_20945_20968 = state_20923__$1;
(statearr_20945_20968[(2)] = inst_20905);

(statearr_20945_20968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto___20953,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14326__auto__,c__14391__auto___20953,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_20949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20949[(0)] = state_machine__14327__auto__);

(statearr_20949[(1)] = (1));

return statearr_20949;
});
var state_machine__14327__auto____1 = (function (state_20923){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_20923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e20950){if((e20950 instanceof Object)){
var ex__14330__auto__ = e20950;
var statearr_20951_20969 = state_20923;
(statearr_20951_20969[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20970 = state_20923;
state_20923 = G__20970;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_20923){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_20923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto___20953,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14393__auto__ = (function (){var statearr_20952 = f__14392__auto__.call(null);
(statearr_20952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto___20953);

return statearr_20952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto___20953,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14391__auto___21078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto___21078,out){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto___21078,out){
return (function (state_21054){
var state_val_21055 = (state_21054[(1)]);
if((state_val_21055 === (7))){
var inst_21033 = (state_21054[(7)]);
var inst_21034 = (state_21054[(8)]);
var inst_21033__$1 = (state_21054[(2)]);
var inst_21034__$1 = cljs.core.nth.call(null,inst_21033__$1,(0),null);
var inst_21035 = cljs.core.nth.call(null,inst_21033__$1,(1),null);
var inst_21036 = (inst_21034__$1 == null);
var state_21054__$1 = (function (){var statearr_21056 = state_21054;
(statearr_21056[(7)] = inst_21033__$1);

(statearr_21056[(9)] = inst_21035);

(statearr_21056[(8)] = inst_21034__$1);

return statearr_21056;
})();
if(cljs.core.truth_(inst_21036)){
var statearr_21057_21079 = state_21054__$1;
(statearr_21057_21079[(1)] = (8));

} else {
var statearr_21058_21080 = state_21054__$1;
(statearr_21058_21080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (1))){
var inst_21025 = cljs.core.vec.call(null,chs);
var inst_21026 = inst_21025;
var state_21054__$1 = (function (){var statearr_21059 = state_21054;
(statearr_21059[(10)] = inst_21026);

return statearr_21059;
})();
var statearr_21060_21081 = state_21054__$1;
(statearr_21060_21081[(2)] = null);

(statearr_21060_21081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (4))){
var inst_21026 = (state_21054[(10)]);
var state_21054__$1 = state_21054;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21054__$1,(7),inst_21026);
} else {
if((state_val_21055 === (6))){
var inst_21050 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
var statearr_21061_21082 = state_21054__$1;
(statearr_21061_21082[(2)] = inst_21050);

(statearr_21061_21082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (3))){
var inst_21052 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21054__$1,inst_21052);
} else {
if((state_val_21055 === (2))){
var inst_21026 = (state_21054[(10)]);
var inst_21028 = cljs.core.count.call(null,inst_21026);
var inst_21029 = (inst_21028 > (0));
var state_21054__$1 = state_21054;
if(cljs.core.truth_(inst_21029)){
var statearr_21063_21083 = state_21054__$1;
(statearr_21063_21083[(1)] = (4));

} else {
var statearr_21064_21084 = state_21054__$1;
(statearr_21064_21084[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (11))){
var inst_21026 = (state_21054[(10)]);
var inst_21043 = (state_21054[(2)]);
var tmp21062 = inst_21026;
var inst_21026__$1 = tmp21062;
var state_21054__$1 = (function (){var statearr_21065 = state_21054;
(statearr_21065[(11)] = inst_21043);

(statearr_21065[(10)] = inst_21026__$1);

return statearr_21065;
})();
var statearr_21066_21085 = state_21054__$1;
(statearr_21066_21085[(2)] = null);

(statearr_21066_21085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (9))){
var inst_21034 = (state_21054[(8)]);
var state_21054__$1 = state_21054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21054__$1,(11),out,inst_21034);
} else {
if((state_val_21055 === (5))){
var inst_21048 = cljs.core.async.close_BANG_.call(null,out);
var state_21054__$1 = state_21054;
var statearr_21067_21086 = state_21054__$1;
(statearr_21067_21086[(2)] = inst_21048);

(statearr_21067_21086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (10))){
var inst_21046 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
var statearr_21068_21087 = state_21054__$1;
(statearr_21068_21087[(2)] = inst_21046);

(statearr_21068_21087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (8))){
var inst_21033 = (state_21054[(7)]);
var inst_21035 = (state_21054[(9)]);
var inst_21034 = (state_21054[(8)]);
var inst_21026 = (state_21054[(10)]);
var inst_21038 = (function (){var c = inst_21035;
var v = inst_21034;
var vec__21031 = inst_21033;
var cs = inst_21026;
return ((function (c,v,vec__21031,cs,inst_21033,inst_21035,inst_21034,inst_21026,state_val_21055,c__14391__auto___21078,out){
return (function (p1__20971_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20971_SHARP_);
});
;})(c,v,vec__21031,cs,inst_21033,inst_21035,inst_21034,inst_21026,state_val_21055,c__14391__auto___21078,out))
})();
var inst_21039 = cljs.core.filterv.call(null,inst_21038,inst_21026);
var inst_21026__$1 = inst_21039;
var state_21054__$1 = (function (){var statearr_21069 = state_21054;
(statearr_21069[(10)] = inst_21026__$1);

return statearr_21069;
})();
var statearr_21070_21088 = state_21054__$1;
(statearr_21070_21088[(2)] = null);

(statearr_21070_21088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto___21078,out))
;
return ((function (switch__14326__auto__,c__14391__auto___21078,out){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_21074 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21074[(0)] = state_machine__14327__auto__);

(statearr_21074[(1)] = (1));

return statearr_21074;
});
var state_machine__14327__auto____1 = (function (state_21054){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_21054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e21075){if((e21075 instanceof Object)){
var ex__14330__auto__ = e21075;
var statearr_21076_21089 = state_21054;
(statearr_21076_21089[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21090 = state_21054;
state_21054 = G__21090;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_21054){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_21054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto___21078,out))
})();
var state__14393__auto__ = (function (){var statearr_21077 = f__14392__auto__.call(null);
(statearr_21077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto___21078);

return statearr_21077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto___21078,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14391__auto___21183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto___21183,out){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto___21183,out){
return (function (state_21160){
var state_val_21161 = (state_21160[(1)]);
if((state_val_21161 === (7))){
var inst_21142 = (state_21160[(7)]);
var inst_21142__$1 = (state_21160[(2)]);
var inst_21143 = (inst_21142__$1 == null);
var inst_21144 = cljs.core.not.call(null,inst_21143);
var state_21160__$1 = (function (){var statearr_21162 = state_21160;
(statearr_21162[(7)] = inst_21142__$1);

return statearr_21162;
})();
if(inst_21144){
var statearr_21163_21184 = state_21160__$1;
(statearr_21163_21184[(1)] = (8));

} else {
var statearr_21164_21185 = state_21160__$1;
(statearr_21164_21185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21161 === (1))){
var inst_21137 = (0);
var state_21160__$1 = (function (){var statearr_21165 = state_21160;
(statearr_21165[(8)] = inst_21137);

return statearr_21165;
})();
var statearr_21166_21186 = state_21160__$1;
(statearr_21166_21186[(2)] = null);

(statearr_21166_21186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21161 === (4))){
var state_21160__$1 = state_21160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21160__$1,(7),ch);
} else {
if((state_val_21161 === (6))){
var inst_21155 = (state_21160[(2)]);
var state_21160__$1 = state_21160;
var statearr_21167_21187 = state_21160__$1;
(statearr_21167_21187[(2)] = inst_21155);

(statearr_21167_21187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21161 === (3))){
var inst_21157 = (state_21160[(2)]);
var inst_21158 = cljs.core.async.close_BANG_.call(null,out);
var state_21160__$1 = (function (){var statearr_21168 = state_21160;
(statearr_21168[(9)] = inst_21157);

return statearr_21168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21160__$1,inst_21158);
} else {
if((state_val_21161 === (2))){
var inst_21137 = (state_21160[(8)]);
var inst_21139 = (inst_21137 < n);
var state_21160__$1 = state_21160;
if(cljs.core.truth_(inst_21139)){
var statearr_21169_21188 = state_21160__$1;
(statearr_21169_21188[(1)] = (4));

} else {
var statearr_21170_21189 = state_21160__$1;
(statearr_21170_21189[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21161 === (11))){
var inst_21137 = (state_21160[(8)]);
var inst_21147 = (state_21160[(2)]);
var inst_21148 = (inst_21137 + (1));
var inst_21137__$1 = inst_21148;
var state_21160__$1 = (function (){var statearr_21171 = state_21160;
(statearr_21171[(8)] = inst_21137__$1);

(statearr_21171[(10)] = inst_21147);

return statearr_21171;
})();
var statearr_21172_21190 = state_21160__$1;
(statearr_21172_21190[(2)] = null);

(statearr_21172_21190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21161 === (9))){
var state_21160__$1 = state_21160;
var statearr_21173_21191 = state_21160__$1;
(statearr_21173_21191[(2)] = null);

(statearr_21173_21191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21161 === (5))){
var state_21160__$1 = state_21160;
var statearr_21174_21192 = state_21160__$1;
(statearr_21174_21192[(2)] = null);

(statearr_21174_21192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21161 === (10))){
var inst_21152 = (state_21160[(2)]);
var state_21160__$1 = state_21160;
var statearr_21175_21193 = state_21160__$1;
(statearr_21175_21193[(2)] = inst_21152);

(statearr_21175_21193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21161 === (8))){
var inst_21142 = (state_21160[(7)]);
var state_21160__$1 = state_21160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21160__$1,(11),out,inst_21142);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto___21183,out))
;
return ((function (switch__14326__auto__,c__14391__auto___21183,out){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_21179 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21179[(0)] = state_machine__14327__auto__);

(statearr_21179[(1)] = (1));

return statearr_21179;
});
var state_machine__14327__auto____1 = (function (state_21160){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_21160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e21180){if((e21180 instanceof Object)){
var ex__14330__auto__ = e21180;
var statearr_21181_21194 = state_21160;
(statearr_21181_21194[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21195 = state_21160;
state_21160 = G__21195;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_21160){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_21160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto___21183,out))
})();
var state__14393__auto__ = (function (){var statearr_21182 = f__14392__auto__.call(null);
(statearr_21182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto___21183);

return statearr_21182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto___21183,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14391__auto___21292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto___21292,out){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto___21292,out){
return (function (state_21267){
var state_val_21268 = (state_21267[(1)]);
if((state_val_21268 === (7))){
var inst_21262 = (state_21267[(2)]);
var state_21267__$1 = state_21267;
var statearr_21269_21293 = state_21267__$1;
(statearr_21269_21293[(2)] = inst_21262);

(statearr_21269_21293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (1))){
var inst_21244 = null;
var state_21267__$1 = (function (){var statearr_21270 = state_21267;
(statearr_21270[(7)] = inst_21244);

return statearr_21270;
})();
var statearr_21271_21294 = state_21267__$1;
(statearr_21271_21294[(2)] = null);

(statearr_21271_21294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (4))){
var inst_21247 = (state_21267[(8)]);
var inst_21247__$1 = (state_21267[(2)]);
var inst_21248 = (inst_21247__$1 == null);
var inst_21249 = cljs.core.not.call(null,inst_21248);
var state_21267__$1 = (function (){var statearr_21272 = state_21267;
(statearr_21272[(8)] = inst_21247__$1);

return statearr_21272;
})();
if(inst_21249){
var statearr_21273_21295 = state_21267__$1;
(statearr_21273_21295[(1)] = (5));

} else {
var statearr_21274_21296 = state_21267__$1;
(statearr_21274_21296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (6))){
var state_21267__$1 = state_21267;
var statearr_21275_21297 = state_21267__$1;
(statearr_21275_21297[(2)] = null);

(statearr_21275_21297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (3))){
var inst_21264 = (state_21267[(2)]);
var inst_21265 = cljs.core.async.close_BANG_.call(null,out);
var state_21267__$1 = (function (){var statearr_21276 = state_21267;
(statearr_21276[(9)] = inst_21264);

return statearr_21276;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21267__$1,inst_21265);
} else {
if((state_val_21268 === (2))){
var state_21267__$1 = state_21267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21267__$1,(4),ch);
} else {
if((state_val_21268 === (11))){
var inst_21247 = (state_21267[(8)]);
var inst_21256 = (state_21267[(2)]);
var inst_21244 = inst_21247;
var state_21267__$1 = (function (){var statearr_21277 = state_21267;
(statearr_21277[(7)] = inst_21244);

(statearr_21277[(10)] = inst_21256);

return statearr_21277;
})();
var statearr_21278_21298 = state_21267__$1;
(statearr_21278_21298[(2)] = null);

(statearr_21278_21298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (9))){
var inst_21247 = (state_21267[(8)]);
var state_21267__$1 = state_21267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21267__$1,(11),out,inst_21247);
} else {
if((state_val_21268 === (5))){
var inst_21244 = (state_21267[(7)]);
var inst_21247 = (state_21267[(8)]);
var inst_21251 = cljs.core._EQ_.call(null,inst_21247,inst_21244);
var state_21267__$1 = state_21267;
if(inst_21251){
var statearr_21280_21299 = state_21267__$1;
(statearr_21280_21299[(1)] = (8));

} else {
var statearr_21281_21300 = state_21267__$1;
(statearr_21281_21300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (10))){
var inst_21259 = (state_21267[(2)]);
var state_21267__$1 = state_21267;
var statearr_21282_21301 = state_21267__$1;
(statearr_21282_21301[(2)] = inst_21259);

(statearr_21282_21301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21268 === (8))){
var inst_21244 = (state_21267[(7)]);
var tmp21279 = inst_21244;
var inst_21244__$1 = tmp21279;
var state_21267__$1 = (function (){var statearr_21283 = state_21267;
(statearr_21283[(7)] = inst_21244__$1);

return statearr_21283;
})();
var statearr_21284_21302 = state_21267__$1;
(statearr_21284_21302[(2)] = null);

(statearr_21284_21302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto___21292,out))
;
return ((function (switch__14326__auto__,c__14391__auto___21292,out){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_21288 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21288[(0)] = state_machine__14327__auto__);

(statearr_21288[(1)] = (1));

return statearr_21288;
});
var state_machine__14327__auto____1 = (function (state_21267){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_21267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e21289){if((e21289 instanceof Object)){
var ex__14330__auto__ = e21289;
var statearr_21290_21303 = state_21267;
(statearr_21290_21303[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21304 = state_21267;
state_21267 = G__21304;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_21267){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_21267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto___21292,out))
})();
var state__14393__auto__ = (function (){var statearr_21291 = f__14392__auto__.call(null);
(statearr_21291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto___21292);

return statearr_21291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto___21292,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14391__auto___21439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto___21439,out){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto___21439,out){
return (function (state_21409){
var state_val_21410 = (state_21409[(1)]);
if((state_val_21410 === (7))){
var inst_21405 = (state_21409[(2)]);
var state_21409__$1 = state_21409;
var statearr_21411_21440 = state_21409__$1;
(statearr_21411_21440[(2)] = inst_21405);

(statearr_21411_21440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21410 === (1))){
var inst_21372 = (new Array(n));
var inst_21373 = inst_21372;
var inst_21374 = (0);
var state_21409__$1 = (function (){var statearr_21412 = state_21409;
(statearr_21412[(7)] = inst_21373);

(statearr_21412[(8)] = inst_21374);

return statearr_21412;
})();
var statearr_21413_21441 = state_21409__$1;
(statearr_21413_21441[(2)] = null);

(statearr_21413_21441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21410 === (4))){
var inst_21377 = (state_21409[(9)]);
var inst_21377__$1 = (state_21409[(2)]);
var inst_21378 = (inst_21377__$1 == null);
var inst_21379 = cljs.core.not.call(null,inst_21378);
var state_21409__$1 = (function (){var statearr_21414 = state_21409;
(statearr_21414[(9)] = inst_21377__$1);

return statearr_21414;
})();
if(inst_21379){
var statearr_21415_21442 = state_21409__$1;
(statearr_21415_21442[(1)] = (5));

} else {
var statearr_21416_21443 = state_21409__$1;
(statearr_21416_21443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21410 === (15))){
var inst_21399 = (state_21409[(2)]);
var state_21409__$1 = state_21409;
var statearr_21417_21444 = state_21409__$1;
(statearr_21417_21444[(2)] = inst_21399);

(statearr_21417_21444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21410 === (13))){
var state_21409__$1 = state_21409;
var statearr_21418_21445 = state_21409__$1;
(statearr_21418_21445[(2)] = null);

(statearr_21418_21445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21410 === (6))){
var inst_21374 = (state_21409[(8)]);
var inst_21395 = (inst_21374 > (0));
var state_21409__$1 = state_21409;
if(cljs.core.truth_(inst_21395)){
var statearr_21419_21446 = state_21409__$1;
(statearr_21419_21446[(1)] = (12));

} else {
var statearr_21420_21447 = state_21409__$1;
(statearr_21420_21447[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21410 === (3))){
var inst_21407 = (state_21409[(2)]);
var state_21409__$1 = state_21409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21409__$1,inst_21407);
} else {
if((state_val_21410 === (12))){
var inst_21373 = (state_21409[(7)]);
var inst_21397 = cljs.core.vec.call(null,inst_21373);
var state_21409__$1 = state_21409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21409__$1,(15),out,inst_21397);
} else {
if((state_val_21410 === (2))){
var state_21409__$1 = state_21409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21409__$1,(4),ch);
} else {
if((state_val_21410 === (11))){
var inst_21389 = (state_21409[(2)]);
var inst_21390 = (new Array(n));
var inst_21373 = inst_21390;
var inst_21374 = (0);
var state_21409__$1 = (function (){var statearr_21421 = state_21409;
(statearr_21421[(10)] = inst_21389);

(statearr_21421[(7)] = inst_21373);

(statearr_21421[(8)] = inst_21374);

return statearr_21421;
})();
var statearr_21422_21448 = state_21409__$1;
(statearr_21422_21448[(2)] = null);

(statearr_21422_21448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21410 === (9))){
var inst_21373 = (state_21409[(7)]);
var inst_21387 = cljs.core.vec.call(null,inst_21373);
var state_21409__$1 = state_21409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21409__$1,(11),out,inst_21387);
} else {
if((state_val_21410 === (5))){
var inst_21382 = (state_21409[(11)]);
var inst_21373 = (state_21409[(7)]);
var inst_21374 = (state_21409[(8)]);
var inst_21377 = (state_21409[(9)]);
var inst_21381 = (inst_21373[inst_21374] = inst_21377);
var inst_21382__$1 = (inst_21374 + (1));
var inst_21383 = (inst_21382__$1 < n);
var state_21409__$1 = (function (){var statearr_21423 = state_21409;
(statearr_21423[(11)] = inst_21382__$1);

(statearr_21423[(12)] = inst_21381);

return statearr_21423;
})();
if(cljs.core.truth_(inst_21383)){
var statearr_21424_21449 = state_21409__$1;
(statearr_21424_21449[(1)] = (8));

} else {
var statearr_21425_21450 = state_21409__$1;
(statearr_21425_21450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21410 === (14))){
var inst_21402 = (state_21409[(2)]);
var inst_21403 = cljs.core.async.close_BANG_.call(null,out);
var state_21409__$1 = (function (){var statearr_21427 = state_21409;
(statearr_21427[(13)] = inst_21402);

return statearr_21427;
})();
var statearr_21428_21451 = state_21409__$1;
(statearr_21428_21451[(2)] = inst_21403);

(statearr_21428_21451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21410 === (10))){
var inst_21393 = (state_21409[(2)]);
var state_21409__$1 = state_21409;
var statearr_21429_21452 = state_21409__$1;
(statearr_21429_21452[(2)] = inst_21393);

(statearr_21429_21452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21410 === (8))){
var inst_21382 = (state_21409[(11)]);
var inst_21373 = (state_21409[(7)]);
var tmp21426 = inst_21373;
var inst_21373__$1 = tmp21426;
var inst_21374 = inst_21382;
var state_21409__$1 = (function (){var statearr_21430 = state_21409;
(statearr_21430[(7)] = inst_21373__$1);

(statearr_21430[(8)] = inst_21374);

return statearr_21430;
})();
var statearr_21431_21453 = state_21409__$1;
(statearr_21431_21453[(2)] = null);

(statearr_21431_21453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto___21439,out))
;
return ((function (switch__14326__auto__,c__14391__auto___21439,out){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_21435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21435[(0)] = state_machine__14327__auto__);

(statearr_21435[(1)] = (1));

return statearr_21435;
});
var state_machine__14327__auto____1 = (function (state_21409){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_21409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e21436){if((e21436 instanceof Object)){
var ex__14330__auto__ = e21436;
var statearr_21437_21454 = state_21409;
(statearr_21437_21454[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21455 = state_21409;
state_21409 = G__21455;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_21409){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_21409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto___21439,out))
})();
var state__14393__auto__ = (function (){var statearr_21438 = f__14392__auto__.call(null);
(statearr_21438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto___21439);

return statearr_21438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto___21439,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14391__auto___21598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto___21598,out){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto___21598,out){
return (function (state_21568){
var state_val_21569 = (state_21568[(1)]);
if((state_val_21569 === (7))){
var inst_21564 = (state_21568[(2)]);
var state_21568__$1 = state_21568;
var statearr_21570_21599 = state_21568__$1;
(statearr_21570_21599[(2)] = inst_21564);

(statearr_21570_21599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (1))){
var inst_21527 = [];
var inst_21528 = inst_21527;
var inst_21529 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21568__$1 = (function (){var statearr_21571 = state_21568;
(statearr_21571[(7)] = inst_21529);

(statearr_21571[(8)] = inst_21528);

return statearr_21571;
})();
var statearr_21572_21600 = state_21568__$1;
(statearr_21572_21600[(2)] = null);

(statearr_21572_21600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (4))){
var inst_21532 = (state_21568[(9)]);
var inst_21532__$1 = (state_21568[(2)]);
var inst_21533 = (inst_21532__$1 == null);
var inst_21534 = cljs.core.not.call(null,inst_21533);
var state_21568__$1 = (function (){var statearr_21573 = state_21568;
(statearr_21573[(9)] = inst_21532__$1);

return statearr_21573;
})();
if(inst_21534){
var statearr_21574_21601 = state_21568__$1;
(statearr_21574_21601[(1)] = (5));

} else {
var statearr_21575_21602 = state_21568__$1;
(statearr_21575_21602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (15))){
var inst_21558 = (state_21568[(2)]);
var state_21568__$1 = state_21568;
var statearr_21576_21603 = state_21568__$1;
(statearr_21576_21603[(2)] = inst_21558);

(statearr_21576_21603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (13))){
var state_21568__$1 = state_21568;
var statearr_21577_21604 = state_21568__$1;
(statearr_21577_21604[(2)] = null);

(statearr_21577_21604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (6))){
var inst_21528 = (state_21568[(8)]);
var inst_21553 = inst_21528.length;
var inst_21554 = (inst_21553 > (0));
var state_21568__$1 = state_21568;
if(cljs.core.truth_(inst_21554)){
var statearr_21578_21605 = state_21568__$1;
(statearr_21578_21605[(1)] = (12));

} else {
var statearr_21579_21606 = state_21568__$1;
(statearr_21579_21606[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (3))){
var inst_21566 = (state_21568[(2)]);
var state_21568__$1 = state_21568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21568__$1,inst_21566);
} else {
if((state_val_21569 === (12))){
var inst_21528 = (state_21568[(8)]);
var inst_21556 = cljs.core.vec.call(null,inst_21528);
var state_21568__$1 = state_21568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21568__$1,(15),out,inst_21556);
} else {
if((state_val_21569 === (2))){
var state_21568__$1 = state_21568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21568__$1,(4),ch);
} else {
if((state_val_21569 === (11))){
var inst_21532 = (state_21568[(9)]);
var inst_21536 = (state_21568[(10)]);
var inst_21546 = (state_21568[(2)]);
var inst_21547 = [];
var inst_21548 = inst_21547.push(inst_21532);
var inst_21528 = inst_21547;
var inst_21529 = inst_21536;
var state_21568__$1 = (function (){var statearr_21580 = state_21568;
(statearr_21580[(11)] = inst_21548);

(statearr_21580[(7)] = inst_21529);

(statearr_21580[(12)] = inst_21546);

(statearr_21580[(8)] = inst_21528);

return statearr_21580;
})();
var statearr_21581_21607 = state_21568__$1;
(statearr_21581_21607[(2)] = null);

(statearr_21581_21607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (9))){
var inst_21528 = (state_21568[(8)]);
var inst_21544 = cljs.core.vec.call(null,inst_21528);
var state_21568__$1 = state_21568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21568__$1,(11),out,inst_21544);
} else {
if((state_val_21569 === (5))){
var inst_21532 = (state_21568[(9)]);
var inst_21529 = (state_21568[(7)]);
var inst_21536 = (state_21568[(10)]);
var inst_21536__$1 = f.call(null,inst_21532);
var inst_21537 = cljs.core._EQ_.call(null,inst_21536__$1,inst_21529);
var inst_21538 = cljs.core.keyword_identical_QMARK_.call(null,inst_21529,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21539 = (inst_21537) || (inst_21538);
var state_21568__$1 = (function (){var statearr_21582 = state_21568;
(statearr_21582[(10)] = inst_21536__$1);

return statearr_21582;
})();
if(cljs.core.truth_(inst_21539)){
var statearr_21583_21608 = state_21568__$1;
(statearr_21583_21608[(1)] = (8));

} else {
var statearr_21584_21609 = state_21568__$1;
(statearr_21584_21609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (14))){
var inst_21561 = (state_21568[(2)]);
var inst_21562 = cljs.core.async.close_BANG_.call(null,out);
var state_21568__$1 = (function (){var statearr_21586 = state_21568;
(statearr_21586[(13)] = inst_21561);

return statearr_21586;
})();
var statearr_21587_21610 = state_21568__$1;
(statearr_21587_21610[(2)] = inst_21562);

(statearr_21587_21610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (10))){
var inst_21551 = (state_21568[(2)]);
var state_21568__$1 = state_21568;
var statearr_21588_21611 = state_21568__$1;
(statearr_21588_21611[(2)] = inst_21551);

(statearr_21588_21611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (8))){
var inst_21532 = (state_21568[(9)]);
var inst_21536 = (state_21568[(10)]);
var inst_21528 = (state_21568[(8)]);
var inst_21541 = inst_21528.push(inst_21532);
var tmp21585 = inst_21528;
var inst_21528__$1 = tmp21585;
var inst_21529 = inst_21536;
var state_21568__$1 = (function (){var statearr_21589 = state_21568;
(statearr_21589[(7)] = inst_21529);

(statearr_21589[(14)] = inst_21541);

(statearr_21589[(8)] = inst_21528__$1);

return statearr_21589;
})();
var statearr_21590_21612 = state_21568__$1;
(statearr_21590_21612[(2)] = null);

(statearr_21590_21612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14391__auto___21598,out))
;
return ((function (switch__14326__auto__,c__14391__auto___21598,out){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_21594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21594[(0)] = state_machine__14327__auto__);

(statearr_21594[(1)] = (1));

return statearr_21594;
});
var state_machine__14327__auto____1 = (function (state_21568){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_21568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e21595){if((e21595 instanceof Object)){
var ex__14330__auto__ = e21595;
var statearr_21596_21613 = state_21568;
(statearr_21596_21613[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21614 = state_21568;
state_21568 = G__21614;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_21568){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_21568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto___21598,out))
})();
var state__14393__auto__ = (function (){var statearr_21597 = f__14392__auto__.call(null);
(statearr_21597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto___21598);

return statearr_21597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto___21598,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map