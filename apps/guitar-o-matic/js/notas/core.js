// Compiled by ClojureScript 0.0-2511
goog.provide('notas.core');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
if(typeof notas.core.app_state !== 'undefined'){
} else {
notas.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(12),new cljs.core.Keyword(null,"selected-notes","selected-notes",1789569584),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selected-cells","selected-cells",13516454),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"last-selected-note","last-selected-note",-292783821),null], null));
}
notas.core.all_notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"], null);
notas.core.d_note_to_pos = cljs.core.PersistentHashMap.fromArrays(["G#","A#","F#","G","E","C","F","B","C#","D#","A","D"],[(11),(1),(9),(10),(7),(3),(8),(2),(4),(6),(0),(5)]);
notas.core.guitar_string_notes = new cljs.core.PersistentArrayMap(null, 6, [(1),"E",(2),"A",(3),"D",(4),"G",(5),"B",(6),"E"], null);
notas.core.note_to_pos = (function note_to_pos(note){
return cljs.core.get.call(null,notas.core.d_note_to_pos,note);
});
notas.core.pos_to_note = (function pos_to_note(pos){
return cljs.core.get.call(null,notas.core.all_notes,cljs.core.rem.call(null,pos,(12)));
});
notas.core.guitar_string_to_pos = new cljs.core.PersistentArrayMap(null, 6, [(1),notas.core.note_to_pos.call(null,"E"),(2),notas.core.note_to_pos.call(null,"A"),(3),notas.core.note_to_pos.call(null,"D"),(4),notas.core.note_to_pos.call(null,"G"),(5),notas.core.note_to_pos.call(null,"B"),(6),notas.core.note_to_pos.call(null,"E")], null);
notas.core.scales = new cljs.core.PersistentArrayMap(null, 4, ["minor-natural",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(2),(2),(1),(2),(2)], null),"minor-harmonic",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(2),(2),(1),(3),(2)], null),"pentatonic",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(2),(3)], null),"major",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1),(2),(2),(2),(1)], null)], null);
notas.core.make_scale_from_pos_and_scale = (function make_scale_from_pos_and_scale(pos,scale){
return cljs.core.reduce.call(null,(function (notes,offset){
return cljs.core.conj.call(null,notes,(cljs.core.last.call(null,notes) + offset));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos], null),scale);
});
notas.core.make_scale_from_pos = (function make_scale_from_pos(pos,scale_name){
return notas.core.make_scale_from_pos_and_scale.call(null,pos,cljs.core.get.call(null,notas.core.scales,scale_name));
});
notas.core.make_scale_from_note = (function make_scale_from_note(note,scale_name){
return notas.core.make_scale_from_pos.call(null,notas.core.note_to_pos.call(null,note),scale_name);
});
notas.core.string_num_to_note = (function string_num_to_note(c){
var norm_index = cljs.core.rem.call(null,c,(12));
var note = cljs.core.get.call(null,notas.core.guitar_string_notes,norm_index);
return note;
});
notas.core.string_pos_to_note = (function string_pos_to_note(c,fret){
var string_note_index = cljs.core.get.call(null,notas.core.guitar_string_to_pos,c);
var norm_index = cljs.core.rem.call(null,(string_note_index + fret),(12));
var note = cljs.core.get.call(null,notas.core.all_notes,norm_index);
return note;
});
notas.core.fret_classes = (function fret_classes(r){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [(7),null,(15),null,(17),null,(3),null,(12),null,(19),null,(9),null,(5),null], null), null),r)){
return "fret dotted-fret";
} else {
return "fret";
}
});
notas.core.toggle_selected_note = (function toggle_selected_note(selected_notes,note_name){
return om.core.transact_BANG_.call(null,selected_notes,note_name,cljs.core.not);
});
notas.core.toggle_selected_cell = (function toggle_selected_cell(selected_cells,c,r){
return om.core.transact_BANG_.call(null,selected_cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null),cljs.core.not);
});
notas.core.render_guitar_string_notes = (function render_guitar_string_notes(){
return cljs.core.apply.call(null,React.DOM.tr,{"className": "fret-notes"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__9841__auto__ = (function iter__19691(s__19692){
return (new cljs.core.LazySeq(null,(function (){
var s__19692__$1 = s__19692;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19692__$1);
if(temp__4126__auto__){
var s__19692__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19692__$2)){
var c__9839__auto__ = cljs.core.chunk_first.call(null,s__19692__$2);
var size__9840__auto__ = cljs.core.count.call(null,c__9839__auto__);
var b__19694 = cljs.core.chunk_buffer.call(null,size__9840__auto__);
if((function (){var i__19693 = (0);
while(true){
if((i__19693 < size__9840__auto__)){
var c = cljs.core._nth.call(null,c__9839__auto__,i__19693);
var first_col_QMARK_ = (c === (0));
cljs.core.chunk_append.call(null,b__19694,((first_col_QMARK_)?React.DOM.td({"className": "row-index"},""):cljs.core.apply.call(null,React.DOM.td,{"className": "note-name"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.span,notas.core.string_num_to_note.call(null,c),cljs.core.PersistentVector.EMPTY)],null))))));

var G__19695 = (i__19693 + (1));
i__19693 = G__19695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19694),iter__19691.call(null,cljs.core.chunk_rest.call(null,s__19692__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19694),null);
}
} else {
var c = cljs.core.first.call(null,s__19692__$2);
var first_col_QMARK_ = (c === (0));
return cljs.core.cons.call(null,((first_col_QMARK_)?React.DOM.td({"className": "row-index"},""):cljs.core.apply.call(null,React.DOM.td,{"className": "note-name"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.span,notas.core.string_num_to_note.call(null,c),cljs.core.PersistentVector.EMPTY)],null))))),iter__19691.call(null,cljs.core.rest.call(null,s__19692__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9841__auto__.call(null,cljs.core.range.call(null,(7)));
})()],null))));
});
notas.core.render_guitar_note = (function render_guitar_note(selected_notes,selected_cells,state,c,r,note_name){
var note_selected_QMARK_ = cljs.core.get.call(null,selected_notes,note_name,false);
var in_guitar_QMARK_ = cljs.core.not_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var cell_selected_QMARK_ = (function (){var and__9073__auto__ = in_guitar_QMARK_;
if(and__9073__auto__){
return cljs.core.get_in.call(null,selected_cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null),false);
} else {
return and__9073__auto__;
}
})();
var last_selected_note = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"last-selected-note","last-selected-note",-292783821));
var last_selected_QMARK_ = cljs.core._EQ_.call(null,last_selected_note,note_name);
var note_selected_class = (cljs.core.truth_(note_selected_QMARK_)?"class-selected":"");
var cell_selected_class = (cljs.core.truth_(cell_selected_QMARK_)?"selected":"");
var last_selected_class = ((last_selected_QMARK_)?"last-selected":"");
var classes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [note_selected_class,cell_selected_class,last_selected_class], null);
var classes_str = clojure.string.join.call(null," ",classes);
return cljs.core.apply.call(null,React.DOM.button,{"onClick": om_tools.dom.format_opts.call(null,((function (note_selected_QMARK_,in_guitar_QMARK_,cell_selected_QMARK_,last_selected_note,last_selected_QMARK_,note_selected_class,cell_selected_class,last_selected_class,classes,classes_str){
return (function (_){
var becomes_active_QMARK_ = cljs.core.not.call(null,cell_selected_QMARK_);
if(in_guitar_QMARK_){
if(becomes_active_QMARK_){
om.core.update_BANG_.call(null,state,new cljs.core.Keyword(null,"last-selected-note","last-selected-note",-292783821),note_name);
} else {
}

if(cljs.core._EQ_.call(null,note_name,last_selected_note)){
om.core.update_BANG_.call(null,state,new cljs.core.Keyword(null,"last-selected-note","last-selected-note",-292783821),null);
} else {
}

notas.core.toggle_selected_cell.call(null,selected_cells,c,r);

return notas.core.toggle_selected_note.call(null,selected_notes,note_name);
} else {
return null;
}
});})(note_selected_QMARK_,in_guitar_QMARK_,cell_selected_QMARK_,last_selected_note,last_selected_QMARK_,note_selected_class,cell_selected_class,last_selected_class,classes,classes_str))
), "className": om_tools.dom.format_opts.call(null,classes_str)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[note_name],null))));
});
notas.core.render_fret = (function render_fret(r,selected_notes,selected_cells,state){
return cljs.core.apply.call(null,React.DOM.tr,{"className": om_tools.dom.format_opts.call(null,notas.core.fret_classes.call(null,r))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__9841__auto__ = (function iter__19700(s__19701){
return (new cljs.core.LazySeq(null,(function (){
var s__19701__$1 = s__19701;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19701__$1);
if(temp__4126__auto__){
var s__19701__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19701__$2)){
var c__9839__auto__ = cljs.core.chunk_first.call(null,s__19701__$2);
var size__9840__auto__ = cljs.core.count.call(null,c__9839__auto__);
var b__19703 = cljs.core.chunk_buffer.call(null,size__9840__auto__);
if((function (){var i__19702 = (0);
while(true){
if((i__19702 < size__9840__auto__)){
var c = cljs.core._nth.call(null,c__9839__auto__,i__19702);
var first_col_QMARK_ = (c === (0));
var note_name = notas.core.string_pos_to_note.call(null,c,r);
cljs.core.chunk_append.call(null,b__19703,((first_col_QMARK_)?cljs.core.apply.call(null,React.DOM.td,{"className": "row-index"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[r],null)))):cljs.core.apply.call(null,React.DOM.td,{"className": "note"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[notas.core.render_guitar_note.call(null,selected_notes,selected_cells,state,c,r,note_name)],null))))));

var G__19704 = (i__19702 + (1));
i__19702 = G__19704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19703),iter__19700.call(null,cljs.core.chunk_rest.call(null,s__19701__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19703),null);
}
} else {
var c = cljs.core.first.call(null,s__19701__$2);
var first_col_QMARK_ = (c === (0));
var note_name = notas.core.string_pos_to_note.call(null,c,r);
return cljs.core.cons.call(null,((first_col_QMARK_)?cljs.core.apply.call(null,React.DOM.td,{"className": "row-index"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[r],null)))):cljs.core.apply.call(null,React.DOM.td,{"className": "note"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[notas.core.render_guitar_note.call(null,selected_notes,selected_cells,state,c,r,note_name)],null))))),iter__19700.call(null,cljs.core.rest.call(null,s__19701__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9841__auto__.call(null,cljs.core.range.call(null,(7)));
})()],null))));
});

