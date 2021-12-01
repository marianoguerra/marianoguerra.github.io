# Advent of Future of Code: Day 2

## Brutalist Tour with Telive

Teliva is an environment for end-user programming

An extremely naïve, [brutalist](https://en.wikipedia.org/wiki/Brutalist_architecture)
environment for little text-mode [Lua](http://www.lua.org) apps that are easy
to modify.

> &ldquo;Enable all people to modify the software they use in the course of using it.&rdquo;
> &mdash; https://futureofcoding.org/episodes/033.html

> &ldquo;What if we, and all computer users, could reach in and modify our favorite apps?&rdquo;
> &mdash; https://www.inkandswitch.com/end-user-programming

> &ldquo;Software must be as easy to change as it is to use.&rdquo;
> &mdash; https://malleable.systems

## Task Description

Follow the [Guided tour of Teliva](https://github.com/akkartik/teliva/blob/e001212e995bf9c9d9495d06e9c0a69b374d32e2/tour.md)

If you want more you can play with the [Towers of Hanoi](https://github.com/akkartik/teliva#whats-this-then)

## Tools Needed and Setup

See [Teliva's README](https://github.com/akkartik/teliva)

A compiler toolchain, ncurses and openssl development files seem to be enough

## Setup with Nix

Check instructions here to [Install Nix](https://nix.dev/tutorials/install-nix) if you haven't already

Put the following in a file called `shell.nix`:

```
{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixos-21.11.tar.gz") {} }:

pkgs.mkShell {
	LOCALE_ARCHIVE_2_27 = if (pkgs.glibcLocales != null) then "${pkgs.glibcLocales}/lib/locale/locale-archive" else "";

	buildInputs = [
		pkgs.glibcLocales
		pkgs.git
		pkgs.gnumake
		pkgs.ncurses
		pkgs.gcc
		pkgs.openssl
	];
	shellHook = ''
		export LC_ALL=en_US.UTF-8
		export GIT_SSL_CAINFO=/etc/ssl/certs/ca-certificates.crt
		export SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt
	'';
}
```

Then in the folder where `shell.nix` is available run:

```bash
nix-shell --pure
git clone https://github.com/akkartik/teliva
cd teliva
make linux  # replace with 'macosx' or 'bsd' depending on your OS
```
