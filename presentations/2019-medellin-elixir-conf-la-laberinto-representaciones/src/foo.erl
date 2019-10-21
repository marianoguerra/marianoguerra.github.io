-module(foo).
-export([f1/2, f2/2]).

f1(A, B) -> f2(B, A).
f2(A, B) -> A + B.