var component_fnk__14579__auto___19731 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema19709 = schema.core.Any;
var input_schema19710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"selected-cells","selected-cells",13516454),schema.core.Any,new cljs.core.Keyword(null,"selected-notes","selected-notes",1789569584),schema.core.Any,new cljs.core.Keyword(null,"rows","rows",850049680),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map19708","map19708",561822442,null))], null);
var input_checker19711 = schema.core.checker.call(null,input_schema19710);
var output_checker19712 = schema.core.checker.call(null,output_schema19709);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712){
return (function constructor19706(G__19713){
var validate__12760__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__12760__auto__)){
var args__12761__auto___19732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19713], null);
var temp__4126__auto___19733 = input_checker19711.call(null,args__12761__auto___19732);
if(cljs.core.truth_(temp__4126__auto___19733)){
var error__12762__auto___19734 = temp__4126__auto___19733;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor19706","constructor19706",-1667768108,null),cljs.core.pr_str.call(null,error__12762__auto___19734)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12762__auto___19734,new cljs.core.Keyword(null,"value","value",305978217),args__12761__auto___19732,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19710,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__12763__auto__ = (function (){var map19708 = G__19713;
while(true){
if(cljs.core.map_QMARK_.call(null,map19708)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map19708)));
}

var state = plumbing.fnk.schema.safe_get.call(null,map19708,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var rows = plumbing.fnk.schema.safe_get.call(null,state,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var selected_notes = plumbing.fnk.schema.safe_get.call(null,state,new cljs.core.Keyword(null,"selected-notes","selected-notes",1789569584),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var selected_cells = plumbing.fnk.schema.safe_get.call(null,state,new cljs.core.Keyword(null,"selected-cells","selected-cells",13516454),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
if(typeof notas.core.t19721 !== 'undefined'){
} else {

/**
* @constructor
*/
notas.core.t19721 = (function (G__19713,input_checker19711,output_schema19709,input_schema19710,map19708,selected_cells,output_checker19712,validate__12760__auto__,constructor19706,state,selected_notes,rows,ufv__,meta19722){
this.G__19713 = G__19713;
this.input_checker19711 = input_checker19711;
this.output_schema19709 = output_schema19709;
this.input_schema19710 = input_schema19710;
this.map19708 = map19708;
this.selected_cells = selected_cells;
this.output_checker19712 = output_checker19712;
this.validate__12760__auto__ = validate__12760__auto__;
this.constructor19706 = constructor19706;
this.state = state;
this.selected_notes = selected_notes;
this.rows = rows;
this.ufv__ = ufv__;
this.meta19722 = meta19722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notas.core.t19721.prototype.om$core$IDisplayName$ = true;

notas.core.t19721.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712){
return (function (_){
var self__ = this;
var ___$1 = this;
return "guitar";
});})(selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712))
;

notas.core.t19721.prototype.om$core$IRender$ = true;

notas.core.t19721.prototype.om$core$IRender$render$arity$1 = ((function (selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.table,{"className": "guitar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__9841__auto__ = ((function (___$1,selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712){
return (function iter__19724(s__19725){
return (new cljs.core.LazySeq(null,((function (___$1,selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712){
return (function (){
var s__19725__$1 = s__19725;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19725__$1);
if(temp__4126__auto__){
var s__19725__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19725__$2)){
var c__9839__auto__ = cljs.core.chunk_first.call(null,s__19725__$2);
var size__9840__auto__ = cljs.core.count.call(null,c__9839__auto__);
var b__19727 = cljs.core.chunk_buffer.call(null,size__9840__auto__);
if((function (){var i__19726 = (0);
while(true){
if((i__19726 < size__9840__auto__)){
var r = cljs.core._nth.call(null,c__9839__auto__,i__19726);
var first_row_QMARK_ = (r === (0));
cljs.core.chunk_append.call(null,b__19727,((first_row_QMARK_)?notas.core.render_guitar_string_notes.call(null):notas.core.render_fret.call(null,r,self__.selected_notes,self__.selected_cells,self__.state)));

var G__19735 = (i__19726 + (1));
i__19726 = G__19735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19727),iter__19724.call(null,cljs.core.chunk_rest.call(null,s__19725__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19727),null);
}
} else {
var r = cljs.core.first.call(null,s__19725__$2);
var first_row_QMARK_ = (r === (0));
return cljs.core.cons.call(null,((first_row_QMARK_)?notas.core.render_guitar_string_notes.call(null):notas.core.render_fret.call(null,r,self__.selected_notes,self__.selected_cells,self__.state)),iter__19724.call(null,cljs.core.rest.call(null,s__19725__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712))
,null,null));
});})(___$1,selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712))
;
return iter__9841__auto__.call(null,cljs.core.range.call(null,(self__.rows + (1))));
})()],null))));
});})(selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712))
;

notas.core.t19721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712){
return (function (_19723){
var self__ = this;
var _19723__$1 = this;
return self__.meta19722;
});})(selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712))
;

