
function List ({listItem,typeList}){
  let createListItem = listItem.map(item => <li key={item}>{item}</li>);
  let createTypeList = typeList === 'ol' ? <ol>{createListItem}</ol>:
                       typeList === 'ul' ? <ul>{createListItem}</ul>:
                       <li>{createListItem}</li>
  return(
    <div className="container-list">
      {createTypeList}
    </div>
  )
}

List.defaultProps = {
  listItem: [],
  typeList: ''
}

export {List};