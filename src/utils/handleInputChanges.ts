import { FormDataTypeProps } from '../types';

const handleSelectInputChange = (
  event: React.FormEvent<HTMLSelectElement>,
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  setState((event.target as HTMLSelectElement).value);
};

const handleCheckGroupInputChange = (
  item: FormDataTypeProps[],
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  setState(item);
};

const handlePrimaryInputChange = (
  e: React.FormEvent<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  setState((e.target as HTMLInputElement).value);
};

export {
  handleSelectInputChange,
  handleCheckGroupInputChange,
  handlePrimaryInputChange,
};
