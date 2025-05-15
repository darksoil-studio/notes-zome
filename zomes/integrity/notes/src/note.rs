// use automerge::AutoCommit;
// use autosurgeon::{hydrate, Hydrate};
use hdi::prelude::*;

#[derive(Clone, PartialEq)]
#[hdk_entry_helper]
pub struct Note {
    pub data: Vec<u8>,
    pub previous_hashes: Vec<ActionHash>,
}

// #[derive(Clone, PartialEq, Serialize, Deserialize, Debug)]
// pub struct Document(pub Vec<u8>);
// #[derive(Clone, PartialEq, Serialize, Deserialize, Debug)]
// pub struct HydratedHoloHash<T: HashType>(pub HoloHash<T>);
// impl<T: HashType> Hydrate for HydratedHoloHash<T> {
//     fn hydrate_bytes(bytes: &[u8]) -> Result<HydratedHoloHash<T>, autosurgeon::HydrateError> {
//         let hash: HoloHash<T> = HoloHash::from_raw_39(bytes.to_vec());
//         Ok(HydratedHoloHash(hash))
//     }
// }
// pub type HydrateEntryHash = HydratedHoloHash<hash_type::Entry>;

// #[derive(Clone, Hydrate, PartialEq, Serialize, Deserialize, Debug)]
// pub struct NoteContent {
//     pub title: String,
//     pub body: String,

//     pub images_hashes: Vec<HydrateEntryHash>,
// }

pub fn validate_create_note(
    _action: EntryCreationAction,
    note: Note,
) -> ExternResult<ValidateCallbackResult> {
    // let autocommit =
    //     AutoCommit::load(note.0.as_slice()).map_err(|err| wasm_error!("Load error {:?}", err))?;
    // let _note: NoteContent =
    //     hydrate(&autocommit).map_err(|err| wasm_error!("Invalid data: {:?}", err))?;

    for previous_hash in note.previous_hashes {
        let record = must_get_valid_record(previous_hash)?;

        let _note: crate::Note = record
            .entry()
            .to_app_option()
            .map_err(|e| wasm_error!(e))?
            .ok_or(wasm_error!(WasmErrorInner::Guest(
                "Linked action must reference an entry".to_string()
            )))?;
        // TODO: crawl back til the start of the history
    }

    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_update_note(
    _action: Update,
    _note: Note,
    _original_action: EntryCreationAction,
    _original_note: Note,
) -> ExternResult<ValidateCallbackResult> {
    // TODO: add the appropriate validation rules
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_delete_note(
    _action: Delete,
    _original_action: EntryCreationAction,
    _original_note: Note,
) -> ExternResult<ValidateCallbackResult> {
    // TODO: add the appropriate validation rules
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_create_link_note_updates(
    _action: CreateLink,
    base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let action_hash = base_address
        .into_action_hash()
        .ok_or(wasm_error!(WasmErrorInner::Guest(
            "No action hash associated with link".to_string()
        )))?;
    let record = must_get_valid_record(action_hash)?;
    let _note: crate::Note = record
        .entry()
        .to_app_option()
        .map_err(|e| wasm_error!(e))?
        .ok_or(wasm_error!(WasmErrorInner::Guest(
            "Linked action must reference an entry".to_string()
        )))?;
    let action_hash =
        target_address
            .into_action_hash()
            .ok_or(wasm_error!(WasmErrorInner::Guest(
                "No action hash associated with link".to_string()
            )))?;
    let record = must_get_valid_record(action_hash)?;
    let _note: crate::Note = record
        .entry()
        .to_app_option()
        .map_err(|e| wasm_error!(e))?
        .ok_or(wasm_error!(WasmErrorInner::Guest(
            "Linked action must reference an entry".to_string()
        )))?;
    // TODO: add the appropriate validation rules
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_delete_link_note_updates(
    _action: DeleteLink,
    _original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(
        "NoteUpdates links cannot be deleted".to_string(),
    ))
}

pub fn validate_create_link_all_notes(
    _action: CreateLink,
    _base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let action_hash =
        target_address
            .into_action_hash()
            .ok_or(wasm_error!(WasmErrorInner::Guest(
                "No action hash associated with link".to_string()
            )))?;
    let record = must_get_valid_record(action_hash)?;
    let _note: crate::Note = record
        .entry()
        .to_app_option()
        .map_err(|e| wasm_error!(e))?
        .ok_or(wasm_error!(WasmErrorInner::Guest(
            "Linked action must reference an entry".to_string()
        )))?;
    // TODO: add the appropriate validation rules
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_delete_link_all_notes(
    _action: DeleteLink,
    _original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // TODO: add the appropriate validation rules
    Ok(ValidateCallbackResult::Valid)
}
