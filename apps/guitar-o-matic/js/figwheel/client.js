// Compiled by ClojureScript 0.0-2511
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__21720,args){
var map__21722 = p__21720;
var map__21722__$1 = ((cljs.core.seq_QMARK_.call(null,map__21722))?cljs.core.apply.call(null,cljs.core.hash_map,map__21722):map__21722);
var debug = cljs.core.get.call(null,map__21722__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__21720,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this,p__21720,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__21723){
var p__21720 = cljs.core.first(arglist__21723);
var args = cljs.core.rest(arglist__21723);
return log__delegate(p__21720,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__21724){
var map__21726 = p__21724;
var map__21726__$1 = ((cljs.core.seq_QMARK_.call(null,map__21726))?cljs.core.apply.call(null,cljs.core.hash_map,map__21726):map__21726);
var websocket_url = cljs.core.get.call(null,map__21726__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__21727,callback){
var map__21729 = p__21727;
var map__21729__$1 = ((cljs.core.seq_QMARK_.call(null,map__21729))?cljs.core.apply.call(null,cljs.core.hash_map,map__21729):map__21729);
var msg = map__21729__$1;
var dependency_file = cljs.core.get.call(null,map__21729__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__21729__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__21729__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__9086__auto__ = dependency_file;
if(cljs.core.truth_(or__9086__auto__)){
return or__9086__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__21729,map__21729__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__21729,map__21729__$1,msg,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){

return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__21730,p__21731){
var map__21734 = p__21730;
var map__21734__$1 = ((cljs.core.seq_QMARK_.call(null,map__21734))?cljs.core.apply.call(null,cljs.core.hash_map,map__21734):map__21734);
var opts = map__21734__$1;
var url_rewriter = cljs.core.get.call(null,map__21734__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__21735 = p__21731;
var map__21735__$1 = ((cljs.core.seq_QMARK_.call(null,map__21735))?cljs.core.apply.call(null,cljs.core.hash_map,map__21735):map__21735);
var d = map__21735__$1;
var file = cljs.core.get.call(null,map__21735__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__21736,p__21737){
var map__21779 = p__21736;
var map__21779__$1 = ((cljs.core.seq_QMARK_.call(null,map__21779))?cljs.core.apply.call(null,cljs.core.hash_map,map__21779):map__21779);
var opts = map__21779__$1;
var on_jsload = cljs.core.get.call(null,map__21779__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__21779__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__21780 = p__21737;
var map__21780__$1 = ((cljs.core.seq_QMARK_.call(null,map__21780))?cljs.core.apply.call(null,cljs.core.hash_map,map__21780):map__21780);
var files = cljs.core.get.call(null,map__21780__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__14391__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto__,map__21779,map__21779__$1,opts,on_jsload,before_jsload,map__21780,map__21780__$1,files){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto__,map__21779,map__21779__$1,opts,on_jsload,before_jsload,map__21780,map__21780__$1,files){
return (function (state_21803){
var state_val_21804 = (state_21803[(1)]);
if((state_val_21804 === (6))){
var inst_21785 = (state_21803[(7)]);
var inst_21794 = (state_21803[(2)]);
var inst_21795 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21796 = [inst_21785];
var inst_21797 = (new cljs.core.PersistentVector(null,1,(5),inst_21795,inst_21796,null));
var inst_21798 = cljs.core.apply.call(null,on_jsload,inst_21797);
var state_21803__$1 = (function (){var statearr_21805 = state_21803;
(statearr_21805[(8)] = inst_21794);

return statearr_21805;
})();
var statearr_21806_21820 = state_21803__$1;
(statearr_21806_21820[(2)] = inst_21798);

(statearr_21806_21820[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (5))){
var inst_21801 = (state_21803[(2)]);
var state_21803__$1 = state_21803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21803__$1,inst_21801);
} else {
if((state_val_21804 === (4))){
var state_21803__$1 = state_21803;
var statearr_21807_21821 = state_21803__$1;
(statearr_21807_21821[(2)] = null);

(statearr_21807_21821[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (3))){
var inst_21785 = (state_21803[(7)]);
var inst_21788 = console.debug("Figwheel: loaded these files");
var inst_21789 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21785);
var inst_21790 = cljs.core.prn_str.call(null,inst_21789);
var inst_21791 = console.log(inst_21790);
var inst_21792 = cljs.core.async.timeout.call(null,(10));
var state_21803__$1 = (function (){var statearr_21808 = state_21803;
(statearr_21808[(9)] = inst_21788);

(statearr_21808[(10)] = inst_21791);

return statearr_21808;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21803__$1,(6),inst_21792);
} else {
if((state_val_21804 === (2))){
var inst_21785 = (state_21803[(7)]);
var inst_21785__$1 = (state_21803[(2)]);
var inst_21786 = cljs.core.not_empty.call(null,inst_21785__$1);
var state_21803__$1 = (function (){var statearr_21809 = state_21803;
(statearr_21809[(7)] = inst_21785__$1);

return statearr_21809;
})();
if(cljs.core.truth_(inst_21786)){
var statearr_21810_21822 = state_21803__$1;
(statearr_21810_21822[(1)] = (3));

} else {
var statearr_21811_21823 = state_21803__$1;
(statearr_21811_21823[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (1))){
var inst_21781 = before_jsload.call(null,files);
var inst_21782 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_21783 = figwheel.client.load_all_js_files.call(null,inst_21782);
var state_21803__$1 = (function (){var statearr_21812 = state_21803;
(statearr_21812[(11)] = inst_21781);

return statearr_21812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21803__$1,(2),inst_21783);
} else {
return null;
}
}
}
}
}
}
});})(c__14391__auto__,map__21779,map__21779__$1,opts,on_jsload,before_jsload,map__21780,map__21780__$1,files))
;
return ((function (switch__14326__auto__,c__14391__auto__,map__21779,map__21779__$1,opts,on_jsload,before_jsload,map__21780,map__21780__$1,files){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_21816 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21816[(0)] = state_machine__14327__auto__);

(statearr_21816[(1)] = (1));

return statearr_21816;
});
var state_machine__14327__auto____1 = (function (state_21803){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_21803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e21817){if((e21817 instanceof Object)){
var ex__14330__auto__ = e21817;
var statearr_21818_21824 = state_21803;
(statearr_21818_21824[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21825 = state_21803;
state_21803 = G__21825;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_21803){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_21803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto__,map__21779,map__21779__$1,opts,on_jsload,before_jsload,map__21780,map__21780__$1,files))
})();
var state__14393__auto__ = (function (){var statearr_21819 = f__14392__auto__.call(null);
(statearr_21819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto__);

return statearr_21819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto__,map__21779,map__21779__$1,opts,on_jsload,before_jsload,map__21780,map__21780__$1,files))
);

return c__14391__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__21826,link_href){
var map__21828 = p__21826;
var map__21828__$1 = ((cljs.core.seq_QMARK_.call(null,map__21828))?cljs.core.apply.call(null,cljs.core.hash_map,map__21828):map__21828);
var request_url = cljs.core.get.call(null,map__21828__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__21828__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.add_cache_buster.call(null,url);

return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__14391__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto__,parent){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto__,parent){
return (function (state_21849){
var state_val_21850 = (state_21849[(1)]);
if((state_val_21850 === (2))){
var inst_21846 = (state_21849[(2)]);
var inst_21847 = parent.removeChild(orig_link);
var state_21849__$1 = (function (){var statearr_21851 = state_21849;
(statearr_21851[(7)] = inst_21846);

return statearr_21851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21849__$1,inst_21847);
} else {
if((state_val_21850 === (1))){
var inst_21844 = cljs.core.async.timeout.call(null,(200));
var state_21849__$1 = state_21849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21849__$1,(2),inst_21844);
} else {
return null;
}
}
});})(c__14391__auto__,parent))
;
return ((function (switch__14326__auto__,c__14391__auto__,parent){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_21855 = [null,null,null,null,null,null,null,null];
(statearr_21855[(0)] = state_machine__14327__auto__);

(statearr_21855[(1)] = (1));

return statearr_21855;
});
var state_machine__14327__auto____1 = (function (state_21849){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_21849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e21856){if((e21856 instanceof Object)){
var ex__14330__auto__ = e21856;
var statearr_21857_21859 = state_21849;
(statearr_21857_21859[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21860 = state_21849;
state_21849 = G__21860;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_21849){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_21849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto__,parent))
})();
var state__14393__auto__ = (function (){var statearr_21858 = f__14392__auto__.call(null);
(statearr_21858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto__);

return statearr_21858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto__,parent))
);

return c__14391__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__21861){
var map__21863 = p__21861;
var map__21863__$1 = ((cljs.core.seq_QMARK_.call(null,map__21863))?cljs.core.apply.call(null,cljs.core.hash_map,map__21863):map__21863);
var f_data = map__21863__$1;
var request_url = cljs.core.get.call(null,map__21863__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__21863__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__21864,files_msg){
var map__21886 = p__21864;
var map__21886__$1 = ((cljs.core.seq_QMARK_.call(null,map__21886))?cljs.core.apply.call(null,cljs.core.hash_map,map__21886):map__21886);
var opts = map__21886__$1;
var on_cssload = cljs.core.get.call(null,map__21886__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__21887_21907 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__21888_21908 = null;
var count__21889_21909 = (0);
var i__21890_21910 = (0);
while(true){
if((i__21890_21910 < count__21889_21909)){
var f_21911 = cljs.core._nth.call(null,chunk__21888_21908,i__21890_21910);
figwheel.client.reload_css_file.call(null,f_21911);

var G__21912 = seq__21887_21907;
var G__21913 = chunk__21888_21908;
var G__21914 = count__21889_21909;
var G__21915 = (i__21890_21910 + (1));
seq__21887_21907 = G__21912;
chunk__21888_21908 = G__21913;
count__21889_21909 = G__21914;
i__21890_21910 = G__21915;
continue;
} else {
var temp__4126__auto___21916 = cljs.core.seq.call(null,seq__21887_21907);
if(temp__4126__auto___21916){
var seq__21887_21917__$1 = temp__4126__auto___21916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21887_21917__$1)){
var c__9873__auto___21918 = cljs.core.chunk_first.call(null,seq__21887_21917__$1);
var G__21919 = cljs.core.chunk_rest.call(null,seq__21887_21917__$1);
var G__21920 = c__9873__auto___21918;
var G__21921 = cljs.core.count.call(null,c__9873__auto___21918);
var G__21922 = (0);
seq__21887_21907 = G__21919;
chunk__21888_21908 = G__21920;
count__21889_21909 = G__21921;
i__21890_21910 = G__21922;
continue;
} else {
var f_21923 = cljs.core.first.call(null,seq__21887_21917__$1);
figwheel.client.reload_css_file.call(null,f_21923);

var G__21924 = cljs.core.next.call(null,seq__21887_21917__$1);
var G__21925 = null;
var G__21926 = (0);
var G__21927 = (0);
seq__21887_21907 = G__21924;
chunk__21888_21908 = G__21925;
count__21889_21909 = G__21926;
i__21890_21910 = G__21927;
continue;
}
} else {
}
}
break;
}

var c__14391__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14391__auto__,map__21886,map__21886__$1,opts,on_cssload){
return (function (){
var f__14392__auto__ = (function (){var switch__14326__auto__ = ((function (c__14391__auto__,map__21886,map__21886__$1,opts,on_cssload){
return (function (state_21897){
var state_val_21898 = (state_21897[(1)]);
if((state_val_21898 === (2))){
var inst_21893 = (state_21897[(2)]);
var inst_21894 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_21895 = on_cssload.call(null,inst_21894);
var state_21897__$1 = (function (){var statearr_21899 = state_21897;
(statearr_21899[(7)] = inst_21893);

return statearr_21899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21897__$1,inst_21895);
} else {
if((state_val_21898 === (1))){
var inst_21891 = cljs.core.async.timeout.call(null,(100));
var state_21897__$1 = state_21897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21897__$1,(2),inst_21891);
} else {
return null;
}
}
});})(c__14391__auto__,map__21886,map__21886__$1,opts,on_cssload))
;
return ((function (switch__14326__auto__,c__14391__auto__,map__21886,map__21886__$1,opts,on_cssload){
return (function() {
var state_machine__14327__auto__ = null;
var state_machine__14327__auto____0 = (function (){
var statearr_21903 = [null,null,null,null,null,null,null,null];
(statearr_21903[(0)] = state_machine__14327__auto__);

(statearr_21903[(1)] = (1));

return statearr_21903;
});
var state_machine__14327__auto____1 = (function (state_21897){
while(true){
var ret_value__14328__auto__ = (function (){try{while(true){
var result__14329__auto__ = switch__14326__auto__.call(null,state_21897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14329__auto__;
}
break;
}
}catch (e21904){if((e21904 instanceof Object)){
var ex__14330__auto__ = e21904;
var statearr_21905_21928 = state_21897;
(statearr_21905_21928[(5)] = ex__14330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21929 = state_21897;
state_21897 = G__21929;
continue;
} else {
return ret_value__14328__auto__;
}
break;
}
});
state_machine__14327__auto__ = function(state_21897){
switch(arguments.length){
case 0:
return state_machine__14327__auto____0.call(this);
case 1:
return state_machine__14327__auto____1.call(this,state_21897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14327__auto____0;
state_machine__14327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14327__auto____1;
return state_machine__14327__auto__;
})()
;})(switch__14326__auto__,c__14391__auto__,map__21886,map__21886__$1,opts,on_cssload))
})();
var state__14393__auto__ = (function (){var statearr_21906 = f__14392__auto__.call(null);
(statearr_21906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14391__auto__);

return statearr_21906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14393__auto__);
});})(c__14391__auto__,map__21886,map__21886__$1,opts,on_cssload))
);

return c__14391__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){
return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__21930){
var map__21935 = p__21930;
var map__21935__$1 = ((cljs.core.seq_QMARK_.call(null,map__21935))?cljs.core.apply.call(null,cljs.core.hash_map,map__21935):map__21935);
var opts = map__21935__$1;
var on_compile_fail = cljs.core.get.call(null,map__21935__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__21935__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__21935__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__21935__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__21935,map__21935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__21936 = cljs.core._EQ_;
var expr__21937 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__21936.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__21937))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__21936.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__21937))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__21936.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__21937))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__21935,map__21935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__21935,map__21935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__21935,map__21935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__21935,map__21935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__21935,map__21935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__21935,map__21935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__21935,map__21935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__21935,map__21935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__21935,map__21935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj21942 = {"detail":url};
return obj21942;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__21943){
var map__21945 = p__21943;
var map__21945__$1 = ((cljs.core.seq_QMARK_.call(null,map__21945))?cljs.core.apply.call(null,cljs.core.hash_map,map__21945):map__21945);
var class$ = cljs.core.get.call(null,map__21945__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__21945__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__21946){
var map__21952 = p__21946;
var map__21952__$1 = ((cljs.core.seq_QMARK_.call(null,map__21952))?cljs.core.apply.call(null,cljs.core.hash_map,map__21952):map__21952);
var ed = map__21952__$1;
var exception_data = cljs.core.get.call(null,map__21952__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__21952__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__21953_21957 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__21954_21958 = null;
var count__21955_21959 = (0);
var i__21956_21960 = (0);
while(true){
if((i__21956_21960 < count__21955_21959)){
var msg_21961 = cljs.core._nth.call(null,chunk__21954_21958,i__21956_21960);
console.log(msg_21961);

var G__21962 = seq__21953_21957;
var G__21963 = chunk__21954_21958;
var G__21964 = count__21955_21959;
var G__21965 = (i__21956_21960 + (1));
seq__21953_21957 = G__21962;
chunk__21954_21958 = G__21963;
count__21955_21959 = G__21964;
i__21956_21960 = G__21965;
continue;
} else {
var temp__4126__auto___21966 = cljs.core.seq.call(null,seq__21953_21957);
if(temp__4126__auto___21966){
var seq__21953_21967__$1 = temp__4126__auto___21966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21953_21967__$1)){
var c__9873__auto___21968 = cljs.core.chunk_first.call(null,seq__21953_21967__$1);
var G__21969 = cljs.core.chunk_rest.call(null,seq__21953_21967__$1);
var G__21970 = c__9873__auto___21968;
var G__21971 = cljs.core.count.call(null,c__9873__auto___21968);
var G__21972 = (0);
seq__21953_21957 = G__21969;
chunk__21954_21958 = G__21970;
count__21955_21959 = G__21971;
i__21956_21960 = G__21972;
continue;
} else {
var msg_21973 = cljs.core.first.call(null,seq__21953_21967__$1);
console.log(msg_21973);

var G__21974 = cljs.core.next.call(null,seq__21953_21967__$1);
var G__21975 = null;
var G__21976 = (0);
var G__21977 = (0);
seq__21953_21957 = G__21974;
chunk__21954_21958 = G__21975;
count__21955_21959 = G__21976;
i__21956_21960 = G__21977;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: loading files");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){
if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton"))){
return null;
} else {
figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__9086__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__9086__auto__)){
return or__9086__auto__;
} else {
return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__21978){
var map__21980 = p__21978;
var map__21980__$1 = ((cljs.core.seq_QMARK_.call(null,map__21980))?cljs.core.apply.call(null,cljs.core.hash_map,map__21980):map__21980);
var opts = map__21980__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__21978 = null;
if (arguments.length > 0) {
  p__21978 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__21978);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__21981){
var p__21978 = cljs.core.seq(arglist__21981);
return watch_and_reload__delegate(p__21978);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map