import { Modal } from "antd";
import { useModalStore } from "@shared/components/Modal/stores/Modal.store";
import { ModalSizeTypeValues } from "@shared/components/Modal/types/ModalSizeType";

export const ModalContainer = () => {
  const modals = useModalStore((state) => state.modals);
  const setModals = useModalStore((state) => state.setModals);

  return (
    <>
      {modals.map((modal, i) => (
        <Modal
          key={i}
          title={modal.title}
          open
          onCancel={() => {
            setModals(modals.slice(0, -1));
          }}
          footer={null}
          destroyOnClose={true}
          closeIcon={modal.hideCloseButton ? null : undefined}
          maskClosable={true}
          width={ModalSizeTypeValues[modal.size || 'md']}
          styles={{
            mask: {
              backdropFilter: 'blur(2px)'
            }
          }}
          keyboard={true}
        >
          <div className={'mt-6'}>
            {modal.content}
          </div>
        </Modal>
      ))}
    </>
  );
};
