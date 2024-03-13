import MaterialTailwind from "@material-tailwind/react";
import { Group, InputField } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { IDict } from "~/types/types";
import Field from "./edit_form/field";
import CustomButton from "../../elements/custom_button";
import { useTranslation } from "react-i18next";
const { Dialog, Card, CardBody, CardFooter } = MaterialTailwind;

type DialogMultyGroupProps = {
    isNew: boolean,
    state: string | null,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    group: Group & { fields: InputField[] } | null,
    dictionaries: IDict[],
    doc: any,
    setDoc: Dispatch<SetStateAction<any>>,
}

export default function DialogMultyGroup({
    isNew,
    state,
    open,
    setOpen,
    group,
    dictionaries,
    doc,
    setDoc,
}: DialogMultyGroupProps) {
    const { t } = useTranslation()
    const handleSave = () => {

    }

    return (
        <Dialog
            placeholder=""
            size="lg"
            open={open}
            handler={() => setOpen(false)}
            className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full" placeholder="">
                <CardBody className="flex flex-col gap-4 overflow-auto" placeholder="">
                    {group?.fields ? group.fields.map((fld: InputField) => (
                        <Field
                            key={fld.id}
                            state={state}
                            dictionaries={dictionaries}
                            recordIndex={0}
                            doc={doc}
                            setDoc={setDoc}
                            fld={fld}
                        />
                    )) : <>-</>}
                </CardBody>
                <CardFooter className="pt-0 flex flex-row gap-3 justify-center" placeholder="">
                    <CustomButton
                        className="bg-primary hover:shadow-primary_shadow"
                        form="userForm"
                        type="submit"
                        name="_action"
                        onClick={() => handleSave()}
                    >
                        {t('save')}
                    </CustomButton>
                    <CustomButton
                        className="bg-primary hover:shadow-primary_shadow"
                        onClick={() => setOpen(false)}
                    >
                        {t('close')}
                    </CustomButton>
                </CardFooter>
            </Card>
        </Dialog>
    )
}