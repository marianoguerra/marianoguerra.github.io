# Advent of Future of Code: Day 2

## Brutalist Convivial Computing with Teliva

> &ldquo;Enable all people to modify the software they use in the course of using it.&rdquo;
> &mdash; https://futureofcoding.org/episodes/033.html

> &ldquo;What if we, and all computer users, could reach in and modify our favorite apps?&rdquo;
> &mdash; https://www.inkandswitch.com/end-user-programming

> &ldquo;Software must be as easy to change as it is to use.&rdquo;
> &mdash; https://malleable.systems

Teliva is an environment for little text-mode apps that are easy to run, edit and rebuild with your changes. All apps are built in Lua. In today's task we'll quickly exercise all three stages. If you get stuck, you can find some hints in [the tour in the repo](https://github.com/akkartik/teliva/blob/main/tour.md). Feel free to [contact the author](http://akkartik.name/contact) as often as you like.

## Build Teliva

This step will require a Unix-like environment with a C compiler and a couple of small libraries installed: ncurses, openssl. Teliva is known to run on Linux, Mac OS X and OpenBSD; please contact the author above if you have trouble with some other environment (including Windows Subsystem for Linux and beyond).

### Quick start

```bash
git clone https://github.com/akkartik/teliva
cd teliva
make linux  # replace with 'macosx' or 'bsd' depending on your OS
```

[Teliva's README](https://github.com/akkartik/teliva) has more details.

### Optional: build with Nix

Check out the instructions to [install Nix](https://nix.dev/tutorials/install-nix) if you haven't already.

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

Then, from the folder where `shell.nix` is available, run:

```
nix-shell --pure
```

Now follow the quick-start steps above.

## Run a sample app

Try this sample app in the repo:

```sh
src/teliva counter.tlv
```

<img alt='screenshot of Teliva running a counter app' src='https://raw.githubusercontent.com/akkartik/teliva/main/doc/counter.png'>

Can you figure out what this app does, what you can do with it?

Type `ctrl-e` to edit the app. You see a "big picture" view of the app. Spend a few moments scanning this page.

<img alt='editing the code for the counter app' src='https://raw.githubusercontent.com/akkartik/teliva/main/doc/counter-edit.png'>

There's a prompt at the bottom. Try browsing to some of the names visible on screen. Don't be afraid to experiment. The menu at the bottom always shows the hotkeys available to you at any point in time. Don't worry, everything you do can be undone.

## Task 1

The [first section of the Lua book](https://www.lua.org/pil/1.html) starts with this one-line example:

```lua
print("Hello World")
```

Can you figure out where to add this line to the app's code so it's visible when the app runs? If you get stuck, there are some additional hints in [the tour in the repo](https://github.com/akkartik/teliva/blob/main/tour.md).

## Task 2: variables and arithmetic

Modify the app to increment by 2 each time you hit `enter`.

## (Optional) Contribute to Teliva: Towers of hanoi

A second sample app in the repo runs the [Towers of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi).

```
src/teliva hanoi.tlv
```

However, it lacks good error checking. Can you figure out how to break it? Additional stars for discovering entertaining failure modes. Maximum stars for improving the error checking and sharing a copy of your modified app.