notas.core.t19721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712){
return (function (_19723,meta19722__$1){
var self__ = this;
var _19723__$1 = this;
return (new notas.core.t19721(self__.G__19713,self__.input_checker19711,self__.output_schema19709,self__.input_schema19710,self__.map19708,self__.selected_cells,self__.output_checker19712,self__.validate__12760__auto__,self__.constructor19706,self__.state,self__.selected_notes,self__.rows,self__.ufv__,meta19722__$1));
});})(selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712))
;

notas.core.t19721.cljs$lang$type = true;

notas.core.t19721.cljs$lang$ctorStr = "notas.core/t19721";

notas.core.t19721.cljs$lang$ctorPrWriter = ((function (selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712){
return (function (this__9672__auto__,writer__9673__auto__,opt__9674__auto__){
return cljs.core._write.call(null,writer__9673__auto__,"notas.core/t19721");
});})(selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712))
;

notas.core.__GT_t19721 = ((function (selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712){
return (function __GT_t19721(G__19713__$1,input_checker19711__$1,output_schema19709__$1,input_schema19710__$1,map19708__$1,selected_cells__$1,output_checker19712__$1,validate__12760__auto____$1,constructor19706__$1,state__$1,selected_notes__$1,rows__$1,ufv____$1,meta19722){
return (new notas.core.t19721(G__19713__$1,input_checker19711__$1,output_schema19709__$1,input_schema19710__$1,map19708__$1,selected_cells__$1,output_checker19712__$1,validate__12760__auto____$1,constructor19706__$1,state__$1,selected_notes__$1,rows__$1,ufv____$1,meta19722));
});})(selected_cells,selected_notes,rows,state,validate__12760__auto__,ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712))
;

}

