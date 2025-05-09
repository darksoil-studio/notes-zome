{ inputs, ... }:

{
  perSystem =
    { inputs'
    , system
    , self'
    , ...
    }: rec {
      packages.notes = inputs.holochain-nix-builders.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };

    };
}

