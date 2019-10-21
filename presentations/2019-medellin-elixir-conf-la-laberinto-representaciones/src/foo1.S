{module, foo1}.  %% version = 0

{exports, [{f1,2},{f2,2},{module_info,0},{module_info,1}]}.

{attributes, []}.

{labels, 9}.


{function, f1, 2, 2}.
  {label,1}.
    {line,[{location,"foo1.erl",8}]}.
    {func_info,{atom,foo1},{atom,f1},2}.
  {label,2}.
    {move,{x,1},{x,2}}.
    {move,{x,0},{x,1}}.
    {move,{x,2},{x,0}}.
    {call_only,2,{f,4}}.


{function, f2, 2, 4}.
  {label,3}.
    {line,[{location,"foo1.erl",9}]}.
    {func_info,{atom,foo1},{atom,f2},2}.
  {label,4}.
    {line,[{location,"foo1.erl",9}]}.
    {gc_bif,'*',{f,0},2,[{x,1},{integer,2}],{x,1}}.
    {line,[{location,"foo1.erl",9}]}.
    {gc_bif,'+',{f,0},2,[{x,0},{x,1}],{x,0}}.
    return.


{function, module_info, 0, 6}.
  {label,5}.
    {line,[]}.
    {func_info,{atom,foo1},{atom,module_info},0}.
  {label,6}.
    {move,{atom,foo1},{x,0}}.
    {line,[]}.
    {call_ext_only,1,{extfunc,erlang,get_module_info,1}}.


{function, module_info, 1, 8}.
  {label,7}.
    {line,[]}.
    {func_info,{atom,foo1},{atom,module_info},1}.
  {label,8}.
    {move,{x,0},{x,1}}.
    {move,{atom,foo1},{x,0}}.
    {line,[]}.
    {call_ext_only,2,{extfunc,erlang,get_module_info,2}}.