return (new notas.core.t19721(G__19713,input_checker19711,output_schema19709,input_schema19710,map19708,selected_cells,output_checker19712,validate__12760__auto__,constructor19706,state,selected_notes,rows,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__12760__auto__)){
var temp__4126__auto___19736 = output_checker19712.call(null,o__12763__auto__);
if(cljs.core.truth_(temp__4126__auto___19736)){
var error__12762__auto___19737 = temp__4126__auto___19736;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor19706","constructor19706",-1667768108,null),cljs.core.pr_str.call(null,error__12762__auto___19737)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12762__auto___19737,new cljs.core.Keyword(null,"value","value",305978217),o__12763__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19709,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__12763__auto__;
});})(ufv__,output_schema19709,input_schema19710,input_checker19711,output_checker19712))
,schema.core.make_fn_schema.call(null,output_schema19709,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19710], null)));
})();
/**
* @param {...*} var_args
*/
notas.core.guitar = ((function (component_fnk__14579__auto___19731){
return (function() { 
var guitar__delegate = function (data__14580__auto__,owner19705,p__19728){
var vec__19730 = p__19728;
var opts__14581__auto__ = cljs.core.nth.call(null,vec__19730,(0),null);
return component_fnk__14579__auto___19731.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__14581__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner19705,new cljs.core.Keyword(null,"data","data",-232669377),data__14580__auto__], null));
};
var guitar = function (data__14580__auto__,owner19705,var_args){
var p__19728 = null;
if (arguments.length > 2) {
  p__19728 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return guitar__delegate.call(this,data__14580__auto__,owner19705,p__19728);};
guitar.cljs$lang$maxFixedArity = 2;
guitar.cljs$lang$applyTo = (function (arglist__19738){
var data__14580__auto__ = cljs.core.first(arglist__19738);
arglist__19738 = cljs.core.next(arglist__19738);
var owner19705 = cljs.core.first(arglist__19738);
var p__19728 = cljs.core.rest(arglist__19738);
return guitar__delegate(data__14580__auto__,owner19705,p__19728);
});
guitar.cljs$core$IFn$_invoke$arity$variadic = guitar__delegate;
return guitar;
})()
;})(component_fnk__14579__auto___19731))
;

