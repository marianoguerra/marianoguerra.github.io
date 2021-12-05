# Advent of Future of Code: Day 5

## Mu: a trusted computer that contains no C

[Mu](https://github.com/akkartik/mu) is a minimalist computing stack. Mu programs are memory-safe. They're converted to bootable disk images using a tiny, auditable toolchain without any external dependencies. The generated disk images are designed to run on bare-metal x86 processors without an OS. In today's task, we'll dip our toes in Mu and learn something about our x86 processors. This process will lay the foundation for more interesting graphical programs.

## First steps

You will need:

* A computer running Unix for building Mu programs. An x86 computer running Linux is ideal; other platforms build Mu programs via emulation and are significantly (~20x) slower.
* [QEMU](https://www.qemu.org) for running Mu programs.

Download:

```bash
git clone https://github.com/akkartik/mu
cd mu
```

Build your first Mu program into a bootable disk image, on x86 + Linux (or Windows Subsystem for Linux 2):

```bash
./translate tutorial/task1.mu  # emits code.img
```

On other Unix platforms (Mac, BSD):

```bash
./translate_emulated tutorial/task1.mu
```

Boot up the disk image:

```bash
qemu-system-i386 code.img
```

You should see this:

<img alt='screenshot of hello world on the Mu computer' src='https://raw.githubusercontent.com/akkartik/mu/main/tutorial/task1.png'>

## Tests

Mu contains lots of automated tests, and runs all tests on boot. A test failure looks like this:

```
./translate tutorial/task2.mu
qemu-system-i386 code.img
```

(As before, I'll leave you to substitute `translate` with `translate_emulated`
if you're not on Linux.)

<img alt='screenshot of failing test on the Mu computer' src='https://raw.githubusercontent.com/akkartik/mu/main/tutorial/task2.png'>

Each dot represents a passing test. Failing tests print out a message.

## Writing your first program

Mu is a statement-oriented language. Quickly read the first two sections of the
[Mu reference](https://github.com/akkartik/mu/blob/main/mu.md) (about
functions and variables) to learn a little bit about it.

Here's a skeleton of a Mu function that's missing a single statement.

```
fn the-answer -> _/eax: int {
  var result/eax: int <- copy 0
  # insert your statement below {

  # }
  return result
}
```

Try running it now:
```
./translate tutorial/task4.mu
qemu-system-i386 code.img
```

You should see a failing test that looks something like this:

<img alt='screenshot of the initial (failing) state of task 4' src='https://raw.githubusercontent.com/akkartik/mu/main/tutorial/task4-initial.png'>

Can you figure out what line of code to insert to make the test pass, i.e. to make `the-answer` return 42? Don't be afraid to run the above commands over and over again as you try out different solutions.

One gotcha to keep in mind is that numbers in Mu must always be in hexadecimal
notation, starting with `0x`. Use a calculator on your computer or phone to
convert 42 to hexadecimal, or [this page on your web browser](http://akkartik.github.io/mu/tutorial/converter.html).

## Managing variables in registers and memory

We'll now practice juggling variables in registers and memory. Here's a failing test:

```
./translate tutorial/task5.mu  &&  qemu-system-i386 code.img
```

task5.mu contains comments starting with `#` that describe what we want it to do:
```
fn foo -> _/eax: int {
  var x: int
  # statement 1: store 3 in x
  # statement 2: define a new variable 'y' in register eax and store 4 in it
  # statement 3: add y to x, storing the result in x
  return x
}
```

Can you fill out the 3 statements and get the test to pass? To prepare for this, reread the first two sections of the [Mu reference](https://github.com/akkartik/mu/blob/main/mu.md). The section on [integer arithmetic](https://github.com/akkartik/mu/blob/main/mu.md#integer-arithmetic) also provides a useful cheatsheet of the different forms of instructions you will need.
