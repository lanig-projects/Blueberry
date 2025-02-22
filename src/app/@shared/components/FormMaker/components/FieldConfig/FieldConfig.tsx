import { Card, Divider } from "antd";
import { Input } from "@shared/components/Form/components/Input";
import { Select } from "@shared/components/Form/components/Select";
import { ISelectOption } from "@shared/components/Form/interfaces/ISelectOption";
import { Switch } from "@shared/components/Form/components/Switch";
import { useFormMakerStore } from "@shared/components/FormMaker/stores/FormMaker.store";
import { FieldTypeOptions } from "@shared/components/FormMaker/constants/FieldTypeOptions";
import { FieldTypeEnum } from "@shared/components/FormMaker/enums/FieldTypeEnum";
import { Button } from "@shared/components/Button/Button";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
  field: any;
  categoryOptions: ISelectOption[];
}

export const FieldConfig = ({ field, categoryOptions }: Props) => {
  const updateField = useFormMakerStore(state => state.updateField);
  const addOptionToField = useFormMakerStore(state => state.addOptionToField);
  const updateOptionFromField = useFormMakerStore(state => state.updateOptionFromField);
  const removeOptionFromField = useFormMakerStore(state => state.removeOptionFromField);
  const deleteField = useFormMakerStore(state => state.deleteField);

  return (
    <Card key={field.id} size={'small'} bordered={false} className={'border-l-4 border-primary shadow-lg'}>
      <div>
        <Select
          name={'category'}
          placeholder={'Asignar categoría...'}
          options={categoryOptions}
          initialValue={field.category}
          onChange={(value: string) => updateField({ ...field, category: value })}
          className={'mb-3'}
        />

        <div className={'grid gap-5 grid-cols-2'}>
          <Input
            placeholder={'Pregunta sin título'}
            value={field.title}
            onChange={(value: string) => updateField({ ...field, title: value })}
          />

          <Select
            options={FieldTypeOptions}
            initialValue={field.type}
            onChange={(value: string) => updateField({ ...field, type: value })}
            isClearable={false}
            placeholder={'Seleccione un tipo...'}
          />
        </div>

        {field.type === FieldTypeEnum.SELECT && (
          <div className={'mt-5 w-full'}>
            {(field.options || [])?.map((option: string, index: number) => (
              <div key={index} className={'mb-3 flex justify-between items-end gap-3'}>
                <Input
                  name={`options.${index}`}
                  label={`Opción ${index + 1}`}
                  placeholder={'Ingrese una opción...'}
                  className={'flex-1'}
                  value={option}
                  onChange={(value: string) => updateOptionFromField(field.id, index, value)}
                />

                <div className={'flex items-center'}>
                  <Button
                    tooltip={'Eliminar opción'}
                    icon={<FaTrashAlt/>}
                    color={'red'}
                    variant={'solid'}
                    onClick={() => removeOptionFromField(field.id, index)}
                  />
                </div>
              </div>
            ))}

            <Button
              className={'mt-4 w-full'}
              variant={'solid'}
              onClick={() => addOptionToField(field.id)}
              label={'Agregar opción'}
            />
          </div>
        )}

        <Divider className={'mt-4'}/>

        <div className={'w-full flex justify-between items-center'}>
          <div className={'flex items-center gap-2'}>
            <span>¿Obligatoria?</span>
            <Switch
              name={'isRequired'}
              isChecked={field.isRequired}
              onChange={(value: boolean) => updateField({ ...field, isRequired: value })}
            />
          </div>

          <Button
            icon={<FaTrashAlt/>}
            onClick={() => deleteField(field.id)}
            tooltip={'Eliminar campo'}
            variant={'solid'}
            color={'red'}
          />
        </div>
      </div>
    </Card>
  );
};