notas.core.__GT_guitar = (function() {
var __GT_guitar = null;
var __GT_guitar__1 = (function (cursor__14548__auto__){
return om.core.build.call(null,notas.core.guitar,cursor__14548__auto__);
});
var __GT_guitar__2 = (function (cursor__14548__auto__,m19707){
return om.core.build.call(null,notas.core.guitar,cursor__14548__auto__,m19707);
});
__GT_guitar = function(cursor__14548__auto__,m19707){
switch(arguments.length){
case 1:
return __GT_guitar__1.call(this,cursor__14548__auto__);
case 2:
return __GT_guitar__2.call(this,cursor__14548__auto__,m19707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_guitar.cljs$core$IFn$_invoke$arity$1 = __GT_guitar__1;
__GT_guitar.cljs$core$IFn$_invoke$arity$2 = __GT_guitar__2;
return __GT_guitar;
})()
;

var component_fnk__14579__auto___19769 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema19743 = schema.core.Any;
var input_schema19744 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"selected-cells","selected-cells",13516454),schema.core.Any,new cljs.core.Keyword(null,"selected-notes","selected-notes",1789569584),schema.core.Any,new cljs.core.Keyword(null,"last-selected-note","last-selected-note",-292783821),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map19742","map19742",2076433426,null))], null);
var input_checker19745 = schema.core.checker.call(null,input_schema19744);
var output_checker19746 = schema.core.checker.call(null,output_schema19743);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746){
return (function constructor19740(G__19747){
var validate__12760__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__12760__auto__)){
var args__12761__auto___19770 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19747], null);
var temp__4126__auto___19771 = input_checker19745.call(null,args__12761__auto___19770);
if(cljs.core.truth_(temp__4126__auto___19771)){
var error__12762__auto___19772 = temp__4126__auto___19771;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor19740","constructor19740",598990721,null),cljs.core.pr_str.call(null,error__12762__auto___19772)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12762__auto___19772,new cljs.core.Keyword(null,"value","value",305978217),args__12761__auto___19770,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19744,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__12763__auto__ = (function (){var map19742 = G__19747;
while(true){
if(cljs.core.map_QMARK_.call(null,map19742)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map19742)));
}

var state = plumbing.fnk.schema.safe_get.call(null,map19742,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var last_selected_note = plumbing.fnk.schema.safe_get.call(null,state,new cljs.core.Keyword(null,"last-selected-note","last-selected-note",-292783821),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var selected_notes = plumbing.fnk.schema.safe_get.call(null,state,new cljs.core.Keyword(null,"selected-notes","selected-notes",1789569584),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var selected_cells = plumbing.fnk.schema.safe_get.call(null,state,new cljs.core.Keyword(null,"selected-cells","selected-cells",13516454),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
if(typeof notas.core.t19757 !== 'undefined'){
} else {

/**
* @constructor
*/
notas.core.t19757 = (function (constructor19740,output_checker19746,input_schema19744,selected_cells,validate__12760__auto__,map19742,input_checker19745,output_schema19743,state,selected_notes,last_selected_note,G__19747,ufv__,meta19758){
this.constructor19740 = constructor19740;
this.output_checker19746 = output_checker19746;
this.input_schema19744 = input_schema19744;
this.selected_cells = selected_cells;
this.validate__12760__auto__ = validate__12760__auto__;
this.map19742 = map19742;
this.input_checker19745 = input_checker19745;
this.output_schema19743 = output_schema19743;
this.state = state;
this.selected_notes = selected_notes;
this.last_selected_note = last_selected_note;
this.G__19747 = G__19747;
this.ufv__ = ufv__;
this.meta19758 = meta19758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notas.core.t19757.prototype.om$core$IDisplayName$ = true;

notas.core.t19757.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746){
return (function (_){
var self__ = this;
var ___$1 = this;
return "note-seq";
});})(selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746))
;

notas.core.t19757.prototype.om$core$IRenderState$ = true;

notas.core.t19757.prototype.om$core$IRenderState$render_state$arity$2 = ((function (selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746){
return (function (_,p__19760){
var self__ = this;
var map__19761 = p__19760;
var map__19761__$1 = ((cljs.core.seq_QMARK_.call(null,map__19761))?cljs.core.apply.call(null,cljs.core.hash_map,map__19761):map__19761);
var title = cljs.core.get.call(null,map__19761__$1,new cljs.core.Keyword(null,"title","title",636505583));
var scale = cljs.core.get.call(null,map__19761__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var ___$1 = this;
if((self__.last_selected_note == null)){
return React.DOM.span(null,"");
} else {
var note = self__.last_selected_note;
var scale_steps = cljs.core.get.call(null,notas.core.scales,scale);
var scale_str = clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.str,scale_steps));
var scale_pos = notas.core.make_scale_from_note.call(null,note,scale);
var scale_notes = cljs.core.map.call(null,notas.core.pos_to_note,scale_pos);
return cljs.core.apply.call(null,React.DOM.div,{"className": "scale"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h2,[cljs.core.str(title),cljs.core.str(" Scale for "),cljs.core.str(self__.last_selected_note)].join(''),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.p,[cljs.core.str(" ("),cljs.core.str(scale_str),cljs.core.str(")")].join(''),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.div,{"className": "scale-notes"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__9841__auto__ = ((function (note,scale_steps,scale_str,scale_pos,scale_notes,___$1,map__19761,map__19761__$1,title,scale,selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746){
return (function iter__19762(s__19763){
return (new cljs.core.LazySeq(null,((function (note,scale_steps,scale_str,scale_pos,scale_notes,___$1,map__19761,map__19761__$1,title,scale,selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746){
return (function (){
var s__19763__$1 = s__19763;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19763__$1);
if(temp__4126__auto__){
var s__19763__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19763__$2)){
var c__9839__auto__ = cljs.core.chunk_first.call(null,s__19763__$2);
var size__9840__auto__ = cljs.core.count.call(null,c__9839__auto__);
var b__19765 = cljs.core.chunk_buffer.call(null,size__9840__auto__);
if((function (){var i__19764 = (0);
while(true){
if((i__19764 < size__9840__auto__)){
var scale_note = cljs.core._nth.call(null,c__9839__auto__,i__19764);
cljs.core.chunk_append.call(null,b__19765,cljs.core.apply.call(null,React.DOM.span,{"className": "note"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[notas.core.render_guitar_note.call(null,self__.selected_notes,self__.selected_cells,self__.state,(-1),(-1),scale_note)],null)))));

var G__19773 = (i__19764 + (1));
i__19764 = G__19773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19765),iter__19762.call(null,cljs.core.chunk_rest.call(null,s__19763__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19765),null);
}
} else {
var scale_note = cljs.core.first.call(null,s__19763__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,React.DOM.span,{"className": "note"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[notas.core.render_guitar_note.call(null,self__.selected_notes,self__.selected_cells,self__.state,(-1),(-1),scale_note)],null)))),iter__19762.call(null,cljs.core.rest.call(null,s__19763__$2)));
}
} else {
return null;
}
break;
}
});})(note,scale_steps,scale_str,scale_pos,scale_notes,___$1,map__19761,map__19761__$1,title,scale,selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746))
,null,null));
});})(note,scale_steps,scale_str,scale_pos,scale_notes,___$1,map__19761,map__19761__$1,title,scale,selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746))
;
return iter__9841__auto__.call(null,scale_notes);
})()],null))))],null))));
}
});})(selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746))
;

