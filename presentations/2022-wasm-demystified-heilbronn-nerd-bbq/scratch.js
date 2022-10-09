
https://codesnappy.io/

// smallest compiler

const mod1 = Uint8Array.from([0, 97, 115, 109, 1, 0, 0, 0])


// create an instance
await WebAssembly.instantiate(Uint8Array.from([0, 97, 115, 109, 1, 0, 0, 0]), {})

// there's nothing to run...

let {instance} = await WebAssembly.instantiate(Uint8Array.from(Array.from('\0asm\u0001\0\0\0').map(c => c.charCodeAt(0))), {})

(await WebAssembly.instantiate(Uint8Array.from(Array.from("\x00asm\x01\x00\x00\x00\x01\x04\x01`\x00\x00\x03\x02\x01\x00\x07\x05\x01\x01f\x00\x00\n\x04\x01\x02\x00\v").map(c => c.charCodeAt(0))), {})).instance.exports.f();

Array.from("\x00asm\x01\x00\x00\x00\x01\x04\x01`\x00\x00\x03\x02\x01\x00\x07\x05\x01\x01f\x00\x00\n\x04\x01\x02\x00\v").map(c => c.charCodeAt(0))

[0,97,115,109, 1,0,0,0, 1,4,1, 96,0,0, 3,2,1,0, 7,5,1, 1,102,0,0, 10,4,1, 2,0,11]

(await WebAssembly.instantiate(Uint8Array.from(Array.from("\x00asm\x01\x00\x00\x00\x01\x07\x01`\x02\x7f\x7f\x01\x7f\x03\x02\x01\x00\x07\x05\x01\x01f\x00\x00\n\t\x01\x07\x00 \x00 \x01j\v").map(c=>c.charCodeAt(0))),{})).instance.exports.f(2,3)
