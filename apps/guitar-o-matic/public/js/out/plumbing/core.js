// Compiled by ClojureScript 0.0-2511
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__20170__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__20170 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__20170__delegate.call(this,m,k,f,x1,x2,xs);};
G__20170.cljs$lang$maxFixedArity = 5;
G__20170.cljs$lang$applyTo = (function (arglist__20171){
var m = cljs.core.first(arglist__20171);
arglist__20171 = cljs.core.next(arglist__20171);
var k = cljs.core.first(arglist__20171);
arglist__20171 = cljs.core.next(arglist__20171);
var f = cljs.core.first(arglist__20171);
arglist__20171 = cljs.core.next(arglist__20171);
var x1 = cljs.core.first(arglist__20171);
arglist__20171 = cljs.core.next(arglist__20171);
var x2 = cljs.core.first(arglist__20171);
var xs = cljs.core.rest(arglist__20171);
return G__20170__delegate(m,k,f,x1,x2,xs);
});
G__20170.cljs$core$IFn$_invoke$arity$variadic = G__20170__delegate;
return G__20170;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14260__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__20180_20186 = cljs.core.seq.call(null,m);
var chunk__20181_20187 = null;
var count__20182_20188 = (0);
var i__20183_20189 = (0);
while(true){
if((i__20183_20189 < count__20182_20188)){
var vec__20184_20190 = cljs.core._nth.call(null,chunk__20181_20187,i__20183_20189);
var k_20191 = cljs.core.nth.call(null,vec__20184_20190,(0),null);
var v_20192 = cljs.core.nth.call(null,vec__20184_20190,(1),null);
var m20179_20193 = cljs.core.deref.call(null,m_atom__14260__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14260__auto__,cljs.core.assoc_BANG_.call(null,m20179_20193,k_20191,f.call(null,v_20192)));

var G__20194 = seq__20180_20186;
var G__20195 = chunk__20181_20187;
var G__20196 = count__20182_20188;
var G__20197 = (i__20183_20189 + (1));
seq__20180_20186 = G__20194;
chunk__20181_20187 = G__20195;
count__20182_20188 = G__20196;
i__20183_20189 = G__20197;
continue;
} else {
var temp__4126__auto___20198 = cljs.core.seq.call(null,seq__20180_20186);
if(temp__4126__auto___20198){
var seq__20180_20199__$1 = temp__4126__auto___20198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20180_20199__$1)){
var c__9870__auto___20200 = cljs.core.chunk_first.call(null,seq__20180_20199__$1);
var G__20201 = cljs.core.chunk_rest.call(null,seq__20180_20199__$1);
var G__20202 = c__9870__auto___20200;
var G__20203 = cljs.core.count.call(null,c__9870__auto___20200);
var G__20204 = (0);
seq__20180_20186 = G__20201;
chunk__20181_20187 = G__20202;
count__20182_20188 = G__20203;
i__20183_20189 = G__20204;
continue;
} else {
var vec__20185_20205 = cljs.core.first.call(null,seq__20180_20199__$1);
var k_20206 = cljs.core.nth.call(null,vec__20185_20205,(0),null);
var v_20207 = cljs.core.nth.call(null,vec__20185_20205,(1),null);
var m20179_20208 = cljs.core.deref.call(null,m_atom__14260__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14260__auto__,cljs.core.assoc_BANG_.call(null,m20179_20208,k_20206,f.call(null,v_20207)));

var G__20209 = cljs.core.next.call(null,seq__20180_20199__$1);
var G__20210 = null;
var G__20211 = (0);
var G__20212 = (0);
seq__20180_20186 = G__20209;
chunk__20181_20187 = G__20210;
count__20182_20188 = G__20211;
i__20183_20189 = G__20212;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14260__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14260__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__20221_20227 = cljs.core.seq.call(null,m);
var chunk__20222_20228 = null;
var count__20223_20229 = (0);
var i__20224_20230 = (0);
while(true){
if((i__20224_20230 < count__20223_20229)){
var vec__20225_20231 = cljs.core._nth.call(null,chunk__20222_20228,i__20224_20230);
var k_20232 = cljs.core.nth.call(null,vec__20225_20231,(0),null);
var v_20233 = cljs.core.nth.call(null,vec__20225_20231,(1),null);
var m20220_20234 = cljs.core.deref.call(null,m_atom__14260__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14260__auto__,cljs.core.assoc_BANG_.call(null,m20220_20234,f.call(null,k_20232),v_20233));

var G__20235 = seq__20221_20227;
var G__20236 = chunk__20222_20228;
var G__20237 = count__20223_20229;
var G__20238 = (i__20224_20230 + (1));
seq__20221_20227 = G__20235;
chunk__20222_20228 = G__20236;
count__20223_20229 = G__20237;
i__20224_20230 = G__20238;
continue;
} else {
var temp__4126__auto___20239 = cljs.core.seq.call(null,seq__20221_20227);
if(temp__4126__auto___20239){
var seq__20221_20240__$1 = temp__4126__auto___20239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20221_20240__$1)){
var c__9870__auto___20241 = cljs.core.chunk_first.call(null,seq__20221_20240__$1);
var G__20242 = cljs.core.chunk_rest.call(null,seq__20221_20240__$1);
var G__20243 = c__9870__auto___20241;
var G__20244 = cljs.core.count.call(null,c__9870__auto___20241);
var G__20245 = (0);
seq__20221_20227 = G__20242;
chunk__20222_20228 = G__20243;
count__20223_20229 = G__20244;
i__20224_20230 = G__20245;
continue;
} else {
var vec__20226_20246 = cljs.core.first.call(null,seq__20221_20240__$1);
var k_20247 = cljs.core.nth.call(null,vec__20226_20246,(0),null);
var v_20248 = cljs.core.nth.call(null,vec__20226_20246,(1),null);
var m20220_20249 = cljs.core.deref.call(null,m_atom__14260__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14260__auto__,cljs.core.assoc_BANG_.call(null,m20220_20249,f.call(null,k_20247),v_20248));

var G__20250 = cljs.core.next.call(null,seq__20221_20240__$1);
var G__20251 = null;
var G__20252 = (0);
var G__20253 = (0);
seq__20221_20227 = G__20250;
chunk__20222_20228 = G__20251;
count__20223_20229 = G__20252;
i__20224_20230 = G__20253;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14260__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__14260__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__20260_20264 = cljs.core.seq.call(null,ks);
var chunk__20261_20265 = null;
var count__20262_20266 = (0);
var i__20263_20267 = (0);
while(true){
if((i__20263_20267 < count__20262_20266)){
var k_20268 = cljs.core._nth.call(null,chunk__20261_20265,i__20263_20267);
var m20259_20269 = cljs.core.deref.call(null,m_atom__14260__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14260__auto__,cljs.core.assoc_BANG_.call(null,m20259_20269,k_20268,f.call(null,k_20268)));

var G__20270 = seq__20260_20264;
var G__20271 = chunk__20261_20265;
var G__20272 = count__20262_20266;
var G__20273 = (i__20263_20267 + (1));
seq__20260_20264 = G__20270;
chunk__20261_20265 = G__20271;
count__20262_20266 = G__20272;
i__20263_20267 = G__20273;
continue;
} else {
var temp__4126__auto___20274 = cljs.core.seq.call(null,seq__20260_20264);
if(temp__4126__auto___20274){
var seq__20260_20275__$1 = temp__4126__auto___20274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20260_20275__$1)){
var c__9870__auto___20276 = cljs.core.chunk_first.call(null,seq__20260_20275__$1);
var G__20277 = cljs.core.chunk_rest.call(null,seq__20260_20275__$1);
var G__20278 = c__9870__auto___20276;
var G__20279 = cljs.core.count.call(null,c__9870__auto___20276);
var G__20280 = (0);
seq__20260_20264 = G__20277;
chunk__20261_20265 = G__20278;
count__20262_20266 = G__20279;
i__20263_20267 = G__20280;
continue;
} else {
var k_20281 = cljs.core.first.call(null,seq__20260_20275__$1);
var m20259_20282 = cljs.core.deref.call(null,m_atom__14260__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14260__auto__,cljs.core.assoc_BANG_.call(null,m20259_20282,k_20281,f.call(null,k_20281)));

var G__20283 = cljs.core.next.call(null,seq__20260_20275__$1);
var G__20284 = null;
var G__20285 = (0);
var G__20286 = (0);
seq__20260_20264 = G__20283;
chunk__20261_20265 = G__20284;
count__20262_20266 = G__20285;
i__20263_20267 = G__20286;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14260__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__14260__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__20293_20297 = cljs.core.seq.call(null,vs);
var chunk__20294_20298 = null;
var count__20295_20299 = (0);
var i__20296_20300 = (0);
while(true){
if((i__20296_20300 < count__20295_20299)){
var v_20301 = cljs.core._nth.call(null,chunk__20294_20298,i__20296_20300);
var m20292_20302 = cljs.core.deref.call(null,m_atom__14260__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14260__auto__,cljs.core.assoc_BANG_.call(null,m20292_20302,f.call(null,v_20301),v_20301));

var G__20303 = seq__20293_20297;
var G__20304 = chunk__20294_20298;
var G__20305 = count__20295_20299;
var G__20306 = (i__20296_20300 + (1));
seq__20293_20297 = G__20303;
chunk__20294_20298 = G__20304;
count__20295_20299 = G__20305;
i__20296_20300 = G__20306;
continue;
} else {
var temp__4126__auto___20307 = cljs.core.seq.call(null,seq__20293_20297);
if(temp__4126__auto___20307){
var seq__20293_20308__$1 = temp__4126__auto___20307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20293_20308__$1)){
var c__9870__auto___20309 = cljs.core.chunk_first.call(null,seq__20293_20308__$1);
var G__20310 = cljs.core.chunk_rest.call(null,seq__20293_20308__$1);
var G__20311 = c__9870__auto___20309;
var G__20312 = cljs.core.count.call(null,c__9870__auto___20309);
var G__20313 = (0);
seq__20293_20297 = G__20310;
chunk__20294_20298 = G__20311;
count__20295_20299 = G__20312;
i__20296_20300 = G__20313;
continue;
} else {
var v_20314 = cljs.core.first.call(null,seq__20293_20308__$1);
var m20292_20315 = cljs.core.deref.call(null,m_atom__14260__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14260__auto__,cljs.core.assoc_BANG_.call(null,m20292_20315,f.call(null,v_20314),v_20314));

var G__20316 = cljs.core.next.call(null,seq__20293_20308__$1);
var G__20317 = null;
var G__20318 = (0);
var G__20319 = (0);
seq__20293_20297 = G__20316;
chunk__20294_20298 = G__20317;
count__20295_20299 = G__20318;
i__20296_20300 = G__20319;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14260__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__20320){
var vec__20322 = p__20320;
var k = cljs.core.nth.call(null,vec__20322,(0),null);
var ks = cljs.core.nthnext.call(null,vec__20322,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__9071__auto__ = ks;
if(and__9071__auto__){
return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__9071__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var res = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__14260__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__20331_20337 = cljs.core.seq.call(null,x);
var chunk__20332_20338 = null;
var count__20333_20339 = (0);
var i__20334_20340 = (0);
while(true){
if((i__20334_20340 < count__20333_20339)){
var vec__20335_20341 = cljs.core._nth.call(null,chunk__20332_20338,i__20334_20340);
var k_20342 = cljs.core.nth.call(null,vec__20335_20341,(0),null);
var v_20343 = cljs.core.nth.call(null,vec__20335_20341,(1),null);
var m20330_20344 = cljs.core.deref.call(null,m_atom__14260__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14260__auto__,cljs.core.assoc_BANG_.call(null,m20330_20344,((typeof k_20342 === 'string')?cljs.core.keyword.call(null,k_20342):k_20342),keywordize_map.call(null,v_20343)));

var G__20345 = seq__20331_20337;
var G__20346 = chunk__20332_20338;
var G__20347 = count__20333_20339;
var G__20348 = (i__20334_20340 + (1));
seq__20331_20337 = G__20345;
chunk__20332_20338 = G__20346;
count__20333_20339 = G__20347;
i__20334_20340 = G__20348;
continue;
} else {
var temp__4126__auto___20349 = cljs.core.seq.call(null,seq__20331_20337);
if(temp__4126__auto___20349){
var seq__20331_20350__$1 = temp__4126__auto___20349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20331_20350__$1)){
var c__9870__auto___20351 = cljs.core.chunk_first.call(null,seq__20331_20350__$1);
var G__20352 = cljs.core.chunk_rest.call(null,seq__20331_20350__$1);
var G__20353 = c__9870__auto___20351;
var G__20354 = cljs.core.count.call(null,c__9870__auto___20351);
var G__20355 = (0);
seq__20331_20337 = G__20352;
chunk__20332_20338 = G__20353;
count__20333_20339 = G__20354;
i__20334_20340 = G__20355;
continue;
} else {
var vec__20336_20356 = cljs.core.first.call(null,seq__20331_20350__$1);
var k_20357 = cljs.core.nth.call(null,vec__20336_20356,(0),null);
var v_20358 = cljs.core.nth.call(null,vec__20336_20356,(1),null);
var m20330_20359 = cljs.core.deref.call(null,m_atom__14260__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14260__auto__,cljs.core.assoc_BANG_.call(null,m20330_20359,((typeof k_20357 === 'string')?cljs.core.keyword.call(null,k_20357):k_20357),keywordize_map.call(null,v_20358)));

var G__20360 = cljs.core.next.call(null,seq__20331_20350__$1);
var G__20361 = null;
var G__20362 = (0);
var G__20363 = (0);
seq__20331_20337 = G__20360;
chunk__20332_20338 = G__20361;
count__20333_20339 = G__20362;
i__20334_20340 = G__20363;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14260__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,keywordize_map,x);
} else {
return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){
var temp__4124__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__14329__auto__ = temp__4124__auto__;
return cljs.core.val.call(null,pair__14329__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__20364 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__20365 = cljs.core.next.call(null,ks);
m = G__20364;
ks = G__20365;
continue;
} else {
return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__9083__auto__ = m;
if(cljs.core.truth_(or__9083__auto__)){
return or__9083__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__9839__auto__ = (function iter__20374(s__20375){
return (new cljs.core.LazySeq(null,(function (){
var s__20375__$1 = s__20375;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20375__$1);
if(temp__4126__auto__){
var s__20375__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20375__$2)){
var c__9837__auto__ = cljs.core.chunk_first.call(null,s__20375__$2);
var size__9838__auto__ = cljs.core.count.call(null,c__9837__auto__);
var b__20377 = cljs.core.chunk_buffer.call(null,size__9838__auto__);
if((function (){var i__20376 = (0);
while(true){
if((i__20376 < size__9838__auto__)){
var vec__20380 = cljs.core._nth.call(null,c__9837__auto__,i__20376);
var k = cljs.core.nth.call(null,vec__20380,(0),null);
var v = cljs.core.nth.call(null,vec__20380,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__20377,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20382 = (i__20376 + (1));
i__20376 = G__20382;
continue;
} else {
var G__20383 = (i__20376 + (1));
i__20376 = G__20383;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20377),iter__20374.call(null,cljs.core.chunk_rest.call(null,s__20375__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20377),null);
}
} else {
var vec__20381 = cljs.core.first.call(null,s__20375__$2);
var k = cljs.core.nth.call(null,vec__20381,(0),null);
var v = cljs.core.nth.call(null,vec__20381,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20374.call(null,cljs.core.rest.call(null,s__20375__$2)));
} else {
var G__20384 = cljs.core.rest.call(null,s__20375__$2);
s__20375__$1 = G__20384;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9839__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__20385){
var m = cljs.core.first(arglist__20385);
var kvs = cljs.core.rest(arglist__20385);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__20386){
var m = cljs.core.first(arglist__20386);
arglist__20386 = cljs.core.next(arglist__20386);
var key_seq = cljs.core.first(arglist__20386);
arglist__20386 = cljs.core.next(arglist__20386);
var f = cljs.core.first(arglist__20386);
var args = cljs.core.rest(arglist__20386);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.next.call(null,s);
if(temp__4126__auto__){
var n = temp__4126__auto__;
return aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){
var temp__4126__auto__ = cljs.core.seq.call(null,xs);
if(temp__4126__auto__){
var xs__$1 = temp__4126__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__9839__auto__ = ((function (s){
return (function iter__20391(s__20392){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__20392__$1 = s__20392;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20392__$1);
if(temp__4126__auto__){
var s__20392__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20392__$2)){
var c__9837__auto__ = cljs.core.chunk_first.call(null,s__20392__$2);
var size__9838__auto__ = cljs.core.count.call(null,c__9837__auto__);
var b__20394 = cljs.core.chunk_buffer.call(null,size__9838__auto__);
if((function (){var i__20393 = (0);
while(true){
if((i__20393 < size__9838__auto__)){
var x = cljs.core._nth.call(null,c__9837__auto__,i__20393);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__20394,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__20395 = (i__20393 + (1));
i__20393 = G__20395;
continue;
} else {
var G__20396 = (i__20393 + (1));
i__20393 = G__20396;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20394),iter__20391.call(null,cljs.core.chunk_rest.call(null,s__20392__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20394),null);
}
} else {
var x = cljs.core.first.call(null,s__20392__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__20391.call(null,cljs.core.rest.call(null,s__20392__$2)));
} else {
var G__20397 = cljs.core.rest.call(null,s__20392__$2);
s__20392__$1 = G__20397;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__9839__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__20398){
var colls = cljs.core.seq(arglist__20398);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__20399__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__20400 = conj_when.call(null,coll,x);
var G__20401 = cljs.core.first.call(null,xs);
var G__20402 = cljs.core.next.call(null,xs);
coll = G__20400;
x = G__20401;
xs = G__20402;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__20399 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20399__delegate.call(this,coll,x,xs);};
G__20399.cljs$lang$maxFixedArity = 2;
G__20399.cljs$lang$applyTo = (function (arglist__20403){
var coll = cljs.core.first(arglist__20403);
arglist__20403 = cljs.core.next(arglist__20403);
var x = cljs.core.first(arglist__20403);
var xs = cljs.core.rest(arglist__20403);
return G__20399__delegate(coll,x,xs);
});
G__20399.cljs$core$IFn$_invoke$arity$variadic = G__20399__delegate;
return G__20399;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__20405__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__20404_SHARP_){
return cljs.core.apply.call(null,f,p1__20404_SHARP_,args);
}));
};
var G__20405 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20405__delegate.call(this,a,f,args);};
G__20405.cljs$lang$maxFixedArity = 2;
G__20405.cljs$lang$applyTo = (function (arglist__20406){
var a = cljs.core.first(arglist__20406);
arglist__20406 = cljs.core.next(arglist__20406);
var f = cljs.core.first(arglist__20406);
var args = cljs.core.rest(arglist__20406);
return G__20405__delegate(a,f,args);
});
G__20405.cljs$core$IFn$_invoke$arity$variadic = G__20405__delegate;
return G__20405;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){
return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__20407__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__20407 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20407__delegate.call(this,f,arg,args);};
G__20407.cljs$lang$maxFixedArity = 2;
G__20407.cljs$lang$applyTo = (function (arglist__20408){
var f = cljs.core.first(arglist__20408);
arglist__20408 = cljs.core.next(arglist__20408);
var arg = cljs.core.first(arglist__20408);
var args = cljs.core.rest(arglist__20408);
return G__20407__delegate(f,arg,args);
});
G__20407.cljs$core$IFn$_invoke$arity$variadic = G__20407__delegate;
return G__20407;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map