notas.core.t19757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746){
return (function (_19759){
var self__ = this;
var _19759__$1 = this;
return self__.meta19758;
});})(selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746))
;

notas.core.t19757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746){
return (function (_19759,meta19758__$1){
var self__ = this;
var _19759__$1 = this;
return (new notas.core.t19757(self__.constructor19740,self__.output_checker19746,self__.input_schema19744,self__.selected_cells,self__.validate__12760__auto__,self__.map19742,self__.input_checker19745,self__.output_schema19743,self__.state,self__.selected_notes,self__.last_selected_note,self__.G__19747,self__.ufv__,meta19758__$1));
});})(selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746))
;

notas.core.t19757.cljs$lang$type = true;

notas.core.t19757.cljs$lang$ctorStr = "notas.core/t19757";

notas.core.t19757.cljs$lang$ctorPrWriter = ((function (selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746){
return (function (this__9672__auto__,writer__9673__auto__,opt__9674__auto__){
return cljs.core._write.call(null,writer__9673__auto__,"notas.core/t19757");
});})(selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746))
;

notas.core.__GT_t19757 = ((function (selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746){
return (function __GT_t19757(constructor19740__$1,output_checker19746__$1,input_schema19744__$1,selected_cells__$1,validate__12760__auto____$1,map19742__$1,input_checker19745__$1,output_schema19743__$1,state__$1,selected_notes__$1,last_selected_note__$1,G__19747__$1,ufv____$1,meta19758){
return (new notas.core.t19757(constructor19740__$1,output_checker19746__$1,input_schema19744__$1,selected_cells__$1,validate__12760__auto____$1,map19742__$1,input_checker19745__$1,output_schema19743__$1,state__$1,selected_notes__$1,last_selected_note__$1,G__19747__$1,ufv____$1,meta19758));
});})(selected_cells,selected_notes,last_selected_note,state,validate__12760__auto__,ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746))
;

}

return (new notas.core.t19757(constructor19740,output_checker19746,input_schema19744,selected_cells,validate__12760__auto__,map19742,input_checker19745,output_schema19743,state,selected_notes,last_selected_note,G__19747,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__12760__auto__)){
var temp__4126__auto___19774 = output_checker19746.call(null,o__12763__auto__);
if(cljs.core.truth_(temp__4126__auto___19774)){
var error__12762__auto___19775 = temp__4126__auto___19774;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor19740","constructor19740",598990721,null),cljs.core.pr_str.call(null,error__12762__auto___19775)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12762__auto___19775,new cljs.core.Keyword(null,"value","value",305978217),o__12763__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19743,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__12763__auto__;
});})(ufv__,output_schema19743,input_schema19744,input_checker19745,output_checker19746))
,schema.core.make_fn_schema.call(null,output_schema19743,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19744], null)));
})();
/**
* @param {...*} var_args
*/
notas.core.note_seq = ((function (component_fnk__14579__auto___19769){
return (function() { 
var note_seq__delegate = function (data__14580__auto__,owner19739,p__19766){
var vec__19768 = p__19766;
var opts__14581__auto__ = cljs.core.nth.call(null,vec__19768,(0),null);
return component_fnk__14579__auto___19769.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__14581__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner19739,new cljs.core.Keyword(null,"data","data",-232669377),data__14580__auto__], null));
};
var note_seq = function (data__14580__auto__,owner19739,var_args){
var p__19766 = null;
if (arguments.length > 2) {
  p__19766 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return note_seq__delegate.call(this,data__14580__auto__,owner19739,p__19766);};
note_seq.cljs$lang$maxFixedArity = 2;
note_seq.cljs$lang$applyTo = (function (arglist__19776){
var data__14580__auto__ = cljs.core.first(arglist__19776);
arglist__19776 = cljs.core.next(arglist__19776);
var owner19739 = cljs.core.first(arglist__19776);
var p__19766 = cljs.core.rest(arglist__19776);
return note_seq__delegate(data__14580__auto__,owner19739,p__19766);
});
note_seq.cljs$core$IFn$_invoke$arity$variadic = note_seq__delegate;
return note_seq;
})()
;})(component_fnk__14579__auto___19769))
;

