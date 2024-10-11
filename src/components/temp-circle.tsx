// TEMPORARY COMPONENT (temp-circle.tsx)

type circleProps = {
  name?: string;
  id?: string;
  onClickFunction?: ({ currentTarget }: React.MouseEvent) => void;
};

export default function Circle({ name, id, onClickFunction }: circleProps) {
  return (
    <div
      onClick={onClickFunction}
      id={id}
      className="beccircle flex aspect-square w-24 cursor-pointer flex-col items-center justify-center rounded-full bg-gradient-to-r from-indigo-800 to-pink-600 text-center font-semibold text-white shadow-xl"
    >
      {name}
    </div>
  );
}
