# Advent of Future of Code: Day 1

## BMI Calculator with Flowrunner-canvas

Flowrunner-canvas is a flow based programming environment that can be used
standalone but also very easily be added to an existent frontend
javascript/typescript toolchain.

When used standalone it can be used without writing code, but it is extendable
in various ways depending on your needs.

It includes a basic layout editor to create a UI out of a flow.

## Task Description

Create a BMI calculator using a FormTask node, an ExpressionTask and DebugTask
nodes (BMI formula : weight/height*height)

## Note

The project is still in a very experimental stage, a lot of of basic UI
elements and interactions needed for visual flow editing are not there yet. But
I do wonder how you like the editing of node properties directly on the canvas
in comparison with editing node properties via a property editor in a sidebar.

## Tools Needed and Setup

See [The simplest way to start playing with flowrunner-canvas](https://github.com/devhelpr/flowrunner-canvas#the-simplest-way-to-start-playing-with-flowrunner-canvas)

## Setup with Nix

Put the following in a file called `shell.nix`:

```
{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixos-21.11.tar.gz") {} }:

pkgs.mkShell {
	LOCALE_ARCHIVE_2_27 = if (pkgs.glibcLocales != null) then "${pkgs.glibcLocales}/lib/locale/locale-archive" else "";
	buildInputs = [
		pkgs.glibcLocales
		pkgs.git
		pkgs.nodejs-14_x
		pkgs.yarn
	];
	shellHook = ''
		export LC_ALL=en_US.UTF-8
		export PATH=$PWD/frontend/node_modules/.bin:$PATH
	'';
}
```

Then in the folder where `shell.nix` is available run:

```bash
nix-shell
git clone https://github.com/devhelpr/flowrunner-canvas
cd flowrunner-canvas
yarn install
npx gulp
```

Then open http://localhost:4000/ in your browser
