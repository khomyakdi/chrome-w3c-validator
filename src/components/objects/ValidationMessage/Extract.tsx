import React, { useEffect, useRef } from 'react'

type Props = {
  extract: string;
  start: number;
  length: number;
}

function Extract({
  extract,
  start,
  length,
}: Props) {
 const firstPart = extract.substring(0, start),
    highlightedPart = extract.substring(start, start +length),
    lastPart = extract.substring(start + length);
    


  return (
    <code>
      {firstPart}
      <span>{highlightedPart}</span>
      {lastPart}
    </code>
  )
}

export default Extract