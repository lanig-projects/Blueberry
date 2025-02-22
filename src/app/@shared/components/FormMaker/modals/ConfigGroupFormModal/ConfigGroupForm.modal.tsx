import { Form } from "@shared/components/Form";
import { useConfigGroupForm } from "@shared/components/FormMaker/modals/ConfigGroupFormModal/hooks/useConfigGroupForm";
import { IFormMakerGroup } from "@shared/components/FormMaker/interfaces/IFormMakerGroup";
import { Button } from "@shared/components/Button/Button";

interface Props {
  group?: IFormMakerGroup;
}

export const ConfigGroupFormModal = ({ group }: Props) => {
  const { control, errors, onSubmit, closeModal } = useConfigGroupForm(group);

  return (
    <div>
      <Form
        control={control}
        errors={errors}
        inputs={[
          {
            name: 'title',
            label: 'Título',
            placeholder: 'Ingresa el título del grupo...',
            isRequired: true
          },
          {
            type: 'textarea',
            name: 'description',
            label: 'Descripción',
            placeholder: 'Ingresa la descripción del grupo...'
          }
        ]}
      />

      <div className={'flex items-center justify-end gap-5 mt-5'}>
        <Button
          label={'Cancelar'}
          color={'default'}
          onClick={closeModal}
        />

        <Button
          label={'Guardar'}
          color={'primary'}
          onClick={onSubmit}
          variant={'solid'}
        />
      </div>
    </div>
  );
};
