import ButtonCancel from "./btn_cancel";
import ButtonCreate from "./btn_create";
import ButtonDelete from "./btn_delete";
import ButtonEdit from "./btn_edit";
import ButtonFind from "./btn_find";
import ButtonSave from "./btn_save";
import ButtonSearch from "./btn_search";

type ButtonsProps = {
    userId: number,
    inputFormId: number,
    state: string | null,
    doc: any
}

export default function Buttons({ userId, inputFormId, state, doc }: ButtonsProps) {
    return (
        <div
            className="flex items-center gap-3"
        >
            {!['edit', 'search'].includes(String(state))
                ? <ButtonCreate userId={userId} inputFormId={inputFormId} />
                : null}
            {!['edit', 'search'].includes(String(state))
                ? <ButtonSearch userId={userId} inputFormId={inputFormId} />
                : null}
            {state === "search"
                ? <ButtonFind userId={userId} inputFormId={inputFormId} doc={doc} />
                : null}
            {doc.id && state !== 'edit'
                ? <ButtonEdit userId={userId} inputFormId={inputFormId} doc={doc} />
                : null}
            {state === 'edit'
                ? <ButtonSave userId={userId} inputFormId={inputFormId} doc={doc} />
                : null}
            {state === 'edit' || state === 'search'
                ? <ButtonCancel userId={userId} inputFormId={inputFormId} doc={doc} />
                : null}
            {doc.id && state !== 'edit'
                ? <ButtonDelete userId={userId} inputFormId={inputFormId} doc={doc} />
                : null}
        </div>
    )
}