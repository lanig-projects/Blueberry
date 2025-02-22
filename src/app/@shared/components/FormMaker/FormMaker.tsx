import { useFormMakerStore } from "@shared/components/FormMaker/stores/FormMaker.store";
import { Card, Tooltip } from "antd";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "@shared/components/Button/Button";
import { useFormMakerGroups } from "@shared/components/FormMaker/hooks/useFormMakerGroups";
import { FaRegQuestionCircle } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { IFormMaker } from "@shared/components/FormMaker/interfaces/IFormMaker";
import { useEffect } from "react";
import { IFormMakerConfig } from "@shared/components/FormMaker/interfaces/IFormMakerConfig";
import { DefaultConfig } from "@shared/components/FormMaker/constants/DefaultConfig";
import { useDarkMode } from "@shared/hooks/useDarkMode";

interface Props {
  value?: IFormMaker;
  onChange?: (value: IFormMaker) => void;
  config?: IFormMakerConfig;
}

export const FormMaker = ({ value, onChange, config }: Props) => {
  const setConfig = useFormMakerStore(state => state.setConfig);
  const setFields = useFormMakerStore(state => state.setFields);
  const setGroups = useFormMakerStore(state => state.setGroups);
  const setCategories = useFormMakerStore(state => state.setCategories);
  const fields = useFormMakerStore(state => state.fields);
  const groups = useFormMakerStore(state => state.groups);
  const categories = useFormMakerStore(state => state.categories);
  const { isDarkMode } = useDarkMode();
  const {
    openConfigGroupFieldsModal,
    handleDeleteGroup,
    getFieldsByGroupId,
    openEditGroupModal,
    openAddGroupModal
  } = useFormMakerGroups();

  useEffect(() => {
    if (value) {
      setFields(value.fields);
      setGroups(value.groups);

      if (value.categories) {
        setCategories(value.categories);
      }
    }
  }, [value]);

  useEffect(() => {
    if (config) {
      setConfig(config);
    }
  }, [config]);

  useEffect(() => {
    if (onChange) {
      onChange({ fields, groups, categories });
    }
  }, [fields, groups, categories]);

  return (
    <div
      className={'grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 rounded-xl'}
      style={{ backgroundColor: isDarkMode ? (config.darkBgColor ? config.darkBgColor : DefaultConfig.darkBgColor) : (config.bgColor ? config.bgColor : DefaultConfig.bgColor) }}
    >
      {groups.map((group) => (
        <Card key={group.id}>
          <div>
            <div className={'flex justify-between items-center w-full gap-3 mb-3'}>
              <div>
                <h4 className={'text-lg font-semibold'}>{group.title}</h4>
                <p className={'font-light opacity-70'}>{group.description ? group.description : 'Sin descripción...'}</p>
              </div>

              <div className={'flex gap-2'}>
                <Button
                  icon={<FaTrashAlt/>}
                  onClick={() => handleDeleteGroup(group.id)}
                  variant={'solid'}
                  color={'red'}
                  tooltip={'Eliminar grupo'}
                />

                <Tooltip title={'Editar datos del grupo'}>
                  <Button
                    icon={<BsPencilSquare/>}
                    variant={'solid'}
                    color={'blue'}
                    onClick={() => openEditGroupModal(group)}
                    tooltip={'Editar grupo'}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
          <div>
            <div className={'w-full'}>
              <Card className={'border'}>
                <div className={'flex items-center gap-2 justify-center'}>
                  <FaRegQuestionCircle className={'text-2xl'}/>
                  <h5>{getFieldsByGroupId(group.id).length} Preguntas</h5>
                </div>
              </Card>
            </div>

            <Button
              type={'primary'}
              icon={<HiOutlineFolderPlus className={'text-2xl'}/>}
              onClick={() => openConfigGroupFieldsModal(group.id)}
              label={'Configurar preguntas'}
              className={'w-full mt-3'}
            />
          </div>
        </Card>
      ))}

      <div
        className={'min-h-[220px] flex flex-col justify-center items-center p-3 bg-white dark:bg-neutral-900 rounded-md cursor-pointer hover:opacity-80'}
        onClick={openAddGroupModal}
      >
        <div className={'flex flex-col items-center justify-center w-full h-full border-2 border-dashed dark:border-gray-700 rounded'}>
          <AiOutlinePlus className={'text-4xl'}/>
          <div>Agregar grupo</div>
        </div>
      </div>
    </div>
  );
};
