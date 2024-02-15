import MaterialTailwind from "@material-tailwind/react"
const { Button } = MaterialTailwind;
import { Form } from "@remix-run/react"

type DictionaryFormProps = {
    dictionary: any
}

export default function DictionaryForm({ dictionary }: DictionaryFormProps) {
    return (
        <>
            <div className="flex flex-row gap-3 justify-end">
                <Button
                    className="flex items-center gap-1"
                    color="green"
                    form="updateDictionary"
                    placeholder=""
                    size="sm"
                    type="submit"
                    name="_action"
                    value="updateDictionary"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Save
                </Button>
                <Button
                    className="flex items-center gap-1"
                    color="red"
                    form="deleteDictionary"
                    placeholder=""
                    size="sm"
                    type="submit"
                    name="_action"
                    value="deleteDictionary"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    Delete
                </Button>
            </div>
            <Form
                id="updateDictionary"
                key={dictionary?.id}
                className="flex flex-col gap-3"
                method="post"
            >
                <input type="hidden" name="id" defaultValue={dictionary.id ? dictionary.id : ''} />
                <div
                    className="w-full"
                >
                    <label className="block text-sm font-bold text-slate-700" htmlFor="title">Title: </label>
                    <input
                        id="title"
                        type="text"
                        defaultValue={dictionary?.title}
                        aria-label="title"
                        name="title"
                        required
                    />
                </div>
                <div
                    className="w-full"
                >
                    <label
                        className="block text-sm font-bold text-slate-700"
                        htmlFor="tableName"
                    >
                        Table:
                    </label>
                    <input
                        id="tableName"
                        type="text"
                        defaultValue={dictionary?.tableName}
                        aria-label="tableName"
                        name="tableName"
                        required
                    />
                </div>
            </Form>
            <Form
                id="deleteDictionary"
                method="post"
                onSubmit={(event) => {
                    const response = confirm(
                        "Please confirm you want to delete this record."
                    );
                    if (!response) {
                        event.preventDefault();
                    }
                }}
            >
                <input type="hidden" name="id" defaultValue={dictionary.id ? dictionary.id : ''} />
            </Form>
        </>
    )
}