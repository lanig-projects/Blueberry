import { useMemo } from "react";
import { Button, Card, Image, Tooltip } from "antd";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  file: File;
  onDelete: () => void;
}

export const FilePreview = ({ file, onDelete }: Props) => {
  const url = useMemo(() => {
    if (typeof file === 'string') return file;

    return URL.createObjectURL(file);
  }, [file]);

  return (
    <Card size={'small'}>
      <div className={'flex items-center justify-between gap-5'}>
        <div className={'flex items-center gap-5'}>
          <Image
            src={url}
            width={40}
            height={40}
            className={'rounded'}
          />
          <p className={'font-medium'}>{file.name}</p>
        </div>

        <Tooltip title={'Eliminar imagen'}>
          <Button
            color={'primary'}
            onClick={onDelete}
          >
            <IoCloseOutline size={20}/>
          </Button>
        </Tooltip>
      </div>
    </Card>
  );
};
