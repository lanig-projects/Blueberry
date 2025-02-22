import { useFormMakerStore } from "@shared/components/FormMaker/stores/FormMaker.store";
import { useAlert } from "@shared/components/Alert/hooks/useAlert";
import { useModal } from "@shared/components/Modal/hooks/useModal";
import { ConfigGroupFieldsModal } from "@shared/components/FormMaker/modals/ConfigGroupFieldsModal";
import { ConfigGroupFormModal } from "@shared/components/FormMaker/modals/ConfigGroupFormModal";
import { IFormField } from "@shared/components/FormMaker/interfaces/IFormField";

export const useFormMakerGroups = () => {
  const fields = useFormMakerStore(state => state.fields);
  const deleteGroup = useFormMakerStore(state => state.deleteGroup);
  const alert = useAlert();
  const modal = useModal();

  const handleDeleteGroup = async (groupId: string) => {
    if (!await alert.confirm('¿Estás seguro de eliminar este grupo junto con sus preguntas?')) return;

    deleteGroup(groupId);

    alert.toastSuccess('Grupo eliminado correctamente');
  };

  const openConfigGroupFieldsModal = (groupId: string) => {
    modal.open({
      title: 'Configurar campos del grupo',
      content: <ConfigGroupFieldsModal groupId={groupId}/>
    });
  };

  const openAddGroupModal = () => {
    modal.open({
      title: 'Agregar nuevo grupo',
      content: <ConfigGroupFormModal/>
    });
  };

  const openEditGroupModal = (group) => {
    modal.open({
      title: 'Editar grupo',
      content: <ConfigGroupFormModal group={group}/>
    });
  };

  const getFieldsByGroupId = (groupId: string): IFormField[] => {
    return fields.filter((field) => field.group === groupId);
  };

  return {
    openConfigGroupFieldsModal,
    handleDeleteGroup,
    getFieldsByGroupId,
    openAddGroupModal,
    openEditGroupModal
  };
};
