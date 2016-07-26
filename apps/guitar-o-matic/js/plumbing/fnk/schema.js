// Compiled by ClojureScript 0.0-2511
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__12788__12789__auto__){
var G__19584 = p1__12788__12789__auto__;
if(G__19584){
var bit__9764__auto__ = null;
if(cljs.core.truth_((function (){var or__9083__auto__ = bit__9764__auto__;
if(cljs.core.truth_(or__9083__auto__)){
return or__9083__auto__;
} else {
return G__19584.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__19584.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__19584);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__19584);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__19585_SHARP_){
return (cljs.core.val.call(null,p1__19585_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__19587 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__19587,(0),null);
var v = cljs.core.nth.call(null,vec__19587,(1),null);
var p = vec__19587;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___19593 = schema.utils.use_fn_validation;
var output_schema19588_19594 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema19589_19595 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker19590_19596 = schema.core.checker.call(null,input_schema19589_19595);
var output_checker19591_19597 = schema.core.checker.call(null,output_schema19588_19594);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___19593,output_schema19588_19594,input_schema19589_19595,input_checker19590_19596,output_checker19591_19597){
return (function unwrap_schema_form_key(G__19592){
var validate__12758__auto__ = ufv___19593.get_cell();
if(cljs.core.truth_(validate__12758__auto__)){
var args__12759__auto___19598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19592], null);
var temp__4126__auto___19599 = input_checker19590_19596.call(null,args__12759__auto___19598);
if(cljs.core.truth_(temp__4126__auto___19599)){
var error__12760__auto___19600 = temp__4126__auto___19599;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__12760__auto___19600)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19600,new cljs.core.Keyword(null,"value","value",305978217),args__12759__auto___19598,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19589_19595,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__12761__auto__ = (function (){var k = G__19592;
while(true){
if(schema.core.specific_key_QMARK_.call(null,k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__12758__auto__)){
var temp__4126__auto___19601 = output_checker19591_19597.call(null,o__12761__auto__);
if(cljs.core.truth_(temp__4126__auto___19601)){
var error__12760__auto___19602 = temp__4126__auto___19601;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__12760__auto___19602)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19602,new cljs.core.Keyword(null,"value","value",305978217),o__12761__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19588_19594,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__12761__auto__;
});})(ufv___19593,output_schema19588_19594,input_schema19589_19595,input_checker19590_19596,output_checker19591_19597))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema19588_19594,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19589_19595], null)));
var ufv___19608 = schema.utils.use_fn_validation;
var output_schema19603_19609 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema19604_19610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker19605_19611 = schema.core.checker.call(null,input_schema19604_19610);
var output_checker19606_19612 = schema.core.checker.call(null,output_schema19603_19609);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___19608,output_schema19603_19609,input_schema19604_19610,input_checker19605_19611,output_checker19606_19612){
return (function explicit_schema_key_map(G__19607){
var validate__12758__auto__ = ufv___19608.get_cell();
if(cljs.core.truth_(validate__12758__auto__)){
var args__12759__auto___19613 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19607], null);
var temp__4126__auto___19614 = input_checker19605_19611.call(null,args__12759__auto___19613);
if(cljs.core.truth_(temp__4126__auto___19614)){
var error__12760__auto___19615 = temp__4126__auto___19614;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__12760__auto___19615)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19615,new cljs.core.Keyword(null,"value","value",305978217),args__12759__auto___19613,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19604_19610,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__12761__auto__ = (function (){var s = G__19607;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__12758__auto__)){
var temp__4126__auto___19616 = output_checker19606_19612.call(null,o__12761__auto__);
if(cljs.core.truth_(temp__4126__auto___19616)){
var error__12760__auto___19617 = temp__4126__auto___19616;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__12760__auto___19617)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19617,new cljs.core.Keyword(null,"value","value",305978217),o__12761__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19603_19609,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__12761__auto__;
});})(ufv___19608,output_schema19603_19609,input_schema19604_19610,input_checker19605_19611,output_checker19606_19612))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema19603_19609,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19604_19610], null)));
var ufv___19623 = schema.utils.use_fn_validation;
var output_schema19618_19624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema19619_19625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker19620_19626 = schema.core.checker.call(null,input_schema19619_19625);
var output_checker19621_19627 = schema.core.checker.call(null,output_schema19618_19624);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___19623,output_schema19618_19624,input_schema19619_19625,input_checker19620_19626,output_checker19621_19627){
return (function split_schema_keys(G__19622){
var validate__12758__auto__ = ufv___19623.get_cell();
if(cljs.core.truth_(validate__12758__auto__)){
var args__12759__auto___19628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19622], null);
var temp__4126__auto___19629 = input_checker19620_19626.call(null,args__12759__auto___19628);
if(cljs.core.truth_(temp__4126__auto___19629)){
var error__12760__auto___19630 = temp__4126__auto___19629;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__12760__auto___19630)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19630,new cljs.core.Keyword(null,"value","value",305978217),args__12759__auto___19628,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19619_19625,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__12761__auto__ = (function (){var s = G__19622;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__12758__auto__)){
var temp__4126__auto___19631 = output_checker19621_19627.call(null,o__12761__auto__);
if(cljs.core.truth_(temp__4126__auto___19631)){
var error__12760__auto___19632 = temp__4126__auto___19631;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__12760__auto___19632)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19632,new cljs.core.Keyword(null,"value","value",305978217),o__12761__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19618_19624,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__12761__auto__;
});})(ufv___19623,output_schema19618_19624,input_schema19619_19625,input_checker19620_19626,output_checker19621_19627))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema19618_19624,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19619_19625], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__19636){
var vec__19637 = p__19636;
var k = cljs.core.nth.call(null,vec__19637,(0),null);
var v = cljs.core.nth.call(null,vec__19637,(1),null);
var pk = key_project.call(null,k);
var temp__4124__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__19638 = temp__4124__auto__;
var ok = cljs.core.nth.call(null,vec__19638,(0),null);
var ov = cljs.core.nth.call(null,vec__19638,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__19639){
var key_project = cljs.core.first(arglist__19639);
arglist__19639 = cljs.core.next(arglist__19639);
var key_combine = cljs.core.first(arglist__19639);
arglist__19639 = cljs.core.next(arglist__19639);
var val_combine = cljs.core.first(arglist__19639);
var maps = cljs.core.rest(arglist__19639);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___19647 = schema.utils.use_fn_validation;
var output_schema19641_19648 = plumbing.fnk.schema.InputSchema;
var input_schema19642_19649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker19643_19650 = schema.core.checker.call(null,input_schema19642_19649);
var output_checker19644_19651 = schema.core.checker.call(null,output_schema19641_19648);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___19647,output_schema19641_19648,input_schema19642_19649,input_checker19643_19650,output_checker19644_19651){
return (function union_input_schemata(G__19645,G__19646){
var validate__12758__auto__ = ufv___19647.get_cell();
if(cljs.core.truth_(validate__12758__auto__)){
var args__12759__auto___19652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19645,G__19646], null);
var temp__4126__auto___19653 = input_checker19643_19650.call(null,args__12759__auto___19652);
if(cljs.core.truth_(temp__4126__auto___19653)){
var error__12760__auto___19654 = temp__4126__auto___19653;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__12760__auto___19654)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19654,new cljs.core.Keyword(null,"value","value",305978217),args__12759__auto___19652,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19642_19649,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__12761__auto__ = (function (){var i1 = G__19645;
var i2 = G__19646;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__12758__auto__,ufv___19647,output_schema19641_19648,input_schema19642_19649,input_checker19643_19650,output_checker19644_19651){
return (function (p1__19640_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__19640_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__19640_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__12758__auto__,ufv___19647,output_schema19641_19648,input_schema19642_19649,input_checker19643_19650,output_checker19644_19651))
,((function (validate__12758__auto__,ufv___19647,output_schema19641_19648,input_schema19642_19649,input_checker19643_19650,output_checker19644_19651){
return (function (k1,k2){
if(schema.core.required_key_QMARK_.call(null,k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_.call(null,k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_.call(null,k1)){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__12758__auto__,ufv___19647,output_schema19641_19648,input_schema19642_19649,input_checker19643_19650,output_checker19644_19651))
,((function (validate__12758__auto__,ufv___19647,output_schema19641_19648,input_schema19642_19649,input_checker19643_19650,output_checker19644_19651){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__12758__auto__,ufv___19647,output_schema19641_19648,input_schema19642_19649,input_checker19643_19650,output_checker19644_19651))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__12758__auto__)){
var temp__4126__auto___19655 = output_checker19644_19651.call(null,o__12761__auto__);
if(cljs.core.truth_(temp__4126__auto___19655)){
var error__12760__auto___19656 = temp__4126__auto___19655;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__12760__auto___19656)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19656,new cljs.core.Keyword(null,"value","value",305978217),o__12761__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19641_19648,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__12761__auto__;
});})(ufv___19647,output_schema19641_19648,input_schema19642_19649,input_checker19643_19650,output_checker19644_19651))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema19641_19648,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19642_19649], null)));
var ufv___19662 = schema.utils.use_fn_validation;
var output_schema19657_19663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema19658_19664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker19659_19665 = schema.core.checker.call(null,input_schema19658_19664);
var output_checker19660_19666 = schema.core.checker.call(null,output_schema19657_19663);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___19662,output_schema19657_19663,input_schema19658_19664,input_checker19659_19665,output_checker19660_19666){
return (function required_toplevel_keys(G__19661){
var validate__12758__auto__ = ufv___19662.get_cell();
if(cljs.core.truth_(validate__12758__auto__)){
var args__12759__auto___19667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19661], null);
var temp__4126__auto___19668 = input_checker19659_19665.call(null,args__12759__auto___19667);
if(cljs.core.truth_(temp__4126__auto___19668)){
var error__12760__auto___19669 = temp__4126__auto___19668;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__12760__auto___19669)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19669,new cljs.core.Keyword(null,"value","value",305978217),args__12759__auto___19667,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19658_19664,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__12761__auto__ = (function (){var input_schema = G__19661;
while(true){
return cljs.core.keep.call(null,((function (validate__12758__auto__,ufv___19662,output_schema19657_19663,input_schema19658_19664,input_checker19659_19665,output_checker19660_19666){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__12758__auto__,ufv___19662,output_schema19657_19663,input_schema19658_19664,input_checker19659_19665,output_checker19660_19666))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__12758__auto__)){
var temp__4126__auto___19670 = output_checker19660_19666.call(null,o__12761__auto__);
if(cljs.core.truth_(temp__4126__auto___19670)){
var error__12760__auto___19671 = temp__4126__auto___19670;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__12760__auto___19671)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19671,new cljs.core.Keyword(null,"value","value",305978217),o__12761__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19657_19663,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__12761__auto__;
});})(ufv___19662,output_schema19657_19663,input_schema19658_19664,input_checker19659_19665,output_checker19660_19666))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema19657_19663,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19658_19664], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9839__auto__ = (function iter__19680(s__19681){
return (new cljs.core.LazySeq(null,(function (){
var s__19681__$1 = s__19681;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19681__$1);
if(temp__4126__auto__){
var s__19681__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19681__$2)){
var c__9837__auto__ = cljs.core.chunk_first.call(null,s__19681__$2);
var size__9838__auto__ = cljs.core.count.call(null,c__9837__auto__);
var b__19683 = cljs.core.chunk_buffer.call(null,size__9838__auto__);
if((function (){var i__19682 = (0);
while(true){
if((i__19682 < size__9838__auto__)){
var vec__19686 = cljs.core._nth.call(null,c__9837__auto__,i__19682);
var k = cljs.core.nth.call(null,vec__19686,(0),null);
var v = cljs.core.nth.call(null,vec__19686,(1),null);
cljs.core.chunk_append.call(null,b__19683,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));

var G__19688 = (i__19682 + (1));
i__19682 = G__19688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19683),iter__19680.call(null,cljs.core.chunk_rest.call(null,s__19681__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19683),null);
}
} else {
var vec__19687 = cljs.core.first.call(null,s__19681__$2);
var k = cljs.core.nth.call(null,vec__19687,(0),null);
var v = cljs.core.nth.call(null,vec__19687,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__19680.call(null,cljs.core.rest.call(null,s__19681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9839__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9839__auto__ = (function iter__19697(s__19698){
return (new cljs.core.LazySeq(null,(function (){
var s__19698__$1 = s__19698;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19698__$1);
if(temp__4126__auto__){
var s__19698__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19698__$2)){
var c__9837__auto__ = cljs.core.chunk_first.call(null,s__19698__$2);
var size__9838__auto__ = cljs.core.count.call(null,c__9837__auto__);
var b__19700 = cljs.core.chunk_buffer.call(null,size__9838__auto__);
if((function (){var i__19699 = (0);
while(true){
if((i__19699 < size__9838__auto__)){
var vec__19703 = cljs.core._nth.call(null,c__9837__auto__,i__19699);
var k = cljs.core.nth.call(null,vec__19703,(0),null);
var v = cljs.core.nth.call(null,vec__19703,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__19700,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__19705 = (i__19699 + (1));
i__19699 = G__19705;
continue;
} else {
var G__19706 = (i__19699 + (1));
i__19699 = G__19706;
continue;
}
} else {
var G__19707 = (i__19699 + (1));
i__19699 = G__19707;
continue;
}
} else {
var G__19708 = (i__19699 + (1));
i__19699 = G__19708;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19700),iter__19697.call(null,cljs.core.chunk_rest.call(null,s__19698__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19700),null);
}
} else {
var vec__19704 = cljs.core.first.call(null,s__19698__$2);
var k = cljs.core.nth.call(null,vec__19704,(0),null);
var v = cljs.core.nth.call(null,vec__19704,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__19697.call(null,cljs.core.rest.call(null,s__19698__$2)));
} else {
var G__19709 = cljs.core.rest.call(null,s__19698__$2);
s__19698__$1 = G__19709;
continue;
}
} else {
var G__19710 = cljs.core.rest.call(null,s__19698__$2);
s__19698__$1 = G__19710;
continue;
}
} else {
var G__19711 = cljs.core.rest.call(null,s__19698__$2);
s__19698__$1 = G__19711;
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
return iter__9839__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___19734 = schema.utils.use_fn_validation;
var output_schema19712_19735 = schema.core.Any;
var input_schema19713_19736 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker19714_19737 = schema.core.checker.call(null,input_schema19713_19736);
var output_checker19715_19738 = schema.core.checker.call(null,output_schema19712_19735);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___19734,output_schema19712_19735,input_schema19713_19736,input_checker19714_19737,output_checker19715_19738){
return (function compose_schemata(G__19716,G__19717){
var validate__12758__auto__ = true;
if(validate__12758__auto__){
var args__12759__auto___19739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19716,G__19717], null);
var temp__4126__auto___19740 = input_checker19714_19737.call(null,args__12759__auto___19739);
if(cljs.core.truth_(temp__4126__auto___19740)){
var error__12760__auto___19741 = temp__4126__auto___19740;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__12760__auto___19741)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19741,new cljs.core.Keyword(null,"value","value",305978217),args__12759__auto___19739,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19713_19736,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__12761__auto__ = (function (){var G__19728 = G__19716;
var vec__19730 = G__19728;
var i2 = cljs.core.nth.call(null,vec__19730,(0),null);
var o2 = cljs.core.nth.call(null,vec__19730,(1),null);
var G__19729 = G__19717;
var vec__19731 = G__19729;
var i1 = cljs.core.nth.call(null,vec__19731,(0),null);
var o1 = cljs.core.nth.call(null,vec__19731,(1),null);
var G__19728__$1 = G__19728;
var G__19729__$1 = G__19729;
while(true){
var vec__19732 = G__19728__$1;
var i2__$1 = cljs.core.nth.call(null,vec__19732,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__19732,(1),null);
var vec__19733 = G__19729__$1;
var i1__$1 = cljs.core.nth.call(null,vec__19733,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__19733,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__12758__auto__){
var temp__4126__auto___19742 = output_checker19715_19738.call(null,o__12761__auto__);
if(cljs.core.truth_(temp__4126__auto___19742)){
var error__12760__auto___19743 = temp__4126__auto___19742;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__12760__auto___19743)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19743,new cljs.core.Keyword(null,"value","value",305978217),o__12761__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19712_19735,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__12761__auto__;
});})(ufv___19734,output_schema19712_19735,input_schema19713_19736,input_checker19714_19737,output_checker19715_19738))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema19712_19735,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19713_19736], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___19822 = schema.utils.use_fn_validation;
var output_schema19744_19823 = schema.core.Any;
var input_schema19745_19824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker19746_19825 = schema.core.checker.call(null,input_schema19745_19824);
var output_checker19747_19826 = schema.core.checker.call(null,output_schema19744_19823);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826){
return (function split_schema(G__19748,G__19749){
var validate__12758__auto__ = ufv___19822.get_cell();
if(cljs.core.truth_(validate__12758__auto__)){
var args__12759__auto___19827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19748,G__19749], null);
var temp__4126__auto___19828 = input_checker19746_19825.call(null,args__12759__auto___19827);
if(cljs.core.truth_(temp__4126__auto___19828)){
var error__12760__auto___19829 = temp__4126__auto___19828;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__12760__auto___19829)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19829,new cljs.core.Keyword(null,"value","value",305978217),args__12759__auto___19827,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19745_19824,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__12761__auto__ = (function (){var s = G__19748;
var ks = G__19749;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__9839__auto__ = ((function (ks__$1,validate__12758__auto__,ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826){
return (function iter__19786(s__19787){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12758__auto__,ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826){
return (function (){
var s__19787__$1 = s__19787;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19787__$1);
if(temp__4126__auto__){
var s__19787__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19787__$2)){
var c__9837__auto__ = cljs.core.chunk_first.call(null,s__19787__$2);
var size__9838__auto__ = cljs.core.count.call(null,c__9837__auto__);
var b__19789 = cljs.core.chunk_buffer.call(null,size__9838__auto__);
if((function (){var i__19788 = (0);
while(true){
if((i__19788 < size__9838__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__9837__auto__,i__19788);
cljs.core.chunk_append.call(null,b__19789,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9839__auto__ = ((function (i__19788,in_QMARK_,c__9837__auto__,size__9838__auto__,b__19789,s__19787__$2,temp__4126__auto__,ks__$1,validate__12758__auto__,ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826){
return (function iter__19806(s__19807){
return (new cljs.core.LazySeq(null,((function (i__19788,in_QMARK_,c__9837__auto__,size__9838__auto__,b__19789,s__19787__$2,temp__4126__auto__,ks__$1,validate__12758__auto__,ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826){
return (function (){
var s__19807__$1 = s__19807;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19807__$1);
if(temp__4126__auto____$1){
var s__19807__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19807__$2)){
var c__9837__auto____$1 = cljs.core.chunk_first.call(null,s__19807__$2);
var size__9838__auto____$1 = cljs.core.count.call(null,c__9837__auto____$1);
var b__19809 = cljs.core.chunk_buffer.call(null,size__9838__auto____$1);
if((function (){var i__19808 = (0);
while(true){
if((i__19808 < size__9838__auto____$1)){
var vec__19812 = cljs.core._nth.call(null,c__9837__auto____$1,i__19808);
var k = cljs.core.nth.call(null,vec__19812,(0),null);
var v = cljs.core.nth.call(null,vec__19812,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__19809,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__19830 = (i__19808 + (1));
i__19808 = G__19830;
continue;
} else {
var G__19831 = (i__19808 + (1));
i__19808 = G__19831;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19809),iter__19806.call(null,cljs.core.chunk_rest.call(null,s__19807__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19809),null);
}
} else {
var vec__19813 = cljs.core.first.call(null,s__19807__$2);
var k = cljs.core.nth.call(null,vec__19813,(0),null);
var v = cljs.core.nth.call(null,vec__19813,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19806.call(null,cljs.core.rest.call(null,s__19807__$2)));
} else {
var G__19832 = cljs.core.rest.call(null,s__19807__$2);
s__19807__$1 = G__19832;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__19788,in_QMARK_,c__9837__auto__,size__9838__auto__,b__19789,s__19787__$2,temp__4126__auto__,ks__$1,validate__12758__auto__,ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826))
,null,null));
});})(i__19788,in_QMARK_,c__9837__auto__,size__9838__auto__,b__19789,s__19787__$2,temp__4126__auto__,ks__$1,validate__12758__auto__,ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826))
;
return iter__9839__auto__.call(null,s);
})()));

var G__19833 = (i__19788 + (1));
i__19788 = G__19833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19789),iter__19786.call(null,cljs.core.chunk_rest.call(null,s__19787__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19789),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__19787__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9839__auto__ = ((function (in_QMARK_,s__19787__$2,temp__4126__auto__,ks__$1,validate__12758__auto__,ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826){
return (function iter__19814(s__19815){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__19787__$2,temp__4126__auto__,ks__$1,validate__12758__auto__,ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826){
return (function (){
var s__19815__$1 = s__19815;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19815__$1);
if(temp__4126__auto____$1){
var s__19815__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19815__$2)){
var c__9837__auto__ = cljs.core.chunk_first.call(null,s__19815__$2);
var size__9838__auto__ = cljs.core.count.call(null,c__9837__auto__);
var b__19817 = cljs.core.chunk_buffer.call(null,size__9838__auto__);
if((function (){var i__19816 = (0);
while(true){
if((i__19816 < size__9838__auto__)){
var vec__19820 = cljs.core._nth.call(null,c__9837__auto__,i__19816);
var k = cljs.core.nth.call(null,vec__19820,(0),null);
var v = cljs.core.nth.call(null,vec__19820,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__19817,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__19834 = (i__19816 + (1));
i__19816 = G__19834;
continue;
} else {
var G__19835 = (i__19816 + (1));
i__19816 = G__19835;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19817),iter__19814.call(null,cljs.core.chunk_rest.call(null,s__19815__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19817),null);
}
} else {
var vec__19821 = cljs.core.first.call(null,s__19815__$2);
var k = cljs.core.nth.call(null,vec__19821,(0),null);
var v = cljs.core.nth.call(null,vec__19821,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19814.call(null,cljs.core.rest.call(null,s__19815__$2)));
} else {
var G__19836 = cljs.core.rest.call(null,s__19815__$2);
s__19815__$1 = G__19836;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__19787__$2,temp__4126__auto__,ks__$1,validate__12758__auto__,ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826))
,null,null));
});})(in_QMARK_,s__19787__$2,temp__4126__auto__,ks__$1,validate__12758__auto__,ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826))
;
return iter__9839__auto__.call(null,s);
})()),iter__19786.call(null,cljs.core.rest.call(null,s__19787__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__12758__auto__,ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826))
,null,null));
});})(ks__$1,validate__12758__auto__,ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826))
;
return iter__9839__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__12758__auto__)){
var temp__4126__auto___19837 = output_checker19747_19826.call(null,o__12761__auto__);
if(cljs.core.truth_(temp__4126__auto___19837)){
var error__12760__auto___19838 = temp__4126__auto___19837;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__12760__auto___19838)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19838,new cljs.core.Keyword(null,"value","value",305978217),o__12761__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19744_19823,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__12761__auto__;
});})(ufv___19822,output_schema19744_19823,input_schema19745_19824,input_checker19746_19825,output_checker19747_19826))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema19744_19823,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19745_19824], null)));
var ufv___19869 = schema.utils.use_fn_validation;
var output_schema19839_19870 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema19840_19871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker19841_19872 = schema.core.checker.call(null,input_schema19840_19871);
var output_checker19842_19873 = schema.core.checker.call(null,output_schema19839_19870);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___19869,output_schema19839_19870,input_schema19840_19871,input_checker19841_19872,output_checker19842_19873){
return (function sequence_schemata(G__19843,G__19844){
var validate__12758__auto__ = ufv___19869.get_cell();
if(cljs.core.truth_(validate__12758__auto__)){
var args__12759__auto___19874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19843,G__19844], null);
var temp__4126__auto___19875 = input_checker19841_19872.call(null,args__12759__auto___19874);
if(cljs.core.truth_(temp__4126__auto___19875)){
var error__12760__auto___19876 = temp__4126__auto___19875;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__12760__auto___19876)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19876,new cljs.core.Keyword(null,"value","value",305978217),args__12759__auto___19874,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19840_19871,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__12761__auto__ = (function (){var G__19860 = G__19843;
var vec__19862 = G__19860;
var i1 = cljs.core.nth.call(null,vec__19862,(0),null);
var o1 = cljs.core.nth.call(null,vec__19862,(1),null);
var G__19861 = G__19844;
var vec__19863 = G__19861;
var k = cljs.core.nth.call(null,vec__19863,(0),null);
var vec__19864 = cljs.core.nth.call(null,vec__19863,(1),null);
var i2 = cljs.core.nth.call(null,vec__19864,(0),null);
var o2 = cljs.core.nth.call(null,vec__19864,(1),null);
var G__19860__$1 = G__19860;
var G__19861__$1 = G__19861;
while(true){
var vec__19865 = G__19860__$1;
var i1__$1 = cljs.core.nth.call(null,vec__19865,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__19865,(1),null);
var vec__19866 = G__19861__$1;
var k__$1 = cljs.core.nth.call(null,vec__19866,(0),null);
var vec__19867 = cljs.core.nth.call(null,vec__19866,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__19867,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__19867,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__19868 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__19868,(0),null);
var unused = cljs.core.nth.call(null,vec__19868,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__12758__auto__)){
var temp__4126__auto___19877 = output_checker19842_19873.call(null,o__12761__auto__);
if(cljs.core.truth_(temp__4126__auto___19877)){
var error__12760__auto___19878 = temp__4126__auto___19877;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__12760__auto___19878)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12760__auto___19878,new cljs.core.Keyword(null,"value","value",305978217),o__12761__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19839_19870,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__12761__auto__;
});})(ufv___19869,output_schema19839_19870,input_schema19840_19871,input_checker19841_19872,output_checker19842_19873))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema19839_19870,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19840_19871], null)));

//# sourceMappingURL=schema.js.map