notas.core.__GT_note_seq = (function() {
var __GT_note_seq = null;
var __GT_note_seq__1 = (function (cursor__14548__auto__){
return om.core.build.call(null,notas.core.note_seq,cursor__14548__auto__);
});
var __GT_note_seq__2 = (function (cursor__14548__auto__,m19741){
return om.core.build.call(null,notas.core.note_seq,cursor__14548__auto__,m19741);
});
__GT_note_seq = function(cursor__14548__auto__,m19741){
switch(arguments.length){
case 1:
return __GT_note_seq__1.call(this,cursor__14548__auto__);
case 2:
return __GT_note_seq__2.call(this,cursor__14548__auto__,m19741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_note_seq.cljs$core$IFn$_invoke$arity$1 = __GT_note_seq__1;
__GT_note_seq.cljs$core$IFn$_invoke$arity$2 = __GT_note_seq__2;
return __GT_note_seq;
})()
;
notas.core.render_scales = (function render_scales(state){
return cljs.core.apply.call(null,React.DOM.div,{"className": "scales"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,notas.core.note_seq,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),"minor-harmonic",new cljs.core.Keyword(null,"title","title",636505583),"Minor Harmonic"], null)], null)),om.core.build.call(null,notas.core.note_seq,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),"minor-natural",new cljs.core.Keyword(null,"title","title",636505583),"Minor Natural"], null)], null)),om.core.build.call(null,notas.core.note_seq,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),"major",new cljs.core.Keyword(null,"title","title",636505583),"Major"], null)], null)),om.core.build.call(null,notas.core.note_seq,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),"pentatonic",new cljs.core.Keyword(null,"title","title",636505583),"Pentatonic"], null)], null))],null))));
});

var component_fnk__14579__auto___19795 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema19781 = schema.core.Any;
var input_schema19782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map19780","map19780",-1650034518,null))], null);
var input_checker19783 = schema.core.checker.call(null,input_schema19782);
var output_checker19784 = schema.core.checker.call(null,output_schema19781);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784){
return (function constructor19778(G__19785){
var validate__12760__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__12760__auto__)){
var args__12761__auto___19796 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19785], null);
var temp__4126__auto___19797 = input_checker19783.call(null,args__12761__auto___19796);
if(cljs.core.truth_(temp__4126__auto___19797)){
var error__12762__auto___19798 = temp__4126__auto___19797;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor19778","constructor19778",789896568,null),cljs.core.pr_str.call(null,error__12762__auto___19798)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12762__auto___19798,new cljs.core.Keyword(null,"value","value",305978217),args__12761__auto___19796,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19782,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__12763__auto__ = (function (){var map19780 = G__19785;
while(true){
if(cljs.core.map_QMARK_.call(null,map19780)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map19780)));
}

var state = plumbing.fnk.schema.safe_get.call(null,map19780,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
if(typeof notas.core.t19789 !== 'undefined'){
} else {

/**
* @constructor
*/
notas.core.t19789 = (function (map19780,validate__12760__auto__,G__19785,input_schema19782,state,output_checker19784,constructor19778,output_schema19781,input_checker19783,ufv__,meta19790){
this.map19780 = map19780;
this.validate__12760__auto__ = validate__12760__auto__;
this.G__19785 = G__19785;
this.input_schema19782 = input_schema19782;
this.state = state;
this.output_checker19784 = output_checker19784;
this.constructor19778 = constructor19778;
this.output_schema19781 = output_schema19781;
this.input_checker19783 = input_checker19783;
this.ufv__ = ufv__;
this.meta19790 = meta19790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notas.core.t19789.prototype.om$core$IDisplayName$ = true;

notas.core.t19789.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,validate__12760__auto__,ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784){
return (function (_){
var self__ = this;
var ___$1 = this;
return "page";
});})(state,validate__12760__auto__,ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784))
;

notas.core.t19789.prototype.om$core$IRender$ = true;

notas.core.t19789.prototype.om$core$IRender$render$arity$1 = ((function (state,validate__12760__auto__,ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "small-12 columns"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h1({"className": "app-title"},"Guitar-o-matic"),React.DOM.p({"className": "app-desc"},"Click on the notes on the guitar and learn something"),cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "small-12 medium-6 columns"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "guitar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,notas.core.guitar,self__.state)],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "small-12 medium-6 columns scales"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[notas.core.render_scales.call(null,self__.state)],null))))],null))))],null))))],null))));
});})(state,validate__12760__auto__,ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784))
;

