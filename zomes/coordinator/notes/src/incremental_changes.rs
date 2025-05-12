use hdk::prelude::*;
use notes_integrity::*;

#[derive(Serialize, Deserialize, Debug)]
pub struct AddIncrementalChangesForNoteInput {
    pub note_hash: ActionHash,
    pub incremental_changes: String,
}

#[hdk_extern]
pub fn add_incremental_changes_for_note(
    input: AddIncrementalChangesForNoteInput,
) -> ExternResult<()> {
    create_link(
        input.note_hash.clone(),
        input.note_hash,
        LinkTypes::IncrementalChanges,
        input.incremental_changes,
    )?;
    Ok(())
}

#[hdk_extern]
pub fn get_incremental_changes_for_note(note_hash: ActionHash) -> ExternResult<Vec<String>> {
    let links = get_links(
        GetLinksInputBuilder::try_new(note_hash, LinkTypes::IncrementalChanges)?.build(),
    )?;
    let incremental_changes = links
        .into_iter()
        .map(|link| {
            String::from_utf8(link.tag.into_inner()).map_err(|e| {
                wasm_error!(WasmErrorInner::Guest(format!(
                    "Error converting link tag to string: {:?}",
                    e
                )))
            })
        })
        .collect::<ExternResult<Vec<String>>>()?;
    Ok(incremental_changes)
}
