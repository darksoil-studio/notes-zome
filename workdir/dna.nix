{ inputs, ... }:

{
  perSystem =
    { inputs'
    , self'
    , lib
    , system
    , ...
    }: {
      packages.notes_test_dna = inputs.holochain-nix-builders.outputs.builders.${system}.dna {
        dnaManifest = ./dna.yaml;
        zomes = {
          # Include here the zome packages for this DNA, e.g.:
          profiles_integrity = inputs'.profiles-zome.packages.profiles_integrity;
          profiles = inputs'.profiles-zome.packages.profiles;
          # This overrides all the "bundled" properties for the DNA manifest
          notes_integrity = self'.packages.notes_integrity;
          notes = self'.packages.notes;
        };
      };
    };
}

