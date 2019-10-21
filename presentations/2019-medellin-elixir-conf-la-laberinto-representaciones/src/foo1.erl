-module(foo1).
-export([f1/2, f2/2]).
-define(OPEN, (A,).
-define(CLOSE, B)).
-define(OP, A + B).

% un comentario
f1?OPEN ?CLOSE -> f2(B, A).
f2?OPEN ?CLOSE -> ?OP * 2.
