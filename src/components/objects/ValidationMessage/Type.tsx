type Props = {
  type: 'error' | 'warning' | 'info';
};

function Type({ type }: Props) {
  return (
    <div>{type}</div>
  )
}

export default Type