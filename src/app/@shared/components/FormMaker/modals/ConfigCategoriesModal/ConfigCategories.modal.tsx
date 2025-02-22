import { v4 as uuidv4 } from 'uuid';
import { useFormMakerStore } from "@shared/components/FormMaker/stores/FormMaker.store";
import { useMemo } from "react";
import { useModal } from "@shared/components/Modal/hooks/useModal";
import { Button } from "@shared/components/Button";
import { FaPlus } from "react-icons/fa6";
import { Input } from "@shared/components/Form/components/Input";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
  groupId: string;
}

export const ConfigCategoriesModal = ({ groupId }: Props) => {
  const categories = useFormMakerStore(state => state.categories);
  const addCategory = useFormMakerStore(state => state.addCategory);
  const updateCategory = useFormMakerStore(state => state.updateCategory);
  const deleteCategory = useFormMakerStore(state => state.deleteCategory);
  const modal = useModal();

  const categoriesByGroup = useMemo(() => {
    return categories.filter((category) => category.group === groupId);
  }, [categories, groupId]);

  return (
    <div>
      <div className={'grid grid-cols-1 gap-3'}>
        {categoriesByGroup.map((category, index) => (
          <div className={'flex items-center gap-3'} key={category.id}>
            <Input
              name={`categories[${index}]`}
              key={category.id}
              placeholder={`Categoría ${index + 1}`}
              value={category.title}
              onChange={(value: string) => updateCategory({ ...category, title: value })}
              className={'flex-1'}
            />

            <div className={'flex items-center'}>
              <Button
                tooltip={'Eliminar categoría'}
                icon={<FaTrashAlt/>}
                color={'red'}
                variant={'solid'}
                onClick={() => deleteCategory(category.id)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={'w-full mt-5 flex flex-col gap-3 md:flex-row justify-end'}>
        <Button
          variant={'outlined'}
          icon={<FaPlus/>}
          label={'Agregar categoría'}
          onClick={() => addCategory({ id: uuidv4(), title: '', group: groupId })}
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
