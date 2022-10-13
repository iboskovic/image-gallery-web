interface Props {
  title: string;
}

const EmptyState: React.FC<Props> = (props) => {
  const { title } = props;
  return (
    <div className="empty">
      <div>{title}</div>
    </div>
  );
};

export default EmptyState;