notas.core.t19789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,validate__12760__auto__,ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784){
return (function (_19791){
var self__ = this;
var _19791__$1 = this;
return self__.meta19790;
});})(state,validate__12760__auto__,ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784))
;

notas.core.t19789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,validate__12760__auto__,ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784){
return (function (_19791,meta19790__$1){
var self__ = this;
var _19791__$1 = this;
return (new notas.core.t19789(self__.map19780,self__.validate__12760__auto__,self__.G__19785,self__.input_schema19782,self__.state,self__.output_checker19784,self__.constructor19778,self__.output_schema19781,self__.input_checker19783,self__.ufv__,meta19790__$1));
});})(state,validate__12760__auto__,ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784))
;

notas.core.t19789.cljs$lang$type = true;

notas.core.t19789.cljs$lang$ctorStr = "notas.core/t19789";

notas.core.t19789.cljs$lang$ctorPrWriter = ((function (state,validate__12760__auto__,ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784){
return (function (this__9672__auto__,writer__9673__auto__,opt__9674__auto__){
return cljs.core._write.call(null,writer__9673__auto__,"notas.core/t19789");
});})(state,validate__12760__auto__,ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784))
;

notas.core.__GT_t19789 = ((function (state,validate__12760__auto__,ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784){
return (function __GT_t19789(map19780__$1,validate__12760__auto____$1,G__19785__$1,input_schema19782__$1,state__$1,output_checker19784__$1,constructor19778__$1,output_schema19781__$1,input_checker19783__$1,ufv____$1,meta19790){
return (new notas.core.t19789(map19780__$1,validate__12760__auto____$1,G__19785__$1,input_schema19782__$1,state__$1,output_checker19784__$1,constructor19778__$1,output_schema19781__$1,input_checker19783__$1,ufv____$1,meta19790));
});})(state,validate__12760__auto__,ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784))
;

}

return (new notas.core.t19789(map19780,validate__12760__auto__,G__19785,input_schema19782,state,output_checker19784,constructor19778,output_schema19781,input_checker19783,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__12760__auto__)){
var temp__4126__auto___19799 = output_checker19784.call(null,o__12763__auto__);
if(cljs.core.truth_(temp__4126__auto___19799)){
var error__12762__auto___19800 = temp__4126__auto___19799;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor19778","constructor19778",789896568,null),cljs.core.pr_str.call(null,error__12762__auto___19800)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__12762__auto___19800,new cljs.core.Keyword(null,"value","value",305978217),o__12763__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19781,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__12763__auto__;
});})(ufv__,output_schema19781,input_schema19782,input_checker19783,output_checker19784))
,schema.core.make_fn_schema.call(null,output_schema19781,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19782], null)));
})();
/**
* @param {...*} var_args
*/
notas.core.page = ((function (component_fnk__14579__auto___19795){
return (function() { 
var page__delegate = function (data__14580__auto__,owner19777,p__19792){
var vec__19794 = p__19792;
var opts__14581__auto__ = cljs.core.nth.call(null,vec__19794,(0),null);
return component_fnk__14579__auto___19795.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__14581__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner19777,new cljs.core.Keyword(null,"data","data",-232669377),data__14580__auto__], null));
};
var page = function (data__14580__auto__,owner19777,var_args){
var p__19792 = null;
if (arguments.length > 2) {
  p__19792 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return page__delegate.call(this,data__14580__auto__,owner19777,p__19792);};
page.cljs$lang$maxFixedArity = 2;
page.cljs$lang$applyTo = (function (arglist__19801){
var data__14580__auto__ = cljs.core.first(arglist__19801);
arglist__19801 = cljs.core.next(arglist__19801);
var owner19777 = cljs.core.first(arglist__19801);
var p__19792 = cljs.core.rest(arglist__19801);
return page__delegate(data__14580__auto__,owner19777,p__19792);
});
page.cljs$core$IFn$_invoke$arity$variadic = page__delegate;
return page;
})()
;})(component_fnk__14579__auto___19795))
;

notas.core.__GT_page = (function() {
var __GT_page = null;
var __GT_page__1 = (function (cursor__14548__auto__){
return om.core.build.call(null,notas.core.page,cursor__14548__auto__);
});
var __GT_page__2 = (function (cursor__14548__auto__,m19779){
return om.core.build.call(null,notas.core.page,cursor__14548__auto__,m19779);
});
__GT_page = function(cursor__14548__auto__,m19779){
switch(arguments.length){
case 1:
return __GT_page__1.call(this,cursor__14548__auto__);
case 2:
return __GT_page__2.call(this,cursor__14548__auto__,m19779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_page.cljs$core$IFn$_invoke$arity$1 = __GT_page__1;
__GT_page.cljs$core$IFn$_invoke$arity$2 = __GT_page__2;
return __GT_page;
})()
;
notas.core.main = (function main(){
return om.core.root.call(null,notas.core.page,notas.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});

//# sourceMappingURL=core.js.map