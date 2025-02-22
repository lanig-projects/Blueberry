import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";
import { useAlert } from "@shared/components/Alert/hooks/useAlert";
import { useFormMakerStore } from "@shared/components/FormMaker/stores/FormMaker.store";
import { useModal } from "@shared/components/Modal/hooks/useModal";
import { IFormMakerGroup } from "@shared/components/FormMaker/interfaces/IFormMakerGroup";

export const useConfigGroupForm = (group: IFormMakerGroup) => {
  const addGroup = useFormMakerStore(state => state.addGroup);
  const updateGroup = useFormMakerStore(state => state.updateGroup);
  const { control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      title: group?.title,
      description: group?.description
    }
  });
  const alert = useAlert();
  const { close: closeModal } = useModal();

  const handleSave = async (data: any) => {
    if (group?.id) {
      updateGroup({
        id: group.id,
        title: data.title,
        description: data.description
      } as IFormMakerGroup);
    } else {
      addGroup({
        id: uuidv4(),
        title: data.title,
        description: data.description
      } as IFormMakerGroup);
    }

    closeModal();
  };

  return {
    control,
    errors,
    onSubmit: handleSubmit(handleSave),
    closeModal
  };
};
