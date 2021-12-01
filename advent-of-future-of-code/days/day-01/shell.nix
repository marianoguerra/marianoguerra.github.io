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
