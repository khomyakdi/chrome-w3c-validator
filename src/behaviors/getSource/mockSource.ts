export async function getValidSource() {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>Hello world</h1>
  </body>
  </html>`;
}

export async function getInvalidSource() {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h1>Test sample</h1>
  <ul styles="<h1>hello</h1> test">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <div>4</div>
  </ul>
  <table>
  <tbody>
    <tr role="row">
      <td></td>
    </tr>
  </tbody>
</table>
</body>

</html>
  `;
}
