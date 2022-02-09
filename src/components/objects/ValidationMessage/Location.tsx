type Props = {
  firstLine: number;
  lastLine: number;
  firstColumn?: number;
  lastColumn: number;
}

const Location = (props: Props) => {
  const  {
    firstLine,
    lastLine,
    firstColumn,
    lastColumn,
  } = props;
  const locationString = `From line ${firstLine || lastLine}, column ${firstColumn}; to line ${lastLine}, column ${lastColumn}`
  
  return (
    <div>{locationString}</div>
  )
}

export default Location