export const MenuItem = ({ Icon, name }) => {
  return (
    <div className="flex gap-2 px-3 items-center">
      <Icon />
      <p className="text-md">{name}</p>
    </div>
  );
};
