let
  pkgs   = import <nixpkgs> {};
  stdenv = pkgs.stdenv;

in stdenv.mkDerivation {
  name = "cssfund";
  version = "0.0";
  src = ./.;

  buildInputs = with pkgs; [
    chromium # Best debugger around
    sassc    # Sass compiler
  ];

  shellHook = ''
  '';
}
