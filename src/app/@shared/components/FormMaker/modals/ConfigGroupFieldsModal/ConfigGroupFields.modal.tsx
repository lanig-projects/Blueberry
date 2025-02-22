import { v4 as uuidv4 } from 'uuid';
import { useMemo } from "react";
import { useModal } from "@shared/components/Modal/hooks/useModal";
import { useFormMakerStore } from "@shared/components/FormMaker/stores/FormMaker.store";
import { IFormField } from "@shared/components/FormMaker/interfaces/IFormField";
import { FieldConfig } from "@shared/components/FormMaker/components/FieldConfig";
import { FieldTypeEnum } from "@shared/components/FormMaker/enums/FieldTypeEnum";
import { Button } from "@shared/components/Button/Button";
import { FaPlus } from "react-icons/fa6";
import { DefaultConfig } from "@shared/components/FormMaker/constants/DefaultConfig";
import { FaLayerGroup } from "react-icons/fa";
import { ConfigCategoriesModal } from "@shared/components/FormMaker/modals/ConfigCategoriesModal";
import { ISelectOption } from "@shared/components/Form/interfaces/ISelectOption";
import { useDarkMode } from "@shared/hooks/useDarkMode";

interface Props {
  groupId: string;
}

export const ConfigGroupFieldsModal = ({ groupId }: Props) => {
  const categories = useFormMakerStore(state => state.categories);
  const config = useFormMakerStore(state => state.config);
  const fields = useFormMakerStore(state => state.fields);
  const addField = useFormMakerStore(state => state.addField);
  const { isDarkMode } = useDarkMode();
  const modal = useModal();

  const openConfigCategoriesModal = () => {
    modal.open({
      title: 'Configurar categorías',
      content: <ConfigCategoriesModal groupId={groupId}/>,
      size: 'sm'
    });
  };

  const fieldsByGroup = useMemo(() => {
    return fields.filter((field: IFormField) => field.group === groupId);
  }, [fields, groupId]);

  const categoryOptions = useMemo<ISelectOption[]>(() => {
    return categories.filter((category) => category.group === groupId)
      .map((category) => ({ label: category.title, value: category.id }));
  }, [categories, groupId]);

  return (
    <div>
      <div
        className={'mx-auto w-full grid grid-cols-1 gap-6 max-h-[500px] overflow-y-auto p-5 rounded-xl'}
        style={{ backgroundColor: isDarkMode ? (config.darkBgColor ? config.darkBgColor : DefaultConfig.darkBgColor) : (config.bgColor ? config.bgColor : DefaultConfig.bgColor) }}
      >
        {fieldsByGroup.map((field) => (
          <FieldConfig key={field.id} field={field} categoryOptions={categoryOptions}/>
        ))}
      </div>

      <div className={'w-full mt-5 flex flex-col gap-3 md:flex-row justify-end'}>
        <Button
          label={'Configurar categorías'}
          variant={'outlined'}
          color={'primary'}
          icon={<FaLayerGroup/>}
          onClick={openConfigCategoriesModal}
        />

        <Button
          variant={'outlined'}
          icon={<FaPlus/>}
          // @ts-ignore
          onClick={() => addField({
            id: uuidv4(),
            label: '',
            type: FieldTypeEnum.TEXT,
            isRequired: false,
            group: groupId
          } as IFormField)}
          label={'Agregar pregunta'}
        />

        <Button
          label={'Aceptar'}
          color={'primary'}
          onClick={modal.close}
          variant={'solid'}
        />
      </div>
    </div>
  );
};
