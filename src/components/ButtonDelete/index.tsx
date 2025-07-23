interface ButtonDeleteProps {
  handleDelete: () => void;
}

const ButtonDelete = ({ handleDelete }: ButtonDeleteProps) => {
  return (
    <button type="button" onClick={handleDelete}>
      <img src="./img/icons/close.svg" alt="close" />
    </button>
  );
};

export default ButtonDelete;
